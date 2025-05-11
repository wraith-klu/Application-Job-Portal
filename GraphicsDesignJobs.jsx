import React from 'react';

function GraphicsDesignJobs({ onBack }) {
  const designCategories = [
    {
      title: "UI/UX Design",
      jobs: [
        {
          role: "Senior UI Designer",
          company: "Adobe",
          location: "Bangalore",
          salary: "₹20-25 LPA",
          skills: "Figma, Adobe XD",
          type: "Full-time",
          applyLink: "https://adobe.com/careers"
        },
        {
          role: "UX Designer",
          company: "Google",
          location: "Hyderabad",
          salary: "₹18-22 LPA",
          skills: "Figma, Sketch",
          type: "Remote",
          applyLink: "https://careers.google.com"
        }
      ]
    },
    {
      title: "Graphic Design",
      jobs: [
        {
          role: "Graphic Designer",
          company: "Microsoft",
          location: "Pune",
          salary: "₹12-15 LPA",
          skills: "Photoshop, Illustrator",
          type: "Hybrid",
          applyLink: "https://careers.microsoft.com"
        },
        {
          role: "Brand Designer",
          company: "Amazon",
          location: "Bangalore",
          salary: "₹15-18 LPA",
          skills: "Illustrator, InDesign",
          type: "On-site",
          applyLink: "https://amazon.jobs"
        }
      ]
    }
  ];

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <button onClick={onBack} className="back-button">
          ← Back to Home
        </button>
        <h1>Graphics Design Opportunities</h1>
      </div>

      {designCategories.map((category, index) => (
        <div key={index} className="jobs-category">
          <h2>{category.title}</h2>
          <div className="jobs-grid">
            {category.jobs.map((job, jobIndex) => (
              <div key={jobIndex} className="job-card">
                <div className="job-card-header">
                  <h3>{job.role}</h3>
                  <span className={`job-type ${job.type.toLowerCase()}`}>
                    {job.type}
                  </span>
                </div>
                <div className="company-info">
                  <p><span>🏢</span> {job.company}</p>
                  <p><span>📍</span> {job.location}</p>
                </div>
                <div className="job-details">
                  <p><span>💰</span> {job.salary}</p>
                  <p><span>🛠️</span> {job.skills}</p>
                </div>
                <a 
                  href={job.applyLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="apply-button"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GraphicsDesignJobs;
