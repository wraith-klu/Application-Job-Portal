import React, { useState } from 'react';
import './JobApplicationForm.css';

function JobApplicationForm({ job, onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    dob: '',
    fatherName: '',
    motherName: '',
    location: '',
    address: '',
    district: '',
    state: '',
    pincode: '',
    marksheet: null,
    resume: null,
    aadhar: null,
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append('fullName', formData.fullName);
    formPayload.append('gender', formData.gender);
    formPayload.append('dob', formData.dob);
    formPayload.append('fatherName', formData.fatherName);
    formPayload.append('motherName', formData.motherName);
    formPayload.append('location', formData.location);
    formPayload.append('address', formData.address);
    formPayload.append('district', formData.district);
    formPayload.append('state', formData.state);
    formPayload.append('pincode', formData.pincode);

    formPayload.append('jobRole', job.role);
    formPayload.append('company', job.company);
    formPayload.append('jobLocation', job.location);
    formPayload.append('jobType', job.type);

    formPayload.append('marksheet', formData.marksheet);
    formPayload.append('resume', formData.resume);
    formPayload.append('aadhar', formData.aadhar);

    // Debug log to check FormData
    for (let pair of formPayload.entries()) {
      console.log(pair[0] + ': ', pair[1]);
    }

    try {
      const response = await fetch('http://localhost:2026/api/applications/submit', {
        method: 'POST',
        body: formPayload,
        credentials: 'include'
      });

      const result = await response.json();
      console.log('Server response:', result);

      if (response.ok) {
        alert('Application Submitted Successfully!');
        onBack();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Full error details:', error);
      alert(`Error submitting application: ${error.message}`);
    }
  };

  return (
    <div className="application-container">
      <button onClick={onBack} className="back-button">
        <span>←</span> Back
      </button>
      
      <div className="job-summary">
        <h2>{job.role}</h2>
        <p><strong>{job.company}</strong> • {job.location} • {job.type}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-group">
          <label className="required-field">Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="required-field">Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                required
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
                required
              />
              Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="required-field">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            placeholder="Enter your father's name"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="required-field">Mother's Name</label>
          <input
            type="text"
            name="motherName"
            placeholder="Enter your mother's name"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="required-field">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="required-field">Preferred Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter your preferred location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="required-field">Complete Address</label>
          <textarea
            name="address"
            placeholder="Enter your complete address"
            value={formData.address}
            onChange={handleChange}
            required
            rows="3"
          />
        </div>

        <div className="form-group">
          <label className="required-field">District</label>
          <input
            type="text"
            name="district"
            placeholder="Enter your district"
            value={formData.district}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="required-field">State</label>
          <input
            type="text"
            name="state"
            placeholder="Enter your state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="required-field">PIN Code</label>
          <input
            type="text"
            name="pincode"
            placeholder="Enter your PIN code"
            value={formData.pincode}
            pattern="[0-9]{6}"
            maxLength="6"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="required-field">Marksheet (PDF/JPG)</label>
          <input
            type="file"
            name="marksheet"
            accept=".pdf,.jpg,.jpeg"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="required-field">Resume (PDF)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="required-field">Aadhar Card (PDF/JPG)</label>
          <input
            type="file"
            name="aadhar"
            accept=".pdf,.jpg,.jpeg"
            onChange={handleChange}
            required
          />
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <label>I confirm all the information and documents provided are correct</label>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={!formData.agree}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default JobApplicationForm;
