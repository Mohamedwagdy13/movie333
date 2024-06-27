import React, { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!username.trim()) errors.username = 'Username is required';
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\+@\+\.\+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('User signed up:', { username, email, password });
      // Clear form after successful submission
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input 
            type="text" 
            className={`form-control ${errors.username ? 'is-invalid' : ''}`} 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-outline-danger mt-3">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
