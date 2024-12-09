import joi from 'joi'
import { CreateProductInput } from '../../interfaces/Products.interface'
import { validatorMiddleware } from '../validatorMiddleware'

const createProductSchema = {
	body: joi.object<CreateProductInput>({
		query_id: joi.string().required(),
		product: joi.object({
			name: joi.string().required(),
			businessId: joi.number().required(),
			link: joi.string().required(),
			type: joi.string().valid('channel', 'media').required()
		}),
		auth_date: joi.number(),
		signature: joi.string(),
		hash: joi.string()
	})
}

const createProductValidation = validatorMiddleware<keyof typeof createProductSchema, CreateProductInput>(
	createProductSchema
)

export { createProductValidation }
