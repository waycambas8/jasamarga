'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('education', {
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
      level: {
        type: Sequelize.ENUM(['Tk','Sd','Smp','Sma','Strata 1','Strata 2','Doktor','Profesor']),
        defaultValue:'Sma'
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(255)
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

    await queryInterface.addIndex('education', ['employee_id'])
    await queryInterface.addIndex('education', ['name'])
    await queryInterface.addIndex('education', ['level'])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('education', ['employee_id'])
    await queryInterface.removeIndex('education', ['name'])
    await queryInterface.removeIndex('education', ['level'])
    await queryInterface.dropTable('education');
  }
};