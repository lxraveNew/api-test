import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/dbname")
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("Hello, API is running!!!");
});

app.use("/users", userRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
