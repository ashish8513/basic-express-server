import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectToDB = async () => {
    try {
        // Connect to MongoDB
        const conn = await mongoose.connect(
            process.env.MONGO_URI || `mongodb://127.0.0.1:27017/ashish-project`,//check in the MONGODB Compass
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1); 
    }
};

export default connectToDB;
