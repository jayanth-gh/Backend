const Car = require("../models/car")

const addCar = async (req,res)=>{
    try{
        const car = await Car.create({
            brand: req.body.brand,
            model: req.body.model,
            price: req.body.price,
            fueltype:req.body.fueltype,
            image: req.file.path,
        });
        res.status(201).json({
            message: "Car Added",car
        });
    }
    catch(err){
        res.status(500).json({
            message: err
        });

    }
}

const getAllCars = async (req,res)=>{
    try{
        const cars = await Car.find()
        res.status(200).json({
            message: "Cars fetched",cars   })
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getCarById = async (req,res)=>{
    try{
        const car = await Car.findById(req.params.id)
        res.status(200).json({
            message: "Car fetched",car
        })
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const updateCar = async (req,res)=>{
    try{
        const car = await Car.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            message: "Car updated",car
        })
        
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const deleteCar = async (req,res)=>{
    try{
        await Car.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Car deleted"
        })
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    addCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar
}