'use client';

import React from 'react';

export default function Services() {
  const serviceCategories = [
    {
      title: "Audit and Assurance",
      desc: "Financial reporting and corporate auditing are core services for most COLEMAN firms. Management, investors and lenders need to review and trust your financial information to understand your business operations, plan for the future and determine the risks involved in committing funds and resources.",
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
    }
  ];

  return (
    <>
      <section className="services-hero">
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
          <h1>Our Services</h1>
          <p className="subtitle">
            Comprehensive financial, tax, and advisory solutions tailored for the complex needs of multinational organizations.
          </p>
        </div>
      </section>

      <section className="services-hub">
        <div className="container">
          <div className="hub-layout">
            
            <aside className="hub-sidebar">
              <div className="sticky-nav">
                <h3>Expertise</h3>
                <ul>
                  <li><a href="#audit" className="active">Audit and Assurance</a></li>
                  <li><a href="#tax">Tax</a></li>
                  <li><a href="#advisory">Advisory</a></li>
                  <li><a href="#business">Business Services</a></li>
                </ul>
              </div>
            </aside>

            <div className="hub-content">
              {serviceCategories.map((service, index) => (
                <div key={index} id={service.title.split(' ')[0].toLowerCase()} className="service-group glass-card">
                  <h2>{service.title}</h2>
                  <p className="service-desc">{service.desc}</p>
                  
                  <div className="service-items-grid" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    {service.items.map((item, i) => (
                      <div key={i} className="item-card">
                        <span className="bullet"></span>
                        <h4 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text-primary)' }}>{item.sub}</h4>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .services-hero { background: var(--bg-primary); text-align: left; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
        .container { max-width: 1400px; margin: 0 auto; padding: 60px 40px; }
        h1 { font-size: 56px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; }
        .subtitle { color: var(--text-secondary); font-size: 20px; max-width: 800px; line-height: 1.6; }
        .services-hub { background-color: var(--bg-secondary); position: relative; }
        .hub-layout { display: flex; gap: 60px; }
        .hub-sidebar { width: 300px; flex-shrink: 0; }
        .sticky-nav { position: sticky; top: 120px; }
        .sticky-nav h3 { font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-primary); margin-bottom: 24px; }
        .sticky-nav ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 16px; }
        .sticky-nav a { color: var(--text-secondary); font-size: 16px; font-weight: 500; display: flex; align-items: center; transition: all 0.3s ease; }
        .sticky-nav a:hover, .sticky-nav a.active { color: var(--cobalt-accent); transform: translateX(8px); }
        .hub-content { flex-grow: 1; display: flex; flex-direction: column; gap: 60px; }
        .service-group { padding: 48px; scroll-margin-top: 100px; }
        .service-group h2 { font-size: 36px; color: var(--text-primary); margin-bottom: 24px; }
        .service-desc { font-size: 18px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 40px; max-width: 800px; }
        .item-card { padding: 32px; border-left: 2px solid rgba(15, 23, 42, 0.1); background: rgba(255, 255, 255, 0.4); transition: all 0.3s ease; }
        .item-card:hover { border-left-color: var(--cobalt-accent); background: #FFFFFF; box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04); }
        .bullet { display: block; width: 8px; height: 8px; background-color: var(--cobalt-accent); margin-bottom: 16px; border-radius: 50%; }
        .item-card h4 { color: var(--text-primary); font-weight: 400; }
        @media(max-width: 1024px) {
          .hub-layout { flex-direction: column; }
          .hub-sidebar { width: 100%; border-bottom: 1px solid rgba(15, 23, 42, 0.1); padding-bottom: 32px; }
          .sticky-nav { position: relative; top: 0; }
          .sticky-nav ul { flex-direction: row; flex-wrap: wrap; gap: 24px; }
        }
      `}</style>
    </>
  );
}
