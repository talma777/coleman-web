'use client';

import React from 'react';

export default function JoinUs() {
  return (
    <>
      <section className="join-hero">
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
          <h1>Join COLEMAN</h1>
          <p className="subtitle">
            If your clients or prospective clients are doing international business and you are not already part of a worldwide network of firms, you should seriously consider joining us.
          </p>
        </div>
      </section>

      <section className="join-content">
        <div className="container">
          <div className="content-grid border-grid">
            <div className="text-panel">
              <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--text-primary)' }}>Why Join COLEMAN?</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '18px', lineHeight: 1.6 }}>We are currently engaged in enhancing our geographic coverage and are looking for suitable independent firms of qualified accountants, auditors, tax advisers and business consultants in key financial centres worldwide.</p>
              
              <ul className="benefits-list">
                <li>Become part of an international organisation without losing your independence</li>
                <li>Offer your clients the benefit of a combination of international business expertise, global resources and local market knowledge</li>
                <li>Develop close relationships with the partners of other member firms through networking opportunities</li>
                <li>Enjoy exclusivity of membership in your region</li>
                <li>Endorse your corporate identity with the COLEMAN brand and benefit from our international marketing activities</li>
                <li>Obtain new business via referrals from other members of the network</li>
                <li>Share technical knowledge and practice management procedures</li>
                <li>Have ready access to complementary expertise for joint marketing initiatives</li>
              </ul>

              <div style={{ marginTop: '48px' }}>
                <a href="/login" className="btn-primary" style={{ display: 'inline-block', fontSize: '18px', padding: '16px 32px' }}>Access Membership Portal</a>
              </div>
            </div>

            <div className="image-panel">
              <div className="img-wrapper glass-card">
                 <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="Global connection" style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .join-hero { background: var(--bg-primary); }
        .container { max-width: 1400px; margin: 0 auto; padding: 40px; }
        h1 { font-size: 56px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; }
        .subtitle { color: var(--text-secondary); font-size: 20px; max-width: 800px; line-height: 1.6; }
        
        .join-content { background: var(--bg-secondary); padding: 80px 0; }
        .content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        
        .benefits-list { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 16px; }
        .benefits-list li { position: relative; padding-left: 24px; color: var(--text-primary); line-height: 1.5; font-size: 16px; }
        .benefits-list li::before {
          content: '•'; position: absolute; left: 0; color: var(--cobalt-accent); font-size: 24px; line-height: 16px;
        }

        @media(max-width: 900px) {
          .content-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
