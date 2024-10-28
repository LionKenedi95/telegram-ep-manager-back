const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TimeSlot = (sequelize, DataTypes) => {
  const TimeSlotModel = sequelize.define('TimeSlot', {
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
      references: {
        model: 'users',
        key: 'id'
      }
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: true,
    tableName: 'timeSlots',
  });

  TimeSlotModel.associate = (models) => {
    console.log('models', models)

    TimeSlotModel.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return TimeSlotModel
}

module.exports = TimeSlot;