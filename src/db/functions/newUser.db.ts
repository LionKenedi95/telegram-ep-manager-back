import { UsersModel } from '../models/users.model'
import { db } from '../database'
import { ValidationError } from 'sequelize'

async function newUser(id: number, first_name: string, last_name: string, username: string) {
	console.log('New user:', id, first_name, last_name, username)
	const t = await db.transaction()
	try {
		const user = await UsersModel.create(
			{
				id,
				first_name,
				last_name,
				username
			},
			{ transaction: t }
		)

		await t.commit()

		return user
	} catch (error) {
		if (error instanceof ValidationError) {
			console.error(error.errors.map(e => e.message).join('\n'))
		} else {
			console.error(error)
		}
		await t.rollback()
	}
}

export { newUser }
