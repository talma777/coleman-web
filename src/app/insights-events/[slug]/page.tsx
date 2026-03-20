export const runtime = 'edge';

export default async function InsightDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <>
      <section className="insight-hero">
        <div className="container" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
          <span className="badge">INSIGHT ARTICLE</span>
          <h1 style={{ marginTop: '20px' }}>{title}</h1>
        </div>
      </section>

      <section className="insight-content">
        <div className="container">
          <div className="article-body">
            <p className="lead">
              A comprehensive perspective from our global knowledge base regarding {title}.
            </p>
            <p>
              This insight has been prepared by COLEMAN's technical specialists to guide stakeholders through the ongoing evolution of market regulations, technological changes, and operational best practices.
            </p>
            <p>
              As the global marketplace continues to adapt, we provide actionable data and thought leadership to ensure our partners remain at the forefront of their respective industries.
            </p>
            <div className="author-box glass-card" style={{ marginTop: '60px', padding: '32px' }}>
              <h4>Published by COLEMAN Global Insights</h4>
              <p style={{ marginTop: '12px', fontSize: '14px' }}>For specific advisory regarding this topic, please contact your local representative via the <a href="/global-network" style={{ color: 'var(--cobalt-accent)' }}>Global Network</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .insight-hero { background: var(--bg-primary); text-align: left; border-bottom: 1px solid rgba(15, 23, 42, 0.05); }
        .container { max-width: 900px; margin: 0 auto; padding: 40px; }
        .badge { background: rgba(2, 132, 199, 0.1); color: var(--cobalt-accent); font-size: 13px; font-weight: 600; padding: 6px 16px; border-radius: 20px; text-transform: uppercase; letter-spacing: 1px; }
        h1 { font-size: 48px; color: var(--text-primary); font-weight: 300; margin-bottom: 24px; line-height: 1.2; }
        
        .insight-content { background: var(--bg-secondary); padding: 80px 0; min-height: 50vh; }
        .article-body p.lead { font-size: 22px; color: var(--text-primary); margin-bottom: 32px; font-weight: 300; line-height: 1.6; }
        .article-body p { font-size: 18px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px; }
      `}</style>
    </>
  );
}
