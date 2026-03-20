'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';

const LOCATIONS_DB = [
  // NORTH AMERICA
  { city: "New York", country: "United States", region: "North America", type: "Audit & Tax", partner: "Steve Horn", email: "ny@coleman.com", phone: "+1 212 555 0199", address: "100 Wall Street", img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=600" },
  { city: "Los Angeles", country: "United States", region: "North America", type: "Advisory & Tax", partner: "David Chen", email: "la@coleman.com", phone: "+1 310 555 0188", address: "Figueroa Street", img: "https://images.unsplash.com/photo-1518481525793-1815db4a79df?auto=format&fit=crop&q=80&w=600" },
  { city: "Chicago", country: "United States", region: "North America", type: "Audit", partner: "Michael O'Connor", email: "chicago@coleman.com", phone: "+1 312 555 0144", address: "Willis Tower", img: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80&w=600" },
  { city: "Toronto", country: "Canada", region: "North America", type: "Advisory", partner: "Sarah Jenkins", email: "toronto@coleman.com", phone: "+1 416 555 0122", address: "Bay Street Financial District", img: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&q=80&w=600" },
  { city: "Mexico City", country: "Mexico", region: "North America", type: "Audit & Tax", partner: "Javier Jimenez", email: "mexicocity@coleman.com.mx", phone: "+52 55 1234 5678", address: "Paseo de la Reforma", img: "https://images.unsplash.com/photo-1518105779142-d971f228f499?auto=format&fit=crop&q=80&w=600" },

  // LATIN AMERICA
  { city: "Buenos Aires", country: "Argentina", region: "Latin America", type: "Audit & Tax & Advisory", partner: "Daniel Ryba", email: "buenosaires@coleman.com.ar", phone: "+54 11 4321 8765", address: "Av. Corrientes 327", img: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&q=80&w=600" },
  { city: "São Paulo", country: "Brazil", region: "Latin America", type: "Audit & Tax", partner: "Carlos Silva", email: "saopaulo@coleman.com.br", phone: "+55 11 98765 4321", address: "Av. Paulista 1000", img: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&q=80&w=600" },
  { city: "Santiago", country: "Chile", region: "Latin America", type: "Tax & Advisory", partner: "Andres Valdes", email: "santiago@coleman.cl", phone: "+56 2 2345 6789", address: "Las Condes", img: "https://images.unsplash.com/photo-1533602167909-b6b553cde1ab?auto=format&fit=crop&q=80&w=600" },
  { city: "Bogota", country: "Colombia", region: "Latin America", type: "Audit & Tax", partner: "Maria Garcia", email: "bogota@coleman.co", phone: "+57 1 345 6789", address: "Chapinero", img: "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&q=80&w=600" },
  { city: "Lima", country: "Peru", region: "Latin America", type: "Audit & Business Services", partner: "Jorge Morales", email: "lima@coleman.pe", phone: "+51 1 234 5678", address: "San Isidro", img: "https://images.unsplash.com/photo-1526316275811-2eb2f67de76b?auto=format&fit=crop&q=80&w=600" },

  // EMEA
  { city: "London", country: "United Kingdom", region: "EMEA", type: "Audit, Tax, Advisory", partner: "Stephen Banks", email: "london@coleman.com", phone: "+44 20 7410 0339", address: "100 Coleman Street", img: "https://images.unsplash.com/photo-1513635269975-5969336ac1cb?auto=format&fit=crop&q=80&w=600" },
  { city: "Frankfurt", country: "Germany", region: "EMEA", type: "Audit & Tax", partner: "Klaus Müller", email: "frankfurt@coleman.de", phone: "+49 69 1234 5678", address: "MesseTurm", img: "https://images.unsplash.com/photo-1588001693026-61dc58f9fc24?auto=format&fit=crop&q=80&w=600" },
  { city: "Paris", country: "France", region: "EMEA", type: "Audit & Advisory", partner: "Emmanuel Dupeux", email: "paris@coleman.fr", phone: "+33 1 23 45 67 89", address: "La Défense", img: "https://images.unsplash.com/photo-1502602898657-3e90768cfa63?auto=format&fit=crop&q=80&w=600" },
  { city: "Milan", country: "Italy", region: "EMEA", type: "Audit & Business Services", partner: "Giovanni Rossi", email: "milan@coleman.it", phone: "+39 02 1234 567", address: "Via Monte Napoleone", img: "https://images.unsplash.com/photo-1505295551392-74ba38d73bdf?auto=format&fit=crop&q=80&w=600" },
  { city: "Madrid", country: "Spain", region: "EMEA", type: "Tax & Legal", partner: "Ricardo Garcia-Nieto", email: "madrid@coleman.es", phone: "+34 91 234 5678", address: "Paseo de la Castellana", img: "https://images.unsplash.com/photo-1539037116277-4db202017326?auto=format&fit=crop&q=80&w=600" },
  { city: "Dubai", country: "UAE", region: "EMEA", type: "Advisory & Corporate Finance", partner: "Ahmed Al-Fayed", email: "dubai@coleman.ae", phone: "+971 4 123 4567", address: "DIFC", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600" },
  { city: "Johannesburg", country: "South Africa", region: "EMEA", type: "Audit & Tax", partner: "Sarah Nkosi", email: "johannesburg@coleman.co.za", phone: "+27 11 234 5678", address: "Sandton", img: "https://images.unsplash.com/photo-1576485290814-1c72aa4faa8e?auto=format&fit=crop&q=80&w=600" },

  // ASIA PACIFIC
  { city: "Sydney", country: "Australia", region: "Asia Pacific", type: "Audit & Tax", partner: "Peter Shields", email: "sydney@coleman.com.au", phone: "+61 2 9876 5432", address: "Barangaroo Avenue", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=600" },
  { city: "Singapore", country: "Singapore", region: "Asia Pacific", type: "Advisory & Business Services", partner: "Li Wei", email: "singapore@coleman.sg", phone: "+65 6789 0123", address: "MBFC", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=600" },
  { city: "Tokyo", country: "Japan", region: "Asia Pacific", type: "Audit", partner: "Kenji Tanaka", email: "tokyo@coleman.jp", phone: "+81 3 1234 5678", address: "Marunouchi", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=600" },
  { city: "Hong Kong", country: "Hong Kong SAR", region: "Asia Pacific", type: "Corporate Finance & Tax", partner: "David Wong", email: "hk@coleman.hk", phone: "+852 1234 5678", address: "Central", img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=600" },
  { city: "Kuala Lumpur", country: "Malaysia", region: "Asia Pacific", type: "Audit & Tax", partner: "Gavin Foo", email: "kl@coleman.my", phone: "+60 3 1234 5678", address: "KLCC", img: "https://images.unsplash.com/photo-1543162002-c8402f06b9b3?auto=format&fit=crop&q=80&w=600" },
  { city: "Mumbai", country: "India", region: "Asia Pacific", type: "Audit & Transfer Pricing", partner: "Raj Patel", email: "mumbai@coleman.in", phone: "+91 22 1234 5678", address: "Bandra Kurla Complex", img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=600" }
];

export default function GlobalNetwork() {
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  const filteredLocations = useMemo(() => {
    return LOCATIONS_DB.filter(loc => {
      const matchesSearch = loc.city.toLowerCase().includes(search.toLowerCase()) || 
                            loc.country.toLowerCase().includes(search.toLowerCase()) || 
                            loc.type.toLowerCase().includes(search.toLowerCase()) ||
                            loc.partner.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = selectedRegion === 'All Regions' || loc.region === selectedRegion;
      return matchesSearch && matchesRegion;
    }).sort((a, b) => a.country.localeCompare(b.country));
  }, [search, selectedRegion]);

  const regions = ['All Regions', 'North America', 'EMEA', 'Asia Pacific', 'Latin America'];

  return (
    <>
      <section className="network-hero">
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
           <div className="badge">DIRECTORY</div>
          <h1>Global Presence</h1>
          <p className="subtitle">
            Find COLEMAN member firms, managing partners, and specialized teams operating across 100+ countries worldwide.
          </p>
        </div>
      </section>

      <section className="interactive-map-wrapper">
        <div className="container">
          
          <div className="search-interface glass-card shadow-lg" style={{ zIndex: 10, position: 'relative' }}>
            <div className="search-header">
              <h3>Search the Directory</h3>
              <div className="view-toggles">
                <button className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')}>
                  Grid View
                </button>
                <button className={`view-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')}>
                  A-Z List
                </button>
              </div>
            </div>

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

          <div className="results-summary">
            Showing {filteredLocations.length} locations {selectedRegion !== 'All Regions' && `in ${selectedRegion}`}
          </div>

          {viewMode === 'grid' ? (
            <div className="results-grid fade-in">
              {filteredLocations.map((loc, idx) => (
                <div key={idx} className="location-card glass-card">
                  <div className="city-bg" style={{ backgroundImage: `url('${loc.img}')` }}>
                    <div className="city-overlay"></div>
                    <div className="loc-header">
                      <h3>{loc.city}</h3>
                      <span className="region-badge">{loc.region}</span>
                    </div>
                    <p className="country">{loc.country}</p>
                  </div>
                  
                  <div className="office-details">
                    <div className="detail-row"><span className="label">Managing Partner</span> <span className="val">{loc.partner}</span></div>
                    <div className="detail-row"><span className="label">Expertise</span> <span className="val">{loc.type}</span></div>
                    <div className="detail-row"><span className="label">Address</span> <span className="val">{loc.address}</span></div>
                    <div className="detail-row"><span className="label">Phone</span> <span className="val">{loc.phone}</span></div>
                    <div className="detail-row"><span className="label">Email</span> <span className="val">{loc.email}</span></div>
                  </div>
                  
                  <div style={{ padding: '0 32px 32px' }}>
                    <Link href={`/contact?office=${encodeURIComponent(loc.city + ' Office')}`} className="contact-btn">
                      Request Consultation
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="list-view fade-in glass-card">
              <table className="directory-table">
                <thead>
                  <tr>
                    <th>Country / City</th>
                    <th>Region</th>
                    <th>Managing Partner</th>
                    <th>Expertise</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLocations.map((loc, idx) => (
                    <tr key={idx}>
                      <td><strong>{loc.country}</strong><br/><span className="sub">{loc.city}</span></td>
                      <td><span className="reg-pill">{loc.region}</span></td>
                      <td>{loc.partner}</td>
                      <td>{loc.type}</td>
                      <td>
                        <Link href={`/contact?office=${encodeURIComponent(loc.city + ' Office')}`} className="text-link">Contact &rarr;</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
            
          {filteredLocations.length === 0 && (
            <div className="no-results fade-in glass-card">
              <p>No COLEMAN offices found matching your criteria. Please adjust your filters or search term.</p>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .network-hero { background: var(--bg-primary); text-align: center; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
        .badge { background: rgba(2, 132, 199, 0.1); color: var(--cobalt-accent); display: inline-block; font-size: 13px; font-weight: 700; padding: 6px 16px; border-radius: 20px; letter-spacing: 1px; margin-bottom: 24px; }
        h1 { font-size: 64px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; }
        .subtitle { color: var(--text-secondary); font-size: 20px; max-width: 800px; margin: 0 auto; line-height: 1.6; }
        .container { max-width: 1400px; margin: 0 auto; padding: 40px; }
        
        .interactive-map-wrapper { background-color: var(--bg-secondary); position: relative; min-height: 60vh; padding: 80px 0; }
        .fade-in { animation: fadeIn 0.4s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .search-interface { padding: 40px; margin-bottom: 40px; display: flex; flex-direction: column; gap: 24px; border-top: 4px solid var(--cobalt-accent); }
        
        .search-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(15,23,42,0.1); padding-bottom: 16px; }
        .search-header h3 { font-size: 24px; color: var(--text-primary); font-weight: 500; }
        .view-toggles { display: flex; gap: 8px; background: rgba(15, 23, 42, 0.05); padding: 4px; border-radius: 6px; }
        .view-btn { background: transparent; border: none; padding: 8px 16px; border-radius: 4px; font-size: 14px; font-weight: 500; color: var(--text-secondary); cursor: pointer; transition: all 0.2s; }
        .view-btn.active { background: white; color: var(--cobalt-accent); box-shadow: 0 2px 8px rgba(0,0,0,0.05); }

        .search-bar { display: flex; width: 100%; margin-top: 8px; }
        .search-input { width: 100%; background: #fff; border: 1px solid rgba(15, 23, 42, 0.1); color: var(--text-primary); font-size: 18px; padding: 16px 24px; border-radius: 6px; transition: all 0.3s ease; }
        .search-input:focus { outline: none; border-color: var(--cobalt-accent); box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.1); }

        .filters { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 8px; }
        .filter-btn { background: white; border: 1px solid rgba(15, 23, 42, 0.1); color: var(--text-secondary); padding: 10px 24px; border-radius: 30px; font-size: 14.5px; font-weight: 500; cursor: pointer; transition: all 0.2s ease; }
        .filter-btn:hover { background: rgba(15, 23, 42, 0.02); }
        .filter-btn.active { background: var(--coleman-navy); border-color: var(--coleman-navy); color: white; }

        .results-summary { font-size: 15px; color: var(--text-secondary); margin-bottom: 24px; font-weight: 500; letter-spacing: 0.5px; text-transform: uppercase; }

        .results-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap: 40px; }
        .location-card { display: flex; flex-direction: column; padding: 0; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .location-card:hover { transform: translateY(-5px); box-shadow: 0 16px 50px rgba(15, 23, 42, 0.1); }

        .city-bg { position: relative; height: 180px; background-size: cover; background-position: center; padding: 32px; display: flex; flex-direction: column; justify-content: flex-end; }
        .city-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(to bottom, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.85) 100%); z-index: 1; }
        .loc-header, .country { position: relative; z-index: 2; }
        .loc-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
        .loc-header h3 { color: #FFFFFF; font-size: 28px; font-weight: 500; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
        .region-badge { background: rgba(2, 132, 199, 0.9); color: #FFF; font-size: 11px; font-weight: 700; padding: 6px 12px; border-radius: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
        .country { color: #E2E8F0; font-size: 15px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; }
        
        .office-details { display: flex; flex-direction: column; gap: 16px; flex-grow: 1; padding: 32px; }
        .detail-row { display: flex; flex-direction: column; border-bottom: 1px solid rgba(15,23,42,0.05); padding-bottom: 12px; }
        .detail-row:last-child { border-bottom: none; padding-bottom: 0; }
        .label { font-size: 12px; color: var(--text-secondary); text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 4px; }
        .val { font-size: 15px; color: var(--text-primary); font-weight: 500; }
        
        .contact-btn { background: transparent; color: var(--coleman-navy); border: 2px solid var(--coleman-navy); padding: 14px; border-radius: 6px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; text-align: center; text-decoration: none; display: block; }
        .contact-btn:hover { background: var(--coleman-navy); color: white; }

        .list-view { padding: 0; overflow-x: auto; }
        .directory-table { width: 100%; border-collapse: collapse; text-align: left; }
        .directory-table th { background: rgba(15,23,42,0.02); padding: 24px 32px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-secondary); font-weight: 600; border-bottom: 2px solid rgba(15,23,42,0.1); }
        .directory-table td { padding: 24px 32px; border-bottom: 1px solid rgba(15,23,42,0.05); vertical-align: middle; font-size: 15px; }
        .directory-table tr:hover td { background: rgba(2, 132, 199, 0.02); }
        .directory-table strong { font-size: 16px; color: var(--text-primary); }
        .sub { font-size: 14px; color: var(--text-secondary); }
        .reg-pill { background: rgba(15,23,42,0.05); padding: 6px 12px; border-radius: 30px; font-size: 13px; font-weight: 500; color: var(--text-primary); }
        .text-link { color: var(--cobalt-accent); font-weight: 600; text-decoration: none; }
        .text-link:hover { text-decoration: underline; }

        .no-results { text-align: center; padding: 80px; color: var(--text-secondary); font-size: 18px; }

        @media (max-width: 768px) {
          .search-header { flex-direction: column; gap: 16px; align-items: flex-start; }
          .directory-table td, .directory-table th { padding: 16px; }
        }
      `}</style>
    </>
  );
}
