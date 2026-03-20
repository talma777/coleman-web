'use client';

import React from 'react';

export default function InsightsEvents() {
  const insights = [
    { title: "Mitigating risks for SMEs", category: "Audit", date: "Oct 2025" },
    { title: "Mind the gap: Bridging the leadership divide for women in audit and accounting", category: "Firm News", date: "Sep 2025" },
    { title: "Unlocking data's potential with actuarial expertise", category: "Advisory", date: "Aug 2025" },
    { title: "Strategic networking for business professionals", category: "Consulting", date: "Jul 2025" },
    { title: "The evolving profile of the accounting professional", category: "Firm News", date: "Jun 2025" },
    { title: "Doing business in Spain: Insights and opportunities", category: "Tax", date: "May 2025" },
    { title: "Poland: Thriving as a business and financial hub in Central Europe", category: "Advisory", date: "Apr 2025" },
    { title: "The strategic edge: The imperative of information security services for organisations", category: "Consulting", date: "Mar 2025" }
  ];

  return (
    <>
      <section className="insights-hero">
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
          <h1>Insights & Events</h1>
          <p className="subtitle">
            Global thought leadership, regulatory updates, and expert perspectives from COLEMAN professionals worldwide.
          </p>
        </div>
      </section>

      <section className="insights-grid-section">
        <div className="container">
          <div className="grid">
            {insights.map((article, idx) => (
              <div key={idx} className="insight-card glass-card">
                <div className="card-top">
                  <span className="category-badge">{article.category}</span>
                  <span className="date">{article.date}</span>
                </div>
                <h3>{article.title}</h3>
                <a href={`/insights-events/${article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="read-more">Read Article &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .insights-hero { background: var(--bg-primary); text-align: left; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
        .container { max-width: 1400px; margin: 0 auto; padding: 40px; }
        h1 { font-size: 56px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; }
        .subtitle { color: var(--text-secondary); font-size: 20px; max-width: 800px; line-height: 1.6; }
        
        .insights-grid-section { background: var(--bg-secondary); padding: 80px 0; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 32px; }
        .insight-card { padding: 32px; display: flex; flex-direction: column; transition: transform 0.3s ease; }
        .insight-card:hover { transform: translateY(-5px); box-shadow: 0 10px 40px rgba(15, 23, 42, 0.08); }
        
        .card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .category-badge { background: rgba(2, 132, 199, 0.1); color: var(--cobalt-accent); font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 12px; text-transform: uppercase; }
        .date { color: var(--text-secondary); font-size: 13px; }

        .insight-card h3 { font-size: 22px; color: var(--text-primary); margin-bottom: 32px; line-height: 1.4; flex-grow: 1; }
        .read-more { color: var(--cobalt-accent); font-weight: 500; font-size: 15px; }
      `}</style>
    </>
  );
}
