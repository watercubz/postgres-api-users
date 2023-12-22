import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("hi, use http://localhost:4000/users for view all users");
});

export default router;
