const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Business = (sequelize, DataTypes) => {
  const BusinessModel = sequelize.define('Business', {
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
  }, {
    timestamps: true,
    tableName: 'businesses',
  });

  BusinessModel.associate = (models) => {
    BusinessModel.hasMany(models.Service, {
      foreignKey: 'businessID', // Внешний ключ
      as: 'services',      // Псевдоним для ассоциации
    });
  };

  return BusinessModel
}

module.exports = Business;