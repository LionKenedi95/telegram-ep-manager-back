import { UsersModel } from './models/users.model'
import { BusinessesModel } from './models/businesses.model'
import { ProductsModel } from './models/products.model'
import { RequisitesModel } from './models/requisites.model'
import { Sequelize } from 'sequelize'

async function initializeDatabase(db: Sequelize) {
	// Инициализация моделей
	await UsersModel.initModel(db)
	await BusinessesModel.initModel(db)
	await ProductsModel.initModel(db)
	await RequisitesModel.initModel(db)

	// Определение связей
	await UsersModel.associate({ Businesses: BusinessesModel })
	await BusinessesModel.associate({ Users: UsersModel, Products: ProductsModel, Requisites: RequisitesModel })
	await ProductsModel.associate({ Businesses: BusinessesModel })
	await RequisitesModel.associate({ Businesses: BusinessesModel })

	// Синхронизация с базой данных
	await db.sync()
}

export { initializeDatabase }
