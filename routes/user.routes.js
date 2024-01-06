import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/controller.js";

import { validateToken } from "../middlewares/validateToken.js";

const router = Router();

router.get("/users", validateToken, getUsers);

router.post("/users", validateToken, createUser);
router.get("/users/:id", validateToken, getUserById);
router.put("/users/:id", validateToken, updateUser);
router.delete("/users/:id", validateToken, deleteUser);

export default router;
