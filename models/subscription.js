const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subscription = (sequelize, DataTypes) => {
    const SubscriptionModel = sequelize.define('Subscription', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        channelId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        tarificationId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
    });
    return SubscriptionModel
}

module.exports = Subscription;