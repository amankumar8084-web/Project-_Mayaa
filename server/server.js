import express from 'express';
import connectDB from './src/config/db.js';
import dotenv from 'dotenv';
dotenv.config();
connectDB();
const app = express();



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is connected at http://localhost:${PORT}`)
})