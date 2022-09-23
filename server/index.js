import express from "express";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";
import router from "./routes/post.routes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

connectDB();

app.listen(PORT);

console.log("Server in port", PORT);
