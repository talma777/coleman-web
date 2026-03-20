'use client';

import React from 'react';

export default function Sectors() {
  const sectors = [
    { title: "Agriculture, Forestry and Fishing", desc: "Expertise in addressing the unique financial and operational challenges of the primary sector." },
    { title: "Arts, Entertainment and Media", desc: "Guiding creative industries through complex tax structures, IP valuation, and cross-border distribution." },
    { title: "Construction and Engineering", desc: "Comprehensive audit and advisory tailored for capital-intensive infrastructure projects." },
    { title: "Energy, Resources and Utilities", desc: "Navigating regulatory compliance and strategic investments in transitioning energy markets." },
    { title: "Food and Drink", desc: "Supply chain optimization, taxation, and M&A advisory within global FMCG environments." },
    { title: "Health and Education", desc: "Serving public and private institutions with institutional audits and financial planning." },
    { title: "Insurance, Banking and Finance", desc: "Rigorous assurance and regulatory advisory for highly-regulated financial institutions." },
    { title: "Manufacturing and Distribution", desc: "Yield optimization and cost-accounting models for global manufacturers." },
    { title: "Professional Services", desc: "Specialised partnership accounting and structural consulting for services firms." },
    { title: "Real Estate", desc: "Capital gains tax strategies and REIT compliance for real estate portfolios." },
    { title: "Technology and Life Sciences", desc: "R&D tax credits and biotech venture capital advisory for disruptive enterprises." },
    { title: "Transport and Travel", desc: "Financial restructuring and global logistics assurance for transportation networks." }
  ];

  return (
    <>
      <section className="sectors-hero">
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
          <h1>Sectors</h1>
          <p className="subtitle">
            COLEMAN firms have a huge range of experience in all major sectors. Check our specialized industry expertise.
          </p>
        </div>
      </section>

      <section className="sectors-grid-section">
        <div className="container">
          <div className="grid">
            {sectors.map((sector, idx) => (
              <div key={idx} className="sector-card glass-card">
                <h3>{sector.title}</h3>
                <p>{sector.desc}</p>
                <a href={`/sectors/${sector.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="read-more">Learn More &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .sectors-hero { background: var(--bg-primary); text-align: left; }
        .container { max-width: 1400px; margin: 0 auto; padding: 40px; }
        h1 { font-size: 56px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; }
        .subtitle { color: var(--text-secondary); font-size: 20px; max-width: 800px; line-height: 1.6; }
        
        .sectors-grid-section { background: var(--bg-secondary); padding: 80px 0; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 32px; }
        .sector-card { padding: 32px; display: flex; flex-direction: column; transition: transform 0.3s ease; }
        .sector-card:hover { transform: translateY(-5px); box-shadow: 0 10px 40px rgba(15, 23, 42, 0.08); }
        .sector-card h3 { font-size: 20px; color: var(--text-primary); margin-bottom: 16px; line-height: 1.3; }
        .sector-card p { flex-grow: 1; margin-bottom: 24px; color: var(--text-secondary); }
        .read-more { color: var(--cobalt-accent); font-weight: 500; font-size: 15px; }
      `}</style>
    </>
  );
}
