import { useState } from "react";
import axios from "axios";

export default function ApplyJobForm({ jobId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resumeLink: "",
    coverLetter: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/applications", {
        jobId, // ✅ comes from props
        ...formData,
      });
      setMessage("✅ Application submitted successfully!");
      setFormData({ name: "", email: "", resumeLink: "", coverLetter: "" });
    } catch (err) {
      setMessage("❌ Error submitting application");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Apply for Job</h2>
      {message && <p className="mb-3">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="url"
          name="resumeLink"
          placeholder="Resume Link"
          value={formData.resumeLink}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="coverLetter"
          placeholder="Cover Letter"
          value={formData.coverLetter}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
