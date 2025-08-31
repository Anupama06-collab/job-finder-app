import express from "express";
import Application from "../models/Application.js";

const router = express.Router();

// POST → Apply for a job
router.post("/", async (req, res) => {
  try {
    const { jobId, name, email, resumeLink, coverLetter } = req.body;

    const newApp = new Application({
      jobId,
      name,
      email,
      resumeLink,
      coverLetter,
    });

    await newApp.save();
    res.status(201).json(newApp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET → Fetch all applications
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find().populate("jobId");
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
