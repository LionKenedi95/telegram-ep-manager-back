'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('clients', {
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
            tableName: 'clients'
        });

      await queryInterface.createTable('appointments', {
        id: {
            type: Sequelize.DataTypes.BIGINT,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        serviceID: {
            type: Sequelize.DataTypes.BIGINT,
            allowNull: false,
            references: {
              model: 'services',
              key: 'id'
            }
        },
        clientID: {
            type: Sequelize.DataTypes.BIGINT,
            allowNull: false,
            references: {
              model: 'clients',
              key: 'id'
            }
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
        tableName: 'appointments'
    });
    },

    async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('appointments');
     await queryInterface.dropTable('clients');
    }   
};

