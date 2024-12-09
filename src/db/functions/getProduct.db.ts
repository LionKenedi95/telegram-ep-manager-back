import { ProductsModel } from '../models/products.model'

async function getProduct(id: number) {
	const productInfo = await ProductsModel.findByPk(id, {
		attributes: ['id', 'name', 'link', 'type', 'business_id']
	})
	return productInfo
}

export { getProduct }
