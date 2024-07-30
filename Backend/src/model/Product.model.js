import mongoose from "mongoose"
import zlib from "zlib"

const ProducSchema = new mongoose.Schema({
    Image : {
        require : true,
        type : String
    },
    product : {
        require : true,
        type : String
    },
    price : {
        require : true,
        type : Number
    },
    Description : {
        require : true,
        type : String, 
    }
},{timestamps:true})


export const Product = mongoose.model("Product",ProducSchema)