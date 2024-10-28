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
    tableName: 'users',
  });

  UserModel.associate = (models) => {
    console.log('models', models)

    UserModel.hasMany(models.TimeSlot, {
      foreignKey: 'userId', // Внешний ключ
      as: 'timeSlots',      // Псевдоним для ассоциации
    });
  };

  return UserModel
}

module.exports = User;