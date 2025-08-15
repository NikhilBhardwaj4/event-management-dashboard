import User from "../models/user.js";
import jwt from "jsonwebtoken";

// Generate JWT token - payload uses { id }
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });

// Register
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      return res.status(400).json({ message: "Please provide username, email and password" });

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    // create (pre('save') will hash password)
    const user = await User.create({ username, email, password });

    return res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // need +password because schema sets select: false
    const user = await User.findOne({ email }).select("+password");
    if (user && (await user.matchPassword(password))) {
      return res.json({
        _id: user.id,
        username: user.username,
        email: user.email,
        token: generateToken(user.id),
      });
    }
    return res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get profile (protected)
export const getUserProfile = async (req, res) => {
  try {
    if (!req.user) return res.status(404).json({ message: "User not found" });
    return res.json({
      _id: req.user.id,
      username: req.user.username,
      email: req.user.email,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};
