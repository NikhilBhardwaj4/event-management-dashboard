import express from "express";
import { registerUser, loginUser, getUserProfile } from "../controllers/authControllers.js";
import { protect } from "../middlewares/authmiddlewares.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);

export default router;
