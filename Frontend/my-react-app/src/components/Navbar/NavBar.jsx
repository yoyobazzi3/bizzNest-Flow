import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import hamburgerIcon from '../../assets/hamburger.png';


// hooks explained:

// useEffect is a React hook that allows you to perform side effects in functional components
// * adding event listeners
// * Fetching data
// * Interacting with the DOM
// * Cleaning up resouces

// useRef is a hook that creates a "reference" to a DOM element or value that persists across renders.
// * Directly accessing DOM elements
// * Storing mutable values that don't trigger a re-render when updated.


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // acts as a reference to the menu-items <ul> element.

  // Toggles the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {!isMenuOpen && (
          <img
            src={hamburgerIcon}
            alt="Menu"
            className="hamburger-icon"
            onClick={toggleMenu}
          />
        )}

        {isMenuOpen && (
          <ul ref={menuRef} className="menu-items row">
            <li><a href="#home">Home</a></li>
            <li><a href="#interns">Interns</a></li>
            <li><a href="#schedule">Schedule</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;