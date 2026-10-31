import { useEffect, useState } from 'react'
import { portfolioProjects } from '../js/portfolioData.js'
import '../assets/css/saas.css'

const saasHeroImage = 'https://azurodigital.com/wp-content/uploads/SaaS-Company-Office-2.jpg'
const saasFeatureImage = 'https://azurodigital.com/wp-content/uploads/SaaS-Web-Designer.jpg'

const saasProjects = [
  {
    ...portfolioProjects.find((project) => project.site === 'vancouverbitcoin.com'),
    screenshots: [
      'https://azurodigital.com/wp-content/uploads/vancouver-bitcoin-top.jpg',
      'https://azurodigital.com/wp-content/uploads/vancouver-bitcoin-main.jpg',
      'https://azurodigital.com/wp-content/uploads/vancouver-bitcoin-bottom.jpg',
    ],
    portrait: 'https://azurodigital.com/wp-content/uploads/dennis_headshot.jpg',
    description: 'Vancouver Bitcoin is an online platform and in-person service to buy and sell Bitcoin and other cryptocurrencies. As a cutting-edge fintech startup, they hired Azuro Digital to create an online presence to match.',
  },
  {
    ...portfolioProjects.find((project) => project.site === 'collegehouse.com'),
    screenshots: [
      'https://azurodigital.com/wp-content/uploads/college-house-top.jpg',
      'https://azurodigital.com/wp-content/uploads/college-house-main.jpg',
      'https://azurodigital.com/wp-content/uploads/college-house-bottom.jpg',
    ],
    portrait: 'https://azurodigital.com/wp-content/uploads/macrae-headshot.jpg',
    description: 'College House is a B2B SaaS startup providing data analytics for the student housing industry. Their old website worked for early stages, and they hired Azuro to accelerate into their next stage of growth.',
  },
].filter((project) => project.site)

const processSteps = [
  {
    number: '01',
    icon: '⌕',
    title: 'Industry Research',
    text: 'We conduct research on your business, target market and competitors to ensure your SaaS website stands out with the right design, content and SEO strategy.',
  },
  {
    number: '02',
    icon: '✎',
    title: 'Marketing Strategy Review',
    text: 'We review your marketing channels and sales process to make your website support lead generation through the overall user journey, messaging and analytics.',
  },
  {
    number: '03',
    icon: '⌕',
    title: 'SEO Research & Planning',
    text: 'We audit your existing website, establish benchmarks and perform keyword research to optimize your content and reach the right customers.',
  },
  {
    number: '04',
    icon: '◉',
    title: 'Conversion Strategy',
    text: 'We turn website traffic into paying customers with clear calls to action, impactful social proof and a streamlined user experience.',
  },
]

const faqs = [
  [
    'What are your top strategies for SaaS web design?',
    'We make it easy to start using your product, provide transparent and comparison-friendly pricing, and showcase your software with demos and screenshots. Clear use-case pages, product-led conversion paths and comprehensive integrations help visitors understand the value and move toward a trial.',
  ],
  [
    'What is your web design process and philosophy?',
    'Our collaborative process includes research, strategy, content planning, design, development, revisions, quality assurance and launch. We focus on accessibility, performance, search visibility and helping your SaaS business grow.',
  ],
  [
    'Which platforms do you use for web development?',
    'We offer WordPress and custom web development. The right option depends on your needs, integrations and the way your team manages content. We will help you choose the right fit.',
  ],
  [
    'Do you only provide web design services for SaaS companies?',
    'No. We work with clients in many industries, including dental, construction and nonprofit organizations. Every website is tailored to the organization and its goals.',
  ],
  [
    'Do you perform ongoing A/B testing to maximize results?',
    'Yes. After launch, ongoing A/B testing and analytics can help identify which changes improve engagement and conversions. We can support data-informed optimization over time.',
  ],
]

const blogCards = [
  {
    title: '10 Web Design Tips for SaaS Companies in 2026',
    image: 'https://azurodigital.com/wp-content/uploads/10-Ways-to-Get-More-Results-from-Your-Website-featured-1024x700.jpg',
    description: 'Ways to build a SaaS website that supports product growth.',
    href: 'https://azurodigital.com/saas-web-design-tips/',
    readTime: '9 minute read',
  },
  {
    title: '10 Best SaaS Website Designs of 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Software-as-a-service-technology-1024x700.jpg',
    description: 'Explore effective approaches to designing SaaS websites.',
    href: 'https://azurodigital.com/saas-website-examples/',
    readTime: '15 minute read',
  },
  {
    title: 'How to Optimize Your Website for Search Engines & AI',
    image: 'https://azurodigital.com/wp-content/uploads/SEO-Traffic-1024x700.jpg',
    description: 'Improve visibility and help more customers discover your software.',
    href: 'https://azurodigital.com/seo-guide/',
    readTime: '11 minute read',
  },
]

