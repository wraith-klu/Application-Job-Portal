import React, { useState, useEffect } from 'react';
import GovJobs from './GovJobs';
import FresherJobs from './FresherJobs';
import MNCJobs from './MNCJobs';
import DataScienceJobs from './DataScienceJobs';
import InternshipJobs from './InternshipJobs';
import GraphicsDesignJobs from './GraphicsDesignJobs';
import './UserHome.css';

function UserHome({ currentUser }) {
  const [showGovJobs, setShowGovJobs] = useState(false);
  const [showFresherJobs, setShowFresherJobs] = useState(false);
  const [showMNCJobs, setShowMNCJobs] = useState(false);
  const [showDataScience, setShowDataScience] = useState(false);
  const [showInternships, setShowInternships] = useState(false);
  const [showGraphicsDesign, setShowGraphicsDesign] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [showApplications, setShowApplications] = useState(false);

  const categories = [
    {
      title: "Remote",
      icon: "🏠",
      description: "Work from anywhere opportunities"
    },
    {
      title: "Sales",
      icon: "💼",
      description: "Sales and business development roles"
    },
    {
      title: "Supply Chain",
      icon: "📦",
      description: "Supply chain and logistics roles"
    },
    {
      title: "Startup",
      icon: "🚀",
      description: "Exciting startup positions"
    },
    {
      title: "Analytics",
      icon: "🔍",
      description: "Business analytics roles"
    },
    {
      title: "Marketing",
      icon: "📈",
      description: "Marketing and growth positions"
    },
    {
      title: "HR",
      icon: "👥",
      description: "Human resources opportunities"
    },
    {
      title: "Graphic Designer",
      icon: "🎨",
      description: "Create visual content and branding"
    },
  ];

  const steps = [
    {
      title: "Find & Save",
      description: "Discover and bookmark relevant job opportunities",
      icon: "🔍"
    },
    {
      title: "Organize",
      description: "Track and manage your job applications",
      icon: "📂"
    },
    {
      title: "Tailor & Apply",
      description: "Customize your resume and apply with confidence",
      icon: "✍️"
    },
    {
      title: "Monitor & Follow Up",
      description: "Track progress and follow up on applications",
      icon: "📈"
    }
  ];

  const handleGovJobsClick = () => {
    setShowGovJobs(true);
  };

  const handleFresherJobsClick = () => {
    setShowFresherJobs(true);
  };

  const handleMNCJobsClick = () => {
    setShowMNCJobs(true);
  };

  const handleDataScienceClick = () => {
    setShowDataScience(true);
  };

  const handleInternshipsClick = () => {
    setShowInternships(true);
  };

  const handleGraphicsDesignClick = () => {
    setShowGraphicsDesign(true);
  };

  const handleApplicationSubmit = (applicationData) => {
    setAppliedJobs(prev => [...prev, applicationData]);
    localStorage.setItem('appliedJobs', JSON.stringify([...appliedJobs, applicationData]));
  };

  useEffect(() => {
    const savedApplications = localStorage.getItem('appliedJobs');
    if (savedApplications) {
      setAppliedJobs(JSON.parse(savedApplications));
    }
  }, []);

  if (showInternships) {
    return (
      <InternshipJobs
        onBack={() => setShowInternships(false)}
        onApplicationSubmit={handleApplicationSubmit}
      />
    );
  }

  if (showApplications) {
    return (
      <div className="applications-page">
        <div className="applications-header">
          <button onClick={() => setShowApplications(false)} className="back-button">
            <span>←</span> Back
          </button>
          <h1>My Applications</h1>
        </div>

        {appliedJobs.length === 0 ? (
          <div className="no-applications">
            <img src="/empty-applications.png" alt="No applications" />
            <p>You haven't submitted any applications yet.</p>
          </div>
        ) : (
          <>
            <div className="applications-summary">
              <div className="summary-card">
                <h3>Total Applications</h3>
                <p>{appliedJobs.length}</p>
              </div>
              <div className="summary-card">
                <h3>Under Review</h3>
                <p>{appliedJobs.filter(job => job.status === 'Applied').length}</p>
              </div>
              <div className="summary-card">
                <h3>Interviews</h3>
                <p>{appliedJobs.filter(job => job.status === 'Interview').length}</p>
              </div>
            </div>

            <div className="applications-grid">
              {appliedJobs.map((job, index) => (
                <div key={index} className="application-card">
                  <div className="application-header">
                    <span className={`status-badge ${job.status.toLowerCase()}`}>
                      {job.status}
                    </span>
                    <p className="application-date">
                      Applied on {new Date(job.applicationDate).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="application-body">
                    <h3>{job.role}</h3>
                    <div className="company-info">
                      <span>🏢 {job.company}</span>
                      <span>📍 {job.location}</span>
                    </div>
                    <div className="job-meta">
                      <span>💰 {job.stipend}</span>
                      <span>⏱️ {job.duration}</span>
                    </div>
                  </div>

                  <div className="application-footer">
                    <button className="view-details-btn">View Details</button>
                    <button className="withdraw-btn">Withdraw</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  if (showGovJobs) {
    return <GovJobs onBack={() => setShowGovJobs(false)} />;
  }

  if (showFresherJobs) {
    return <FresherJobs onBack={() => setShowFresherJobs(false)} />;
  }

  if (showMNCJobs) {
    return <MNCJobs onBack={() => setShowMNCJobs(false)} />;
  }

  if (showDataScience) {
    return <DataScienceJobs onBack={() => setShowDataScience(false)} />;
  }

  if (showGraphicsDesign) {
    return <GraphicsDesignJobs onBack={() => setShowGraphicsDesign(false)} />;
  }

  return (
    <div className="user-home">
      <header className="user-header">
        <div className="header-buttons">
          <button className="header-btn top-spaced">My Profile</button>
          <button className="header-btn top-spaced" onClick={() => setShowApplications(true)}>My Applications</button>
          <button className="header-btn top-spaced">Saved Jobs</button>
          <button className="header-btn top-spaced">Resume Builder</button>
          <button className="header-btn notification top-spaced">
            Notifications
            <span className="notification-badge">5</span>
          </button>
        </div>
      </header>
      <div className="user-content">
        <h1 className="welcome-heading">Welcome back, {currentUser}!</h1>
        <div className="quick-stats">
          <div className="stat-card">
            <h3>Applications</h3>
            <p>12</p>
          </div>
          <div className="stat-card">
            <h3>Interviews</h3>
            <p>3</p>
          </div>
          <div className="stat-card">
            <h3>Saved Jobs</h3>
            <p>25</p>
          </div>
        </div>
        <div className="job-categories">
          <h2>Explore Jobs</h2>
          <div className="categories-grid">
            <div className="category-card gov-jobs" onClick={handleGovJobsClick}>
              <span className="category-icon">🏛️</span>
              <h3>Government Jobs</h3>
              <p>Explore government sector opportunities</p>
            </div>
            <div 
              className="category-card fresher-jobs"
              onClick={handleFresherJobsClick}
            >
              <span className="category-icon">🎓</span>
              <h3>Fresher Jobs</h3>
              <p>Perfect opportunities for fresh graduates</p>
            </div>
            <div 
              className="category-card mnc-jobs"
              onClick={handleMNCJobsClick}
            >
              <span className="category-icon">🏢</span>
              <h3>MNC Jobs</h3>
              <p>Opportunities at top tech giants</p>
            </div>
            <div 
              className="category-card data-science"
              onClick={handleDataScienceClick}
            >
              <span className="category-icon">📊</span>
              <h3>Data Science</h3>
              <p>ML, AI & Data Science opportunities</p>
            </div>
            <div 
              className="category-card internship"
              onClick={handleInternshipsClick}
            >
              <span className="category-icon">📜</span>
              <h3>Internship</h3>
              <p>Student internship opportunities</p>
            </div>
            <div 
              className="category-card graphics-design"
              onClick={handleGraphicsDesignClick}
            >
              <span className="category-icon">🎨</span>
              <h3>Graphic Design</h3>
              <p>Create visual content and branding</p>
            </div>
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="job-search-steps">
          <h2>Streamline Your Job Search</h2>
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <span className="step-icon">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;
