import { UsersModel } from '../models/users.model'
import { db } from '../database'

async function newUser(
	id: number,
	first_name: string,
	last_name: string,
	username: string,
) {
	console.log( "New user:", id, first_name, last_name, username )
	const t = await db.transaction()
	try {
		const user = await UsersModel.create(
			{
				id,
				first_name,
				last_name,
				username,
			},
			{ transaction: t },
		)

		await t.commit()

		return user
	} catch (error) {
		console.error(error)
		await t.rollback()
	}
}

export { newUser }
