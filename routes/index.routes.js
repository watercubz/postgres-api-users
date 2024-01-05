import { Router } from "express";
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
    <form method="POST" action="">
      Name: <input type="text" name="text"  required><br>
      Password: <input type="password" name="password"  required><br>
      <input type="submit" value="Login"><br>
    </form>
  </body>
</html>
`);
});

export default router;
