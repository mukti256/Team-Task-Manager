const express = require("express");

const router = express.Router();

const Task = require("../models/Task");

const authMiddleware = require("../middleware/authMiddleware");


// CREATE TASK
router.post("/", authMiddleware, async (req, res) => {

  try {

    const {
      title,
      description,
      assignedTo,
      project,
      dueDate
    } = req.body;

    const task = new Task({
      title,
      description,
      assignedTo,
      project,
      dueDate
    });

    await task.save();

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});


// GET ALL TASKS
router.get("/", authMiddleware, async (req, res) => {

  try {

    const tasks = await Task.find()
      .populate("assignedTo")
      .populate("project");

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});


// UPDATE TASK STATUS
router.put("/:id", authMiddleware, async (req, res) => {

  try {

    const { status } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

module.exports = router;