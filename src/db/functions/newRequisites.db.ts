import { Attributes, ValidationError } from 'sequelize'
import { RequisitesModel } from '../models/requisites.model'
import { CreateRequisitesInput } from '../../interfaces/Requisites.interface'
import { db } from '../database'

interface RequisitesInput extends Omit<CreateRequisitesInput['requisites'], ''> {}

async function newRequisites({ ...input }: RequisitesInput) {
	const t = await db.transaction()

	try {
		let modelByType
		switch (input.type) {
			case 'самозанятый':
				modelByType = selfEmployedRequisites(input)
				break
			case 'ип':
				modelByType = ipRequisites(input)
				break
			default:
				throw new Error('Invalid type')
		}

		const requisites = await RequisitesModel.create(modelByType, { transaction: t })

		await t.commit()
		return requisites
	} catch (error) {
		if (error instanceof ValidationError) {
			console.error(error.errors.map(e => e.message).join('\n'))
		} else {
			console.error(error)
		}
		await t.rollback()
	}
}

function selfEmployedRequisites(input: RequisitesInput) {
	const { inn, paymentAccount, businessId, type } = input
	return {
		inn,
		paymentAccount,
		business_id: businessId,
		type
	}
}

function ipRequisites(input: RequisitesInput) {
	const { inn, kpp, ogrn, bik, paymentAccount, bank, businessId, type } = input
	return {
		inn,
		kpp,
		ogrn,
		bik,
		paymentAccount,
		bank,
		business_id: businessId,
		type
	}
}

export { newRequisites }
