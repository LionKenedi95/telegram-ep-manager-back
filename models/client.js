const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Client = (sequelize, DataTypes) => {
    const ClientModel = sequelize.define('Client', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        telegramID: {
            type: DataTypes.BIGINT,
            allowNull: false,
          },
          language: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          username: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          firstName: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          lastName: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    }, {
        timestamps: true,
        tableName: 'clients',
    });

    ClientModel.associate = (models) => {
        ClientModel.hasMany(models.Appointment, {
            foreignKey: 'clientID', // Внешний ключ
            as: 'appointments',      // Псевдоним для ассоциации
        })
    }

    return ClientModel
}

module.exports = Client;