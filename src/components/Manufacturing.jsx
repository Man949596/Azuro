import { useEffect, useState } from 'react'
import { portfolioProjects } from '../js/portfolioData.js'
import '../assets/css/manufacturing.css'

const heroImage = 'https://azurodigital.com/wp-content/uploads/sellick-equipment-hp-slider-1.jpg.webp'
const sellick = portfolioProjects.find((project) => project.site === 'sellickequipment.com')
const valpac = portfolioProjects.find((project) => project.site === 'valpac.com')

const processSteps = [
  {
    number: '01',
    icon: '⌕',
    title: 'Industry Research',
    text: 'We conduct research on your business, target market and competitors to ensure that your manufacturing website stands out with the right strategy for design, content and SEO.',
  },
  {
    number: '02',
    icon: '✎',
    title: 'Marketing Strategy Review',
    text: 'We review your marketing channels and sales process to create a buyer journey that speaks to your ideal customers in terms of the overall user journey, messaging and analytics.',
  },
  {
    number: '03',
    icon: '⌕',
    title: 'SEO Research & Planning',
    text: 'We do an SEO audit of your existing site and establish benchmarks for future traffic expectations. We will perform comprehensive keyword research and optimize your content accordingly.',
  },
  {
    number: '04',
    icon: '◉',
    title: 'Conversion Strategy',
    text: 'Time to convert! We plan key conversion points across your site and build a user journey that makes it simple to discuss projects, request a quote and connect with your team.',
  },
]

const faqs = [
  ['What are your top strategies for manufacturing web design?', 'We start with a clear understanding of your products, sales cycle, and audience. Then we create a user-friendly website with clear product information, strong calls to action, search visibility, and a simple way for prospective customers to contact your sales team.'],
  ['What is your web design process and philosophy?', 'Our process is collaborative and research-led: discovery, strategy, design, development, testing, launch, and ongoing support. We keep your goals and customers at the centre of every decision.'],
  ['Which platforms do you use for web development?', 'We select a content management platform based on your requirements, integrations, internal team, and long-term plans. Our team can recommend the right approach during discovery.'],
  ['Do you provide web design services for manufacturing companies?', 'Yes. We design and develop manufacturing websites that showcase capabilities, products, facilities, and industry expertise while supporting lead generation.'],
  ['Do you perform ongoing SEO to maximize results?', 'Yes. We can support technical SEO, content strategy, and ongoing optimization to help your website reach relevant decision-makers through search.'],
]

const blogCards = [
  {
    title: '10 Website Design Tips for Manufacturers in 2026',
    image: heroImage,
    description: 'Practical ideas for creating a clear, effective manufacturing website.',
  },
  {
    title: 'How to Optimize Your Website for Search Engines & AI',
    image: sellick?.image || heroImage,
    description: 'Build a stronger search foundation and help customers find your business.',
  },
  {
    title: '10 Best Manufacturing Website Designs of 2026',
    image: valpac?.image || heroImage,
    description: 'Explore how modern industrial brands present their products online.',
  },
]

