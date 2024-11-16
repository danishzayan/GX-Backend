import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Create connection to MongoDB
main()
  .then(() => {
    console.log('Connected to the database successfully.');
  })
  .catch((err) => {
    console.log('Error connecting to the database:', err);
  });

async function main() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

// Routes will be defined here later

export default app;
