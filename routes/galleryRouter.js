const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

// CREATE: Menambahkan data ke dalam tabel kategoris
router.post('/api/v1/gallery/', galleryController.create);

// READ: Menampilkan atau mengambil semua data dari tabel kategoris
router.get('/api/v1/gallery/', galleryController.findAll);

// READ: Mengambil data berdasarkan id
router.get('/api/v1/gallery/:id', galleryController.findOne);

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
router.put('/api/v1/gallery/:id', galleryController.update);

// DELETE: Menghapus data sesuai id yang dikirimkan
router.delete('/api/v1/gallery/:id', galleryController.delete);

module.exports = router;