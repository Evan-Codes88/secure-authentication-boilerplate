import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from '../db/connectDB.js';

dotenv.config();

const app = express();

app.listen(8880, () => {
    connectDB();
    console.log("Server is running on port 8880");
})

export default app;