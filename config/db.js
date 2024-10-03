import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectToDB = async () => {
    try {
        // Connect to MongoDB
        const conn = await mongoose.connect(
            process.env.MONGO_URI || `mongodb://127.0.0.1:27017/lms`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            } // Add options for compatibility
        );

        // Log the host name if the connection is successful
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1); // Exit the process with failure code if connection fails
    }
};

export default connectToDB;
