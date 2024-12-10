import React, { useState } from 'react';
import '../css/Jobseekerdash.css';

const Jobseekerdash = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [jobApplication, setJobApplication] = useState({
    resume: null,
    name: '',
    email: '',
    phone: '',
    position: '',
    shift: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setJobApplication((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (jobApplication.name && jobApplication.email && jobApplication.position) {
      setAppliedJobs((prev) => [...prev, jobApplication]);
      setSuccessMessage('Job Applied Successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);

      setJobApplication({
        resume: null,
        name: '',
        email: '',
        phone: '',
        position: '',
        shift: '',
      });
    }
  };

  const handleDeleteApplication = (index) => {
    const newApplications = appliedJobs.filter((_, appIndex) => appIndex !== index);
    setAppliedJobs(newApplications);
  };

  return (
    <div className='jobseeker-dash'>
      <header>
        <h1>Jobseeker Dashboard</h1>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <div className="employer-dashboard">
          <div className="jumbotron">
            <h2>JOB APPLICATION</h2>
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <label>Upload Your Resume:</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={jobApplication.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div>
                <label>EmailID:</label>
                <input
                  type="text"
                  name="email"
                  value={jobApplication.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div>
                <label>Phone Number:</label>
                <input
                  type="text"
                  name="phone"
                  value={jobApplication.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div>
                <label>Position Applying For:&nbsp;</label>
                <input
                  type="text"
                  name="position"
                  value={jobApplication.position}
                  onChange={handleChange}
                  required
                />
              </div>
              <br />
              <div>
                <label>Shift:&nbsp;</label>
                <label>
                  <input
                    type="radio"
                    name="shift"
                    value="Day-Shift"
                    checked={jobApplication.shift === 'Day-Shift'}
                    onChange={handleChange}
                  />{' '}
                  Day-Shift
                </label>
                &nbsp;
                <label>
                  <input
                    type="radio"
                    name="shift"
                    value="Rotational-Shift"
                    checked={jobApplication.shift === 'Rotational-Shift'}
                    onChange={handleChange}
                  />{' '}
                  Rotational-Shift
                </label>
                &nbsp;
                <label>
                  <input
                    type="radio"
                    name="shift"
                    value="Night-Shift"
                    checked={jobApplication.shift === 'Night-Shift'}
                    onChange={handleChange}
                  />{' '}
                  Night-Shift
                </label>
              </div>
              <br />
              <div>
                <center>
                  <button
                    type="submit"
                    className="btn btn-info"
                  >
                    Apply now
                  </button>
                </center>
              </div>
            </form>
          </div>
        </div>

        <div className='Applied-jobs'>
        <h2>Applied Jobs</h2>
        <ul>
          {appliedJobs.map((job, index) => (
            <li key={index}>
              <strong>Position:</strong> {job.position} <br />
              <strong>Name:</strong> {job.name}, <strong>Email:</strong> {job.email} <br />
              <strong>Shift:</strong> {job.shift} <br />
              <button onClick={() => handleDeleteApplication(index)}>Remove Application</button>
            </li>
          ))}
        </ul>
        </div>
      </header>
    </div>
  );
};

export default Jobseekerdash;