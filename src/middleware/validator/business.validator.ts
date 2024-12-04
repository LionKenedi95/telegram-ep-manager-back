import joi from 'joi'
import { CreateBusinessInput } from '../../interfaces/Businesses.interface'
import { validatorMiddleware } from '../validatorMiddleware'

const createBusinessSchema = {
	body: joi.object<CreateBusinessInput>({
		query_id: joi.string().required(),
		business: joi.object({
			name: joi.string().required(),
			owner_id: joi.string().required()
		}),
		auth_date: joi.number(),
		signature: joi.string(),
		hash: joi.string()
	})
}

const createBusinessValidation = validatorMiddleware<keyof typeof createBusinessSchema, CreateBusinessInput>(
	createBusinessSchema
)

export { createBusinessValidation }
