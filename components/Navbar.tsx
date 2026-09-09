"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" style={{ display: 'flex', justifyContent: 'center', position: 'relative', alignItems: 'center', padding: '37px 24px', marginBottom: '24px' }}>
      
      {/* Modern Gradient Blue Button for Hamburger/Toggle */}
      <button 
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'none',
          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          color: '#ffffff',
          border: '1px solid #60a5fa',
          fontSize: '18px',
          cursor: 'pointer',
          position: 'absolute',
          right: '24px',
          top: '16px',
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
          transition: 'all 0.3s ease',
          zIndex: 50
        }}
        aria-label="Toggle Menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Nav Links (Desktop & Mobile Responsive Toggle) */}
      <ul 
        className={`nav-links ${isOpen ? 'active' : ''}`}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          listStyle: 'none',
          margin: 0,
          padding: '12px 24px',
          background: 'rgba(17, 20, 29, 0.85)',
          backdropFilter: 'blur(12px)',
          borderRadius: '30px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <li>
          <a href="#work" onClick={() => setIsOpen(false)} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 500 }}>
            Work
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 500 }}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)} style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 500 }}>
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/kiran-s-maya-89716b302/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            LinkedIn ↗
          </a>
        </li>
      </ul>

      <div className="nav-right" style={{ justifySelf: 'end' }}></div>

      {/* Responsive Media Query Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-toggle {
            display: flex !important;
          }
          
          .nav-links {
            display: ${isOpen ? 'flex' : 'none'} !important;
            flex-direction: column;
            position: absolute;
            top: 85px;
            left: 20px;
            right: 20px;
            background: rgba(17, 20, 29, 0.95) !important;
            border-radius: 16px !important;
            padding: 20px !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            align-items: center;
            gap: 16px !important;
            z-index: 40;
          }
        }
      `}</style>
    </nav>
  );
}