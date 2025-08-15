import express from "express";
import { createEvent, getAllEvents } from "../controllers/eventControllers.js";
import { protect } from "../middlewares/authmiddlewares.js";

const router = express.Router();

router.post("/create", protect, createEvent); // protected now
router.get("/", getAllEvents);

export default router;
