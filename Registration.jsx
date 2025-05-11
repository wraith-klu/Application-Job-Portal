import { useState, useEffect } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    captchaInput: ''
  });

  const [captcha, setCaptcha] = useState({
    text: '',
    valid: false
  });

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptcha({ text: result, valid: false });
    setFormData(prev => ({ ...prev, captchaInput: '' }));
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    if (formData.captchaInput !== captcha.text) {
      alert("Invalid captcha!");
      generateCaptcha();
      return;
    }

    try {
      console.log('Attempting to connect to:', 'http://localhost:2025/api/register');
      console.log('Request payload:', formData);

      const response = await fetch('http://localhost:2025/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        data = await response.json();
      } else {
        data = { message: await response.text() };
      }

      if (response.ok) {
        alert("Registration successful!");
        setFormData({ name: '', username: '', email: '', password: '', confirmPassword: '', captchaInput: '' });
        window.location.hash = '#login';
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed: " + (error.message || "Unknown error"));
    }
  };

  return (
    <div className="auth-form">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />
        
        <div className="captcha-container" style={{ margin: '10px 0' }}>
          <div style={{ 
            backgroundColor: '#f0f0f0', 
            padding: '10px', 
            fontFamily: 'monospace',
            fontSize: '20px',
            letterSpacing: '3px',
            display: 'inline-block',
            marginRight: '10px',
            color: '#000000'  // Added black color
          }}>
            {captcha.text}
          </div>
          <button 
            type="button" 
            onClick={generateCaptcha}
            style={{ padding: '5px 10px' }}
          >
            ↻
          </button>
        </div>
        <input
          type="text"
          placeholder="Enter Captcha"
          value={formData.captchaInput}
          onChange={(e) => setFormData({ ...formData, captchaInput: e.target.value })}
          required
        />
        
        <button type="submit">Sign Up</button>
        <p className="auth-switch">
          Already have an account? <button type="button" onClick={() => window.location.hash = '#login'}>Login</button>
        </p>
      </form>
    </div>
  );
}

export default Registration;
