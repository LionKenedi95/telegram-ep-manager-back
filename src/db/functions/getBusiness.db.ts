import { BusinessesModel } from '../models/businesses.model'
import { ProductsModel } from '../models/products.model'

async function getBusiness(id: number) {
	const businessInfo = await BusinessesModel.findByPk(id, {
		attributes: ['id', 'name'],
		include: [
			{
				model: ProductsModel,
				as: 'products',
				attributes: ['id', 'name', 'link', 'type', 'businessId'],
			},
		],
	})
	return businessInfo
}

export { getBusiness }


