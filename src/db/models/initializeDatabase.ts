import { UsersModel } from './users.model'
import { BusinessesModel } from './businesses.model'
import { ProductsModel } from './products.model'
import { Sequelize } from 'sequelize'

async function initializeDatabase(db: Sequelize) {
	// Инициализация моделей
	await UsersModel.initModel(db)
	await BusinessesModel.initModel(db)
	await ProductsModel.initModel(db)

	// Определение связей
	await UsersModel.associate({ Businesses: BusinessesModel })
	await BusinessesModel.associate({ Users: UsersModel, Products: ProductsModel })
	await ProductsModel.associate({ Businesses: BusinessesModel })
}

export { initializeDatabase }
