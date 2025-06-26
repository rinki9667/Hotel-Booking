// import express from "express";
// import { protect } from "../../middleware/authMiddleware.js";
// import { getUserData } from "../controllers/userController.js";
// import { storeRecentSearchedCities } from "../Controllers/userController.js";

// const userRouter = express.Router();

// userRouter.get('/', protect, getUserData);
// userRouter.post('/store-recent-search', protect,
// storeRecentSearchedCities    
// );

// export default userRouter;

import express from "express";
// import { protect } from "../../middleware/authMiddleware.js";
// import {
//   getUserData,
//   storeRecentSearchedCities
// } from "../controllers/userController.js";
import { protect } from "../MiddleWare/authMiddleware.js";
import { getUserData } from "../Controllers/userController";
import { storeRecentSearchedCities } from "../Controllers/userController";

const userRouter = express.Router();

userRouter.get('/', protect, getUserData);
userRouter.post('/store-recent-search', protect, storeRecentSearchedCities);

export default userRouter;
