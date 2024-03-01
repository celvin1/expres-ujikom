const authController = require('./authController');
const userController = require('./userController');
const produkController = require('./produkController');
const informasiController = require('./informasiController');
const kontakController = require('./kontakController');
const galleryController = require('./galleryController');

module.exports = {
    auth: authController,
    user: userController,
    produk : produkController,
    informasi : informasiController,
    kontak : kontakController,
    gallery : galleryController,
};