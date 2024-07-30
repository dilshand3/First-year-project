import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { NewProduct } from "../controllers/Product.controller.js";

const router = Router()

router.route("/addingProduct").post(
    upload.fields([
        {
            name: "Image",
            maxCount: 1
        }
    ])
    , NewProduct)


export default router