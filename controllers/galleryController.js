const db = require("../database/models/gallery");
const gallery = db.gallery;

// CREATE: Menambahkan data ke dalam tabel gallery
exports.create = (req, res) => {

    // Data yang diperoleh dari inputan oleh pengguna
    const galleryData = {
        gambar: req.body.gambar,
    };

    // Proses menyimpan ke dalam database
    gallery.create(galleryData)
        .then((result) => {
            res.json({
                message: "Gambar berhasil ditambahkan ke galeri.",
                data: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Terjadi kesalahan saat menambahkan gambar ke galeri.",
                data: null,
            });
        });
};

exports.findAll = (req, res) => {
    gallery.findAll()
        .then((result) => {
            res.json({
                message: "Data gambar berhasil diambil dari galeri.",
                data: result,
            });
        })
        .catch((err) => {
            console.error(err); // Tambahkan log error di sini
            res.status(500).json({
                message: err.message || "Terjadi kesalahan saat mengambil data gambar dari galeri.",
                data: null,
            });
        });
};

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params
exports.update = (req, res) => {
    const id = req.params.id;

    // Field untuk memperbarui data gambar
    const galleryData = {
        gambar: req.body.gambar,
        // Tambahkan bidang lain sesuai kebutuhan
    };

    gallery.update(galleryData, {
        where: { id },
    })
        .then((num) => {
            if (num == 1) {
                res.json({
                    message: "Gambar berhasil diperbarui.",
                    data: galleryData,
                });
            } else {
                res.json({
                    message: `Tidak dapat memperbarui gambar dengan id=${id}. Mungkin gambar tidak ditemukan atau req.body kosong!`,
                    data: galleryData,
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Terjadi kesalahan saat memperbarui gambar.",
                data: null,
            });
        });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
    const id = req.params.id;
    gallery.destroy({
        where: { id },
    }).then((num) => {
        if (num == 1) {
            res.json({
                message: "Gambar berhasil dihapus dari galeri.",
                data: req.body,
            });
        } else {
            res.json({
                message: `Tidak dapat menghapus gambar dengan id=${id}. Mungkin gambar tidak ditemukan!`,
                data: req.body,
            });
        }
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Terjadi kesalahan saat menghapus gambar dari galeri.",
            data: null,
        });
    });
};

// BONUS ===> Mengambil data sesuai id yang dikirimkan
exports.findOne = (req, res) => {
    gallery.findByPk(req.params.id)
        .then((result) => {
            if (!result) {
                return res.status(404).json({
                    message: `Gambar dengan id=${req.params.id} tidak ditemukan.`,
                    data: result,
                });
            }
            res.json({
                message: "Gambar berhasil ditemukan.",
                data: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Terjadi kesalahan saat mengambil gambar.",
                data: null,
            });
        });
};