import { BusinessesModel } from '../models/businesses.model'
import { db } from '../database'

async function newBusiness(name: string, ownerId: number) {
	const t = await db.transaction()
	try {
		const business = await BusinessesModel.create(
			{
				name,
                ownerId
			},
			{ transaction: t },
		)

		await t.commit()
		return business
	} catch (error) {
		console.error(error)
		await t.rollback()
        
	}
}

export { newBusiness }
