const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://jayanthilluru_db_user:Jayanth2003@cluster0.yyxepfv.mongodb.net/products?retryWrites=true&w=majority');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;