const express = require('express');
const router = express.Router();
const informasiController = require('../controllers/informasiController');

// CREATE: Menambahkan data ke dalam tabel kategoris
router.post('/api/v1/informasi', informasiController.create);

// READ: Menampilkan atau mengambil semua data dari tabel kategoris
router.get('/api/v1/informasi', informasiController.findAll);

// READ: Mengambil data berdasarkan id
router.get('/api/v1/informasi/:id', informasiController.findOne);

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params 
router.put('/api/v1/informasi/:id', informasiController.update);

// DELETE: Menghapus data sesuai id yang dikirimkan
router.delete('/api/v1/informasi/:id', informasiController.delete);

module.exports = router;