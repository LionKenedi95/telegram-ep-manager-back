const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = (sequelize, DataTypes) => {
    const UserModel = sequelize.define('User', {
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
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    return UserModel
}

module.exports = User;