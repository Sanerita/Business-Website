import React from 'react';
import { useState } from "react";

const Navbar = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">

        <div className="logo">
          <h2>NEZZI'S</h2>
        </div>
        <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          
        </button>
        <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >


        

        <div className="nav-elements">
          <ul>
          <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#Shop">Shop</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;