const express = require("express");
const router = express.Router();
const State = require("../models/State");

router.post("/record", async (req, res) => {
  try {
    const { state, timestamp } = req.body;
    const newState = new State({ state, timestamp });
    await newState.save();
    res.status(201).json({ message: "State recorded" });
  } catch (error) {
    res.status(500).json({ error: "Failed to record state" });
  }
});

module.exports = router;
