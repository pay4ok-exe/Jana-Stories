import React from 'react';
import logo from '../assets/img/logo.png';
import '../assets/styles/Header.css';

function Header() {
  const handleButtonClick = () => {
    window.open('https://github.com/pay4ok-exe/Jana-Stories', '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Jana Stories Logo" className="logo" />
      </div>
      <button className="button-36" onClick={handleButtonClick}>
        Get Source Code
      </button>
    </header>
  );
}

export default Header;
