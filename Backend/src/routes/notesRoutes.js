import express from "express"
import {getAllNotes, createNotes, updateNotes, deleteNotes, getNote} from "../controllers/notesController.js"
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAllNotes);
router.get("/:id", protect, getNote);
router.post("/create/", protect,createNotes);
router.put("/:id", protect, updateNotes);
router.delete("/:id", protect, deleteNotes);

export default router;