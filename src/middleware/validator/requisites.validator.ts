import joi from 'joi'
import { CreateRequisitesInput, RequisitesInterfaceDB, GetRequisitesInput } from '../../interfaces/Requisites.interface'
import { validatorMiddleware } from '../validatorMiddleware'

const createRequisitesSchema = {
	body: joi.object<CreateRequisitesInput>({
		query_id: joi.string().required(),
		requisites: {
			businessId: joi.number().required(),
			type: joi.string().valid('самозанятый', 'ип').required(),
			inn: joi.string().required(),
			kpp: joi.string().when('type', { is: 'ип', then: joi.required() }),
			ogrn: joi.string().when('type', { is: 'ип', then: joi.required() }),
			bik: joi.string().when('type', { is: 'ип', then: joi.required() }),
			paymentAccount: joi.string().required(),
			bank: joi.string().when('type', { is: 'ип', then: joi.required() })
		},
		auth_date: joi.number(),
		signature: joi.string(),
		hash: joi.string()
	})
}

const getRequisitesSchema = {
	params: joi.object<GetRequisitesInput>({
		businessId: joi.number().required()
	})
}

const createRequisitesValidation = validatorMiddleware<keyof typeof createRequisitesSchema, CreateRequisitesInput>(
	createRequisitesSchema
)
const getRequisitesValidation = validatorMiddleware<keyof typeof getRequisitesSchema, GetRequisitesInput>(
	getRequisitesSchema
)
export { createRequisitesValidation, getRequisitesValidation }
