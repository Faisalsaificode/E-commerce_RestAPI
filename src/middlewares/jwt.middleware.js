// src/middlewares/jwt.middleware.js
import jwt from "jsonwebtoken";

export default function jwtAuth(req, res, next) {
  try {
    // 🧩 Accept token directly (without "Bearer ")
    const token =
      req.headers.authorization ||
      req.headers.token ||  // optional alternate header
      null;

    if (!token) {
      return res.status(401).send("Authorization token missing");
    }

    // ✅ verify token directly (no split, no Bearer)
    const payload = jwt.verify(token.trim(), process.env.JWT_SECRET);

    // attach user info
    req.userID = payload.userID || payload.id || payload._id;
    req.email = payload.email;
    next();
  } catch (err) {
    return res.status(401).send("Invalid or expired token");
  }
}
