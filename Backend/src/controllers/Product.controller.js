import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Product } from "../model/Product.model.js";
import { uploadOnClodinary } from "../utils/cloudinary.js"

const NewProduct = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { product, price, Description } = req.body;

    if ([product, price, Description].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All field is required")
    }

    const ImageLocalPath = req.files?.Image?.[0]?.path;

    if (!ImageLocalPath) {
        throw new ApiError(400, "Product Image is required")
    }

    const Image = await uploadOnClodinary(ImageLocalPath)

    const NewProduct = await Product.create({
        product,
        price,
        Description,
        Image: Image.url
    })

    if (!NewProduct) {
        throw new ApiError(500, "Something went wrong while Adding new product")
    }

    return res.status(200).json(
        new ApiResponse(200,NewProduct, "Product added Succesfully || Thank you")
    )
})


export { NewProduct }