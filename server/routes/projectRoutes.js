const express = require("express");

const router = express.Router();

const Project = require("../models/Project");

const authMiddleware = require("../middleware/authMiddleware");


// CREATE PROJECT
router.post("/", authMiddleware, async (req, res) => {

  try {

    const { name, description } = req.body;

    const project = new Project({
      name,
      description,
      createdBy: req.user.id
    });

    await project.save();

    res.status(201).json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});


// GET ALL PROJECTS
router.get("/", authMiddleware, async (req, res) => {

  try {

    const projects = await Project.find();

    res.json(projects);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

module.exports = router;