function Manufacturing({ onGetProposal }) {
  const [openFaq, setOpenFaq] = useState(-1)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Manufacturing Web Design | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <main className="manufacturing-page">
      <div className="manufacturing-container">
        <section className="manufacturing-hero" aria-labelledby="manufacturing-title">
          <div className="manufacturing-hero__copy">
            <p className="manufacturing-eyebrow">Web Design Agency for Manufacturing Companies</p>
            <h1 id="manufacturing-title">Creating Professional,<br />Custom Website Designs<br />for Manufacturers</h1>
          </div>
          <div className="manufacturing-hero__aside">
            <p>Your manufacturing business deserves a website that builds credibility, showcases its work, and your audience will find more traffic and conversions.</p>
            <button type="button" className="manufacturing-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
            <div className="manufacturing-rating" aria-label="Rated 4.9 out of 5">
              <span className="manufacturing-rating__google" aria-hidden="true">G</span>
              <span><strong>4.9/5 <b>★★★★★</b></strong><small>Based on 60+ Reviews</small></span>
            </div>
          </div>
        </section>

        <img
          className="manufacturing-hero-image"
          src={heroImage}
          alt="Industrial equipment and machinery showcased for a manufacturing business"
          fetchPriority="high"
        />

        <p className="manufacturing-intro">
          Since 2018, Azuro Digital has been meticulously designing and developing
          <br className="manufacturing-desktop-break" /> cutting-edge websites for manufacturers in various sectors across the
          <br className="manufacturing-desktop-break" /> globe. Are you ready to be our next success story?
        </p>

        <section className="manufacturing-process" aria-labelledby="manufacturing-process-title">
          <div className="manufacturing-section-heading">
            <div>
              <p className="manufacturing-eyebrow">Manufacturing Web Design Workflow</p>
              <h2 id="manufacturing-process-title">Our Step-by-Step Process</h2>
            </div>
            <a className="manufacturing-text-link" href="#manufacturing-projects">Recent Work <span aria-hidden="true">→</span></a>
          </div>
          <div className="manufacturing-process-grid">
            {processSteps.map((step) => (
              <article className="manufacturing-process-card" key={step.number}>
                <span className="manufacturing-process-card__icon" aria-hidden="true">{step.icon}</span>
                <strong className="manufacturing-process-card__number">{step.number}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="manufacturing-carousel-controls" aria-label="Process navigation">
            <a href="#manufacturing-projects" aria-label="Previous section">←</a>
            <a href="#manufacturing-projects" aria-label="Next section">→</a>
          </div>
        </section>

        <section className="manufacturing-feature">
          <a className="manufacturing-feature__image" href={`https://${sellick?.site || 'sellickequipment.com'}`} target="_blank" rel="noreferrer">
            <img src={sellick?.image || heroImage} alt="Website design project for Sellick Equipment" loading="lazy" />
          </a>
          <div className="manufacturing-feature__copy">
            <p className="manufacturing-eyebrow">Custom Web Design &amp; Development</p>
            <h2>Superior Websites for Manufacturing</h2>
            <p>Many manufacturers rely on direct relationships and referral networks for lead generation. However, it’s still important to have a high-quality website since many of these “warm” leads will still check your website to learn more about your capabilities and reputation. A well-designed website creates a first impression of your company as a whole.</p>
            <div className="manufacturing-feature__actions">
              <button type="button" className="manufacturing-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
              <a href={`https://${sellick?.site || 'sellickequipment.com'}`} target="_blank" rel="noreferrer" className="manufacturing-clutch">Clutch <span>★★★★★</span></a>
            </div>
          </div>
        </section>

        <section className="manufacturing-accessibility">
          <div className="manufacturing-accessibility__seal" aria-label="Accessible website design">Accessible<br />Websites</div>
          <div>
            <p className="manufacturing-eyebrow">We’ve Provided Leadership in Web Accessibility for Manufacturers</p>
            <h2>Accessibility-First Design for Your Manufacturing Website</h2>
            <p>Accessibility compliance helps ensure your website is usable by as many people as possible. We build with accessibility in mind and can help you understand the steps involved in creating a more inclusive digital experience.</p>
            <a className="manufacturing-text-link" href="/accessible-colour-contrast-checker">View Colour Contrast Checker <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="manufacturing-blog" aria-labelledby="manufacturing-blog-title">
          <div className="manufacturing-section-heading">
            <div>
              <p className="manufacturing-eyebrow">From Our Blog</p>
              <h2 id="manufacturing-blog-title">Insights for Manufacturers</h2>
            </div>
            <a className="manufacturing-text-link" href="#manufacturing-faq">View All Posts <span aria-hidden="true">→</span></a>
          </div>
          <div className="manufacturing-blog-grid">
            {blogCards.map((card) => (
              <article className="manufacturing-blog-card" key={card.title}>
                <img src={card.image} alt="" loading="lazy" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a className="manufacturing-text-link" href="#manufacturing-faq">Read More <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="manufacturing-faq" id="manufacturing-faq" aria-labelledby="manufacturing-faq-title">
          <p className="manufacturing-eyebrow">FAQs</p>
          <h2 id="manufacturing-faq-title">Your Questions, Answered</h2>
          <div className="manufacturing-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className="manufacturing-faq-item" key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    aria-controls={`manufacturing-faq-answer-${index}`}
                    onClick={() => setOpenFaq((current) => current === index ? -1 : index)}
                  >
                    {question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                </h3>
                {openFaq === index && <p id={`manufacturing-faq-answer-${index}`}>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="manufacturing-projects" id="manufacturing-projects" aria-labelledby="manufacturing-projects-title">
          <p className="manufacturing-eyebrow">Recent Work</p>
          <h2 id="manufacturing-projects-title">Some of Our Manufacturing Web<br className="manufacturing-desktop-break" /> Design Projects</h2>
          {[valpac, sellick].filter(Boolean).map((project) => (
            <article className="manufacturing-project" key={project.site}>
              <a className="manufacturing-project__image" href={`https://${project.site}`} target="_blank" rel="noreferrer">
                <img src={project.image} alt={`${project.name} website design`} loading="lazy" />
              </a>
              <div className="manufacturing-project__details">
                <a href={`https://${project.site}`} target="_blank" rel="noreferrer" className="manufacturing-project__site">{project.site} <span aria-hidden="true">↗</span></a>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a className="manufacturing-text-link" href={`https://${project.site}`} target="_blank" rel="noreferrer">Visit Site <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
          {[valpac, sellick].filter(Boolean).map((project) => (
            <figure className="manufacturing-testimonial" key={`${project.site}-quote`}>
              {project.logo && <img className="manufacturing-testimonial__logo" src={project.logo} alt={`${project.name} logo`} loading="lazy" />}
              <blockquote>“{project.quote}”</blockquote>
              <figcaption><strong>{project.client}</strong><span>{project.role}</span></figcaption>
            </figure>
          ))}
        </section>

        <section className="manufacturing-related">
          <div>
            <p className="manufacturing-eyebrow">Explore Industries Similar to Manufacturing</p>
            <h2>View More Work From<br />Related Sectors</h2>
          </div>
          <a className="manufacturing-related-card" href="#manufacturing-projects"><span aria-hidden="true">⌂</span><strong>Construction Web Design</strong><small>Learn More →</small></a>
          <a className="manufacturing-related-card" href="#manufacturing-projects"><span aria-hidden="true">↗</span><strong>Trucking Web Design</strong><small>Learn More →</small></a>
        </section>
      </div>
    </main>
  )
}

export default Manufacturing