function SaaS({ onGetProposal }) {
  const [openFaq, setOpenFaq] = useState(-1)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Website Design for SaaS Companies | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <main className="saas-page" id="content">
      <div className="saas-container">
        <section className="saas-hero" aria-labelledby="saas-title">
          <div className="saas-hero__copy">
            <p className="saas-eyebrow">Web Design Agency for SaaS</p>
            <h1 id="saas-title">Creating Professional,<br />Custom Website Designs<br />for SaaS Companies</h1>
          </div>
          <div className="saas-hero__aside">
            <p>Our web design team enables SaaS companies to take their growth to the next level — driving quality SEO traffic and optimizing conversion rates.</p>
            <button type="button" className="saas-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
            <div className="saas-rating" aria-label="Rated 4.9 out of 5">
              <span className="saas-rating__google" aria-hidden="true">G</span>
              <span><strong>4.9/5 <b>★★★★★</b></strong><small>Based on 60+ Reviews</small></span>
            </div>
          </div>
        </section>

        <img
          className="saas-hero-image"
          src={saasHeroImage}
          alt="SaaS company team collaborating in a modern office"
          fetchPriority="high"
        />

        <p className="saas-intro">
          Your website is the foundation of all marketing initiatives. With our SaaS
          <br className="saas-desktop-break" /> web design services, your company will launch itself into a new era of
          <br className="saas-desktop-break" /> better metrics, sustainable growth and higher profitability.
        </p>

        <section className="saas-process" aria-labelledby="saas-process-title">
          <div className="saas-section-heading">
            <div>
              <p className="saas-eyebrow">SaaS Web Design Workflow</p>
              <h2 id="saas-process-title">Our Step-by-Step Process</h2>
            </div>
            <a className="saas-text-link" href="#saas-projects">Recent Work <span aria-hidden="true">→</span></a>
          </div>
          <div className="saas-process-grid">
            {processSteps.map((step) => (
              <article className="saas-process-card" key={step.number}>
                <span className="saas-process-card__icon" aria-hidden="true">{step.icon}</span>
                <strong className="saas-process-card__number">{step.number}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="saas-carousel-controls" aria-label="Process navigation">
            <a href="#saas-projects" aria-label="Previous section">←</a>
            <a href="#saas-projects" aria-label="Next section">→</a>
          </div>
        </section>

        <section className="saas-feature">
          <a className="saas-feature__image" href="https://azurodigital.com/saas-web-design/" target="_blank" rel="noreferrer">
            <img src={saasFeatureImage} alt="SaaS web designer creating a website experience" loading="lazy" />
          </a>
          <div className="saas-feature__copy">
            <p className="saas-eyebrow">Custom Web Design &amp; Development</p>
            <h2>Superior Web Dev &amp; Design for SaaS</h2>
            <p>For SaaS companies, website design and functionality shape how visitors perceive the product itself. A fast, reliable website with an immediate wow factor makes a strong first impression. We also help with the broader strategy, from copywriting and SEO to a streamlined user experience.</p>
            <div className="saas-awards" aria-label="Web design awards">
              <img src="https://azurodigital.com/wp-content/uploads/web-awards-logo.svg" alt="WebAwards" loading="lazy" />
              <img src="https://azurodigital.com/wp-content/uploads/awwwards-logo.svg" alt="Awwwards" loading="lazy" />
              <img src="https://azurodigital.com/wp-content/uploads/css-design-logo.svg" alt="CSS Design Awards" loading="lazy" />
            </div>
            <div className="saas-feature__actions">
              <button type="button" className="saas-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
              <a href="https://clutch.co/profile/azuro-digital" target="_blank" rel="noreferrer" className="saas-clutch">Clutch <span>★★★★★</span></a>
            </div>
          </div>
        </section>

        <section className="saas-accessibility">
          <img className="saas-accessibility__badge" src="https://azurodigital.com/wp-content/uploads/AC-Badge-x3-1024x807.png" alt="AccessibilityChecker verified accessible website agency badge" loading="lazy" />
          <div>
            <p className="saas-eyebrow">We’re a Verified Leader in Web Accessibility for SaaS</p>
            <h2>Accessible Websites for Every User</h2>
            <p>AccessibilityChecker.org has recognized Azuro Digital as a verified web agency for accessible websites. Accessibility laws like ADA and AODA are increasingly enforced. By partnering with Azuro, you can build an inclusive experience and welcome a wider audience to your site.</p>
            <div className="saas-accessibility__actions">
              <a className="saas-button" href="https://www.accessibilitychecker.org/role-model/azuro-digital-canadas-top-accessibility-focused-web-design-agency/" target="_blank" rel="noreferrer">View Certification <span aria-hidden="true">→</span></a>
              <img src="https://azurodigital.com/wp-content/uploads/WCAG-logo.png" alt="WCAG 2.2 Level AA" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="saas-blog" aria-labelledby="saas-blog-title">
          <div className="saas-section-heading">
            <div><h2 id="saas-blog-title">From Our Blog</h2></div>
            <a className="saas-text-link" href="https://azurodigital.com/blog/" target="_blank" rel="noreferrer">View All Posts <span aria-hidden="true">→</span></a>
          </div>
          <div className="saas-blog-grid">
            {blogCards.map((card) => (
              <article className="saas-blog-card" key={card.title}>
                <a href={card.href} target="_blank" rel="noreferrer"><img src={card.image} alt="" loading="lazy" /></a>
                <h3><a href={card.href} target="_blank" rel="noreferrer">{card.title}</a></h3>
                <small>{card.readTime}</small>
                <a className="saas-text-link" href={card.href} target="_blank" rel="noreferrer">Read More <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="saas-faq" id="saas-faq" aria-labelledby="saas-faq-title">
          <p className="saas-eyebrow">FAQs</p>
          <h2 id="saas-faq-title">Your Questions, Answered</h2>
          <div className="saas-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className="saas-faq-item" key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    aria-controls={`saas-faq-answer-${index}`}
                    onClick={() => setOpenFaq((current) => current === index ? -1 : index)}
                  >
                    {question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                </h3>
                {openFaq === index && <p id={`saas-faq-answer-${index}`}>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="saas-projects" id="saas-projects" aria-labelledby="saas-projects-title">
          <p className="saas-eyebrow">Recent Work</p>
          <h2 id="saas-projects-title">Some of Our SaaS Web Design Projects</h2>
          {saasProjects.map((project) => (
            <div key={project.site}>
              <article className="saas-project">
                <a className="saas-project__screens" href={`https://${project.site}`} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} website`}>
                  {project.screenshots.map((screenshot, index) => (
                    <img src={screenshot} alt={`${project.name} website design ${index + 1}`} loading="lazy" key={screenshot} />
                  ))}
                </a>
                <div className="saas-project__details">
                  <a href={`https://${project.site}`} target="_blank" rel="noreferrer" className="saas-project__site">{project.site} <span aria-hidden="true">↗</span></a>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a className="saas-text-link" href={`https://${project.site}`} target="_blank" rel="noreferrer">Visit Site <span aria-hidden="true">→</span></a>
                </div>
              </article>
              <figure className="saas-testimonial">
                {project.logo && <img className="saas-testimonial__logo" src={project.logo} alt={`${project.name} logo`} loading="lazy" />}
                <blockquote>“{project.quote}”</blockquote>
                {project.portrait && <img className="saas-testimonial__portrait" src={project.portrait} alt={project.client} loading="lazy" />}
                <figcaption><strong>{project.client}</strong><span>{project.role}</span></figcaption>
              </figure>
            </div>
          ))}
        </section>

        <section className="saas-related">
          <div>
            <p className="saas-eyebrow">Explore Industries Similar to SaaS</p>
            <h2>View More Work From<br />Related Sectors</h2>
          </div>
          <a className="saas-related-card" href="https://azurodigital.com/crypto-web-design/" target="_blank" rel="noreferrer"><span aria-hidden="true">◈</span><strong>Crypto Web Design</strong><small>Learn More →</small></a>
          <a className="saas-related-card" href="https://azurodigital.com/startup-web-design/" target="_blank" rel="noreferrer"><span aria-hidden="true">⌂</span><strong>Startup Web Design</strong><small>Learn More →</small></a>
        </section>
      </div>
    </main>
  )
}

export default SaaS
