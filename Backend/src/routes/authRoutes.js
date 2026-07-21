import express from "express";
import { registerUser } from "../controllers/authControllers.js";
import { loginUser } from "../controllers/authControllers.js";
import protect  from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile",protect, loginUser);
export default router;