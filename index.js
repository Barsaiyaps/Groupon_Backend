require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const PORT=5000
const productRouter=require('./routes/product.route')

const URL=process.env.MONGO_URL

app.use(cors())
app.use(express.json())
app.use('/groupon',productRouter)



app.listen(PORT,async()=>{ 

    await mongoose.connect(URL)
     console.log("Server is running on port 5000")
})