'use client';

import React from 'react';

export default function TheFirm() {
  const globalBoard = [
    { name: "Stephen Hamlet", role: "CHIEF EXECUTIVE OFFICER", bio: "Stephen Hamlet was recruited as COLEMAN International’s CEO in May 2017. With almost thirty years’ experience in professional services, Stephen has moved rapidly into business development roles with increasing responsibility. He led COLEMAN to the prestigious 'Network of the Year' award in 2019, whilst in the same year achieving individual recognition by being awarded with 'Personality of the Year'.", img: "https://russellbedford.com/media/8277/stephen-hamlet_int-board-page-removebg-preview.jpg" },
    { name: "Daniel Ryba", role: "GLOBAL CHAIR", bio: "Daniel Ryba is a partner of COLEMAN Argentina, an approved transnational audit firm with a team of around 210 people. Daniel graduated in Actuarial Sciences at the University of Buenos Aires. After his studies, Daniel gained a diverse work experience as a VP in an American insurance company, and as consultant in a leading global professional services company.", img: "https://russellbedford.com/media/8307/daniel-ryba-7-2.png" },
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
    { name: "Chris Borneman", role: "HEAD OF OPERATIONS", bio: "Chris joined us at the start of 2025, having previously run a similar network for a couple of years. Prior to that he enjoyed over 30 years as a soldier and a diplomat in a variety of countries around the world. He brings with him a wealth of experience in international relations.", img: "https://russellbedford.com/media/10534/chrisborneman.png" },
    { name: "Helen Bimbassis", role: "DIRECTOR OF PROFESSIONAL STANDARDS", bio: "Helen brings with her a wealth of experience in technical audit. She has a strong understanding in developing and implementing audit methodology, curating and providing audit-specialised training across networks.", img: "https://russellbedford.com/media/10632/helen-web-image.png" },
    { name: "Kathryn Davis", role: "ASSOCIATE DIRECTOR OF ENGAGEMENT", bio: "Kathryn is responsible for encouraging and facilitating member engagement across the network, including event management for all COLEMAN conferences.", img: "https://russellbedford.com/media/8313/kathryn-removebg-preview.jpg" },
    { name: "Abby Catchpowle", role: "MARKETING MANAGER", bio: "Abby is the Marketing and Communications Manager at COLEMAN, working closely on marketing, communications and brand initiatives.", img: "https://russellbedford.com/media/11313/abby-catchpowle.png" },
    { name: "Hira Asghar Akhtar", role: "MARKETING ASSISTANT", bio: "Hira joined COLEMAN in May 2024. She has experience with social media marketing, design and content creation.", img: "https://russellbedford.com/media/9863/hira-website.png" },
    { name: "Romina Sanabria", role: "LATAM COORDINATOR", bio: "Romina manages and enhances communications with the network's Spanish speaking member firms.", img: "https://russellbedford.com/media/8350/romina-cropped-removebg-preview-2.jpg" },
    { name: "Gemma Benson", role: "ADMINISTRATOR", bio: "Gemma has worked as an Administrator for over 20 years. She is a valuable support to the central office.", img: "https://russellbedford.com/media/9691/gemma-removebg-preview.jpg" },
    { name: "Phoebe Chin", role: "INTERN", bio: "Supporting the organisation’s network development, marketing and administrative activities.", img: "https://russellbedford.com/media/10634/phoebe-intern.png" },
    { name: "Buhle Ndlovu", role: "INTERN", bio: "Buhle joined COLEMAN as an intern, where she supports global network development.", img: "https://russellbedford.com/media/11266/buhle.png" }
  ];

  return (
    <>
      <section className="about-hero">
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
          <h1>The Firm</h1>
          <p className="subtitle">
            A Tier-1 global consulting and accounting framework built on excellence, rigor, and the collective expertise of our worldwide team.
          </p>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-item glass-card">
              <h3>Strategy</h3>
              <p>COLEMAN has been looking to build on recent and incredible successes through a process of consultation; examining why the network exists, what it aims to become and how its vision will be fulfilled.</p>
              
              <h4 style={{ color: 'var(--text-primary)', marginTop: '24px', marginBottom: '8px' }}>VISION - Why we exist</h4>
              <p>To be the global network of choice for independent professional services firms committed to sharing core values and to enabling their clients to do better business globally.</p>

              <h4 style={{ color: 'var(--text-primary)', marginTop: '24px', marginBottom: '8px' }}>MISSION - How we pursue our vision</h4>
              <p>COLEMAN equips and empowers its people so that they, and their clients, go further to a better future.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <div className="container">
          <div className="section-header">
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
        </div>
      </section>

      <section className="leadership-section" style={{ background: 'var(--bg-primary)', borderTop: '1px solid rgba(15, 23, 42, 0.05)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Executive Team</h2>
            <p className="subtitle">London-based executive team driving the day-to-day global operations of the network.</p>
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
      </section>

      <style jsx>{`
        .about-hero { background: var(--bg-primary); text-align: center; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
        h1 { font-size: 56px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; }
        .subtitle { color: var(--text-secondary); font-size: 20px; max-width: 800px; margin: 0 auto; line-height: 1.6; }
        .section-header { text-align: center; margin-bottom: 60px; }
        .section-header h2 { font-size: 40px; color: var(--text-primary); margin-bottom: 16px; }
        .container { max-width: 1400px; margin: 0 auto; padding: 80px 40px; }
        .values-section { background: var(--bg-secondary); }
        .values-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .value-item { padding: 40px; }
        .value-item h3 { font-size: 28px; color: var(--text-primary); margin-bottom: 20px; }
        .value-item p { color: var(--text-secondary); font-size: 16px; line-height: 1.7; }
        .leadership-section { background-color: var(--bg-secondary); }
        .leaders-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; }
        .leader-card { display: flex; flex-direction: column; align-items: center; position: relative; }
        .leader-image-wrapper { width: 100%; height: 320px; overflow: hidden; border-radius: 8px 8px 0 0; }
        .leader-img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: filter 0.5s ease; }
        .leader-card:hover .leader-img { filter: grayscale(0%); }
        .leader-info { width: 95%; margin-top: -40px; padding: 32px; position: relative; z-index: 10; min-height: 220px; }
        .leader-info h3 { color: var(--text-primary); font-size: 24px; margin-bottom: 8px; }
        .role { display: block; color: var(--cobalt-accent); font-weight: 500; margin-bottom: 16px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; }
        .bio { color: var(--text-secondary); line-height: 1.6; font-size: 14px; }
        @media(max-width: 768px) { .leaders-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
