'use client';

import React, { useState, useEffect } from 'react';

export default function TheFirm() {
  const [activeTab, setActiveTab] = useState('why');

  const globalBoard = [
    { name: "Stephen Hamlet", role: "CHIEF EXECUTIVE OFFICER", bio: "Stephen Hamlet was recruited as COLEMAN International’s CEO in May 2017. He led COLEMAN to the prestigious 'Network of the Year' award in 2019, whilst in the same year achieving individual recognition by being awarded with 'Personality of the Year'.", img: "https://russellbedford.com/media/8277/stephen-hamlet_int-board-page-removebg-preview.jpg" },
    { name: "Daniel Ryba", role: "GLOBAL CHAIR", bio: "Daniel Ryba is a partner of COLEMAN Argentina, an approved transnational audit firm with a team of around 210 people. Daniel graduated in Actuarial Sciences and gained diverse experience as consultant in a leading global company.", img: "https://russellbedford.com/media/8307/daniel-ryba-7-2.png" },
    { name: "Stephen Banks", role: "BOARD MEMBER", bio: "Board director representing the European region. Specialized in corporate taxation and structuring.", img: "https://russellbedford.com/media/9543/stephen-banks-removebg-preview.jpg" },
    { name: "Emmanuel Dupeux", role: "BOARD MEMBER", bio: "Based in France, Emmanuel serves on the Global Board representing the EMEA region.", img: "https://russellbedford.com/media/8284/emmanuel-dupeux-removebg-preview.jpg" },
    { name: "Gavin Foo", role: "BOARD MEMBER", bio: "Board director representing the APAC region, delivering value from Malaysia.", img: "https://russellbedford.com/media/10031/gavin_profile.jpg" },
    { name: "Ricardo Garcia-Nieto", role: "BOARD MEMBER", bio: "Spanish board member providing global guidance on tax and compliance strategies.", img: "https://russellbedford.com/media/8302/ricardo-garcia-removebg-preview-3.jpg" },
    { name: "Steve Horn", role: "BOARD MEMBER", bio: "Board director representing North America and delivering CPA best practices.", img: "https://russellbedford.com/media/8290/steve-horn-removebg-preview.jpg" },
    { name: "Javier Jimenez", role: "BOARD MEMBER", bio: "Board director originating from Mexico, supporting LATAM strategy and expansion.", img: "https://russellbedford.com/media/8285/javier-jimenez-removebg-preview.jpg" },
    { name: "Deanna Salo", role: "BOARD MEMBER", bio: "Leading regional board member representing the United States market structure.", img: "https://russellbedford.com/media/8291/image-2.png" },
    { name: "Peter Shields", role: "BOARD MEMBER", bio: "Board director connecting the Pacific and Australasia regions to the core network.", img: "https://russellbedford.com/media/9864/peter-shields3.png" }
  ];

  const executiveTeam = [
    { name: "Chris Borneman", role: "HEAD OF OPERATIONS", bio: "Chris joined us with over 30 years as a soldier and diplomat. He brings a wealth of experience in international relations.", img: "https://russellbedford.com/media/10534/chrisborneman.png" },
    { name: "Helen Bimbassis", role: "DIRECTOR OF PROFESSIONAL STANDARDS", bio: "Helen brings a wealth of experience in technical audit, developing audit methodology and providing audit-specialised training.", img: "https://russellbedford.com/media/10632/helen-web-image.png" },
    { name: "Kathryn Davis", role: "ASSOCIATE DIRECTOR OF ENGAGEMENT", bio: "Kathryn is responsible for encouraging and facilitating member engagement across the network.", img: "https://russellbedford.com/media/8313/kathryn-removebg-preview.jpg" },
    { name: "Abby Catchpowle", role: "MARKETING MANAGER", bio: "Abby is the Marketing and Communications Manager at COLEMAN, working closely on marketing, communications and brand initiatives.", img: "https://russellbedford.com/media/11313/abby-catchpowle.png" },
  ];

  return (
    <div className="firm-page-wrapper">
      <section className="about-hero">
        <div className="container hero-container">
          <div className="badge">ABOUT US</div>
          <h1>The Firm</h1>
          <p className="subtitle">
            A Tier-1 global consulting and accounting framework built on excellence, rigor, and the collective expertise of our worldwide team.
          </p>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="sticky-nav-wrapper">
        <div className="container">
          <div className="tab-navigation">
            <button className={`tab-btn ${activeTab === 'why' ? 'active' : ''}`} onClick={() => setActiveTab('why')}>Why COLEMAN?</button>
            <button className={`tab-btn ${activeTab === 'values' ? 'active' : ''}`} onClick={() => setActiveTab('values')}>Core Values</button>
            <button className={`tab-btn ${activeTab === 'alliances' ? 'active' : ''}`} onClick={() => setActiveTab('alliances')}>Global Alliances</button>
            <button className={`tab-btn ${activeTab === 'cases' ? 'active' : ''}`} onClick={() => setActiveTab('cases')}>Case Studies</button>
            <button className={`tab-btn ${activeTab === 'leadership' ? 'active' : ''}`} onClick={() => setActiveTab('leadership')}>Leadership</button>
          </div>
        </div>
      </div>

      <div className="tab-content-area">
        <div className="container">
          
          {/* TAB 1: WHY COLEMAN */}
          {activeTab === 'why' && (
            <div className="tab-pane fade-in">
              <div className="split-content">
                <div className="text-col">
                  <h2>Why COLEMAN?</h2>
                  <p className="lead">In a world of complex cross-border regulations and rapid market evolution, COLEMAN provides the certainty and agility that ambitious businesses demand.</p>
                  <p>When you choose a COLEMAN firm, you are not engaging just a local accountant or auditor; you are tapping into a globally integrated ecosystem of professionals. We deliver the precise insights, localized legal understanding, and relentless quality control typical of the Big 4, but with the personalized, agile service of a boutique partnership.</p>
                  
                  <div className="metrics-grid">
                    <div className="metric-box">
                      <span className="big-num">100+</span>
                      <span className="metric-label">Countries Globally</span>
                    </div>
                    <div className="metric-box">
                      <span className="big-num">11,000+</span>
                      <span className="metric-label">Professionals</span>
                    </div>
                    <div className="metric-box">
                      <span className="big-num">$1B+</span>
                      <span className="metric-label">Global Revenues</span>
                    </div>
                    <div className="metric-box">
                      <span className="big-num">40</span>
                      <span className="metric-label">Years of Excellence</span>
                    </div>
                  </div>
                </div>
                <div className="img-col">
                  <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1000" alt="COLEMAN Global Team" className="content-img shadow-lg" />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CORE VALUES */}
          {activeTab === 'values' && (
            <div className="tab-pane fade-in">
              <div className="center-header">
                <h2>Our Core Values</h2>
                <p className="subtitle">The foundational principles that guide every audit, every tax strategy, and every consultation we perform worldwide.</p>
              </div>

              <div className="values-grid-display">
                <div className="value-card glass-card">
                  <div className="v-icon">✓</div>
                  <h3>Uncompromising Integrity</h3>
                  <p>In the financial services sector, trust is our primary currency. We uphold the highest ethical standards, ensuring independence, transparency, and rigorous compliance in every jurisdiction we operate.</p>
                </div>
                <div className="value-card glass-card">
                  <div className="v-icon">★</div>
                  <h3>Excellence & Precision</h3>
                  <p>We commit to technical superiority. Our Continuous Professional Development and stringent quality assurance programs guarantee that our deliverables meet the highest international benchmarks.</p>
                </div>
                <div className="value-card glass-card">
                  <div className="v-icon">🤝</div>
                  <h3>Collaborative Agility</h3>
                  <p>We understand that business moves fast. Our network is designed to be agile, allowing members across the globe to collaborate instantly, providing rapid solutions to complex multinational challenges.</p>
                </div>
                <div className="value-card glass-card">
                  <div className="v-icon">🌍</div>
                  <h3>Local Depth, Global Reach</h3>
                  <p>We believe in the power of local expertise combined with global frameworks. Our firms are deeply rooted in their local economies, offering unmatched insights into regional business cultures and legislations.</p>
                </div>
              </div>
              
              <div className="glass-card mission-box">
                <div className="mission-split">
                  <div>
                    <h4>Our Vision</h4>
                    <p>To be the global network of choice for independent professional services firms committed to sharing core values and enabling their clients to do better business globally.</p>
                  </div>
                  <div className="divider-vert"></div>
                  <div>
                    <h4>Our Mission</h4>
                    <p>COLEMAN equips and empowers its people so that they, and their clients, go further to a better future, fostering sustainable economic growth and security.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ALLIANCES */}
          {activeTab === 'alliances' && (
            <div className="tab-pane fade-in">
              <div className="split-content reverse">
                <div className="text-col">
                  <h2>Strategic Global Alliances</h2>
                  <p className="lead">We don't operate in a vacuum. COLEMAN's strength is amplified by our strategic affiliations with the world's most prestigious professional bodies.</p>
                  <div className="alliance-list">
                    <div className="alliance-item">
                      <h4>Forum of Firms (IFAC)</h4>
                      <p>COLEMAN is a proud and active member of the Forum of Firms. The Forum is an independent association of international networks of firms that perform transnational audits, committed to consistent and high-quality standards of financial reporting and auditing practices worldwide.</p>
                    </div>
                    <div className="alliance-item">
                      <h4>EGIAN</h4>
                      <p>We are a founding member of EGIAN (European Group of International Accounting Networks and Associations), collaborating on European regulatory issues and representing the profession at the highest institutional levels.</p>
                    </div>
                    <div className="alliance-item">
                      <h4>Strategic Tech Partnerships</h4>
                      <p>We partner with leading global technology providers (like Caseware and Thomson Reuters) to ensure our network firms are equipped with state-of-the-art predictive analytics, secure portals, and AI-driven audit methodologies.</p>
                    </div>
                  </div>
                </div>
                <div className="img-col">
                  <div className="alliance-badges-grid">
                    <div className="badge-box">Forum of Firms</div>
                    <div className="badge-box">IFAC</div>
                    <div className="badge-box">EGIAN</div>
                    <div className="badge-box">AICPA</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CASE STUDIES */}
          {activeTab === 'cases' && (
            <div className="tab-pane fade-in">
              <div className="center-header">
                <h2>Client Case Studies</h2>
                <p className="subtitle">Real-world examples of COLEMAN delivering transformative results across borders.</p>
              </div>

              <div className="cases-grid">
                <div className="case-card glass-card">
                  <div className="case-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600')" }}></div>
                  <div className="case-content">
                    <span className="case-tag">Cross-Border M&A</span>
                    <h3>Acquisition of European Manufacturing Group</h3>
                    <p>When a North American conglomerate acquired a European manufacturing group with operations in 5 countries, COLEMAN mobilized a cross-border due diligence team within 48 hours. We provided seamless tax structuring, mitigating heavy post-acquisition tax burdens and ensuring full regulatory compliance across all jurisdictions.</p>
                  </div>
                </div>

                <div className="case-card glass-card">
                  <div className="case-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600')" }}></div>
                  <div className="case-content">
                    <span className="case-tag">Global Audit</span>
                    <h3>Statutory Audit for Tech Unicorn</h3>
                    <p>A rapidly expanding tech unicorn needed statutory audits across 12 countries in APAC and EMEA to prepare for an IPO. COLEMAN coordinated a centralized audit strategy directed from London, drastically reducing the client's administrative burden and delivering a flawless set of consolidated IFRS statements on a rigorous deadline.</p>
                  </div>
                </div>

                <div className="case-card glass-card">
                  <div className="case-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600')" }}></div>
                  <div className="case-content">
                    <span className="case-tag">Transfer Pricing</span>
                    <h3>Optimizing Global Supply Chains</h3>
                    <p>A multinational retailer faced aggressive tax audits regarding their intercompany pricing models. COLEMAN's International Tax Center of Excellence redesigned their global transfer pricing policy, establishing Advance Pricing Agreements (APAs) with three tax authorities, securing long-term operational certainty and significant cost savings.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: LEADERSHIP */}
          {activeTab === 'leadership' && (
            <div className="tab-pane fade-in">
              <div className="center-header">
                <h2>Global Board of Directors</h2>
                <p className="subtitle">The International Board consists of a Global Chair and directors from member firms throughout the network, representing the various regions.</p>
              </div>
              <div className="leaders-grid">
                {globalBoard.map((leader, i) => (
                  <div key={i} className="leader-card">
                    <div className="leader-image-wrapper">
                      <img src={leader.img} alt={leader.name} className="leader-img" />
                    </div>
                    <div className="leader-info glass-card">
                      <h3>{leader.name}</h3>
                      <span className="role">{leader.role}</span>
                      <p className="bio">{leader.bio}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="center-header" style={{ marginTop: '100px' }}>
                <h2>Executive Team</h2>
                <p className="subtitle">London-based executive team driving the day-to-day global operations.</p>
              </div>
              <div className="leaders-grid">
                {executiveTeam.map((member, i) => (
                  <div key={i} className="leader-card">
                    <div className="leader-image-wrapper">
                      <img src={member.img} alt={member.name} className="leader-img" />
                    </div>
                    <div className="leader-info glass-card">
                      <h3>{member.name}</h3>
                      <span className="role">{member.role}</span>
                      <p className="bio">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      <style jsx>{`
        .firm-page-wrapper { background: var(--bg-primary); min-height: 100vh; }
        .about-hero { background: var(--bg-primary); text-align: center; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
        .hero-container { padding-top: 180px; padding-bottom: 60px; }
        .badge { background: rgba(2, 132, 199, 0.1); color: var(--cobalt-accent); display: inline-block; font-size: 13px; font-weight: 700; padding: 6px 16px; border-radius: 20px; letter-spacing: 1px; margin-bottom: 24px; }
        h1 { font-size: 64px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; line-height: 1.1; }
        .subtitle { color: var(--text-secondary); font-size: 22px; max-width: 800px; margin: 0 auto; line-height: 1.6; }
        
        /* Sticky Tabs UI */
        .sticky-nav-wrapper {
          position: sticky; top: 71px; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(12px);
          z-index: 100; border-bottom: 1px solid rgba(15, 23, 42, 0.08); box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }
        .tab-navigation {
          display: flex; gap: 32px; overflow-x: auto; padding: 0 20px; scrollbar-width: none;
        }
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
        .fade-in { animation: fadeIn 0.5s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        /* General Layouts */
        .split-content { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .split-content.reverse { direction: rtl; }
        .split-content.reverse > * { direction: ltr; }
        .text-col h2 { font-size: 40px; margin-bottom: 24px; }
        .text-col p.lead { font-size: 20px; color: var(--text-primary); margin-bottom: 24px; line-height: 1.6; }
        .text-col p { font-size: 17px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px; }
        
        .content-img { width: 100%; border-radius: 12px; object-fit: cover; aspect-ratio: 4/3; }
        .shadow-lg { box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .metrics-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 40px; }
        .metric-box { display: flex; flex-direction: column; }
        .big-num { font-size: 48px; font-weight: 300; color: var(--cobalt-accent); line-height: 1; font-family: var(--font-heading); }
        .metric-label { font-size: 15px; color: var(--text-secondary); margin-top: 8px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }

        .center-header { text-align: center; max-width: 800px; margin: 0 auto 60px; }
        .center-header h2 { font-size: 40px; margin-bottom: 16px; }

        .values-grid-display { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; margin-bottom: 40px; }
        .value-card { padding: 40px; transition: transform 0.3s ease; }
        .value-card:hover { transform: translateY(-5px); }
        .v-icon { font-size: 40px; margin-bottom: 24px; }
        .value-card h3 { font-size: 24px; margin-bottom: 16px; }
        .value-card p { font-size: 16px; color: var(--text-secondary); line-height: 1.6; }
        
        .mission-box { padding: 40px; background: linear-gradient(135deg, #1e293b, var(--coleman-navy)); color: white; border: none; }
        .mission-box h4 { color: white; font-size: 24px; margin-bottom: 16px; }
        .mission-box p { color: #cbd5e1 !important; font-size: 18px; line-height: 1.6; }
        .mission-split { display: grid; grid-template-columns: 1fr 1px 1fr; gap: 40px; }
        .divider-vert { background: rgba(255,255,255,0.1); width: 1px; height: 100%; }

        .alliance-list { display: flex; flex-direction: column; gap: 32px; margin-top: 40px; }
        .alliance-item h4 { font-size: 20px; color: var(--text-primary); margin-bottom: 12px; }
        .alliance-item p { margin-bottom: 0; font-size: 16px; }
        
        .alliance-badges-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .badge-box { background: white; border: 1px solid rgba(0,0,0,0.05); padding: 40px 20px; border-radius: 8px; text-align: center; font-size: 20px; font-weight: 600; color: var(--text-primary); box-shadow: 0 4px 20px rgba(0,0,0,0.03); display: flex; align-items: center; justify-content: center; height: 160px; }

        .cases-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 32px; }
        .case-card { padding: 0; overflow: hidden; display: flex; flex-direction: column; }
        .case-img { height: 220px; background-size: cover; background-position: center; border-bottom: 3px solid var(--cobalt-accent); }
        .case-content { padding: 32px; flex-grow: 1; }
        .case-tag { font-size: 12px; font-weight: 700; color: var(--cobalt-accent); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; display: block; }
        .case-content h3 { font-size: 22px; margin-bottom: 16px; line-height: 1.4; color: var(--text-primary); }
        .case-content p { font-size: 15px; color: var(--text-secondary); line-height: 1.6; }

        .leaders-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; }
        .leader-card { display: flex; flex-direction: column; align-items: center; position: relative; }
        .leader-image-wrapper { width: 100%; height: 320px; overflow: hidden; border-radius: 8px 8px 0 0; }
        .leader-img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: filter 0.5s ease; }
        .leader-card:hover .leader-img { filter: grayscale(0%); }
        .leader-info { width: 95%; margin-top: -40px; padding: 32px; position: relative; z-index: 10; min-height: 220px; }
        .leader-info h3 { color: var(--text-primary); font-size: 24px; margin-bottom: 8px; }
        .role { display: block; color: var(--cobalt-accent); font-weight: 500; margin-bottom: 16px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; }
        .bio { color: var(--text-secondary); line-height: 1.6; font-size: 14px; }

        @media (max-width: 1024px) {
          .split-content { grid-template-columns: 1fr; gap: 40px; }
          .mission-split { grid-template-columns: 1fr; }
          .divider-vert { display: none; }
          .alliance-badges-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 48px; }
          .values-grid-display { grid-template-columns: 1fr; }
          .tab-navigation { gap: 20px; }
          .metrics-grid { grid-template-columns: 1fr; gap: 24px; }
        }
      `}</style>
    </div>
  );
}
