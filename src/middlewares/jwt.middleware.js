// src/middlewares/jwt.middleware.js
import jwt from 'jsonwebtoken';

export default function jwtAuth(req, res, next) {
  try {
    const auth = req.headers.authorization || '';
    if (!auth.startsWith('Bearer ')) {
      return res.status(401).send('Authorization header missing or malformed');
    }
    const token = auth.split(' ')[1].trim();
    const payload = jwt.verify(token, process.env.JWT_SECRET); // same secret used for signing

    // attach what you need downstream
    req.userID = payload.userID || payload.id || payload._id;
    req.email = payload.email;
    return next();
  } catch (err) {
    return res.status(401).send('Invalid or expired token');
  }
}
