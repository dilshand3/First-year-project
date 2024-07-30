import express from "express"
const app = express()
import cors from "cors"
import cookieParser from "cookie-parser"

app.use(cors({
    origin : process.env.CORS_ORIGINE,
    credentials : true
}))
app.use(cookieParser())
app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))


import ProductRoutes from './routes/Product.route.js'

app.use("/api/new/product", ProductRoutes);

export {app}