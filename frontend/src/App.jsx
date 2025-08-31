import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplyPage from "./pages/ApplyPage";
import JobListPage from "./pages/JobListPage";


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
    
    <Router>
      <Routes>
         <Route path="/" element={<JobListPage />} />
        <Route path="/apply/:jobId" element={<ApplyPage />} />
      </Routes>
    </Router>
    </div>
  );
  
}

export default App;
