import express from "express";
// import { protect } from "../../middleware/authMiddleware.js";
// import { registerHotel } from "../../controllers/hotelController.js";
import { protect } from "../MiddleWare/authMiddleware.js";
import { registerHotel } from "../Controllers/hotelController.js";

const hotelRouter = express.Router();

hotelRouter.post('/', protect, registerHotel);

export default hotelRouter;