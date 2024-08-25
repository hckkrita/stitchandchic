import React from 'react'
import {Link} from 'react-router-dom';
import logo from './logo.png';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { toggle } from "../../features/navbar/navbarSlice";
import axiosInstance from "../../Config/axiosConfig";


function NavComponent() {
  return (
    <>
      <nav className="bg-[#FFE7E3] shadow-md">
      <div className="font-serif text-xl flex items-center justify-between py-2 px-6 md:flex-row md:justify-around">
        <div>
        <Link to="/" className="flex items-center py-4 px-2">
          <img className="w-[250px] h-[80px] object-contain" src={logo} alt="logo" />
        </Link>
        </div>
        <div className="flex space-x-6 md:space-x-8">
          <Link to="/" className="py-2 px-4 text-black hover:text-gray-700 transition duration-300" title="Go to Home">Home</Link>
          <Link to="/pattern" className="py-2 px-4 text-black hover:text-gray-700 transition duration-300" title="Browse Patterns">Pattern</Link>
          <Link to="/category" className="py-2 px-4 text-black hover:text-gray-700 transition duration-300" title="Explore Categories">Category</Link>
          <Link to="/tutorial" className="py-2 px-4 text-black hover:text-gray-700 transition duration-300" title="Explore Categories">Tutorial</Link>


          <Link to="/guide" className="py-2 px-4 text-black hover:text-gray-700 transition duration-300" title="Read Guides">Guide</Link>
          
          <Link to="/contact" className="py-2 px-4 text-black hover:text-gray-700 transition duration-300" title="Contact Us">Contact</Link>
        </div>

        <div className='space-x-1'>
        <Link to="/signup">
          <button className="py-2 px-4 bg-white text-black rounded hover:bg-pink-200 transition duration-300" title="Sign Up for an Account">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="py-2 px-4 bg-white text-black rounded hover:bg-pink-200 transition duration-300" title="Sign Up for an Account">
            Login
          </button>
        </Link>
        </div>

      </div>
    </nav>
    
    </>
  )
}

export default NavComponent;