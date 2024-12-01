import { ProductsModel } from '../models/products.model'

async function getProduct(id: number) {
	const productInfo = await ProductsModel.findByPk(id, {
		attributes: ['id', 'name', 'link', 'type', 'businessId'],
	})
	return productInfo
}

export { getProduct }


