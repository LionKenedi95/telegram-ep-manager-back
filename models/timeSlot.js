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
    serviceID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'services',
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

  return TimeSlotModel
}

module.exports = TimeSlot;