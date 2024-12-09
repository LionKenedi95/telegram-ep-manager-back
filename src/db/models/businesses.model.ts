import { Model, DataTypes } from 'sequelize'
import { db } from '../database'

class BusinessesModel extends Model {
	public id!: number
	public name!: string
	public ownerId!: number
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
				owner_id: {
					type: new DataTypes.INTEGER(),
					allowNull: false
				}
			},
			{
				sequelize,
				tableName: 'businesses',
				createdAt: true,
				updatedAt: true
			}
		)
	}

	static async associate(models: any) {
		super.belongsTo(models.Users, {
			foreignKey: 'owner_id',
			as: 'owner'
		})
		super.hasMany(models.Products, {
			foreignKey: 'business_id',
			as: 'products'
		})
		super.hasOne(models.Requisites, {
			foreignKey: 'business_id',
			as: 'requisites'
		})
	}
}

export { BusinessesModel }
