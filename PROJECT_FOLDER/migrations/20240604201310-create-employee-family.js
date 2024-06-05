'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employee_family', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255)
      },
      identifier: {
        type: Sequelize.STRING(255)
      },
      job: {
        type: Sequelize.STRING(255)
      },
      place_of_birth: {
        type: Sequelize.STRING(255)
      },
      date_of_birth: {
        type: Sequelize.DATEONLY
      },
      religion: {
        allowNull: false,
        type: Sequelize.ENUM('Islam','Katolik','Budha','Protestas','Konghucu'),
        defaultValue: 'Islam'
      },
      is_life: {
        type: Sequelize.BOOLEAN,
        defaultValue:true
      },
      is_divorced: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      relation_status: {
        allowNull: false,
        type: Sequelize.ENUM('Suami','Istri','Anak','Anak Sambung'),
        defaultValue: 'Suami'
      },
      created_by: {
        type: Sequelize.STRING
      },
      updated_by: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addIndex('employee_family', ['employee_id'])
    await queryInterface.addIndex('employee_family', ['name'])
    await queryInterface.addIndex('employee_family', ['identifier'])
    await queryInterface.addIndex('employee_family', ['religion'])
    await queryInterface.addIndex('employee_family', ['is_life'])
    await queryInterface.addIndex('employee_family', ['relation_status'])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('employee_family', ['employee_id'])
    await queryInterface.removeIndex('employee_family', ['name'])
    await queryInterface.removeIndex('employee_family', ['identifier'])
    await queryInterface.removeIndex('employee_family', ['religion'])
    await queryInterface.removeIndex('employee_family', ['is_life'])
    await queryInterface.removeIndex('employee_family', ['relation_status'])
    await queryInterface.dropTable('employee_family');
  }
};