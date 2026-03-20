'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Sectors() {
  const [activeTab, setActiveTab] = useState('tech');

  const SECTORS_DATA = {
    tech: {
      name: "Tech & Telecommunications",
      lead: "In a sector defined by rapid innovation, disruption, and complex IP structuring, COLEMAN provides agile financial solutions.",
      content: [
        {
          title: "SaaS & Cloud Computing",
          text: "We assist SaaS providers with global revenue recognition (IFRS 15), complex equity compensation plans, and restructuring IP across low-tax jurisdictions."
        },
        {
          title: "Telecom & Infrastructure",
          text: "Statutory audits and capital expenditure reviews for massive 5G infrastructure rollouts, ensuring regulatory compliance across national telecommunication boundaries."
        },
        {
          title: "FinTech & Blockchain",
          text: "Navigating the murky regulatory waters of crypto-assets. We offer specialized SOC audits for FinTech platforms and advise on DeFi tax treatments."
        }
      ],
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
    },
    manufacturing: {
      name: "Manufacturing & Engineering",
      lead: "From automotive to heavy machinery, we help manufacturers optimize their global supply chains and manage complex cross-border transfer pricing.",
      content: [
        {
          title: "Supply Chain Tax Optimization",
          text: "Restructuring manufacturing nodes across EMEA and APAC to optimize indirect taxes, tariffs, and secure government incentives for R&D."
        },
        {
          title: "Inventory Costing & Valuation",
          text: "Rigorous inventory audits across multiple global warehouses, applying advanced data analytics to detect valuation anomalies and obsolescence risks."
        },
        {
          title: "M&A in Industrials",
          text: "Performing buy-side financial and tax due diligence for cross-border acquisitions of specialized engineering firms."
        }
      ],
      img: "https://images.unsplash.com/photo-1565439399-1bdc8db67fb9?auto=format&fit=crop&q=80&w=1200"
    },
    realestate: {
      name: "Real Estate & Construction",
      lead: "Capital-intensive and highly regulated, real estate demands precision. We advise developers, REITs, and sovereign wealth funds.",
      content: [
        {
          title: "REIT Structuring",
          text: "Ensuring compliance with complex Real Estate Investment Trust (REIT) tax rules across the US, UK, and emerging markets to maintain tax-advantaged status."
        },
        {
          title: "Construction Project Audits",
          text: "Detailed percentage-of-completion audits for massive infrastructural projects, ensuring accurate revenue recognition and cost-control."
        },
        {
          title: "Cross-border Property Investment",
          text: "Structuring foreign direct investment (FDI) into regional property markets, mitigating withholding taxes on rental yields and capital gains."
        }
      ],
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
    },
    financial: {
      name: "Financial Services",
      lead: "Banks, asset managers, and insurance firms operate in the world's most scrutinized regulatory environment. COLEMAN provides the certainty they need.",
      content: [
        {
          title: "Asset Management & Funds",
          text: "Auditing offshore hedge funds and private equity vehicles. We ensure compliance with AIFMD, FATCA, and CRS reporting standards."
        },
        {
          title: "Banking Compliance",
          text: "Internal audit co-sourcing, AML/KYC regulatory reviews, and Basel III capital adequacy assessments for mid-tier and challenger banks."
        },
        {
          title: "Insurance",
          text: "Actuarial valuations, claims reserve auditing, and IFRS 17 implementation consulting for multinational insurance carriers."
        }
      ],
      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200"
    },
    healthcare: {
      name: "Healthcare & Life Sciences",
      lead: "Navigating R&D cycles, stringent privacy laws, and global distribution challenges in the pharmaceutical and healthcare provider space.",
      content: [
        {
          title: "R&D Tax Credits",
          text: "Maximizing government R&D incentives for biotech firms developing novel therapeutics across various global tax jurisdictions."
        },
        {
          title: "Provider Network Audits",
          text: "Financial statement audits for large hospital groups, focusing on revenue cycle management and complex Medicare/insurance reimbursements."
        },
        {
          title: "MedTech Compliance",
          text: "Advising medical device manufacturers on transfer pricing for highly specialized IP and managing global distribution tax footprints."
        }
      ],
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200"
    },
    consumer: {
      name: "Retail & Consumer Goods",
      lead: "In an era of omnichannel retail and shifting consumer sentiment, agility is paramount. We help brands scale globally while managing margin pressures.",
      content: [
        {
          title: "E-Commerce Tax",
          text: "Implementing automated global VAT/GST compliance structures for direct-to-consumer digital brands expanding into new markets."
        },
        {
          title: "Franchise Audits",
          text: "Conducting royalty audits and franchise compliance reviews for global fast-food and apparel franchisors."
        },
        {
          title: "Supply Chain Restructuring",
          text: "Optimizing the tax flow of goods from Asian manufacturing centers to European and American retail markets."
        }
      ],
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200"
    }
  };

  const getActiveData = () => {
    return SECTORS_DATA[activeTab as keyof typeof SECTORS_DATA];
  };

  const currentSector = getActiveData();

  return (
    <div className="sectors-page-wrapper">
      <section className="sectors-hero">
        <div className="container hero-container">
          <div className="badge">INDUSTRY FOCUS</div>
          <h1>Global Sectors</h1>
          <p className="subtitle">
            Deep vertical expertise. COLEMAN brings specialized industry knowledge to every engagement, turning regulatory complexities into competitive advantages.
          </p>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="sticky-nav-wrapper">
        <div className="container">
          <div className="tab-navigation">
            <button className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`} onClick={() => setActiveTab('tech')}>Tech & Telecom</button>
            <button className={`tab-btn ${activeTab === 'financial' ? 'active' : ''}`} onClick={() => setActiveTab('financial')}>Financial Services</button>
            <button className={`tab-btn ${activeTab === 'realestate' ? 'active' : ''}`} onClick={() => setActiveTab('realestate')}>Real Estate</button>
            <button className={`tab-btn ${activeTab === 'manufacturing' ? 'active' : ''}`} onClick={() => setActiveTab('manufacturing')}>Manufacturing</button>
            <button className={`tab-btn ${activeTab === 'healthcare' ? 'active' : ''}`} onClick={() => setActiveTab('healthcare')}>Healthcare</button>
            <button className={`tab-btn ${activeTab === 'consumer' ? 'active' : ''}`} onClick={() => setActiveTab('consumer')}>Retail</button>
          </div>
        </div>
      </div>

      <div className="tab-content-area">
        <div className="container">
          <div className="sector-pane fade-in" key={activeTab}>
            
            <div className="split-content">
              <div className="text-col">
                <h2 style={{ fontSize: '48px', marginBottom: '24px', lineHeight: 1.1 }}>{currentSector.name}</h2>
                <p className="lead">{currentSector.lead}</p>
                <Link href="/contact" className="btn-primary highlight-btn" style={{ marginTop: '32px' }}>Consult our {currentSector.name.split(' ')[0]} Experts</Link>
              </div>
              <div className="img-col">
                <div className="hero-img-wrapper shadow-lg">
                  <div className="img-overlay"></div>
                  <img src={currentSector.img} alt={currentSector.name} className="content-img" />
                </div>
              </div>
            </div>

            <div className="details-section">
              <h3 className="section-title">Specialized Capabilities</h3>
              <div className="capabilities-grid">
                {currentSector.content.map((item, i) => (
                  <div key={i} className="cap-card glass-card">
                    <div className="cap-icon">0{i + 1}</div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <style jsx>{`
        .sectors-page-wrapper { background: var(--bg-primary); min-height: 100vh; }
        .sectors-hero { background: var(--bg-primary); text-align: center; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
        .hero-container { padding-top: 180px; padding-bottom: 60px; }
        .badge { background: rgba(2, 132, 199, 0.1); color: var(--cobalt-accent); display: inline-block; font-size: 13px; font-weight: 700; padding: 6px 16px; border-radius: 20px; letter-spacing: 1px; margin-bottom: 24px; }
        h1 { font-size: 64px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; line-height: 1.1; }
        .subtitle { color: var(--text-secondary); font-size: 22px; max-width: 800px; margin: 0 auto; line-height: 1.6; }
        
        .sticky-nav-wrapper {
          position: sticky; top: 71px; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(12px);
          z-index: 100; border-bottom: 1px solid rgba(15, 23, 42, 0.08); box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }
        .tab-navigation { display: flex; gap: 32px; overflow-x: auto; padding: 0 20px; scrollbar-width: none; justify-content: center; }
        .tab-navigation::-webkit-scrollbar { display: none; }
        .tab-btn {
          background: none; border: none; padding: 20px 0; font-size: 16px; font-weight: 500;
          color: var(--text-secondary); cursor: pointer; position: relative; white-space: nowrap; transition: color 0.3s ease;
        }
        .tab-btn:hover { color: var(--text-primary); }
        .tab-btn.active { color: var(--cobalt-accent); }
        .tab-btn.active::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 3px;
          background: var(--cobalt-accent); border-radius: 3px 3px 0 0;
        }

        .tab-content-area { padding: 80px 0; background: var(--bg-secondary); min-height: 60vh; }
        .fade-in { animation: fadeIn 0.4s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .split-content { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-bottom: 100px; }
        .lead { font-size: 20px; color: var(--text-secondary); line-height: 1.7; }
        
        .hero-img-wrapper { position: relative; border-radius: 12px; overflow: hidden; aspect-ratio: 4/3; }
        .img-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(2, 132, 199, 0.2), transparent); z-index: 1; mix-blend-mode: multiply; }
        .content-img { width: 100%; height: 100%; object-fit: cover; }
        
        .details-section { max-width: 1200px; margin: 0 auto; }
        .section-title { font-size: 32px; color: var(--text-primary); margin-bottom: 40px; text-align: center; }
        
        .capabilities-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .cap-card { padding: 40px; border-top: 3px solid var(--cobalt-accent); transition: transform 0.3s ease; }
        .cap-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
        .cap-icon { font-family: var(--font-heading); font-size: 40px; font-weight: 700; color: rgba(2, 132, 199, 0.2); margin-bottom: 24px; line-height: 1; }
        .cap-card h4 { font-size: 22px; margin-bottom: 16px; color: var(--text-primary); }
        .cap-card p { font-size: 16px; color: var(--text-secondary); line-height: 1.6; }

        .highlight-btn { display: inline-block; background: linear-gradient(135deg, var(--cobalt-accent), #0369a1); color: white; padding: 16px 32px; font-size: 16px; border-radius: 6px; font-weight: 600; text-decoration: none; transition: transform 0.3s ease, box-shadow 0.3s ease; border: none; }
        .highlight-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(2, 132, 199, 0.3); color: white; }

        @media (max-width: 1024px) {
          .split-content { grid-template-columns: 1fr; gap: 40px; }
          .capabilities-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 48px; }
          .tab-navigation { justify-content: flex-start; }
          .split-content .text-col h2 { font-size: 36px !important; }
        }
      `}</style>
    </div>
  );
}
