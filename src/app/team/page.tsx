'use client';

import React, { useState } from 'react';

export default function Team() {
  const [filter, setFilter] = useState('All');

  const teamMembers = [
    // Global Board
    { sector: "Global Board", name: "Stephen Hamlet", role: "CHIEF EXECUTIVE OFFICER", bio: "Stephen Hamlet was recruited as COLEMAN International’s CEO in May 2017. With almost thirty years’ experience in professional services, Stephen has moved rapidly into business development roles with increasing responsibility. He led COLEMAN to the prestigious 'Network of the Year' award in 2019, whilst in the same year achieving individual recognition by being awarded with 'Personality of the Year'.", img: "https://russellbedford.com/media/8277/stephen-hamlet_int-board-page-removebg-preview.jpg" },
    { sector: "Global Board", name: "Daniel Ryba", role: "GLOBAL CHAIR", bio: "Daniel Ryba is a partner of COLEMAN Argentina, an approved transnational audit firm with a team of around 210 people. Daniel graduated in Actuarial Sciences at the University of Buenos Aires. After his studies, Daniel gained a diverse work experience as a VP in an American insurance company, and as consultant in a leading global professional services company.", img: "https://russellbedford.com/media/8307/daniel-ryba-7-2.png" },
    { sector: "Global Board", name: "Stephen Banks", role: "BOARD MEMBER - EMEA", bio: "Board director representing the European region. Specialized in corporate taxation and structuring.", img: "https://russellbedford.com/media/9543/stephen-banks-removebg-preview.jpg" },
    { sector: "Global Board", name: "Emmanuel Dupeux", role: "BOARD MEMBER - EMEA", bio: "Based in France, Emmanuel serves on the Global Board representing the EMEA region.", img: "https://russellbedford.com/media/8284/emmanuel-dupeux-removebg-preview.jpg" },
    { sector: "Global Board", name: "Gavin Foo", role: "BOARD MEMBER - APAC", bio: "Board director representing the APAC region, delivering value from Malaysia.", img: "https://russellbedford.com/media/10031/gavin_profile.jpg" },
    { sector: "Global Board", name: "Ricardo Garcia-Nieto", role: "BOARD MEMBER - EMEA", bio: "Spanish board member providing global guidance on tax and compliance strategies.", img: "https://russellbedford.com/media/8302/ricardo-garcia-removebg-preview-3.jpg" },
    { sector: "Global Board", name: "Steve Horn", role: "BOARD MEMBER - North America", bio: "Board director representing North America and delivering CPA best practices.", img: "https://russellbedford.com/media/8290/steve-horn-removebg-preview.jpg" },
    { sector: "Global Board", name: "Javier Jimenez", role: "BOARD MEMBER - LATAM", bio: "Board director originating from Mexico, supporting LATAM strategy and expansion.", img: "https://russellbedford.com/media/8285/javier-jimenez-removebg-preview.jpg" },
    { sector: "Global Board", name: "Deanna Salo", role: "BOARD MEMBER - North America", bio: "Leading regional board member representing the United States market structure.", img: "https://russellbedford.com/media/8291/image-2.png" },
    { sector: "Global Board", name: "Peter Shields", role: "BOARD MEMBER - APAC", bio: "Board director connecting the Pacific and Australasia regions to the core network.", img: "https://russellbedford.com/media/9864/peter-shields3.png" },

    // Executive Team (Operations, Marketing, Support)
    { sector: "Operations", name: "Chris Borneman", role: "HEAD OF OPERATIONS", bio: "Chris joined us at the start of 2025, having previously run a similar network for a couple of years. Prior to that he enjoyed over 30 years as a soldier and a diplomat in a variety of countries around the world. He brings with him a wealth of experience in international relations.", img: "https://russellbedford.com/media/10667/chris.png" },
    { sector: "Operations", name: "Helen Bimbassis", role: "DIRECTOR OF PROFESSIONAL STANDARDS", bio: "Helen brings with her a wealth of experience in technical audit. She has a strong understanding in developing and implementing audit methodology, curating and providing audit-specialised training across networks.", img: "https://russellbedford.com/media/10899/helen.png" },
    { sector: "Marketing", name: "Kathryn Davis", role: "ASSOCIATE DIRECTOR OF ENGAGEMENT", bio: "Kathryn is responsible for encouraging and facilitating member engagement across the network, including event management for all COLEMAN conferences.", img: "https://russellbedford.com/media/8086/kathryn.jpg" },
    { sector: "Marketing", name: "Abby Catchpowle", role: "MARKETING MANAGER", bio: "Abby is the Marketing and Communications Manager at COLEMAN, working closely on marketing, communications and brand initiatives.", img: "https://russellbedford.com/media/10188/abby-transparent-bg.png" },
    { sector: "Marketing", name: "Hira Asghar Akhtar", role: "MARKETING ASSISTANT", bio: "Hira joined COLEMAN in May 2024. She has experience with social media marketing, design and content creation.", img: "https://russellbedford.com/media/10191/hira2_preview_rev_1.png" },
    { sector: "Operations", name: "Romina Sanabria", role: "LATAM COORDINATOR", bio: "Romina manages and enhances communications with the network's Spanish speaking member firms.", img: "https://russellbedford.com/media/7454/romina-sanabria-scaled.jpg" },
    { sector: "Support", name: "Gemma Benson", role: "ADMINISTRATOR", bio: "Gemma has worked as an Administrator for over 20 years. She is a valuable support to the central office.", img: "https://russellbedford.com/media/5926/gemma-benson.jpg" },
    { sector: "Support", name: "Phoebe Chin", role: "INTERN", bio: "Supporting the organisation’s network development, marketing and administrative activities.", img: "https://russellbedford.com/media/10634/phoebe-intern.png" },
    { sector: "Support", name: "Buhle Ndlovu", role: "INTERN", bio: "Buhle joined COLEMAN as an intern, where she supports global network development.", img: "https://russellbedford.com/media/11266/buhle.png" }
  ];

  const sectors = ['All', 'Global Board', 'Operations', 'Marketing', 'Support'];
  
  const filteredTeam = filter === 'All' ? teamMembers : teamMembers.filter(m => m.sector === filter);

  return (
    <>
      <section className="team-hero">
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
          <h1>Our Leadership & Team</h1>
          <p className="subtitle">
            The global taskforce behind COLEMAN. View the profiles, CVs, and technical sectors of our renowned directors and executives worldwide.
          </p>
        </div>
      </section>

      <section className="team-directory">
        <div className="container">
          <div className="filters">
            {sectors.map(s => (
              <button 
                key={s} 
                className={`filter-btn ${filter === s ? 'active' : ''}`}
                onClick={() => setFilter(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="leaders-grid">
            {filteredTeam.map((member, i) => (
              <div key={i} className="leader-card glass-card">
                <div className="leader-image-wrapper">
                  <img src={member.img} alt={member.name} className="leader-img" />
                  <span className="sector-badge">{member.sector}</span>
                </div>
                <div className="leader-info">
                  <h3>{member.name}</h3>
                  <span className="role">{member.role}</span>
                  <p className="bio">{member.bio}</p>
                  <button className="cv-btn">Download Full CV &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .team-hero { background: var(--bg-primary); text-align: left; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
        h1 { font-size: 56px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; }
        .subtitle { color: var(--text-secondary); font-size: 20px; max-width: 800px; line-height: 1.6; }
        .container { max-width: 1400px; margin: 0 auto; padding: 40px; }
        
        .team-directory { background-color: var(--bg-secondary); padding: 80px 0; min-height: 80vh; }
        
        .filters { display: flex; gap: 16px; margin-bottom: 60px; flex-wrap: wrap; }
        .filter-btn {
          background: #FFFFFF; border: 1px solid rgba(15, 23, 42, 0.1); color: var(--text-secondary);
          padding: 10px 24px; border-radius: 30px; font-size: 15px; cursor: pointer; transition: all 0.3s ease;
        }
        .filter-btn:hover { background: rgba(15, 23, 42, 0.02); }
        .filter-btn.active { background: var(--coleman-navy); border-color: var(--coleman-navy); color: white; }

        .leaders-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 40px; }
        .leader-card { display: flex; flex-direction: column; overflow: hidden; padding: 0; border: 1px solid rgba(15,23,42,0.05); background: #FFF; transition: transform 0.3s ease; }
        .leader-card:hover { transform: translateY(-5px); box-shadow: 0 10px 40px rgba(15, 23, 42, 0.08); }
        
        .leader-image-wrapper { width: 100%; height: 350px; position: relative; background: #F8FAFC; overflow: hidden; }
        .leader-img { width: 100%; height: 100%; object-fit: contain; object-position: bottom; }
        
        .sector-badge { position: absolute; top: 16px; right: 16px; background: rgba(2, 132, 199, 0.1); color: var(--cobalt-accent); font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 12px; text-transform: uppercase; letter-spacing: 0.5px; backdrop-filter: blur(4px); }
        
        .leader-info { padding: 32px; flex-grow: 1; display: flex; flex-direction: column; }
        .leader-info h3 { color: var(--text-primary); font-size: 24px; margin-bottom: 8px; font-weight: 600; }
        .role { display: block; color: var(--cobalt-accent); font-weight: 500; margin-bottom: 20px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; }
        .bio { color: var(--text-secondary); line-height: 1.6; font-size: 15px; flex-grow: 1; margin-bottom: 24px; }
        
        .cv-btn { background: none; border: none; padding: 0; color: var(--coleman-navy); font-weight: 600; font-size: 14px; text-align: left; cursor: pointer; transition: color 0.3s ease; }
        .cv-btn:hover { color: var(--cobalt-accent); }

        @media(max-width: 768px) { .leaders-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
