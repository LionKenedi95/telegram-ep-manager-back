import { Response, Request, RequestHandler } from 'express'
import { newRequisites } from '../../db/functions/newRequisites.db'
import { prettyfyAnswer } from '../../utils/prettyfyAnswer'
import { CreateRequisitesInput } from '../../interfaces/Requisites.interface'

async function postRequisitesController(req: Request<any, CreateRequisitesInput>, res: Response): Promise<void> {
	try {
		const { businessId, bank, bik, inn, kpp, ogrn, paymentAccount, type } = req.body
			.requisites as CreateRequisitesInput['requisites']

		const productData = await newRequisites({
			businessId: Number(businessId),
			bank,
			bik,
			inn,
			kpp,
			ogrn,
			paymentAccount,
			type
		})

		res.status(200).send(prettyfyAnswer(productData))
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
}

export { postRequisitesController }
