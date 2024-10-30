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
    companyName: {
      type: DataTypes.STRING,
      default: '',
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