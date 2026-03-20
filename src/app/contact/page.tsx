'use client';

import React, { useEffect, useState } from 'react';

export default function Contact() {
  const [office, setOffice] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Basic client-side param reading
    const searchParams = new URLSearchParams(window.location.search);
    const officeParam = searchParams.get('office');
    if (officeParam) {
      setOffice(officeParam);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="contact-hero">
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
          <h1>Contact COLEMAN</h1>
          <p className="subtitle">
            Get in touch with our global headquarters or route your inquiry to a specific regional office.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            
            <div className="contact-info glass-card">
              <h2>Global Headquarters</h2>
              <p className="info-desc">For general inquiries, partnership opportunities, or media relations, contact our central operations in London.</p>
              
              <div className="info-list">
                <div className="info-item">
                  <strong>Address</strong>
                  <p>3rd Floor, 100 Coleman Street<br/>London, EC2R 5BJ<br/>United Kingdom</p>
                </div>
                <div className="info-item">
                  <strong>Phone</strong>
                  <p>+44 (0) 20 7410 0339</p>
                </div>
                <div className="info-item">
                  <strong>Email</strong>
                  <p>info@coleman-international.com</p>
                </div>
              </div>
            </div>

            <div className="contact-form glass-card">
              {submitted ? (
                <div className="success-message">
                  <h3>Thank you for reaching out</h3>
                  <p>A COLEMAN representative will contact you shortly regarding your inquiry.</p>
                  <button className="btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: '24px' }}>Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2>Send us a message</h2>
                  
                  <div className="form-group">
                    <label>Inquiry routed to (Optional)</label>
                    <input 
                      type="text" 
                      value={office} 
                      onChange={(e) => setOffice(e.target.value)} 
                      placeholder="e.g. London Office, Global Board..." 
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group half">
                      <label>First Name *</label>
                      <input type="text" required placeholder="John" />
                    </div>
                    <div className="form-group half">
                      <label>Last Name *</label>
                      <input type="text" required placeholder="Doe" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Corporate Email *</label>
                    <input type="email" required placeholder="j.doe@company.com" />
                  </div>

                  <div className="form-group">
                    <label>Message / Requirements *</label>
                    <textarea required rows={5} placeholder="How can COLEMAN assist your organization?"></textarea>
                  </div>

                  <button type="submit" className="btn-primary submit-btn">Submit Inquiry</button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero { background: var(--bg-primary); text-align: left; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
        .container { max-width: 1400px; margin: 0 auto; padding: 40px; }
        h1 { font-size: 56px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; }
        .subtitle { color: var(--text-secondary); font-size: 20px; max-width: 800px; line-height: 1.6; }
        
        .contact-content { background: var(--bg-secondary); padding: 80px 0; min-height: 70vh; }
        .contact-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 40px; }
        
        .glass-card { padding: 48px; }
        
        .contact-info h2, .contact-form h2 { font-size: 32px; color: var(--text-primary); margin-bottom: 24px; }
        .info-desc { color: var(--text-secondary); line-height: 1.6; margin-bottom: 40px; font-size: 16px; }
        
        .info-list { display: flex; flex-direction: column; gap: 32px; }
        .info-item strong { display: block; color: var(--text-primary); margin-bottom: 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; }
        .info-item p { color: var(--text-secondary); line-height: 1.5; font-size: 16px; }

        form { display: flex; flex-direction: column; gap: 24px; }
        .form-row { display: flex; gap: 24px; }
        .half { flex: 1; }
        
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label { color: var(--text-primary); font-size: 14px; font-weight: 500; }
        .form-group input, .form-group textarea {
          background: #FFFFFF; border: 1px solid rgba(15, 23, 42, 0.1); color: var(--text-primary);
          padding: 14px 16px; border-radius: 4px; font-size: 16px; transition: all 0.3s ease; font-family: inherit;
        }
        .form-group input:focus, .form-group textarea:focus {
          outline: none; border-color: var(--cobalt-accent); box-shadow: 0 0 0 2px rgba(2, 132, 199, 0.1);
        }

        .submit-btn { padding: 16px 32px; font-size: 16px; margin-top: 16px; align-self: flex-start; }

        .success-message { text-align: center; padding: 40px 0; }
        .success-message h3 { color: var(--text-primary); font-size: 28px; margin-bottom: 16px; }
        .success-message p { color: var(--text-secondary); font-size: 18px; }

        @media(max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { flex-direction: column; }
        }
      `}</style>
    </>
  );
}
