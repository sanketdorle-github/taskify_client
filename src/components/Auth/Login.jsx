// src/components/Auth/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../api'; // Use the Axios instance

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/users/login', { email, password }); // Use API instance
    //   console.log);
      
    //   localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.data)); // Save user info
      navigate('/dashboard');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex">
      {/* Left Section: Image or Icon */}
      <div className="w-1/2 bg-blue-100 flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1744381503~exp=1744385103~hmac=9890e90e6a2a9f5014b01a6407f8a7f6184f87edce7a5c4ccdc22d26bda66aee&w=826" // Use your sign-up image here
          alt="Sign-up Illustration"
          className="max-w-s"
        />
      </div>

      {/* Right Section: Form */}
      <div className="w-1/2 p-8">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
  Register
</Link>
        </div>
      </div>

      {/* Separator */}
      <div className="w-1px bg-gray-200"></div>
    </div>
  </div>
  );
};

export default Login;
