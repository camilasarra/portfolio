
const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Error fetching projects" });
  }
});

// POST a new project
router.post("/", async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json({ error: "Error creating project" });
  }
});


// GET a specific project by ID
router.get("/:id", async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }
        res.json(project);
    } catch (err) {
        res.status(500).json({ error: "Error fetching project" });
    }
});

// PUT to update a project by ID
router.put("/:id", async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ error: "Project not found" });
        }
        res.json(updatedProject);
    } catch (err) {
        res.status(500).json({ error: "Error updating project" });
    }
});

// DELETE a project by ID
router.delete("/:id", async (req, res) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(req.params.id);
        if (!deletedProject) {
            return res.status(404).json({ error: "Project not found" });
        }
        res.json({ message: "Project deleted" });
    } catch (err) {
        res.status(500).json({ error: "Error deleting project" });
    }
});

module.exports = router;