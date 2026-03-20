'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const LOCATIONS_DB = [
  { city: "New York", country: "United States", region: "North America", type: "Audit & Tax", partner: "Steve Horn (Managing Partner)", email: "ny@coleman.com", phone: "+1 212 555 0199", address: "100 Wall Street, NY 10005", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=600" },
  { city: "Toronto", country: "Canada", region: "North America", type: "Advisory", partner: "Sarah Jenkins (Senior Partner)", email: "toronto@coleman.com", phone: "+1 416 555 0122", address: "Bay Street Financial District, M5H 2N2", img: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&q=80&w=600" },
  { city: "London", country: "United Kingdom", region: "Europe", type: "Audit & Tax & Advisory", partner: "Stephen Banks (Board Member)", email: "london@coleman.com", phone: "+44 20 7410 0339", address: "3rd Floor, 100 Coleman Street, EC2R", img: "https://images.unsplash.com/photo-1513635269975-5969336ac1cb?auto=format&fit=crop&q=80&w=600" },
  { city: "Frankfurt", country: "Germany", region: "Europe", type: "Audit & Tax", partner: "Klaus Müller (Tax Lead)", email: "frankfurt@coleman.de", phone: "+49 69 1234 5678", address: "MesseTurm, 60308 Frankfurt", img: "https://images.unsplash.com/photo-1588001693026-61dc58f9fc24?auto=format&fit=crop&q=80&w=600" },
  { city: "Milan", country: "Italy", region: "Europe", type: "Audit & Business Services", partner: "Giovanni Rossi (Audit Partner)", email: "milan@coleman.it", phone: "+39 02 1234 567", address: "Via Monte Napoleone 8, 20121", img: "https://images.unsplash.com/photo-1505295551392-74ba38d73bdf?auto=format&fit=crop&q=80&w=600" },
  { city: "Sydney", country: "Australia", region: "Asia Pacific", type: "Audit & Tax", partner: "Peter Shields (Board Member)", email: "sydney@coleman.com.au", phone: "+61 2 9876 5432", address: "Barangaroo Avenue, NSW 2000", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=600" },
  { city: "Singapore", country: "Singapore", region: "Asia Pacific", type: "Advisory & Business Services", partner: "Li Wei (Advisory Chief)", email: "singapore@coleman.sg", phone: "+65 6789 0123", address: "Marina Bay Financial Centre", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=600" },
  { city: "Tokyo", country: "Japan", region: "Asia Pacific", type: "Audit", partner: "Kenji Tanaka (Managing Partner)", email: "tokyo@coleman.jp", phone: "+81 3 1234 5678", address: "Marunouchi, Chiyoda City", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=600" },
  { city: "Buenos Aires", country: "Argentina", region: "Latin America", type: "Audit & Tax & Advisory", partner: "Daniel Ryba (Global Chair)", email: "buenosaires@coleman.com.ar", phone: "+54 11 4321 8765", address: "Av. Corrientes 327, C1043", img: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&q=80&w=600" },
  { city: "São Paulo", country: "Brazil", region: "Latin America", type: "Audit & Tax", partner: "Carlos Silva (Tax Partner)", email: "saopaulo@coleman.com.br", phone: "+55 11 98765 4321", address: "Av. Paulista 1000, 01310-100", img: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=600" },
];

export default function GlobalNetwork() {
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  const filteredLocations = LOCATIONS_DB.filter(loc => {
    const matchesSearch = loc.city.toLowerCase().includes(search.toLowerCase()) || 
                          loc.country.toLowerCase().includes(search.toLowerCase()) || 
                          loc.type.toLowerCase().includes(search.toLowerCase()) ||
                          loc.partner.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = selectedRegion === 'All Regions' || loc.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const regions = ['All Regions', 'North America', 'Europe', 'Asia Pacific', 'Latin America'];

  return (
    <>
      <section className="network-hero">
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '40px' }}>
          <h1>Interactive Global Network</h1>
          <p className="subtitle">
            Find COLEMAN member firms, managing partners, and specialized teams in over 100 countries worldwide.
          </p>
        </div>
      </section>

      <section className="interactive-map-wrapper">
        <div className="container">
          
          <div className="search-interface glass-card" style={{ zIndex: 10, position: 'relative' }}>
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search by country, city, expertise or partner name..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="filters">
              {regions.map(region => (
                <button 
                  key={region} 
                  className={`filter-btn ${selectedRegion === region ? 'active' : ''}`}
                  onClick={() => setSelectedRegion(region)}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div className="results-grid">
            {filteredLocations.map((loc, idx) => (
              <div key={idx} className="location-card glass-card">
                
                {/* City Background Header */}
                <div className="city-bg" style={{ backgroundImage: `url('${loc.img}')` }}>
                  <div className="city-overlay"></div>
                  <div className="loc-header">
                    <h3>{loc.city}</h3>
                    <span className="region-badge">{loc.region}</span>
                  </div>
                  <p className="country">{loc.country}</p>
                </div>
                
                {/* Content */}
                <div className="office-details">
                  <p><strong>Managing Partner:</strong> {loc.partner}</p>
                  <p><strong>Expertise:</strong> {loc.type}</p>
                  <p><strong>Address:</strong> {loc.address}</p>
                  <p><strong>Phone:</strong> {loc.phone}</p>
                  <p><strong>Email:</strong> {loc.email}</p>
                </div>
                
                <div style={{ padding: '0 32px 32px' }}>
                  <Link href={`/contact?office=${encodeURIComponent(loc.city + ' Office')}`} className="contact-btn">
                    Contact Office
                  </Link>
                </div>
              </div>
            ))}
            
            {filteredLocations.length === 0 && (
              <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px', color: 'var(--text-secondary)' }}>
                <p>No COLEMAN offices found matching your criteria. Please adjust your filters or search term.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        .network-hero {
          background: var(--bg-primary);
          text-align: center;
          border-bottom: 1px solid rgba(15, 23, 42, 0.05);
        }

        h1 { font-size: 56px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; }
        .subtitle { color: var(--text-secondary); font-size: 20px; max-width: 800px; margin: 0 auto; line-height: 1.6; }
        .container { max-width: 1400px; margin: 0 auto; padding: 40px; }
        
        .interactive-map-wrapper {
          background-color: var(--bg-secondary);
          position: relative;
          min-height: 60vh;
          padding: 80px 0;
        }

        .search-interface {
          padding: 32px;
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .search-bar { display: flex; width: 100%; }
        .search-input {
          width: 100%; background: #FFFFFF; border: 1px solid rgba(15, 23, 42, 0.1);
          color: var(--text-primary); font-size: 18px; padding: 16px 24px; border-radius: 4px; transition: all 0.3s ease;
        }
        .search-input:focus { outline: none; border-color: var(--cobalt-accent); box-shadow: 0 0 0 2px rgba(2, 132, 199, 0.1); }
        .search-input::placeholder { color: #94A3B8; }

        .filters { display: flex; gap: 12px; flex-wrap: wrap; }
        .filter-btn {
          background: white; border: 1px solid rgba(15, 23, 42, 0.1); color: var(--text-secondary);
          padding: 10px 20px; border-radius: 30px; font-size: 14px; cursor: pointer; transition: all 0.2s ease;
        }
        .filter-btn:hover { background: rgba(15, 23, 42, 0.02); }
        .filter-btn.active { background: var(--coleman-navy); border-color: var(--coleman-navy); color: white; }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 40px;
        }

        .location-card {
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .location-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 50px rgba(15, 23, 42, 0.1);
        }

        .city-bg {
          position: relative;
          height: 180px;
          background-size: cover;
          background-position: center;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        
        .city-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to bottom, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.85) 100%);
          z-index: 1;
        }

        .loc-header, .country {
          position: relative;
          z-index: 2;
        }

        .loc-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .loc-header h3 { color: #FFFFFF; font-size: 28px; font-weight: 500; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
        .region-badge { background: rgba(2, 132, 199, 0.8); color: #FFF; font-size: 11px; font-weight: 700; padding: 6px 12px; border-radius: 12px; text-transform: uppercase; letter-spacing: 0.5px; backdrop-filter: blur(4px); }
        
        .country { color: #E2E8F0; font-size: 15px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; }
        
        .office-details {
          display: flex; flex-direction: column; gap: 12px; flex-grow: 1;
          padding: 32px;
        }
        .office-details p { color: var(--text-secondary); font-size: 14.5px; line-height: 1.5; }
        .office-details strong { color: var(--text-primary); font-weight: 600; display: inline-block; width: 140px; }
        
        .contact-btn {
          background: transparent; color: var(--coleman-navy); border: 1px solid var(--coleman-navy);
          padding: 14px; border-radius: 4px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; text-align: center; text-decoration: none; display: block;
        }
        .contact-btn:hover { background: var(--coleman-navy); color: white; }

      `}</style>
    </>
  );
}
