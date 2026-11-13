
import React from 'react';
import './Header.css';
import Logo from './images/Logo.png';

const Header = () => {
  return (
    <div className="header-section">
      <div className="container-fluid">

        <header className="main-header d-flex align-items-center justify-content-between py-3">

          {/* Logo */}
          <a href="/" className="brand-logo">
            <img src={Logo} alt="Desi Feast Logo" />
          </a>

          {/* Navigation Links */}
          <ul className="nav align-items-center">
            <li className="nav-item">
              <a href="#" className="nav-link">Home</a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">Features</a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">Pricing</a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">FAQs</a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">About</a>
            </li>
          </ul>

        </header>
      </div>
    </div>
  );
};

export default Header;
