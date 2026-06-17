const express = require('express')
const router = express.Router()
const upload = require("../multer")



const {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/productcontroller')



router.post('/add/products', upload.single("image"), addProduct)
router.get('/get/products',getAllProducts)
router.get('/get/products/:id',getProductById)
router.put('/update/products/:id',updateProduct)
router.delete('/delete/products/:id',deleteProduct)


module.exports = router