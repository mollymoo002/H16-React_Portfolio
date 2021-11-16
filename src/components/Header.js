import React, { useState } from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if(currentPage === 'About') {
      return <About />
    }
    if(currentPage === 'Projects') {
      return <Projects />
    }
    if(currentPage === 'Contact') {
      return <Contact />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header className="header">
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <div>
        {renderPage()}
      </div>
    </div>
  );
}