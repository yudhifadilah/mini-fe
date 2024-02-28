import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToken } from './TokenContext'; // Menggunakan useToken dari TokenContext
import './styles.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setToken } = useToken(); // Menggunakan useToken dari TokenContext

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      
      // Mengatur token ke konteks menggunakan fungsi setToken yang disediakan oleh konteks
      setToken(response.data.token);

      navigate('/stepForm');
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="main">
      <div className="navbar">
        <img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21.svg" alt="logo" />
      <div className="body">
        <div className="wrapper">
          <img className="otpimg" src="https://www.svgrepo.com/show/303230/login.svg" alt="login" />
          <div className="contain">
            <h2>Login</h2>
            <form className="form" onSubmit={handleLogin}>
              <input
                className="formInput"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                className="formInput"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="formSubmit" type="submit">
                Submit
              </button>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
