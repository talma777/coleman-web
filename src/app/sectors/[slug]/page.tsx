export const runtime = 'edge';

export default async function SectorDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const formattedSlug = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <>
      <section className="sector-hero">
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
          <h1>{formattedSlug}</h1>
          <p className="subtitle">
            Specialized consulting and financial services tailored strategically for the {formattedSlug} industry.
          </p>
        </div>
      </section>

      <section className="sector-content">
        <div className="container">
          <div className="glass-card" style={{ padding: '60px' }}>
            <h2>Industry Overview & Strategic Value</h2>
            <p style={{ marginTop: '24px', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              The <strong>{formattedSlug}</strong> sector represents a critical pillar of the global economy. At COLEMAN, our objective is to supply rigorous frameworks covering tax efficiency, capital structuring, risk mitigation, and compliance.
            </p>
            <p style={{ marginTop: '24px', fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Our dedicated global taskforce continuously monitors regulatory shifts in this sector, partnering with enterprise leaders to build resilient commercial foundations.
            </p>
            <div style={{ marginTop: '40px' }}>
              <a href="/global-network" className="btn-primary">Connect with an Industry Expert</a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .sector-hero { background: var(--bg-primary); text-align: left; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
        .container { max-width: 1400px; margin: 0 auto; padding: 40px; }
        h1 { font-size: 56px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; }
        .subtitle { color: var(--text-secondary); font-size: 20px; max-width: 800px; line-height: 1.6; }
        .sector-content { background: var(--bg-secondary); padding: 80px 0; min-height: 50vh; }
      `}</style>
    </>
  );
}
