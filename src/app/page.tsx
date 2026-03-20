'use client';

import React from 'react';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">Beyond global reach.<br /><span>Strategic local impact.</span></h1>
            <p className="hero-desc">
              COLEMAN is a global network of independent professional services firms, 
              delivering integrated accounting, audit, tax, and business consulting to multinational operations.
            </p>
            <div className="hero-actions">
              <a href="/global-network" className="btn-primary">Find an Office</a>
              <a href="/services" className="btn-secondary">Our Expertise</a>
            </div>
          </div>
        </div>
      </section>

      <section className="core-services">
        <div className="container">
          <div className="section-header">
            <h2>Specialised Capabilities</h2>
            <p className="subtitle">Delivering uncompromised quality and technical rigor across borders.</p>
          </div>

          <div className="services-grid">
            <div className="service-card glass-card">
              <div className="icon">01</div>
              <h3>Audit & Assurance</h3>
              <p>Rigorous statutory and voluntary audits, IFRS financial statements, and SOC reporting built on independence and integrity.</p>
              <a href="/services#audit" className="service-link">View Service &rarr;</a>
            </div>

            <div className="service-card glass-card">
              <div className="icon">02</div>
              <h3>Tax</h3>
              <p>Corporate tax structuring, multinational transfer pricing, and expatriate tax planning across diverse regulatory frameworks.</p>
              <a href="/services#tax" className="service-link">View Service &rarr;</a>
            </div>

            <div className="service-card glass-card">
              <div className="icon">03</div>
              <h3>Advisory</h3>
              <p>M&A due diligence, business valuations, risk management, and capital restructuring for evolving enterprises.</p>
              <a href="/services#advisory" className="service-link">View Service &rarr;</a>
            </div>

            <div className="service-card glass-card">
              <div className="icon">04</div>
              <h3>Business Services</h3>
              <p>Outsourced payroll, corporate secretarial services, and management accounting designed for operational efficiency.</p>
              <a href="/services#business" className="service-link">View Service &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <section className="global-map-preview">
        <div className="container">
          <div className="map-content">
            <h2>Operating in key financial centres globally.</h2>
            <p className="subtitle map-subtitle">
              With a presence in over 100 countries, the COLEMAN framework allows businesses to navigate complex international legislation seamlessly.
            </p>
            <a href="/global-network" className="btn-primary map-btn">Explore Global Network</a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          background: var(--bg-primary);
          padding-top: 80px;
        }
        
        /* Subtle architectural image watermark */
        .hero::before {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070');
          background-size: cover; background-position: center;
          opacity: 0.05; pointer-events: none; z-index: 0; filter: grayscale(100%);
        }

        .hero-content { max-width: 1400px; margin: 0 auto; padding: 0 40px; width: 100%; position: relative; z-index: 10; }
        .hero-text-wrapper { max-width: 900px; }
        
        .hero-title {
          font-size: 80px;
          line-height: 1.1;
          color: var(--text-primary);
          font-weight: 300;
          margin-bottom: 32px;
          letter-spacing: -0.02em;
        }

        .hero-title span { color: var(--cobalt-accent); font-weight: 500; }
        .hero-desc { color: var(--text-secondary); font-size: 22px; max-width: 700px; line-height: 1.6; margin-bottom: 48px; font-weight: 300; }
        
        .hero-actions { display: flex; gap: 24px; }
        .btn-secondary {
          background: transparent; color: var(--text-primary); padding: 12px 24px; border-radius: 4px;
          font-weight: 500; border: 1px solid rgba(15, 23, 42, 0.2); cursor: pointer; transition: all 0.3s ease;
        }
        .btn-secondary:hover { border-color: var(--text-primary); background: rgba(15, 23, 42, 0.05); }

        .core-services { background-color: var(--bg-secondary); padding: 120px 0; border-top: 1px solid rgba(15, 23, 42, 0.05); }
        .container { max-width: 1400px; margin: 0 auto; padding: 0 40px; }
        .section-header { margin-bottom: 60px; max-width: 700px; }
        .section-header h2 { font-size: 48px; color: var(--text-primary); margin-bottom: 16px; font-weight: 300; letter-spacing: -0.01em; }
        .subtitle { color: var(--text-secondary); font-size: 20px; line-height: 1.6; }

        .services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
        
        .service-card {
          padding: 48px; display: flex; flex-direction: column; position: relative; overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card:hover { transform: translateY(-5px); box-shadow: 0 10px 40px rgba(15, 23, 42, 0.08); }
        
        .icon { font-size: 14px; color: var(--cobalt-accent); font-weight: 700; margin-bottom: 24px; font-family: var(--font-heading); }
        .service-card h3 { font-size: 28px; color: var(--text-primary); margin-bottom: 16px; }
        .service-card p { color: var(--text-secondary); line-height: 1.6; font-size: 16px; flex-grow: 1; margin-bottom: 32px; }
        .service-link { color: var(--text-primary); font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; transition: color 0.3s ease; }
        .service-card:hover .service-link { color: var(--cobalt-accent); }

        .global-map-preview {
          padding: 160px 0; background: var(--bg-primary); position: relative; border-top: 1px solid rgba(15, 23, 42, 0.05);
        }
        
        /* Light minimalist map aesthetic */
        .global-map-preview::before {
          content: ''; position: absolute; right: 0; top: 0; width: 60%; height: 100%;
          background-image: radial-gradient(circle at center, rgba(2, 132, 199, 0.05) 0%, transparent 60%);
          z-index: 0;
        }

        .map-content { position: relative; z-index: 10; max-width: 600px; }
        .map-content h2 { font-size: 48px; color: var(--text-primary); margin-bottom: 24px; font-weight: 300; }
        .map-subtitle { margin-bottom: 40px; }

        @media (max-width: 1024px) {
          .hero-title { font-size: 60px; }
          .services-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .hero-title { font-size: 42px; line-height: 1.2; }
          .hero-desc { font-size: 18px; margin-bottom: 32px; }
          .hero-actions { flex-direction: column; width: 100%; gap: 16px; }
          .btn-primary, .btn-secondary { width: 100%; text-align: center; }
          .core-services, .global-map-preview { padding: 60px 0; }
          .section-header h2, .map-content h2 { font-size: 32px; }
          .service-card { padding: 32px; }
        }
      `}</style>
    </>
  );
}
