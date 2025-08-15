import express from "express";
import { registerForEvent, getMyRegistrations, cancelRegistration } from "../controllers/registrationControllers.js";   
import { protect } from "../middlewares/authmiddlewares.js";

const router = express.Router();

router.post("/register", protect, registerForEvent);
router.get("/my-registrations", protect, getMyRegistrations);
router.put("/cancel/:id", protect, cancelRegistration);

export default router;
