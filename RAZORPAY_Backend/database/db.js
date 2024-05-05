import { connect } from "mongoose";
import 'dotenv/config';

const connectToMongo = async () => {
    try {
        await connect("mongodb+srv://akhileshtakawale703:" +
            process.env.MONGO_PASSWORD +
            "@cluster0.47wrssa.mongodb.net/paymentGateway?retryWrites=true&w=majority");
        console.log("---***Database Connected Successfully***---");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        // Optionally, you can rethrow the error to handle it in the calling code
        // throw error;
    }
}

export default connectToMongo;
