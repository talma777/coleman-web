'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="header-container">
        <Link href="/" className="logo-link">
          <div className="logo-wrapper">
             {/* COLEMAN Isologotype - Dark Version for Light Background */}
             <svg width="240" height="42" viewBox="0 0 240 42" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0, 0)">
                <path d="M0 0 h 12 v 12 h -12 z" fill="#0284C7"/>
                <path d="M16 0 h 6 v 30 h -6 z" fill="#0F172A"/>
                <path d="M0 16 h 12 v 14 h -12 z" fill="#475569"/>
                <path d="M26 12 h 8 v 18 h -8 z" fill="#0284C7"/>
              </g>
              <text x="45" y="24" fontFamily="'Outfit', sans-serif" fontSize="28" fontWeight="700" fill="#0F172A" letterSpacing="1.5">COLEMAN</text>
              <text x="47" y="38" fontFamily="'Inter', sans-serif" fontSize="9" fontWeight="600" fill="#475569" letterSpacing="2.5">EXPERTS CONSULTANTS</text>
            </svg>
          </div>
        </Link>
        
        {/* Mobile menu toggle */}
        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <Link href="/the-firm" onClick={() => setMobileMenuOpen(false)}>The Firm</Link>
          <Link href="/team" onClick={() => setMobileMenuOpen(false)}>Leadership & Team</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/sectors" onClick={() => setMobileMenuOpen(false)}>Sectors</Link>
          <Link href="/insights-events" onClick={() => setMobileMenuOpen(false)}>Insights & Events</Link>
          <Link href="/global-network" onClick={() => setMobileMenuOpen(false)}>Global Network</Link>
          <Link href="/join-us" onClick={() => setMobileMenuOpen(false)}>Join Us</Link>
          <div className="auth-action-mobile">
            <Link href="/login" className="login-btn highlight-btn" onClick={() => setMobileMenuOpen(false)}>Member Portal</Link>
          </div>
        </nav>
        
        <div className="auth-action desktop-only">
          <Link href="/login" className="login-btn highlight-btn">Member Portal</Link>
        </div>
      </div>
      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(15, 23, 42, 0.05);
        }
        header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          padding: 5px 0;
        }
        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 40px;
        }
        .logo-link {
          display: flex;
          align-items: center;
        }
        .logo-wrapper {
          display: flex;
          align-items: center;
        }
        .nav-links {
          display: flex;
          gap: 32px;
        }
        .nav-links a {
          color: var(--text-primary);
          font-weight: 500;
          font-size: 15px;
          position: relative;
          transition: color 0.3s ease;
          padding: 8px 0;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--cobalt-accent);
          transition: width 0.3s ease;
        }
        .nav-links a:hover {
          color: var(--cobalt-accent);
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .highlight-btn {
          background: linear-gradient(135deg, var(--cobalt-accent), #0369a1);
          color: white;
          padding: 12px 28px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.5px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.25);
          display: inline-block;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .highlight-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(2, 132, 199, 0.4);
          background: linear-gradient(135deg, #0369a1, #0284C7);
        }
        .mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }
        .mobile-toggle .bar {
          width: 28px;
          height: 3px;
          background-color: var(--coleman-navy);
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .mobile-toggle .bar.open:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        .mobile-toggle .bar.open:nth-child(2) {
          opacity: 0;
        }
        .mobile-toggle .bar.open:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
        .auth-action-mobile {
          display: none;
          margin-top: 20px;
        }

        @media (max-width: 1024px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            gap: 20px;
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transform: translateY(-150%);
            opacity: 0;
            transition: all 0.4s ease;
            text-align: center;
          }
          .nav-links.mobile-active {
            transform: translateY(0);
            opacity: 1;
          }
          .nav-links a {
            font-size: 18px;
          }
          .mobile-toggle {
            display: flex;
          }
          .desktop-only {
            display: none;
          }
          .auth-action-mobile {
            display: block;
          }
        }
        @media (max-width: 480px) {
           .header-container { padding: 15px 20px; }
        }
      `}</style>
    </header>
  );
}
