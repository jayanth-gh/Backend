const Product = require("../models/product")

const addProduct = async (req,res)=>{
    try{
        const product = await Product.create({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.file.path,
        });
        res.status(201).json({
            message: "Product Added",product
        });
    }
    catch(err){
        res.status(500).json({
            message: err
        });

    }
}

const getAllProducts = async (req,res)=>{
    try{
        const products = await Product.find()
        res.status(200).json({
            message: "Products fetched",products   })
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getProductById = async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id)
        res.status(200).json({
            message: "Product fetched",product
        })
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const updateProduct = async (req,res)=>{
    try{
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            message: "Product updated",product
        })
        
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const deleteProduct = async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Product deleted"
        })
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}