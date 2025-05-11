import { useState } from 'react';

function Login({ onSubmit }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation - in real app you'd check against a backend
    if (formData.password.length < 6) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000); // Hide after 3 seconds
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="auth-form">
      {showError && (
        <div className="error-popup">
          Invalid password! Password must be at least 6 characters.
        </div>
      )}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        <p className="auth-switch">
          Don't have an account? <button type="button" onClick={() => window.location.hash = '#signup'}>Sign Up</button>
        </p>
      </form>
    </div>
  );
}

export default Login;
