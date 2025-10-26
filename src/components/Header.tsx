import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">sato7564</h1>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#works">Works</a>
          <a href="#fortune">Fortune</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
