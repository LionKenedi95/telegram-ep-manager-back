import { Model, DataTypes } from 'sequelize'
import { db } from '../database'

class BusinessesModel extends Model {
    public id!: number
    public name!: string
    public ownerId!: number
    public readonly createdAt!: Date
    public readonly updatedAt!: Date

    static async initModel(sequelize: any) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: new DataTypes.STRING(128),
                allowNull: false,
            },
            ownerId: {
                type: new DataTypes.INTEGER(),
                allowNull: false,
            },
        }, {
            sequelize: db,
            tableName: 'businesses',
            createdAt: true,
            updatedAt: true,
        })
    }

    static async associate(models: any) {
        super.belongsTo(models.Users, {
            foreignKey: 'ownerId',
            as: 'owner',
        });
        super.hasMany(models.Products, {
            foreignKey: 'businessId',
            as: 'products',
        });
    }
}

export { BusinessesModel }