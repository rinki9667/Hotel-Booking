import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./Configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./Controllers/clerkwebhooks.js";
import userRouter from "./Routes/userRoutes.js";
import hotelRouter from "./Routes/hotelRoutes.js";
import { connect } from "mongoose";
import connectCloudinary from "./Configs/cloudinary.js";
import roomRouter from "./Routes/roomRoutes.js";
import bookingRouter from "./Routes/bookingRoutes.js";

 connectDB()
 connectCloudinary();
const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing

//MiddleWare
app.use(express.json())
app.use(clerkMiddleware())

// API to listen to Clerk Webhooks
app.use("/api/clerk", clerkWebhooks);

app.get('/', (req, res) => res.send("API is working"))
app.use('/api/user', userRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/rooms', roomRouter);
app.use('/api/bookings', bookingRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));