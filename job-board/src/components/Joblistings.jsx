import React, { useState } from "react";
import "../css/Joblistings.css"; 

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Full Stack Web Developer",
      company: "XYZ solutions",
      location: "Hyderabad, Telangana",
      salary: "6 LPA",
      jobType: ["Full-Time +1", "Day Shift +2"],
      description:
        "We are seeking a talented and motivated Full Stack Web Developer to join our dynamic team. In this role, you will be responsible for designing, developing, and maintaining web applications that deliver exceptional user experiences.",
      link: "www.companyname.com/job-details/FullStackWebDeveloper",
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      company: "Dmitri Sol Pvt Ltd",
      location: "Bangalore, Karnataka",
      salary: "20K to 60K",
      jobType: ["Full-Time +1", "Day Shift"],
      description:
        "We are looking for a talented AI/ML Engineer to join our team. You will design, develop, and implement machine learning models and AI solutions to solve complex business problems.",
      link: "www.companyname.com/job-details/AIML-Engineer",
    },
    {
        id: 3,
        title: "Data Scientist",
        company: "KLM Solutions",
        location: "Bangalore, Karnataka",
        salary: "Upto 4.5L/yr",
        jobType: ["Full-Time", "Day Shift"],
        description: "We are seeking a skilled Data Scientist to join our team. As a Data Scientist, you will leverage data-driven techniques to extract insights, solve complex problems, and support key business decisions. You will work with structured and unstructured data, build predictive models, and communicate findings effectively to both technical and non-technical stakeholders.",
        link: "www.companyname.com/job-details/DataScientist",
    },
    {
        id: 4,
        title: "DevOps Engineer",
        company: "Crownstack Solutions",
        location: "Banjara Hills, Hyderabad, Telangana",
        salary: "22K to 25K",
        jobType: ["Full-Time", "Day Shift +2"],
        description: "We are looking for a proactive and skilled DevOps Engineer to join our team. As a DevOps Engineer, you will play a critical role in building and maintaining the infrastructure and tools necessary for the continuous integration, deployment, and operation of software systems. You will bridge the gap between development and IT operations to ensure efficient and reliable delivery of applications.",
        link: "www.companyname.com/job-details/DevOpsEngineer",
    },
    {
        id: 5,
        title: "Software Developer",
        company: "Quickstart Sol Pvt Ltd",
        location: "Navi Mumbai, Maharashtra",
        salary: "5LPA",
        jobType: ["Full-Time", "Day Shift +1"],
        description: "We are seeking a detail-oriented and innovative Software Developer to join our dynamic team. As a Software Developer, you will be responsible for designing, coding, testing, and maintaining software applications that meet business needs. You will work collaboratively with cross-functional teams to deliver high-quality and scalable solutions.",
        link: "www.companyname.com/job-details/SoftwareEngineer",
    },
    {
        id: 6,
        title: "Database Administrator",
        company: "XYZ Solutions",
        location: "Hyderabad, Telangana",
        salary: "20K to 60K",
        jobType: ["Full-Time +1", "Day Shift"],
        description: "We are looking for a highly skilled Database Administrator (DBA) to manage and maintain our organization’s database systems. As a DBA, you will ensure the performance, availability, and security of databases, while supporting the development and implementation of database solutions.",
        link: "www.companyname.com/job-details/DatabaseAdministrator",
    },
    {
        id: 7,
        title: "Cybersecurity Engineer",
        company: "MNS Solutions",
        location: "Hyderabad, Telangana",
        salary: "50K to 1L",
        jobType: ["Full-Time", "Day Shift +1"],
        description: "We are seeking a skilled Cybersecurity Engineer to join our team and help protect our organization’s information systems and networks. As a Cybersecurity Engineer, you will be responsible for designing, implementing, and maintaining security protocols and tools to safeguard against cyber threats and vulnerabilities.",
        link: "www.companyname.com/job-details/CybersecurityEngineer",
    },
    {
        id: 8,
        title: "Blockchain Engineer",
        company: "Riztech Solutions",
        location: "Bangalore, Karnataka",
        salary: "20K to 50K",
        jobType: ["Full-Time", "Day Shift"],
        description: "We are looking for a talented Blockchain Engineer to join our innovative team. In this role, you will be responsible for designing, implementing, and optimizing blockchain-based applications and solutions. As a Blockchain Engineer, you will work on developing decentralized applications (dApps), smart contracts, and blockchain protocols that help transform business operations and drive the next wave of innovation.",
        link: "www.companyname.com/job-details/BlockchainEngineer",
    },
  ];

  const filterJobs = (job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase());

  const openModal = (job) => setModalContent(job);
  const closeModal = () => setModalContent(null);

  return (
    <div className="job-listings">
      <header>
        <h2>JOB LISTINGS</h2>
        <p style={{ color: "black", fontFamily: "fantasy" }}>
          <b>List of job openings with their essential details</b>
        </p>
        <div className="center-form">
          <input
            id="searchBar"
            className="form-control"
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-success my-2 my-sm-0" type="button">
            🔍
          </button>
        </div>
      </header>

      <div className="jumbotron-container">
        {jobs.filter(filterJobs).map((job) => (
          <div key={job.id} className="jumbotron">
            <h3>
              <b>{job.title}</b>
            </h3>
            <hr className="my-4" />
            <p style={{ textAlign: "left" }}>
              {job.company}
              <br />
              {job.location}
            </p>
            <div
              className="btn-group"
              style={{ textAlign: "left" }}
              role="group"
              aria-label="Basic example"
            >
              <button type="button" className="btn btn-dark">
                {job.salary}
              </button>
              {job.jobType.map((type, index) => (
                <button key={index} type="button" className="btn btn-dark">
                  {type}
                </button>
              ))}
            </div>
            <br />
            <br />
            <a className="btn btn-info btn-lg" href={job.link} role="button">
              Apply now
            </a>
            &nbsp;
            <button
              className="btn btn-info btn-lg"
              onClick={() => openModal(job)}
            >
              Click for more...
            </button>
          </div>
        ))}
      </div>

      {modalContent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-btn" onClick={closeModal}>
              &times;
            </button>
            <h3 style={{ fontWeight: "bold", color: "darkcyan" }}>
              {modalContent.title.toUpperCase()}
            </h3>
            <p>{modalContent.company}, {modalContent.location}</p>
            <p style={{ textAlign: "left" }}>
              <b>Salary:</b> {modalContent.salary}
            </p>
            <p style={{ textAlign: "left" }}>
              <b>Job Type:</b>{" "}
              {modalContent.jobType.map((type, index) => (
                <span key={index} className="btn btn-light">
                  {type}&nbsp;
                </span>
              ))}
            </p>
            <p style={{ textAlign: "left" }}>
              <b>Job Description:</b> {modalContent.description}
            </p>
            <p style={{ color: "darkcyan" }}>
              <b>For more details, please visit {modalContent.link}</b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListings;
