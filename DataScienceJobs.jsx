import React from 'react';

function DataScienceJobs({ onBack }) {
  const dataScienceJobs = [
    {
      title: "Senior Data Scientist",
      company: "IBM",
      location: "Bangalore",
      skills: "Python, TensorFlow, SQL",
      salary: "18-25 LPA",
      link: "https://www.ibm.com/careers"
    },
    {
      title: "ML Engineer",
      company: "Amazon",
      location: "Hyderabad",
      skills: "Python, PyTorch, AWS",
      salary: "20-30 LPA",
      link: "https://www.amazon.jobs"
    },
    {
      title: "Data Science Lead",
      company: "Microsoft",
      location: "Bangalore",
      skills: "Python, R, Azure ML",
      salary: "25-35 LPA",
      link: "https://careers.microsoft.com"
    },
    {
      title: "AI Research Scientist",
      company: "Google",
      location: "Hyderabad",
      skills: "Python, Deep Learning, NLP",
      salary: "30-45 LPA",
      link: "https://careers.google.com"
    }
  ];

  return (
    <div className="data-science-container">
      <button onClick={onBack} className="back-btn">
        ← Back to Home
      </button>
      <h2>Data Science Opportunities</h2>
      <div className="data-science-grid">
        {dataScienceJobs.map((job, index) => (
          <div key={index} className="data-science-card">
            <h3>{job.title}</h3>
            <h4>{job.company}</h4>
            <p className="location">📍 {job.location}</p>
            <p className="skills">🛠️ {job.skills}</p>
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

export default DataScienceJobs;
