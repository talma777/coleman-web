'use client';

import React from 'react';

export default function CorporatePolicies() {
  return (
    <>
      <section className="policies-hero">
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
          <h1>Corporate Policies</h1>
          <p className="subtitle">
            COLEMAN International's Commitment to Privacy, Security, and Integrity.
          </p>
        </div>
      </section>

      <section className="policies-content">
        <div className="container">
          <div className="glass-card" style={{ padding: '60px', marginBottom: '40px' }} id="privacy">
            <h2>Privacy Policy</h2>
            <p style={{ marginTop: '24px', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              COLEMAN collects information to provide better services to its users and network members. We strictly comply with global data regulations including GDPR and CCPA. No data is shared with third parties without explicit authorization.
            </p>
          </div>
          
          <div className="glass-card" style={{ padding: '60px', marginBottom: '40px' }} id="terms">
            <h2>Terms of Use</h2>
            <p style={{ marginTop: '24px', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              The network portal and public facing endpoints are restricted to authorized use. Information published herein is for general guidance and requires specific professional consultation via our member firms prior to execution.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '60px', marginBottom: '40px' }} id="cookies">
            <h2>Cookie Policy</h2>
            <p style={{ marginTop: '24px', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              We deploy essential cookies to improve our platform's functionality. COLEMAN does not utilize intrusive tracking mechanisms, prioritizing user autonomy and data sovereignity at all instances.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .policies-hero { background: var(--bg-primary); border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
        .container { max-width: 1000px; margin: 0 auto; padding: 40px; }
        h1 { font-size: 56px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; }
        .subtitle { color: var(--text-secondary); font-size: 20px; line-height: 1.6; }
        .policies-content { background: var(--bg-secondary); padding: 80px 0; }
        h2 { font-size: 32px; color: var(--text-primary); }
      `}</style>
    </>
  );
}
