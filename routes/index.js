const express = require('express')
const auth = require('./authRouter')
const user = require('./userRoute')
const produk = require('./produkRouter')
const informasi = require('./informasiRouter')
const kontak = require('./kontakRouter')
const router = express.Router()

router.get(`/api/v1/`, (_req, res) => {
    res.json({
        "message": "Hello World"
    })
})

router.use(auth)
router.use(user)
router.use(produk)
router.use(informasi)
router.use(kontak)
// other route
module.exports = router;