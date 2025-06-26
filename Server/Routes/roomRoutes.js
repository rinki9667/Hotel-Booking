import express from "express";
// import upload from "../..middleware/uploadMiddleware.js";
// import { protect } from "../..middleware/authMiddleware.js";
// import { createRoom } from "../..controllers/roomController.js";
import { createRoom, getOwnerRooms, getrooms, toogleRoomAvailability } from "../Controllers/roomController.js";
import upload from "../MiddleWare/uploadMiddleware.js";
import { protect } from "../MiddleWare/authMiddleware.js";

const roomRouter = express.Router();

roomRouter.post('/', upload.array("images", 4), protect, createRoom);
roomRouter.get('/', getrooms);
roomRouter.get('/owner', protect, getOwnerRooms)
roomRouter.post('/toggle-availability', protect,toogleRoomAvailability )

 

 export default  roomRouter;
