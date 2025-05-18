const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
        title:{
            type: String,
            required: true,
        },
        subtitle:{
            type: String,
            required: true,
        },
        location:{
            type: String,
            required: true,
        },
        rating:{
            type: Number,
            required: true,
        },
        reviews:{
            type: Number,
            required: true,
        },
        originalPrice:{
            type: Number,
            required: true,
        },
        dealPrice:{
            type: Number,
            required: true,
        },
        discount:{
            type: String,
            required: true,
        },
        extraPrice:{
            type: Number,
            required: true,
        },
        image:{
            type: String,
        }
})

const productModel=mongoose.model("Product",productSchema);
module.exports={productModel};
