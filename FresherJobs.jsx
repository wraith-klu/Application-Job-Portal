import React from 'react';

function FresherJobs({ onBack }) {
  const fresherJobs = [
    {
      title: "Software Developer Trainee",
      company: "TCS",
      location: "Multiple Locations",
      salary: "3.5-4.5 LPA",
      link: "https://www.tcs.com/careers"
    },
    {
      title: "Associate Software Engineer",
      company: "Infosys",
      location: "Bangalore, Pune",
      salary: "3.6-4.2 LPA",
      link: "https://www.infosys.com/careers/"
    },
    {
      title: "Graduate Engineer Trainee",
      company: "Wipro",
      location: "Pan India",
      salary: "3.5-4.0 LPA",
      link: "https://careers.wipro.com/"
    },
    {
      title: "Junior Data Analyst",
      company: "Cognizant",
      location: "Multiple Locations",
      salary: "4.0-4.5 LPA",
      link: "https://careers.cognizant.com/"
    }
  ];

  return (
    <div className="fresher-jobs-container">
      <button onClick={onBack} className="back-btn">
        ← Back to Home
      </button>
      <h2>Fresher Job Opportunities</h2>
      <div className="fresher-jobs-grid">
        {fresherJobs.map((job, index) => (
          <div key={index} className="fresher-job-card">
            <h3>{job.title}</h3>
            <p className="company">{job.company}</p>
            <p className="location">{job.location}</p>
            <p className="salary">{job.salary}</p>
            <a 
              href={job.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="apply-btn"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FresherJobs;
