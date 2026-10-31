import { useEffect, useState } from 'react'
import '../assets/css/technical-seo-geo-checker.css'

const analysisSections = [
  {
    title: 'Page Speed and Core Web Vitals',
    description: 'Site speed impacts both traditional search rankings and AI crawling efficiency. Our tool analyzes:',
    items: [
      ['Loading Performance', 'First Contentful Paint (FCP) and Largest Contentful Paint (LCP)'],
      ['Interactivity', 'First Input Delay (FID) and Interaction to Next Paint (INP)'],
      ['Visual Stability', 'Cumulative Layout Shift (CLS) measurements'],
      ['Server Response Times', 'Time to First Byte (TTFB) analysis'],
      ['Resource Optimization', 'Image compression, CSS/JavaScript minification'],
    ],
    closing: 'Google’s Core Web Vitals are ranking factors, and fast-loading content is more likely to be referenced by AI systems seeking reliable sources.',
  },
  {
    title: 'Crawlability and Indexation Health',
    description: 'Both traditional search engines and AI systems need to access your content effectively. Our checker evaluates:',
    items: [
      ['Robots.txt Configuration', 'Ensuring proper crawl directives for all search systems'],
      ['XML Sitemap Status', 'Sitemap presence, accessibility, and structure'],
      ['Internal Link Structure', 'Link equity distribution and content discovery paths'],
      ['Crawl Depth', 'How easily search engines and AI systems reach all pages'],
      ['Redirect Chains', 'Identifying unnecessary redirects that waste crawl budget'],
      ['Broken Links', 'Internal and external link health assessment'],
    ],
  },
  {
    title: 'On-Page Technical Elements',
    description: 'Critical factors that impact both traditional SEO and AI content evaluation:',
    items: [
      ['Title Tag Optimization', 'Clear, descriptive titles that AI systems can understand'],
      ['Meta Description Analysis', 'Compelling descriptions that summarize content value'],
      ['Heading Structure', 'Proper H1-H6 hierarchy for content organization'],
      ['Schema Markup', 'Structured data that helps AI systems understand context'],
      ['Canonical Tags', 'Preventing duplicate content issues across platforms'],
      ['Image Optimization', 'Alt tags and descriptions that provide context to Google and LLMs'],
    ],
  },
]

const geoSections = [
  {
    title: 'AI Search Readiness Assessment',
    description: 'Our GEO analysis evaluates how well your content performs in AI-powered search environments:',
    items: [
      ['Content Structure', 'Clear, logical information hierarchy that AI systems can parse'],
      ['Answer-Focused Content', 'Direct responses to common questions in your industry'],
      ['Citation Worthiness', 'Authority signals that make AI systems more likely to reference your content'],
      ['Factual Accuracy', 'Content verification elements that build AI system trust'],
      ['Context Clarity', 'Sufficient background information for AI understanding'],
    ],
  },
  {
    title: 'LLM Optimization Factors',
    description: 'Large Language Model Optimization requires specific content characteristics:',
    items: [
      ['Semantic Richness', 'Comprehensive topic coverage that provides context'],
      ['Entity Recognition', 'Clear identification of people, places, organizations, and concepts'],
      ['Relationship Mapping', 'Explicit connections between related topics and ideas'],
      ['Source Attribution', 'Proper citations and references that establish credibility'],
      ['Update Freshness', 'Recent content that reflects current information'],
    ],
  },
  {
    title: 'AI Search Optimization Elements',
    description: 'Full Search Optimization focuses on content that generative AI systems prefer to reference:',
    items: [
      ['Authoritative Sources', 'Domain authority and expertise signals'],
      ['Comprehensive Coverage', 'Thorough treatment of topics rather than shallow content'],
      ['Structured Information', 'Lists, tables, and organized data that AI can extract'],
      ['Question-Answer Formats', 'Content structured to directly address user queries'],
      ['Fact-Based Content', 'Verifiable information with supporting evidence'],
    ],
  },
]

function AnalysisList({ items }) {
  return (
    <ul className="checker-list">
      {items.map(([label, detail]) => (
        <li key={label}><strong>{label}:</strong> {detail}</li>
      ))}
    </ul>
  )
}

function AnalysisGroup({ title, description, items, closing }) {
  return (
    <section className="checker-copy-group">
      <h3>{title}</h3>
      <p>{description}</p>
      <AnalysisList items={items} />
      {closing && <p>{closing}</p>}
    </section>
  )
}

