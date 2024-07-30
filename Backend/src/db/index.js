import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB =  async () => {
    try {
        const conectionInastance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`MongoDB connected succesfully || On ${conectionInastance.connection.host}`);
    } catch (error) {
        console.log(`something went wrong while connecting database due to ${error}`);
    }
}

export default connectDB