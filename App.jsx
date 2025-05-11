import { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import UserHome from './components/UserHome';
import Contact from './components/Contact';

function Navbar({ currentUser, onLogout, onLoginClick, onSignupClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <svg className="brand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
          <path d="M12 7v7"></path>
          <path d="M8 10h8"></path>
        </svg>
        Job Portal
      </div>
      <div className="nav-links">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Jobs</a>
        <a 
          href="https://www.mycvcreator.com/home?gad_source=1&gbraid=0AAAAAo7P0TGQKAQR1e9kbMlgYiRL6iMdf&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPRRoL1OiWApcNvXjXbmBMhiSPnTOzgcgaEz1jI2yUBDj9x214b8tPRoC8qoQAvD_BwE" 
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume Builder
        </a>
        <a href="#" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
      <div className="navbar-menu">
        {currentUser ? (
          <>
            <div className="user-profile">
              <div className="profile-pic">
                <input type="file" id="profile-upload" accept="image/*" className="profile-upload" />
                <label htmlFor="profile-upload" className="profile-upload-label">
                  {/* Default profile icon when no image */}
                  <span className="default-profile">👤</span>
                </label>
              </div>
            </div>
            <button className="nav-btn logout-btn" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button className="nav-btn login-btn" onClick={onLoginClick}>Login</button>
            <button className="nav-btn signup-btn" onClick={onSignupClick}>Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
}

function AuthForm({ type, onSubmit }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '', // Add email for registration
    confirmPassword: '' // Add password confirmation for registration
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'signup' && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="auth-form">
      <h2>{type === 'login' ? 'Login' : 'Create Account'}</h2>
      <form onSubmit={handleSubmit}>
        {type === 'signup' && (
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        )}
        <input
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        {type === 'signup' && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            required
          />
        )}
        <button type="submit">
          {type === 'login' ? 'Login' : 'Sign Up'}
        </button>
        {type === 'login' ? (
          <p className="auth-switch">
            Don't have an account? <button type="button" onClick={() => window.location.hash = '#signup'}>Sign Up</button>
          </p>
        ) : (
          <p className="auth-switch">
            Already have an account? <button type="button" onClick={() => window.location.hash = '#login'}>Login</button>
          </p>
        )}
      </form>
    </div>
  );
}

function JobPortal() {
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState('');

  const addJob = () => {
    if (newJob.trim()) {
      setJobs([...jobs, { title: newJob, completed: false }]);
      setNewJob('');
    }
  };

  const toggleJobCompletion = (index) => {
    const updatedJobs = jobs.map((job, i) =>
      i === index ? { ...job, completed: !job.completed } : job
    );
    setJobs(updatedJobs);
  };

  const deleteJob = (index) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
  };

  return (
    <div className="job-portal">
      <div className="job-input">
        <input
          type="text"
          placeholder="Enter job title..."
          value={newJob}
          onChange={(e) => setNewJob(e.target.value)}
        />
        <button onClick={addJob}>Add Job</button>
      </div>
      <ul className="job-list">
        {jobs.map((job, index) => (
          <li key={index} className={job.completed ? 'completed' : ''}>
            <span onClick={() => toggleJobCompletion(index)}>{job.title}</span>
            <button className="delete-btn" onClick={() => deleteJob(index)}>✖</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const gradients = [
    {
      current: "#FF3CAC",
      next: "#784BA0",
    },
    {
      current: "#784BA0",
      next: "#2B86C5",
    },
    {
      current: "#2B86C5",
      next: "#00C9A7",
    },
    {
      current: "#00C9A7",
      next: "#92FE9D",
    }
  ];

  const slides = [
    {
      title: "Find Your Dream Job",
      description: "Browse thousands of job opportunities"
    },
    {
      title: "Track Applications",
      description: "Keep track of your job applications in one place"
    },
    {
      title: "Stay Organized",
      description: "Never miss an application deadline"
    },
    {
      title: "Career Growth",
      description: "Take the next step in your career journey"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Changed to 5 seconds to match background transition
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            background: `linear-gradient(135deg, ${gradients[index].current}, ${gradients[index].next})`
          }}
        >
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>
      ))}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

function CompanyBanner() {
  const companies = [
    {
      name: 'Google',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    },
    {
      name: 'Microsoft',
      logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31'
    },
    {
      name: 'IBM',
      logo: 'https://www.ibm.com/design/language/9283194410b34480ab9d8bf6f197962c/02_8-bar-reverse.svg'
    },
    {
      name: 'Uber',
      logo: 'https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'
    },
    {
      name: 'Spotify',
      logo: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png'
    },
    {
      name: 'Twitter',
      logo: 'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png'
    },
    {
      name: 'Salesforce',
      logo: 'https://www.salesforce.com/content/dam/sfdc-docs/www/resources/campaign-assets/live-long-and-propser/images/logo.png'
    }
  ];

  return (
    <div className="company-banner">
      <div className="banner-text">
        <p>
          Join <span className="highlight">250,000+</span> job seekers who've used{' '}
          <span className="platform-name">JobPortal</span> to manage their job search 
          and land jobs at <span className="highlight">1000s</span> of companies
        </p>
      </div>
      <div className="company-logos">
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.logo}
            alt={company.name}
            className="company-logo"
            title={company.name}
          />
        ))}
      </div>
    </div>
  );
}

