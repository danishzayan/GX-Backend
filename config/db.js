import mongoose from "mongoose";

// Create connection to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database successfully.');
    } catch (err) {
        console.log('Error connecting to the database:', err);
    }
};

export default connectDB;

