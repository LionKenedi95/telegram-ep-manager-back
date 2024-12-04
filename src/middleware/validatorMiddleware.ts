import { RequestHandler } from 'express'
import { ObjectSchema } from 'joi'

export function validatorMiddleware<T extends string, Y>(schema: {
	[key in T]: ObjectSchema<Y>
}): RequestHandler<Y> {
	const fieldsToValidate = Object.keys(schema)
	return (req, res, next) => {
		const errors = []
		fieldsToValidate.forEach(field => {
			const { error } = schema[field].validate(req[field])
			if (error) {
				errors.push(error)
			}
		})
		if (errors.length) {
			next(errors.join('; '))
		} else {
			next()
		}
	}
}
