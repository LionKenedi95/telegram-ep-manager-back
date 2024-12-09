import { db } from '../database'
import { Model, DataTypes } from 'sequelize'

class UsersModel extends Model {
	public id!: number
	public first_name!: string
	public last_name!: string
	public username!: string
	public readonly createdAt!: Date
	public readonly updatedAt!: Date

	static async initModel(sequelize: any) {
		super.init(
			{
				id: {
					type: DataTypes.INTEGER,
					autoIncrement: false,
					primaryKey: true
				},
				first_name: {
					type: new DataTypes.STRING(128),
					allowNull: false
				},
				last_name: {
					type: new DataTypes.STRING(128),
					allowNull: false
				},
				username: {
					type: new DataTypes.STRING(128),
					allowNull: false
				}
			},
			{
				sequelize,
				tableName: 'users',
				createdAt: true,
				updatedAt: true
			}
		)
	}

	static async associate(models: any) {
		super.hasMany(models.Businesses, {
			foreignKey: 'owner_id',
			as: 'businesses'
		})
	}
}

export { UsersModel }
