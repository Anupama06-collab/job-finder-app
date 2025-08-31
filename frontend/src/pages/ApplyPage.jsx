import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ApplyJobForm from "../components/ApplyJobForm";

export default function ApplyPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/jobs/${jobId}`);
        setJob(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchJob();
  }, [jobId]);

  return (
    <div className="p-6">
      {job ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Apply for {job.title}</h1>
          <ApplyJobForm jobId={jobId} />
        </>
      ) : (
        <p>Loading job...</p>
      )}
    </div>
  );
}
