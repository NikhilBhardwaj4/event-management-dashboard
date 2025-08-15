import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  date: { type: Date, 
  required: true },
  time: String,
  location: String,
  organizer: { type: mongoose.Schema.Types.ObjectId,
   ref: "User" }, // who created it
  createdAt: { type: Date, 
  default: Date.now },
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
