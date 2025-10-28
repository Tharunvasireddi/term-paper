const express = require("express");
const Note = require("../models/Note");
const auth = require("../middleware/auth");

const router = express.Router();

// Protect all routes
router.use(auth);

// Create note
router.post("/", async (req, res) => {
  try {
    const note = await Note.create({ ...req.body, user: req.user.id });
    res.json(note);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// Get notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(notes);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// Update note
router.put("/:id", async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete note
router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Deleted" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
