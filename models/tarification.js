const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tarification = (sequelize, DataTypes) => {
    const TarificationModel = sequelize.define('Tarification', {
        id: {
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        productID: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        type: {
            annual,
            period,
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        paymentPeriod: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            active: true,
            unactive: false,
        },
    });
    return TarificationModel
}

module.exports = Tarification;