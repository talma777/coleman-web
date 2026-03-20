'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
             <svg width="200" height="40" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0, 5)">
                <path d="M0 0 h 12 v 12 h -12 z" fill="#0284C7"/>
                <path d="M16 0 h 6 v 30 h -6 z" fill="#0F172A"/>
                <path d="M0 16 h 12 v 14 h -12 z" fill="#475569"/>
                <path d="M26 12 h 8 v 18 h -8 z" fill="#0284C7"/>
              </g>
              <text x="45" y="28" fontFamily="'Outfit', sans-serif" fontSize="26" fontWeight="700" fill="#0F172A" letterSpacing="2">COLEMAN</text>
            </svg>
          </div>
        </Link>
        <nav className="nav-links">
          <Link href="/the-firm">The Firm</Link>
          <Link href="/team">Leadership & Team</Link>
          <Link href="/services">Services</Link>
          <Link href="/sectors">Sectors</Link>
          <Link href="/insights-events">Insights & Events</Link>
          <Link href="/global-network">Global Network</Link>
          <Link href="/join-us">Join Us</Link>
        </nav>
        <div className="auth-action">
          <Link href="/login" className="login-btn">Member Portal</Link>
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
          transition: color 0.2s ease;
        }
        .nav-links a:hover {
          color: var(--cobalt-accent);
        }
        .login-btn {
          background: var(--coleman-navy);
          color: white;
          padding: 10px 24px;
          border-radius: 4px;
          font-weight: 500;
          font-size: 14px;
          transition: background 0.2s ease;
        }
        .login-btn:hover {
          background: var(--cobalt-accent);
        }
      `}</style>
    </header>
  );
}