function TechnicalSeoGeoChecker() {
  const [url, setUrl] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Technical SEO/GEO Checker | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Live website scanning is not connected in this preview. Configure an audit service to analyze URLs.')
  }

  return (
    <main className="technical-checker">
      <section className="checker-hero" aria-labelledby="checker-title">
        <p className="checker-eyebrow">Technical SEO/GEO Checker</p>
        <h1 id="checker-title">
          <span>Audit Your Site&apos;s Technical Health</span>
          <span>for SEO &amp; GEO</span> 
        </h1>
        <p>
          This tool will identify issues that are holding your website back on
          <br className="checker-desktop-break" /> search engines and LLMs. Get a full report within 10 seconds.
          <br /> Completely free and no email required.
        </p>
        <form className="checker-form" onSubmit={handleSubmit}>
          <label className="visually-hidden" htmlFor="checker-url">Website URL</label>
          <input
            id="checker-url"
            type="url"
            placeholder="Website URL"
            value={url}
            onChange={(event) => {
              setUrl(event.target.value)
              setMessage('')
            }}
            required
          />
          <button type="submit">Run Audit <span aria-hidden="true">→</span></button>
        </form>
        {message && <p className="checker-status" role="status">{message}</p>}
      </section>

      <article className="checker-content">
        <section className="checker-copy-group">
          <h2>Comprehensive Website Analysis with Our Free Technical SEO/GEO Checker</h2>
          <p>
            Search engine optimization is evolving rapidly with the rise of AI-powered search engines and generative AI responses. Our <strong>Free Technical SEO/GEO Checker</strong> delivers instant, comprehensive audits of both traditional search optimization and cutting-edge <strong>Generative Engine Optimization (GEO)</strong> factors that directly impact your website’s performance. Get immediate insights into critical SEO elements and AI search optimization opportunities that impact your visibility across all search platforms.
          </p>
          <p>
            As an <strong>SEO and GEO-focused web design agency</strong>, our team here at Azuro Digital consistently strives to drive organic traffic to our client websites through effective SEO and GEO strategies.
          </p>
        </section>

        <section className="checker-copy-group">
          <h2>Understanding Technical SEO and Generative Engine Optimization</h2>
          <p>
            Technical SEO encompasses the backend elements that help search engines crawl, index, and understand your website. <strong>Generative Engine Optimization (GEO)</strong>, also known as AI Search Optimization or LLM Optimization, focuses on optimizing content for AI-powered search engines like ChatGPT, Claude, Perplexity, and Google’s AI Overviews and AI Mode that generate responses rather than simply ranking pages.
          </p>
          <p>
            This dual approach is essential because search behavior is fundamentally changing. Users increasingly rely on AI assistants for information, and these systems evaluate content differently than traditional search algorithms. Our Free Technical SEO/GEO Checker addresses both traditional and AI-powered search optimization needs.
          </p>
        </section>

        <section className="checker-copy-group">
          <h2>Comprehensive Technical SEO Analysis</h2>
          {analysisSections.map((section) => <AnalysisGroup key={section.title} {...section} />)}
        </section>

        <section className="checker-copy-group">
          <h2>Advanced Generative Engine Optimization (GEO) Analysis</h2>
          {geoSections.map((section) => <AnalysisGroup key={section.title} {...section} />)}
        </section>

        <section className="checker-copy-group">
          <h2>Instant Results for Modern Search Optimization</h2>
          <AnalysisGroup
            title="Immediate Analysis Without Registration"
            description={<>Unlike expensive SEO tools that require subscriptions, our <strong>Free Technical SEO/GEO Checker</strong> provides comprehensive results instantly. Enter your URL and receive detailed analysis of both traditional SEO factors and Generative Engine Optimization opportunities within seconds — no registration, no email required, no hidden costs.</>}
            items={[]}
          />
          <AnalysisGroup
            title="Dual Optimization Recommendations"
            description="Every analysis provides actionable insights for both traditional search engines and AI-powered systems:"
            items={[
              ['Traditional SEO Issues', 'Classic optimization opportunities for Google, Bing, and other search engines'],
              ['GEO Opportunities', 'Specific recommendations for improving AI search visibility'],
              ['Priority Rankings', 'High-impact improvements for both optimization approaches'],
              ['Implementation Guidance', 'Step-by-step instructions for technical and content improvements'],
            ]}
          />
          <AnalysisGroup
            title="Future-Proof SEO Strategy"
            description="Our tool helps you prepare for the evolving search landscape by identifying:"
            items={[
              ['AI-Friendly Content Structures', 'Formats that work well for both human readers and AI systems'],
              ['Cross-Platform Optimization', 'Elements that improve visibility across traditional and AI search'],
              ['Emerging Optimization Opportunities', 'New factors becoming important in AI-powered search'],
            ]}
          />
        </section>

        <section className="checker-copy-group">
          <h2>Why Choose Our Free Technical SEO/GEO Checker?</h2>
          <AnalysisGroup
            title="Cutting-Edge Analysis"
            description={<>While most SEO tools focus solely on traditional search factors, our checker provides insights into both established SEO principles and emerging <strong>Generative Engine Optimization</strong> opportunities. Stay ahead of the search evolution curve with comprehensive analysis.</>}
            items={[]}
          />
          <AnalysisGroup
            title="Professional-Grade Insights"
            description="Access enterprise-level analysis covering all technical SEO and GEO factors, providing insights typically reserved for expensive consulting services and premium tools."
            items={[]}
          />
          <AnalysisGroup
            title="No Barriers to Entry"
            description="Test unlimited URLs without restrictions, registration, or payment requirements. Audit your website, competitors’ sites, or client sites — our checker handles all requests freely."
            items={[]}
          />
          <AnalysisGroup
            title="Regular Algorithm Updates"
            description="Both traditional search algorithms and AI system preferences evolve rapidly. Our tool stays current with the latest optimization factors across all search platforms."
            items={[]}
          />
        </section>

        <section className="checker-copy-group">
          <h2>Common Issues Identified by Our Checker</h2>
          <AnalysisGroup
            title="Traditional SEO Problems"
            description=""
            items={[
              ['Duplicate Content', 'Title tags, meta descriptions, and content that dilutes rankings'],
              ['Site Architecture Weaknesses', 'Poor internal linking and navigation structures'],
              ['Performance Bottlenecks', 'Technical factors impacting speed and user experience'],
              ['Mobile Optimization Gaps', 'Responsive design and mobile usability issues'],
            ]}
          />
          <AnalysisGroup
            title="GEO Optimization Opportunities"
            description=""
            items={[
              ['Content Depth Issues', 'Shallow content that AI systems won’t reference'],
              ['Unclear Information Hierarchy', 'Poor content structure that confuses AI parsing'],
              ['Missing Context', 'Insufficient background information for AI understanding'],
              ['Authority Signal Gaps', 'Weak credibility markers that reduce AI citation likelihood'],
            ]}
          />
        </section>

        <section className="checker-copy-group">
          <h2>Integration with Modern SEO Strategy</h2>
          <AnalysisGroup
            title="Comprehensive Search Presence"
            description="Optimize for both traditional search rankings and AI-generated responses. Our analysis ensures your content performs well across all search platforms and user behaviors."
            items={[]}
          />
          <AnalysisGroup
            title="Competitive Analysis"
            description="Audit competitor websites to identify both traditional SEO gaps and GEO opportunities. Understanding how competitors optimize for AI search helps inform your strategy."
            items={[]}
          />
          <AnalysisGroup
            title="Future-Focused Optimization"
            description="Prepare for continued search evolution by building content that works well for both current search engines and emerging AI-powered discovery systems."
            items={[]}
          />
        </section>

        <section className="checker-copy-group checker-get-started">
          <h2>Get Started with Next-Generation SEO Analysis</h2>
          <p>
            Don’t let outdated optimization strategies limit your search visibility in an AI-powered world. Our <strong>Free Technical SEO/GEO Checker</strong> provides comprehensive analysis of both traditional search factors and cutting-edge <strong>Generative Engine Optimization</strong> opportunities.
          </p>
          <p>
            Whether you’re optimizing for Google rankings, AI search visibility, or comprehensive search presence across all platforms, our tool delivers the insights you need to succeed in modern search environments.
          </p>
          <p>
            Ready to future-proof your search optimization? Enter your URL above and analyze your complete technical SEO and GEO audit report instantly — no signup required, completely free, with actionable recommendations for both traditional and AI search success.
          </p>
        </section>
      </article>

      <section className="checker-more-tools" aria-labelledby="checker-more-tools-title">
        <div className="checker-more-tools__heading">
          <p>Explore Further</p>
          <h2 id="checker-more-tools-title">Check Out Our Other<br />Helpful Tools</h2>
        </div>
        <a className="checker-tool-card" href="/accessible-colour-contrast-checker">
          <span className="checker-tool-card__icon" aria-hidden="true">◎</span>
          <strong>WCAG Colour Contrast Checker</strong>
          <span>Learn More <span aria-hidden="true">→</span></span>
        </a>
        <a className="checker-tool-card" href="/privacy-policy-generator">
          <span className="checker-tool-card__icon" aria-hidden="true">♧</span>
          <strong>Privacy Policy Generator</strong>
          <span>Learn More <span aria-hidden="true">→</span></span>
        </a>
      </section>
    </main>
  )
}

export default TechnicalSeoGeoChecker
