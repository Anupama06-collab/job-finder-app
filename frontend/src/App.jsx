import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/jobs") // will fetch from backend later
      .then(res => setJobs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Job Finder</h1>
      {jobs.map(job => (
        <div key={job._id}>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
