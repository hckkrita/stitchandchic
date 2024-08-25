import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpComponent = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!userData.name) errors.name = 'Name is required';
    if (!userData.username) errors.username = 'Username is required';
    if (!userData.email) errors.email = 'Email is required';
    if (!userData.password) errors.password = 'Password is required';
    if (!userData.confirmPassword) errors.confirmPassword = 'Confirm Password is required';
    if (userData.password !== userData.confirmPassword) errors.confirmPassword = 'Passwords must match';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5000/api/auth/register', {
          name: userData.name,
          username: userData.username,
          email: userData.email,
          password: userData.password,
        });
        toast.success('Registration successful');

        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <div className="bg-[#FFE7E3] p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-serif">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded mt-1 font-serif"
              placeholder="Enter your name"
              value={userData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-serif">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border rounded mt-1 font-serif"
              placeholder="Enter your username"
              value={userData.username}
              onChange={handleChange}
            />
            {errors.username && <div className="text-red-500 text-sm">{errors.username}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-serif">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded mt-1 font-serif"
              placeholder="Enter your email"
              value={userData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
          </div>

          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700 font-serif">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded mt-1 font-serif"
              placeholder="Enter your password"
              value={userData.password}
              onChange={handleChange}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </div>
            {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
          </div>

          <div className="mb-4 relative">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-serif">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-4 py-2 border rounded mt-1 font-serif"
              placeholder="Confirm your password"
              value={userData.confirmPassword}
              onChange={handleChange}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </div>
            {errors.confirmPassword && <div className="text-red-500 text-sm">{errors.confirmPassword}</div>}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#FFB6B3] py-2 px-4 rounded hover:bg-gray-200 transition duration-300 font-serif"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600 font-serif">Or sign up with</div>

        <div className="flex justify-center mt-4 gap-4">
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 flex items-center transition duration-300 font-serif">
            Google
          </button>
          <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 flex items-center transition duration-300 font-serif">
            Facebook
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 font-serif">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
