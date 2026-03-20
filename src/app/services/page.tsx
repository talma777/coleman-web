'use client';

import React, { useState } from 'react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('audit');

  const servicesData = {
    audit: {
      title: "Audit and Assurance",
      lead: "Financial reporting and corporate auditing are core services for most COLEMAN firms. Management, investors and lenders need to review and trust your financial information to understand your business operations.",
      items: [
        {
          sub: "Financial reporting and auditing",
          detail: "COLEMAN's audit and assurance teams understand clients' businesses and industries, and the needs of other stakeholders who request their financial data. As a global audit network and a member of the IFAC Forum of Firms, COLEMAN is totally committed to quality, integrity and independence."
        },
        {
          sub: "Statutory audits and reviews",
          detail: "Business owners may perceive the preparation of annual financial statements and the audit or review simply as a legal obligation. At COLEMAN, we prefer to view these as diagnostic tools, helping to reveal issues which can then be addressed by identifying realistic and practical solutions. Our experienced and impartial auditors take an objective view of the business."
        },
        {
          sub: "Multinational reporting and auditing",
          detail: "As leading specialists in audit and compliance, COLEMAN member firms prepare reports across a wide number of international jurisdictions, compiled in accordance with both local and international standards and regulations."
        },
        {
          sub: "Internal controls",
          detail: "COLEMAN firms are experienced in performing reviews and assessments of the design and effectiveness of companies' internal systems and controls (SOC reporting), to help clients improve the effectiveness of risk management."
        },
        {
          sub: "Specialised services",
          detail: "Depending on the jurisdiction, specialist audits can be highly regulated, with strict procedures and reporting requirements. In relevant markets, COLEMAN firms have the necessary in-depth knowledge, technical expertise and licences required to audit banks and financial institutions, charities and foundations."
        }
      ]
    },
    quality: {
      title: "Audit and Assurance Quality",
      lead: "Our commitment to quality forms the bedrock of our assurance practice. Through COLEMAN’s Global Quality Management System (GQMS), we mandate an uncompromising standard of independence and technical rigor worldwide.",
      items: [
        {
          sub: "Forum of Firms Membership",
          detail: "COLEMAN is a full member of the Forum of Firms. This membership signifies our strict adherence to the International Standard on Quality Management (ISQM 1 & 2) and the conduction of regular, globally coordinated internal quality control reviews."
        },
        {
          sub: "Global Quality Management System",
          detail: "Every COLEMAN member firm is subject to rigorous external peer reviews and central office inspections. Our system ensures consistency in audit methodology, risk assessment, and evidence gathering, regardless of where the audit takes place."
        },
        {
          sub: "Independence & Ethics",
          detail: "We maintain a proprietary global independence tracking system. This system prevents conflicts of interest across borders before they arise, ensuring our network complies with the IESBA Code of Ethics for Professional Accountants."
        },
        {
          sub: "Continuous Methodology Training",
          detail: "Audit standards are constantly evolving. Our global Center of Excellence curates and delivers mandatory annual methodology training spanning IFRS, ISA updates, and emerging audit technologies like AI integration and data analytics."
        }
      ]
    },
    tax: {
      title: "Tax Services",
      lead: "Navigate international tax legislation with confidence. Our coordinated cross-border tax teams ensure efficiency, compliance, and strategic structuring across the globe.",
      items: [
        {
          sub: "Corporate Tax Structuring",
          detail: "Designing optimal operational structures for multinational expansions, joint ventures, and holding companies. We align your tax strategy with your commercial objectives."
        },
        {
          sub: "Transfer Pricing",
          detail: "Developing robust transfer pricing policies, preparing master and local files, and negotiating Advance Pricing Agreements (APAs) to prevent double taxation and regulatory disputes."
        },
        {
          sub: "Indirect Tax (VAT/GST/Customs)",
          detail: "Managing complex multi-jurisdictional indirect tax registrations, reporting, and recovery processes to optimize your supply chain."
        },
        {
          sub: "Global Mobility & Expatriate Tax",
          detail: "Ensuring tax efficiency and compliance for your globally mobile workforce, including shadow payrolls, tax equalisation policies, and visa planning advice."
        }
      ]
    },
    advisory: {
      title: "Consulting & Advisory",
      lead: "Transformative guidance tailored to your operational realities. Our advisory teams help you unlock value, manage risk, and scale effectively.",
      items: [
        {
          sub: "M&A Due Diligence",
          detail: "Comprehensive financial, tax, and commercial due diligence for buy-side and sell-side transactions. We highlight hidden liabilities and synergistic potentials."
        },
        {
          sub: "Business Valuations",
          detail: "Independent, rigorous valuations of business entities, intellectual property, and intangible assets for transaction structuring, financial reporting, and dispute resolution."
        },
        {
          sub: "Risk Management & IT Consulting",
          detail: "Identifying operational vulnerabilities, fortifying cybersecurity architectures, and implementing Enterprise Resource Planning (ERP) systems to drive efficiency."
        },
        {
          sub: "Restructuring & Insolvency",
          detail: "Strategic advisory for distressed businesses, debt restructuring, capital optimization, and formal insolvency proceedings to protect stakeholder value."
        }
      ]
    },
    business: {
      title: "Business Services & Outsourcing",
      lead: "Streamline your back-office operations. We provide reliable, compliant, and cost-effective outsourcing solutions so you can focus on core growth.",
      items: [
        {
          sub: "Global Payroll Solutions",
          detail: "Centralized coordination of payroll operations across multiple countries, ensuring compliance with shifting local labor laws and tax withholdings."
        },
        {
          sub: "Management Accounting",
          detail: "Preparation of monthly management accounts, cash flow forecasting, and KPI dashboards designed to give leadership real-time visibility into financial health."
        },
        {
          sub: "Corporate Secretarial",
          detail: "Entity incorporation, registered office provision, maintaining statutory registers, and ensuring compliance with local corporate governance codes."
        }
      ]
    }
  };

  const getActiveData = () => {
    return servicesData[activeTab as keyof typeof servicesData];
  };

  const currentService = getActiveData();

  return (
    <div className="services-page-wrapper">
      <section className="services-hero">
        <div className="container hero-container">
          <div className="badge">EXPERTISE</div>
          <h1>Our Services</h1>
          <p className="subtitle">
            Comprehensive financial, tax, and advisory solutions tailored for the complex needs of multinational organizations.
          </p>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="sticky-nav-wrapper">
        <div className="container">
          <div className="tab-navigation">
            <button className={`tab-btn ${activeTab === 'audit' ? 'active' : ''}`} onClick={() => setActiveTab('audit')}>Audit & Assurance</button>
            <button className={`tab-btn ${activeTab === 'quality' ? 'active' : ''}`} onClick={() => setActiveTab('quality')}>Audit Quality</button>
            <button className={`tab-btn ${activeTab === 'tax' ? 'active' : ''}`} onClick={() => setActiveTab('tax')}>Tax</button>
            <button className={`tab-btn ${activeTab === 'advisory' ? 'active' : ''}`} onClick={() => setActiveTab('advisory')}>Advisory</button>
            <button className={`tab-btn ${activeTab === 'business' ? 'active' : ''}`} onClick={() => setActiveTab('business')}>Business Services</button>
          </div>
        </div>
      </div>

      <div className="tab-content-area">
        <div className="container">
          <div className="service-pane fade-in" key={activeTab}>
            <div className="service-header">
              <h2>{currentService.title}</h2>
              <p className="lead">{currentService.lead}</p>
            </div>

            <div className="service-items-grid">
              {currentService.items.map((item, i) => (
                <div key={i} className="item-card glass-card">
                  <div className="bullet-wrapper">
                    <span className="bullet"></span>
                  </div>
                  <div className="item-content">
                    <h4>{item.sub}</h4>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cta-box glass-card">
              <h3>Need Specialized Guidance?</h3>
              <p>Contact our global experts to discuss how COLEMAN can support your business objectives in {currentService.title.toLowerCase()}.</p>
              <a href="/global-network" className="btn-primary highlight-btn" style={{marginTop:'16px'}}>Find a Local Expert</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-page-wrapper { background: var(--bg-primary); min-height: 100vh; }
        .services-hero { background: var(--bg-primary); text-align: center; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
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

        .service-header { text-align: center; max-width: 900px; margin: 0 auto 60px; }
        .service-header h2 { font-size: 40px; margin-bottom: 24px; color: var(--text-primary); }
        .lead { font-size: 18px; color: var(--text-secondary); line-height: 1.7; }

        .service-items-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 32px; margin-bottom: 60px; }
        .item-card { padding: 40px; display: flex; gap: 24px; transition: transform 0.3s ease; }
        .item-card:hover { transform: translateY(-5px); }
        
        .bullet-wrapper { padding-top: 8px; }
        .bullet { display: block; width: 12px; height: 12px; border-radius: 50%; background-color: var(--cobalt-accent); }
        
        .item-content h4 { font-size: 24px; margin-bottom: 16px; color: var(--text-primary); }
        .item-content p { font-size: 16px; color: var(--text-secondary); line-height: 1.6; }

        .cta-box { background: linear-gradient(135deg, var(--coleman-navy), #1e293b); padding: 48px; border-radius: 12px; color: white; border: none; text-align: center; max-width: 800px; margin: 0 auto; }
        .cta-box h3 { color: white; font-size: 28px; margin-bottom: 16px; }
        .cta-box p { color: #cbd5e1; font-size: 18px; margin-bottom: 24px; }

        .highlight-btn { display: inline-block; background: linear-gradient(135deg, var(--cobalt-accent), #0369a1); color: white; padding: 14px 32px; font-size: 16px; border-radius: 6px; font-weight: 600; text-decoration: none; transition: transform 0.3s ease, box-shadow 0.3s ease; border: none; }
        .highlight-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(2, 132, 199, 0.3); color: white; }

        @media (max-width: 768px) {
          h1 { font-size: 48px; }
          .service-items-grid { grid-template-columns: 1fr; }
          .tab-navigation { justify-content: flex-start; }
          .item-card { padding: 32px 24px; flex-direction: column; gap: 16px; }
        }
      `}</style>
    </div>
  );
}
