'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('businesses', {
      id: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      telegramID: {
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
      },
      language: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    }, {
      tableName: 'businesses',
    });

    await queryInterface.createTable('services', {
        id: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: false,
          unique: true,
          autoIncrement: true,
          primaryKey: true,
        },
        businessID: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: 'businesses', 
            key: 'id'       
          },
          onUpdate: 'CASCADE', 
          onDelete: 'CASCADE'   
        },
        title: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true,
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
    });

    await queryInterface.createTable('timeSlots', {
        id: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: false,
          unique: true,
          autoIncrement: true,
          primaryKey: true,
        },
        serviceId: {
          type: Sequelize.DataTypes.BIGINT,
          allowNull: false,
          references: {
            model: 'services', 
            key: 'id'       
          },
          onUpdate: 'CASCADE', 
          onDelete: 'CASCADE'   
        },
        startDate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        endDate: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        type: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('timeSlots');
    await queryInterface.dropTable('services');
    await queryInterface.dropTable('businesses');
  }
};