const { DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/database');

const Service = (sequelize, DataTypes) => {
    const ServiceModel = sequelize.define('Service', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        businessID: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
              model: 'businesses',
              key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        timestamps: true,
        tableName: 'services', 
    });

    ServiceModel.associate = (models) => {
        ServiceModel.hasMany(models.TimeSlot, {
          foreignKey: 'serviceID', // Внешний ключ
          as: 'timeSlots',      // Псевдоним для ассоциации
        });
      };

    return ServiceModel
}
module.exports = Service;