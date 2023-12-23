import { Router } from "express";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config/config.js";

const router = Router();

router.get("/", (req, res) => {
  res.send(`<html>
  <head>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
        text-align: center;
        padding: 20px;
      }

      h1 {
        color: #333;
      }

      form {
        width: 300px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        box-sizing: border-box;
      }

      input[type="submit"] {
        background-color: #4caf50;
        color: #fff;
        cursor: pointer;
      }
    </style>
    <h1>Login</h1>
  </head>
  <body>
    <form method="POST" action="/auth">
      Name: <input type="text" name="text"><br>
      Password: <input type="password" name="password"><br>
      <input type="submit" value="Login"><br>
    </form>
  </body>
</html>
`);
});

router.post("/auth", (req, res) => {
  const { username, password } = req.body;

  const user = { username: username };

  const accessToken = generateAccesToken(user);

  res.redirect(`/users?token=${encodeURIComponent(accessToken)}`);
});

export const verifyToken = (req, res, next) => {
  const token = req.query.token;

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) {
      res.send("Access denied, token expired or incorrect");
    } else {
      req.user = user;
      next();
    }
  });
};

function generateAccesToken(user) {
  return jwt.sign(user, TOKEN_SECRET, {
    expiresIn: "24hr",
  });
}

export default router;
