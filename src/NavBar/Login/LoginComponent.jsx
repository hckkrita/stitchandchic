import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const LoginComponent = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const Navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!loginData.email) errors.email = "Email is required";
    if (!loginData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/login",
          loginData
        );
        // console.log(response.data);
        // set token in local storage
        const { token,user} = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("userRole", user.role);
        // console.log(response.data.token);
        // Dispatch the login action with the role
        dispatch(login({ token, role: user.role }));
        Navigate('/products')

        // show success message
        toast.success("Login successful");
      } catch (error) {
        console.error(error.response.data.msg);
        toast.error(error.response.data.msg);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <div className="bg-[#FFE7E3] p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <ToastContainer />
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-serif">
              email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded mt-1 font-serif"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-serif">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded mt-1 font-serif"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleChange}
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-8"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500 cursor-pointer" />
              ) : (
                <FaEye className="text-gray-500 cursor-pointer" />
              )}
            </div>
            {errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-[#FFB6B3] py-2 px-4 rounded hover:bg-gray-200 transition duration-300 font-serif"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 font-serif">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
