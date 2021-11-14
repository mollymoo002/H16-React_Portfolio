import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import Navbar from './Navbar';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

function Header() {
  return (
    <header className="header">
      <h1>Molly</h1>
      <Navbar />
    </header>
  );
}

export default Header;
