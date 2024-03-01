'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let gallery = [];
   
    gallery.push({
      gambar: 'admin.png',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    gallery.push({
      gambar: 'admin.png',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return queryInterface.bulkInsert('gallery', gallery, {});
  },

    async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('gallery', null, {});
  }
};