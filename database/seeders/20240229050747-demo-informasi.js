'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const informasi = [];
   
    informasi.push({
      judul: 'admin',
      description: 'anasnfjnasnf',
      gambar: 'admin.png',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    informasi.push({
      judul: 'mamat',
      description: 'meemberbau taa',
      gambar: 'admin.png',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return queryInterface.bulkInsert('informasi', informasi);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('informasi', null, {});
  }
};