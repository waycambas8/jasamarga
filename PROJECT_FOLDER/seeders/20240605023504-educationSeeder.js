'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('education', [
      {
        id: 1,
        employee_id: 1,
        name: 'SMKN 7 Jakarta',
        level: 'SMA',
        description: 'Sekolah Menengah Atas',
        created_by: 'admin',
        created_at: new Date('2022-12-12'),
        updated_by: 'admin',
        updated_at: new Date('2022-12-12'), // Use correct field name
      },
      {
        id: 2,
        employee_id: 2,
        name: 'Universitas Negeri Jakarta',
        level: 'Strata 1',
        description: 'Sarjana',
        created_by: 'admin',
        created_at: new Date('2022-12-12'),
        updated_by: 'admin',
        updated_at: new Date('2022-12-12'), // Use correct field name
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('education', null, {});
  }
};
