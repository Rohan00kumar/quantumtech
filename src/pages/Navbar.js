import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light-mode", !darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <h2 className="logo">QuantumTech</h2>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="/learn" className="navbar-link">
            Learn
          </a>
        </li>
        <li className="navbar-item">
          <a href="/simulation" className="navbar-link">
            Simulation
          </a>
        </li>
        <li className="navbar-item">
          <a href="/resource" className="navbar-link">
            Resource
          </a>
        </li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "🌞" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
