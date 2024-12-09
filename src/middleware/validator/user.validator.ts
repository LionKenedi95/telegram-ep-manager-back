import joi from 'joi'
import { CreateUserInput, GetUserInput } from '../../interfaces/Users.interface'
import { validatorMiddleware } from '../validatorMiddleware'

const createUserSchema = {
	body: joi.object<CreateUserInput>({
		query_id: joi.string().required(),
		user: joi.object({
			id: joi.number().required(),
			first_name: joi.string().required(),
			last_name: joi.string().required(),
			username: joi.string().required(),
			language_code: joi.string(),
			is_premium: joi.boolean(),
			allows_write_to_pm: joi.boolean(),
			photo_url: joi.string()
		}),
		auth_date: joi.number(),
		signature: joi.string(),
		hash: joi.string()
	})
}

const getUserSchema = {
	params: joi.object<GetUserInput>({
		userId: joi.number().required()
	})
}

const createUserValidation = validatorMiddleware<keyof typeof createUserSchema, CreateUserInput>(createUserSchema)
const getUserValidation = validatorMiddleware<keyof typeof getUserSchema, GetUserInput>(getUserSchema)
export { createUserValidation, getUserValidation }
