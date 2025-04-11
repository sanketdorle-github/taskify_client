
// src/components/Auth/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API from '@/api';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post('/users/register', { email, password });
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden flex">
        {/* Left Section: Image or Icon */}
        <div className="w-1/2 bg-green-100 flex items-center justify-center">
          <img
            src="https://img.freepik.com/free-photo/sign-sign-up-application-apply-enroll-enter-concept_53876-101282.jpg?t=st=1744381938~exp=1744385538~hmac=bf69cb811a79dce82cd5547dd691060b720f3bcbcdc88305be021bcd6504877e&w=1480" // Use your sign-up image here
            alt="Register Illustration"
            className="max-w-s"
          />
        </div>

        {/* Right Section: Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-center text-green-600 mb-6">Create an Account</h2>

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-2">
              <input
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <input
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              type="submit"
            >
              Register
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
  login
</Link>
          </div>
        </div>

        {/* Separator */}
        <div className="w-1px bg-gray-200"></div>
      </div>
    </div>
  );
};
export default Register;