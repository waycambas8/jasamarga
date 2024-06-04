'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employee_profile', {
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
      place_of_birth: {
        type: Sequelize.STRING(255)
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.ENUM(['Laki-Laki', 'Perempuan']),
        defaultValue:'Laki-Laki'
      },
      is_married: {
        type: Sequelize.BOOLEAN,
        defaultValue:false
      },
      prof_pict: {
        type: Sequelize.STRING(255),
        defaultValue:false
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

    await queryInterface.addIndex('employee_profile', ['employee_id'])
    await queryInterface.addIndex('employee_profile', ['gender'])
    await queryInterface.addIndex('employee_profile', ['is_married'])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('employee_profile', ['employee_id'])
    await queryInterface.removeIndex('employee_profile', ['gender'])
    await queryInterface.removeIndex('employee_profile', ['is_married'])
    await queryInterface.dropTable('employee_profile');
  }
};