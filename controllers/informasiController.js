const db = require("../database/models");
const Informasi = db.Informasi;

// CREATE: Menambahkan data ke dalam tabel informasis
exports.create = (req, res) => {

    // Data yang diperoleh dari inputan oleh pengguna
    const informasiData = {
        judul: req.body.judul,
        description: req.body.description,
        gambar: req.body.gambar,
    };

    // Proses menyimpan ke dalam database
    Informasi.create(informasiData).then((data) => {
        res.json({
            message: "Informasi berhasil dibuat.",
            data: data,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err.message || "Terjadi kesalahan saat membuat informasi.",
            data: null,
        });
    });
};

exports.findAll = (req, res) => {
    Informasi.findAll()
        .then((result) => {
            res.json({
                message: "Data Produks berhasil diambil.",
                data: result,
            });
        })
        .catch((err) => {
            console.error(err); // Tambahkan log error di sini
            res.status(500).json({
                message: err.message || "Terjadi kesalahan saat mengambil data Produks.",
                data: null,
            });
        });
};

// UPDATE: Merubah data sesuai dengan id yang dikirimkan sebagai params
exports.update = (req, res) => {
    const id = req.params.id;

    // Field untuk memperbarui data informasi
    const informasiData = {
        judul: req.body.judul,
        description: req.body.description,
        gambar: req.body.gambar,
        // Tambahkan bidang lain sesuai kebutuhan
    };

    Informasi.update(informasiData, {
        where: { id },
    })
        .then((num) => {
            if (num == 1) {
                res.json({
                    message: "Informasi berhasil diperbarui.",
                    data: informasiData,
                });
            } else {
                res.json({
                    message: `Tidak dapat memperbarui informasi dengan id=${id}. Mungkin informasi tidak ditemukan atau req.body kosong!`,
                    data: informasiData,
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Terjadi kesalahan saat memperbarui informasi.",
                data: null,
            });
        });
};

// DELETE: Menghapus data sesuai id yang dikirimkan
exports.delete = (req, res) => {
    const id = req.params.id;
    Informasi.destroy({
        where: { id },
    })
        .then((num) => {
            if (num == 1) {
                res.json({
                    message: "Informasi berhasil dihapus.",
                    data: req.body,
                });
            } else {
                res.json({
                    message: `Tidak dapat menghapus informasi dengan id=${id}. Mungkin informasi tidak ditemukan!`,
                    data: req.body,
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Terjadi kesalahan saat menghapus informasi.",
                data: null,
            });
        });
};

// BONUS ===> Mengambil data sesuai id yang dikirimkan
exports.findOne = (req, res) => {
    Informasi.findByPk(req.params.id)
        .then((result) => {
            if (!result) {
                return res.status(404).json({
                    message: `Informasi dengan id=${req.params.id} tidak ditemukan.`,
                    data: result,
                });
            }
            res.json({
                message: "Informasi berhasil ditemukan.",
                data: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message || "Terjadi kesalahan saat mengambil informasi.",
                data: null,
            });
        });
};