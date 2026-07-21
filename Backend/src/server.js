import express from "express"
import cors from "cors";
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from 'url';

import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js";
import authRoutes from "./routes/authRoutes.js";
import authMiddleware from "./middleware/authMiddleware.js";


dotenv.config();
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const Port = process.env.PORT || 5001;

// Middle Ware
if (process.env.NODE_ENV == "production") {
    app.use(
        cors({
             origin: [
                "http://localhost:5173", 
                "https://think-board-mern-livid.vercel.app" 
            ],
             credentials: true,
            })
        );
}
app.use(express.json());

app.get("/test", (req, res) => {
    res.json({ status: "OK" });
});
app.use("/api/notes/", notesRoutes);
app.use("/api/auth/", authRoutes);

connectDB().then(() => {
    app.listen(Port, () => {
        console.log("Server started on port:", Port);
    });
}).catch((error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
});

