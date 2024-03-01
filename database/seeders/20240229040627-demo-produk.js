'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let produk = [];
   
    produk.push({
      nama_produk: 'admin',
      description: 'anasnfjnasnf',
      gambar: 'admin.png',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    produk.push({
      nama_produk: 'mamat',
      description: 'meemberbau taa',
      gambar: 'admin.png',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return queryInterface.bulkInsert('produk', produk, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('produk', null, {});
  }
};