const express = require('express')
const router = express.Router()
const upload = require("../multer")



const {
    addCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar
} = require('../controllers/carcontroller')



router.post('/add/cars', upload.single("image"), addCar)
router.get('/get/cars',getAllCars)
router.get('/get/cars/:id',getCarById)
router.put('/update/cars/:id',updateCar)
router.delete('/delete/cars/:id',deleteCar)


module.exports = router