'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let kontak = [];
   
    kontak.push({
      nama: 'admin',
      email: 'anasnfjnasnf',
      description: 'admindjajdjajd',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    kontak.push({
      nama: 'mamat',
      description: 'meemberbau taa',
      description: 'admindjajdjajd',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return queryInterface.bulkInsert('kontak', kontak, {});
  },

    async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('kontak', null, {});
  }
};