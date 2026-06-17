const express = require('express')
const app = express()
const Product = require("./models/product")
const productRoutes = require('./router/productroutes')
const connectDB = require('./config/db')
const authRoutes = require('./router/authrouter')
connectDB()

app.use(express.json())
app.use("/api",productRoutes)
app.use("/uploads",express.static("uploads"))
app.use("/api/auth",authRoutes)

app.get('/',(req,res)=>{
    res.send('server is working')
})


app.listen(3002,()=>{
    console.log("server started")
})

