import { TOKEN_SECRET } from "../config/config.js";

import jwt from "jsonwebtoken";

export function validateToken(req, res, next) {
  const accessToken = req.cookies["access_token"];

  if (!accessToken) {
    return res.status(401).json({ error: "Access denied. Token missing." });
  }

  jwt.verify(accessToken, TOKEN_SECRET, (err, user) => {
    if (err) {
      res.send("Access denied , token expired or incorrect");
    } else {
      req.user = user;

      next();
    }
  });
}
