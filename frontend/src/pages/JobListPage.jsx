import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/jobs");
        setJobs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>
      <div className="grid gap-4">
        {jobs.map((job) => (
          <div key={job._id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p>{job.description}</p>
            <p className="text-gray-600">Location: {job.location}</p>
            <Link
              to={`/apply/${job._id}`}
              className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Apply
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
