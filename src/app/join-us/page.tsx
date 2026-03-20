'use client';

import React, { useState } from 'react';

export default function JoinUs() {
  const [activeTab, setActiveTab] = useState('benefits');

  return (
    <div className="join-page-wrapper">
      <section className="join-hero">
        <div className="container hero-container">
          <div className="badge">BECOME A MEMBER</div>
          <h1>Join Our Network</h1>
          <p className="subtitle">
            Expand your firm's reach, capabilities, and reputation by joining one of the top global accounting networks. Let's grow together.
          </p>
        </div>
      </section>

      {/* Sticky Tab Navigation */}
      <div className="sticky-nav-wrapper">
        <div className="container">
          <div className="tab-navigation">
            <button className={`tab-btn ${activeTab === 'benefits' ? 'active' : ''}`} onClick={() => setActiveTab('benefits')}>Benefits of Membership</button>
            <button className={`tab-btn ${activeTab === 'training' ? 'active' : ''}`} onClick={() => setActiveTab('training')}>Advanced Training</button>
            <button className={`tab-btn ${activeTab === 'join' ? 'active' : ''}`} onClick={() => setActiveTab('join')}>How to Join</button>
          </div>
        </div>
      </div>

      <div className="tab-content-area">
        <div className="container">
          
          {/* TAB 1: BENEFITS OF MEMBERSHIP */}
          {activeTab === 'benefits' && (
            <div className="tab-pane fade-in">
              <div className="center-header">
                <h2>Benefits of Membership</h2>
                <p className="lead" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
                  Gaining membership to the COLEMAN network means instantly expanding your domestic firm into a formidable international player.
                </p>
              </div>

              <div className="benefits-grid">
                <div className="benefit-card glass-card">
                  <span className="b-icon">🌐</span>
                  <h3>Global Referrals</h3>
                  <p>Increase your revenue stream with high-quality referrals from over 100 countries. Collaborate on lucrative multinational bids that you previously could not service alone.</p>
                </div>
                <div className="benefit-card glass-card">
                  <span className="b-icon">🛡️</span>
                  <h3>Quality Shield</h3>
                  <p>Enhance your firm’s reputation. Membership signals to your local market that your firm operates under the stringent quality controls recognized by the Forum of Firms.</p>
                </div>
                <div className="benefit-card glass-card">
                  <span className="b-icon">💡</span>
                  <h3>Centre of Excellence</h3>
                  <p>Gain access to distinct Centers of Excellence (Tax, Audit, Advisory) which provides technical resources, methodology frameworks, and specialized tax updates instantly.</p>
                </div>
                <div className="benefit-card glass-card">
                  <span className="b-icon">🎯</span>
                  <h3>Marketing & Brand</h3>
                  <p>Leverage the COLEMAN global brand, gaining access to comprehensive marketing collateral, thought leadership publications, and co-branded digital strategies.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TRAINING */}
          {activeTab === 'training' && (
            <div className="tab-pane fade-in">
              <div className="split-content">
                <div className="text-col">
                  <h2>World-Class Training</h2>
                  <p className="lead">Continuous Professional Development (CPD) is at the heart of our quality commitment.</p>
                  <p>We provide exclusive access to the COLEMAN Academy, a robust learning platform offering live interactive seminars, on-demand modules, and intensive multi-day physical conferences around the globe.</p>
                  
                  <ul className="training-list">
                    <li>
                      <strong>Technical Masterclasses:</strong> Regular updates on IFRS, ISA, and OECD tax shifts led by international partners.
                    </li>
                    <li>
                      <strong>Soft Skills & Leadership:</strong> Specialized courses for managers and emerging leaders navigating the partner track.
                    </li>
                    <li>
                      <strong>Tech & Analytics:</strong> Certification in AI-audit tools, PowerBI analytics, and advanced predictive modeling.
                    </li>
                  </ul>
                </div>
                <div className="img-col">
                  <div className="training-image image-grid">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Training Session" className="shadow-lg rounded" />
                    <img src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=600" alt="Global Conference" className="shadow-lg rounded" style={{ marginTop: '40px' }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: HOW TO JOIN */}
          {activeTab === 'join' && (
            <div className="tab-pane fade-in">
              <div className="split-content reverse">
                <div className="text-col">
                  <h2>The Application Process</h2>
                  <p className="lead">We selectively partner with firms that share our vision for uncompromising excellence. The process is rigorous, ensuring the high standards of our network are maintained.</p>
                  
                  <div className="process-steps">
                    <div className="step">
                      <div className="step-num">01</div>
                      <div className="step-content">
                        <h4>Initial Screening</h4>
                        <p>Evaluate regional exclusivity, market position, and broad alignment of values over initial discussions.</p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-num">02</div>
                      <div className="step-content">
                        <h4>Strategic Due Diligence</h4>
                        <p>Extensive review of your firm’s financials, structural independence, and compliance framework.</p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-num">03</div>
                      <div className="step-content">
                        <h4>Quality Control Audit (QCA)</h4>
                        <p>A COLEMAN International Director visits your central office to review audit files and evaluate technical capabilities.</p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-num">04</div>
                      <div className="step-content">
                        <h4>Board Approval & Integration</h4>
                        <p>Final vote by the Global Board followed by an intensive 90-day integration into our technical and marketing platforms.</p>
                      </div>
                    </div>
                  </div>

                  <a href="/contact" className="btn-primary highlight-btn" style={{ marginTop: '20px' }}>Start a Confidential Conversation</a>
                </div>
                <div className="img-col">
                   <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" alt="Joining Coleman" className="content-img shadow-lg" />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      <style jsx>{`
        .join-page-wrapper { background: var(--bg-primary); min-height: 100vh; }
        .join-hero { background: var(--bg-primary); text-align: center; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
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
        .fade-in { animation: fadeIn 0.5s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .center-header { text-align: center; margin-bottom: 60px; }
        .center-header h2 { font-size: 40px; margin-bottom: 16px; }

        .benefits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
        .benefit-card { padding: 40px; transition: transform 0.3s ease; display: flex; flex-direction: column; }
        .benefit-card:hover { transform: translateY(-5px); }
        .b-icon { font-size: 40px; margin-bottom: 24px; display: block; }
        .benefit-card h3 { font-size: 26px; margin-bottom: 16px; }
        .benefit-card p { font-size: 16px; color: var(--text-secondary); line-height: 1.6; }

        .split-content { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .split-content.reverse { direction: rtl; }
        .split-content.reverse > * { direction: ltr; }
        
        .text-col h2 { font-size: 40px; margin-bottom: 24px; }
        .lead { font-size: 20px; color: var(--text-primary); margin-bottom: 24px; line-height: 1.6; }
        .text-col p { font-size: 17px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px; }
        
        .training-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 20px; margin-top: 32px; }
        .training-list li { font-size: 16px; color: var(--text-secondary); line-height: 1.6; position: relative; padding-left: 24px; }
        .training-list li::before { content: '•'; color: var(--cobalt-accent); font-size: 24px; position: absolute; left: 0; top: -4px; }
        .training-list strong { color: var(--text-primary); }

        .image-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .image-grid img { width: 100%; height: 300px; object-fit: cover; border-radius: 8px; }
        
        .content-img { width: 100%; border-radius: 12px; object-fit: cover; aspect-ratio: 4/3; }
        .shadow-lg { box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .rounded { border-radius: 8px; }

        .process-steps { display: flex; flex-direction: column; gap: 32px; margin-top: 40px; }
        .step { display: flex; gap: 24px; }
        .step-num { font-size: 32px; font-weight: 700; color: var(--cobalt-accent); font-family: var(--font-heading); opacity: 0.8; }
        .step-content h4 { font-size: 20px; margin-bottom: 8px; color: var(--text-primary); }
        .step-content p { font-size: 15px; margin-bottom: 0; }

        .highlight-btn { display: inline-block; background: linear-gradient(135deg, var(--cobalt-accent), #0369a1); color: white; padding: 14px 32px; font-size: 16px; border-radius: 6px; font-weight: 600; text-decoration: none; transition: transform 0.3s ease, box-shadow 0.3s ease; border: none; }
        .highlight-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(2, 132, 199, 0.3); color: white; }

        @media (max-width: 1024px) {
          .split-content { grid-template-columns: 1fr; gap: 40px; }
          .benefits-grid { grid-template-columns: 1fr; }
          .image-grid { grid-template-columns: 1fr; }
          .image-grid img { height: auto; aspect-ratio: 16/9; margin-top: 0 !important; }
        }
        @media (max-width: 768px) {
          h1 { font-size: 48px; }
          .tab-navigation { justify-content: flex-start; }
          .step { flex-direction: column; gap: 12px; }
        }
      `}</style>
    </div>
  );
}
