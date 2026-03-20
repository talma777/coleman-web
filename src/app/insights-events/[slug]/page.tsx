export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { slug: 'mitigating-risks-for-smes' },
    { slug: 'mind-the-gap-bridging-the-leadership-divide-for-women-in-audit-and-accounting' },
    { slug: 'unlocking-data-s-potential-with-actuarial-expertise' },
    { slug: 'strategic-networking-for-business-professionals' },
    { slug: 'the-evolving-profile-of-the-accounting-professional' },
    { slug: 'doing-business-in-spain-insights-and-opportunities' },
    { slug: 'poland-thriving-as-a-business-and-financial-hub-in-central-europe' },
    { slug: 'the-strategic-edge-the-imperative-of-information-security-services-for-organisations' }
  ];
}

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

    </>
  );
}