function JobCategories() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCategoryClick = () => {
    setShowPopup(true);
  };

  const categories = [
    {
      title: "Software Engineer",
      icon: "💻",
      description: "Build and maintain software applications"
    },
    {
      title: "Data Analyst",
      icon: "📊",
      description: "Analyze and interpret complex data sets"
    },
    {
      title: "Customer Success",
      icon: "🤝",
      description: "Drive customer satisfaction and retention"
    },
    {
      title: "Graphic Designer",
      icon: "🎨",
      description: "Create visual content and branding"
    },
    {
      title: "Project Manager",
      icon: "📋",
      description: "Lead and coordinate project teams"
    },
    {
      title: "Product Manager",
      icon: "🎯",
      description: "Define and drive product strategy"
    }
  ];

  return (
    <div className="job-categories">
      <h2>Explore Job Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="category-card" 
            onClick={handleCategoryClick}
            style={{ cursor: 'pointer' }}
          >
            <span className="category-icon">{category.icon}</span>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <h3 className="popup-message">Please! Register First.</h3>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

function JobSearchSteps({ onSignupClick }) {
  const [showPopup, setShowPopup] = useState(false);
  
  const handleStepClick = () => {
    setShowPopup(true);
  };

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

  return (
    <div className="job-search-steps">
      <h2>Streamline Your Job Search</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="step-card"
            onClick={handleStepClick}
            style={{ cursor: 'pointer' }}
          >
            <span className="step-icon">{step.icon}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <h3 className="popup-message">Please! Register First.</h3>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
      <button className="signup-free-btn" onClick={onSignupClick}>
        Sign Up - It's 100% Free!
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h4>Tools</h4>
          <a 
            href="https://www.mycvcreator.com/home?gad_source=1&gbraid=0AAAAAo7P0TGQKAQR1e9kbMlgYiRL6iMdf&gclid=CjwKCAjw5PK_BhBBEiwAL7GTPRRoL1OiWApcNvXjXbmBMhiSPnTOzgcgaEz1jI2yUBDj9x214b8tPRoC8qoQAvD_BwE" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            AI Resume Builder
          </a>
          <a href="#">Cover Letter Generator</a>
          <a href="#">Job Application Tracker</a>
        </div>
        <div className="footer-section">
          <h4>Career Hub</h4>
          <a href="#">Career Paths</a>
          <a href="#">Resume Examples</a>
          <a href="#">Interview Tips</a>
        </div>
        <div className="footer-section">
          <h4>Guides</h4>
          <a href="#">Job Search Guide</a>
          <a href="#">Remote Work Guide</a>
          <a href="#">Salary Guide</a>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Open Positions</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authType, setAuthType] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'contact') {
        setCurrentPage('contact');
      } else if (hash === 'login' || hash === 'signup') {
        setAuthType(hash);
        setCurrentPage('home');
      } else {
        setAuthType(null);
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial hash
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleAuth = (formData) => {
    setCurrentUser(formData.username);
    window.location.hash = ''; // Clear hash after successful auth
  };

  const handleLoginClick = () => {
    window.location.hash = '#login';
  };

  const handleSignupClick = () => {
    window.location.hash = '#signup';
  };

  return (
    <div className="app">
      <Navbar 
        currentUser={currentUser} 
        onLogout={() => {
          setCurrentUser(null);
          window.location.hash = '';
        }}
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      <main className="main-content">
        {currentPage === 'contact' ? (
          <Contact />
        ) : authType ? (
          authType === 'login' ? (
            <Login onSubmit={handleAuth} />
          ) : (
            <Registration onSubmit={handleAuth} />
          )
        ) : currentUser ? (
          <UserHome currentUser={currentUser} />
        ) : (
          <>
            <div className="welcome-screen">
              <Slider />
              <CompanyBanner />
            </div>
            <JobCategories />
            <JobSearchSteps onSignupClick={handleSignupClick} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
