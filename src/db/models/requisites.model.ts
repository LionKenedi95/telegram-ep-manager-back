import { Model, DataTypes } from 'sequelize'
import { db } from '../database'
import { RequisitesInterfaceDB } from '../../interfaces/Requisites.interface'

class RequisitesModel extends Model<RequisitesInterfaceDB> {
	public id!: number
	public business_id!: number
	public type!: 'самозанятый' | 'ип'
	public inn!: string
	public kpp: string
	public ogrn: string
	public bik: string
	public paymentAccount!: string
	public bank: string
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
				business_id: {
					type: new DataTypes.INTEGER(),
					allowNull: false
				},
				type: {
					type: new DataTypes.ENUM('самозанятый', 'ип'),
					allowNull: false
				},
				inn: {
					type: new DataTypes.STRING(12),
					unique: true,
					allowNull: false
				},
				kpp: {
					type: new DataTypes.STRING(9),
					allowNull: true
				},
				ogrn: {
					type: new DataTypes.STRING(13),
					allowNull: true
				},
				bik: {
					type: new DataTypes.STRING(9),
					allowNull: true
				},
				paymentAccount: {
					type: new DataTypes.STRING(20),
					allowNull: false
				},
				bank: {
					type: new DataTypes.STRING(128),
					allowNull: true
				}
			},
			{
				sequelize,
				tableName: 'requisites',
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

export { RequisitesModel }
