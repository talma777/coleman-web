'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        
        <div className="footer-brand">
          <div className="footer-logo">COLEMAN</div>
          <p className="footer-desc">
            A premier global network of independent accounting firms, business consultants, and specialist legal advisers.
          </p>
        </div>

        <div className="footer-links-grid">
          <div className="link-group">
            <h4>Reach Us</h4>
            <p className="footer-info">3rd Floor, 100 Coleman Street</p>
            <p className="footer-info">London, EC2R 5BJ</p>
            <p className="footer-info">United Kingdom</p>
            <p className="footer-info" style={{ marginTop: '12px' }}>+44 (0) 20 7410 0339</p>
            <Link href="/contact" style={{ marginTop: '12px', color: 'var(--cobalt-accent)', fontWeight: 600 }}>Contact HQ &rarr;</Link>
          </div>
          <div className="link-group">
            <h4>Services</h4>
            <Link href="/services#audit">Audit & Assurance</Link>
            <Link href="/services#tax">Tax</Link>
            <Link href="/services#advisory">Consulting & Advisory</Link>
            <Link href="/services#business">Business Services</Link>
          </div>
          <div className="link-group">
            <h4>Global Network</h4>
            <Link href="/global-network">Find an Office</Link>
            <Link href="/join-us">Join the Network</Link>
            <Link href="/login">Member Portal</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>© {currentYear} COLEMAN International. All rights reserved.</p>
          <div className="legal-links">
            <Link href="/policies#privacy">Privacy Policy</Link>
            <Link href="/policies#terms">Terms of Use</Link>
            <Link href="/policies#cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        footer {
          background-color: var(--bg-primary);
          border-top: 1px solid rgba(15, 23, 42, 0.05);
          color: var(--text-primary);
          padding-top: 80px;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px 60px;
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
        }

        .footer-logo {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
          color: var(--coleman-navy);
        }

        .footer-desc {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 15px;
          max-width: 300px;
        }

        .footer-links-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .link-group h4 {
          color: var(--text-primary);
          font-size: 16px;
          margin-bottom: 24px;
          font-weight: 600;
        }

        .link-group a {
          display: block;
          color: var(--text-secondary);
          margin-bottom: 12px;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .link-group a:hover {
          color: var(--cobalt-accent);
        }

        .footer-info {
          color: var(--text-secondary);
          font-size: 14px;
          margin-bottom: 6px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(15, 23, 42, 0.05);
          padding: 24px 0;
          background-color: var(--bg-secondary);
        }

        .bottom-flex {
          max-width: 1400px; margin: 0 auto; padding: 0 40px;
          display: flex; justify-content: space-between; align-items: center;
          color: var(--text-secondary); font-size: 13px;
        }

        .legal-links { display: flex; gap: 24px; }
        .legal-links a:hover { color: var(--cobalt-accent); }

        @media (max-width: 900px) {
          .footer-container { grid-template-columns: 1fr; gap: 40px; }
          .bottom-flex { flex-direction: column; gap: 16px; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
