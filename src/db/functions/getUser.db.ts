import { UsersModel } from '../models/users.model'
import { BusinessesModel } from '../models/businesses.model'
import { ProductsModel } from '../models/products.model'

async function getUser(id: number) {
	const userInfo = await UsersModel.findByPk(id, {
		attributes: ['id', 'first_name', 'last_name', 'username'],
		include: [
			{
				model: BusinessesModel,
				as: 'businesses',
				attributes: ['id', 'name'],
				include: [
					{
						model: ProductsModel,
						as: 'products',
						attributes: ['id', 'name', 'link', 'type'],
					},
				],
			},
		],
	})
	return userInfo
}

export { getUser }


