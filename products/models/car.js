const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    brand:{
        type:String
    },
    model:{
        type:String
    },
    price:{
        type:Number
    },
    fueltype:{
        type:String
    },
    image:{
        type:String
    }

})

module.exports = mongoose.model('Car',carSchema)