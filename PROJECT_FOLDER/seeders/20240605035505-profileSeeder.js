'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employee_profile', [
      {
        employee_id: 1,
        place_of_birth: 'Jakarta',
        date_of_birth: new Date('1997-05-02'),
        gender: 'Laki-Laki',
        is_married: true,
        prof_pict: null,
        created_by: 'admin',
        created_at: new Date('2022-12-12'),
        updated_by: 'admin',
        updated_at: new Date('2022-12-12'),
      },
      {
        employee_id: 2,
        place_of_birth: 'Sukabumi',
        date_of_birth: new Date('1997-05-02'),
        gender: 'Laki-Laki',
        is_married: false,
        prof_pict: null,
        created_by: 'admin',
        created_at: new Date('2022-12-12'),
        updated_by: 'admin',
        updated_at: new Date('2022-12-12'),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('employee_profile', null, {});
  }
};
