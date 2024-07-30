import dotenv from "dotenv"
import { app } from "./app.js"
import connectDB from "./db/index.js"

dotenv.config({
    path : "./.env",
})

connectDB()
.then(() => {
    app.listen(process.env.PORT,() => {
        console.log(`Server is ready to perform task at Port ${process.env.PORT}`)
    })
})

.catch((error) => {
    console.log(`Something went wrong while connecting DB due to ${error} `);
})