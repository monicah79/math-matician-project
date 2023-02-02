import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Header = () => (
  <header>

    <nav className="header-nav">
      <h1>Math maticians</h1>
      <ul>
        <Link to="/" style={{ color: 'blue' }}>home</Link>
        <Link to="/Calculator" style={{ color: 'blue' }}>calculator</Link>
        <Link to="/Quote" style={{ color: 'blue' }}>Quote</Link>
      </ul>
    </nav>
  </header>
);

export default Header;
