import Event from "../models/event.js";

// CREATE (protected — organizer set)
export const createEvent = async (req, res) => {
  try {
    const { title, description, date, time, location } = req.body;
    const organizer = req.user ? req.user.id : undefined;

    const newEvent = new Event({
      title,
      description,
      date,
      time,
      location,
      organizer,
    });

    const savedEvent = await newEvent.save();
    
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("organizer", "username email");
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
