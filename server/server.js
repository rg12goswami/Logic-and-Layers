import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import inquiriesRouter from "./routes/inquiries.js";

const { PORT = 4000, MONGODB_URI, CLIENT_ORIGIN } = process.env;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI in .env — see .env.example.");
  process.exit(1);
}

const app = express();
app.use(cors({ origin: CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api/inquiries", inquiriesRouter);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
  })
  .catch((error) => {
    console.error("Could not connect to MongoDB:", error.message);
    process.exit(1);
  });
