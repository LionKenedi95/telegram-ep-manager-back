import { ProductsModel } from '../models/products.model'
import { db } from '../database'

async function newProduct(name, businessId, link, type) {
	const t = await db.transaction()
	try {
		const product = await ProductsModel.create(
			{
				name,
                businessId,
                link,
                type
			},
			{ transaction: t },
		)

		await t.commit()
		return product
	} catch (error) {
		console.error(error)
		await t.rollback()
        
	}
}

export { newProduct }
