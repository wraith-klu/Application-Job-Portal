import React, { useState } from 'react';
import JobApplicationForm from './JobApplicationForm';
import './InternshipJobs.css';

function InternshipJobs({ onBack, onApplicationSubmit }) {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const internshipCategories = [
    {
      domain: "Technology",
      jobs: [
        {
          role: "Software Development Intern",
          company: "Google",
          location: "Bangalore",
          stipend: "₹60,000/month",
          skills: "React, Node.js, JavaScript",
          duration: "6 months",
          lastDate: "2024-02-28",
          type: "Remote"
        },
        {
          role: "Mobile App Development Intern",
          company: "Microsoft",
          location: "Hyderabad",
          stipend: "₹55,000/month",
          skills: "Flutter, Firebase",
          duration: "4 months",
          lastDate: "2024-03-15",
          type: "Hybrid"
        }
      ]
    },
    {
      domain: "Data Science",
      jobs: [
        {
          role: "Data Science Intern",
          company: "Amazon",
          location: "Pune",
          stipend: "₹50,000/month",
          skills: "Python, ML, SQL",
          duration: "6 months",
          lastDate: "2024-03-01",
          type: "On-site"
        }
      ]
    },
    {
      domain: "Design",
      jobs: [
        {
          role: "UI/UX Design Intern",
          company: "Adobe",
          location: "Noida",
          stipend: "₹45,000/month",
          skills: "Figma, Adobe XD",
          duration: "3 months",
          lastDate: "2024-02-25",
          type: "Remote"
        }
      ]
    }
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
  };

  const handleApplicationSubmit = (applicationData) => {
    if (onApplicationSubmit) {
      onApplicationSubmit({
        ...selectedJob,
        applicationDate: new Date().toISOString(),
        status: 'Applied',
        applicantDetails: applicationData
      });
    }
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setSelectedJob(null);
      onBack(); // Return to home after submission
    }, 3000);
  };

  if (selectedJob) {
    return (
      <JobApplicationForm
        job={selectedJob}
        onSubmit={handleApplicationSubmit}
        onBack={() => setSelectedJob(null)}
      />
    );
  }

  return (
    <div className="internship-container">
      <div className="internship-header">
        <button onClick={onBack} className="back-button">
          <span>←</span> Back to Home
        </button>
        <h1>Internship Opportunities</h1>
      </div>

      <div className="internship-categories">
        {internshipCategories.map((category, index) => (
          <div key={index} className="internship-category">
            <h2>{category.domain}</h2>
            <div className="internship-grid">
              {category.jobs.map((job, jobIndex) => (
                <div key={jobIndex} className="internship-card">
                  <div className="card-header">
                    <h3>{job.role}</h3>
                    <span className={`job-type ${job.type.toLowerCase()}`}>
                      {job.type}
                    </span>
                  </div>
                  <div className="company-info">
                    <span className="company-name">🏢 {job.company}</span>
                    <span className="location">📍 {job.location}</span>
                  </div>
                  <div className="job-details">
                    <p><span>💰</span> {job.stipend}</p>
                    <p><span>⏱️</span> {job.duration}</p>
                    <p><span>🛠️</span> {job.skills}</p>
                    <p><span>📅</span> Apply by: {job.lastDate}</p>
                  </div>
                  <button 
                    className="apply-button"
                    onClick={() => handleApplyClick(job)}
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showSuccess && (
        <div className="success-popup show">
          <span className="success-icon">✓</span>
          Application submitted successfully!
        </div>
      )}
    </div>
  );
}

export default InternshipJobs;
