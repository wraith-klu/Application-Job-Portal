import React from 'react';

function GovJobs({ onBack }) {
  const govJobs = [
    {
      title: "IAS Officer",
      department: "UPSC",
      lastDate: "2024-03-15",
      salary: "Level 10-14 Pay Matrix",
      location: "All India"
    },
    {
      title: "Bank PO",
      department: "IBPS",
      lastDate: "2024-02-28",
      salary: "Varies by Bank",
      location: "All India"
    },
    {
      title: "SSC CGL",
      department: "Staff Selection Commission",
      lastDate: "2024-04-10",
      salary: "Level 4-8 Pay Matrix",
      location: "All India"
    },
    {
      title: "Railway Recruitment",
      department: "Indian Railways",
      lastDate: "2024-03-30",
      salary: "Varies by Position",
      location: "All India"
    },
    {
      title: "Defense Services",
      department: "Indian Army",
      lastDate: "2024-05-20",
      salary: "As per Defense Pay Matrix",
      location: "All India"
    }
  ];

  return (
    <div className="gov-jobs-container">
      <div className="header-with-back">
        <button onClick={onBack} className="back-button">
          ← Back to Home
        </button>
        <h2>Government Job Opportunities</h2>
      </div>
      <div className="gov-jobs-grid">
        {govJobs.map((job, index) => (
          <div key={index} className="gov-job-card">
            <h3>{job.title}</h3>
            <p className="department">{job.department}</p>
            <p className="last-date">Last Date: {job.lastDate}</p>
            <p className="salary">Salary: {job.salary}</p>
            <p className="location">Location: {job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GovJobs;
