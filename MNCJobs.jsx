import React from 'react';

function MNCJobs({ onBack }) {
  const mncJobs = [
    {
      company: "Google",
      title: "Software Engineer",
      location: "Bangalore, Hyderabad",
      experience: "2-5 years",
      salary: "25-45 LPA",
      link: "https://careers.google.com/"
    },
    {
      company: "Microsoft",
      title: "Full Stack Developer",
      location: "Hyderabad, Noida",
      experience: "3-6 years",
      salary: "20-40 LPA",
      link: "https://careers.microsoft.com/"
    },
    {
      company: "Amazon",
      title: "SDE II",
      location: "Bangalore, Chennai",
      experience: "2-4 years",
      salary: "22-38 LPA",
      link: "https://www.amazon.jobs/"
    },
    {
      company: "Meta",
      title: "Product Engineer",
      location: "Hyderabad",
      experience: "3-5 years",
      salary: "30-50 LPA",
      link: "https://www.metacareers.com/"
    }
  ];

  return (
    <div className="mnc-jobs-container">
      <button onClick={onBack} className="back-btn">
        ← Back to Home
      </button>
      <h2>MNC Job Opportunities</h2>
      <div className="mnc-jobs-grid">
        {mncJobs.map((job, index) => (
          <div key={index} className="mnc-job-card">
            <h3>{job.company}</h3>
            <h4>{job.title}</h4>
            <p className="location">📍 {job.location}</p>
            <p className="experience">👨‍💼 {job.experience}</p>
            <p className="salary">💰 {job.salary}</p>
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

export default MNCJobs;
