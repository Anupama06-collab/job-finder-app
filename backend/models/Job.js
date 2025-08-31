import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: String,
  company: String,
  salary: String,
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
