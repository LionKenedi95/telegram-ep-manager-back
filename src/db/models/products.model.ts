import { Model, DataTypes } from 'sequelize'
import { db } from '../database'

class ProductsModel extends Model {
	public id!: number
	public name!: string
	public link!: string
	public business_id!: number
	public type!: string
	public readonly createdAt!: Date
	public readonly updatedAt!: Date

	static async initModel(sequelize: any) {
		super.init(
			{
				id: {
					type: DataTypes.INTEGER,
					autoIncrement: true,
					primaryKey: true
				},
				name: {
					type: new DataTypes.STRING(128),
					allowNull: false
				},
				link: {
					type: new DataTypes.STRING(128),
					allowNull: false
				},
				business_id: {
					type: new DataTypes.INTEGER(),
					allowNull: false
				},
				type: {
					type: new DataTypes.STRING(128),
					allowNull: false
				}
			},
			{
				sequelize,
				tableName: 'products',
				createdAt: true,
				updatedAt: true
			}
		)
	}

	static async associate(models: any) {
		super.belongsTo(models.Businesses, {
			foreignKey: 'business_id',
			as: 'business'
		})
	}
}

export { ProductsModel }
