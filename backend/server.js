const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Sample route
app.get("/", (req, res) => {
  res.send("Job Finder API is running...");
});

const Job = require("./models/Job");

// GET all jobs
app.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// POST new job
app.post("/jobs", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
