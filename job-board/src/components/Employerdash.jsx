import React, { useState } from 'react';
import '../css/Employerdash.css';

const Employerdash = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState({
    jobName: '',
    companyName: '',
    location: '',
    jobType: [],
    shift: [],
    jobDesc: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setJobDetails((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setJobDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (jobDetails.jobName && jobDetails.companyName) {
      setPostedJobs((prev) => [...prev, jobDetails]);
      setSuccessMessage('Job Posted Successfully!');
      setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
      setJobDetails({
        jobName: '',
        companyName: '',
        location: '',
        jobType: [],
        shift: [],
        jobDesc: '',
      });
    }
  };

  const handleDeleteJob = (index) => {
    const newJobs = postedJobs.filter((_, jobIndex) => jobIndex !== index);
    setPostedJobs(newJobs);
  };

  return (
    <div className="employer-dash">
      <header>
        <h1>Employer Dashboard</h1>
        <div className="employer-dashboard">
          <div className="jumbotron">
            <h2>POST A JOB</h2>
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <label>Job Name:</label>
                <input
                  type="text"
                  name="jobName"
                  value={jobDetails.jobName}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div>
                <label>Company Name:</label>
                <input
                  type="text"
                  name="companyName"
                  value={jobDetails.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div>
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={jobDetails.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div>
                <label>Job Type:&nbsp;</label>
                <input
                  type="checkbox"
                  value="Full-Time"
                  name="jobType"
                  onChange={handleChange}
                  checked={jobDetails.jobType.includes('Full-Time')}
                />{' '}
                Full-Time&nbsp;
                <input
                  type="checkbox"
                  value="Permanent"
                  name="jobType"
                  onChange={handleChange}
                  checked={jobDetails.jobType.includes('Permanent')}
                />{' '}
                Permanent
              </div>

              <br />
              <div>
                <label>Shift:&nbsp;</label>
                <input
                  type="checkbox"
                  value="Day-Shift"
                  name="shift"
                  onChange={handleChange}
                  checked={jobDetails.shift.includes('Day-Shift')}
                />{' '}
                Day-Shift&nbsp;
                <input
                  type="checkbox"
                  value="Rotational-Shift"
                  name="shift"
                  onChange={handleChange}
                  checked={jobDetails.shift.includes('Rotational-Shift')}
                />{' '}
                Rotational-Shift&nbsp;
                <input
                  type="checkbox"
                  value="Night-Shift"
                  name="shift"
                  onChange={handleChange}
                  checked={jobDetails.shift.includes('Night-Shift')}
                />{' '}
                Night-Shift
              </div>

              <br />
              <div>
                <label>Job Description:</label>
                <input
                  type="text"
                  name="jobDesc"
                  value={jobDetails.jobDesc}
                  onChange={handleChange}
                />
              </div>

              <br />
              <br />
              <div>
                <center>
                  <button type="submit" className="btn btn-info">
                    Post Job
                  </button>
                </center>
              </div>
            </form>
          </div>
        </div>
      </header>

      <div className="success-message" style={{ textAlign: 'center', color: 'green' }}>
        {successMessage}
      </div>

      <div className="posted-jobs">
        <h2>Posted Jobs</h2>
        {postedJobs.length > 0 ? (
          <ul>
            {postedJobs.map((job, index) => (
              <li key={index}>
                <strong>{job.jobName}</strong> at {job.companyName} ({job.location})
                <br />
                <em>Job Type:</em> {job.jobType.join(', ')}
                <br />
                <em>Shift:</em> {job.shift.join(', ')}
                <br />
                <em>Description:</em> {job.jobDesc}
                <br />
                <button
                  onClick={() => handleDeleteJob(index)}
                  style={{color: 'red' }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No jobs posted yet.</p>
        )}
      </div>
    </div>
  );
};

export default Employerdash;
