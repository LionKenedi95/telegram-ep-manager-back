const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = (sequelize, DataTypes) => {
    const ProductModel = sequelize.define('Product', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        link: {
            tipe:  DataTypes.STRING,
            allowNull: true,
        },
        businessID: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        type: {
            channel,
            media,
        },
    });
    return ProductModel
}

module.exports = Product;