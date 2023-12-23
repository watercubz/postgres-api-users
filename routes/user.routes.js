import { Router } from "express";
import {
  getUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/controller.js";
import { verifyToken } from "./index.routes.js";

const router = Router();

router.get("/users", verifyToken, getUsers); // <--- get all users
router.get("/users/:id", getUserById); // <--- get user by id

router.post("/users", createUser); // <--- create user

router.put("/users/:id", updateUser); // <--- update user

router.delete("/users/:id", deleteUser); // <--- delete user from database

export default router;
