import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // support several possible id names
      const userId = decoded.id || decoded._id || decoded.userId;
      if (!userId) return res.status(401).json({ message: "Token does not contain user id" });

      req.user = await User.findById(userId).select("-password");
      if (!req.user) return res.status(404).json({ message: "User not found" });

      next();
    } catch (error) {
      console.error("Auth error:", error);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};
