const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const secRASP = require("./middleware/secRASP");
const authRoutes = require("./routes/auth");
const notesRoutes = require("./routes/notes");

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// API rate limiter
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  message: { message: "Too many requests, try again later" }
});
app.use(limiter);

// SecRASP runtime protection
app.use(secRASP);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", notesRoutes);

// Test route
app.get("/", (req, res) => res.json({ msg: "Secure Notes API is running" }));

module.exports = app;
