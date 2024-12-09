import { UsersModel } from '../models/users.model'
import { BusinessesModel } from '../models/businesses.model'
import { ProductsModel } from '../models/products.model'
import { UserInterfaceDB } from '../../interfaces/Users.interface'

type TmpType = Omit<UserInterfaceDB, 'user_id'> & { id: number }

async function getUser(id: number): Promise<TmpType> {
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
						attributes: ['id', 'name', 'link', 'type']
					}
				]
			}
		]
	})
	return userInfo
}

export { getUser }
