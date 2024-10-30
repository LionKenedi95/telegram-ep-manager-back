const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Appointment = (sequelize, DataTypes) => {
    const AppointmentModel = sequelize.define('Appointment', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        serviceID: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
              model: 'services',
              key: 'id'
            }
        },
        clientID: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
              model: 'clients',
              key: 'id'
            }
        },
    }, {
        timestamps: true,
        tableName: 'appointments'
    });

    return AppointmentModel
}

module.exports = Appointment;