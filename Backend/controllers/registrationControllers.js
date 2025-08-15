import Registration from "../models/registration.js";
import Event from "../models/event.js";
import { protect } from "../middlewares/authmiddlewares.js";

export const registerForEvent = async (req, res) => {
  try {
    const { eventId } = req.body;
    const userId = req.user.id; // from protect middleware

    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    const existing = await Registration.findOne({ eventId, userId });
    if (existing) return res.status(400).json({ message: "Already registered" });

    const registration = await Registration.create({ eventId, userId });
    res.status(201).json({ message: "Registration successful", registration });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getMyRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({ userId: req.user.id }).populate("eventId", "title date location");
    res.status(200).json({ registrations });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const cancelRegistration = async (req, res) => {
  try {
    const { id } = req.params; // registration ID
    const registration = await Registration.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      { status: "cancelled" },
      { new: true }
    );

    if (!registration) return res.status(404).json({ message: "Registration not found" });

    res.status(200).json({ message: "Registration cancelled", registration });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
