'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employee', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nik: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      end_date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      created_by: {
        type: Sequelize.STRING
      },
      updated_by: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    })
    await queryInterface.addIndex('employee', ['nik'])
    await queryInterface.addIndex('employee', ['name'])
    await queryInterface.addIndex('employee', ['start_date'])
    await queryInterface.addIndex('employee', ['end_date'])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('employee', ['nik'])
    await queryInterface.removeIndex('employee', ['name'])
    await queryInterface.removeIndex('employee', ['start_date'])
    await queryInterface.removeIndex('employee', ['end_date'])
    await queryInterface.dropTable('employee');
  }
};