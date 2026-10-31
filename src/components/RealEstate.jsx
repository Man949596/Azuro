import { useEffect, useState } from 'react'
import { portfolioProjects } from '../js/portfolioData.js'
import '../assets/css/real-estate.css'

const realEstateHeroImage = 'https://azurodigital.com/wp-content/uploads/Condo-Buildings.jpg'
const realEstateFeatureImage = 'https://azurodigital.com/wp-content/uploads/Real-Estate-Web-Designer.jpg'
const brightstone = portfolioProjects.find((project) => project.site === 'brightstone.ca')

const processSteps = [
  {
    number: '01',
    icon: '⌕',
    title: 'Industry Research',
    text: 'We research your business, target market and competitors so your real estate website stands out with the right design, content and SEO strategy.',
  },
  {
    number: '02',
    icon: '✎',
    title: 'Marketing Strategy Review',
    text: 'We review your marketing channels and sales process to support lead generation with a thoughtful user journey, messaging and analytics.',
  },
  {
    number: '03',
    icon: '⌕',
    title: 'SEO Research & Planning',
    text: 'We audit your existing website, establish benchmarks and research keywords to help prospective clients find your real estate business.',
  },
  {
    number: '04',
    icon: '◉',
    title: 'Conversion Strategy',
    text: 'We turn website visitors into customers with clear calls to action, impactful social proof and a streamlined user experience.',
  },
]

const faqs = [
  [
    'What are your top strategies for real estate web design?',
    'We combine property discovery and compelling photography with local expertise, neighbourhood-focused content and clear ways to get in touch. The experience should build trust and make it easy for visitors to find relevant listings and services.',
  ],
  [
    'What is your web design process and philosophy?',
    'Our collaborative process includes research, strategy, content planning, design, development, revisions, quality assurance and launch. We focus on accessibility, performance, search visibility and helping your business generate qualified inquiries.',
  ],
  [
    'Which platforms do you use for web development?',
    'We offer WordPress and custom web development. The right option depends on your needs, integrations and the way your team manages content. We will help you choose the right fit.',
  ],
  [
    'Do you only provide web design services for real estate companies?',
    'No. We work with clients across many industries. Every website is tailored to the organization, its goals and the customers it serves.',
  ],
  [
    'Do you perform ongoing A/B testing to maximize results?',
    'Yes. After launch, ongoing A/B testing and analytics can help identify which changes improve engagement and conversions. We can support data-informed optimization over time.',
  ],
]

const blogCards = [
  {
    title: '10 Web Design Tips for Real Estate Companies in 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Row-of-townhouses-1024x700.jpg',
    description: 'Practical ideas to help your real estate website attract and convert visitors.',
    href: 'https://azurodigital.com/real-estate-web-design-tips/',
    readTime: '11 minute read',
  },
  {
    title: 'How to Optimize Your Website for Search Engines & AI',
    image: 'https://azurodigital.com/wp-content/uploads/SEO-Traffic-1024x700.jpg',
    description: 'Improve visibility and help the right clients find your business online.',
    href: 'https://azurodigital.com/seo-guide/',
    readTime: '11 minute read',
  },
  {
    title: '10 Best Real Estate Website Designs of 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Luxury-Home-1024x700.jpg',
    description: 'Explore effective approaches to designing real estate websites.',
    href: 'https://azurodigital.com/real-estate-website-examples/',
    readTime: '12 minute read',
  },
]

function RealEstate({ onGetProposal }) {
  const [openFaq, setOpenFaq] = useState(-1)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Real Estate Website Design Services | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <main className="real-estate-page" id="content">
      <div className="real-estate-container">
        <section className="real-estate-hero" aria-labelledby="real-estate-title">
          <div className="real-estate-hero__copy">
            <p className="real-estate-eyebrow">Web Design Agency for Real Estate Companies</p>
            <h1 id="real-estate-title">Creating Professional,<br />Custom Website Designs<br />for Real Estate</h1>
          </div>
          <div className="real-estate-hero__aside">
            <p>Delivering modern, lead-generating web design services for real estate agents and developers since 2018. Are you ready to become our next success story?</p>
            <button type="button" className="real-estate-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
            <div className="real-estate-rating" aria-label="Rated 4.9 out of 5">
              <span className="real-estate-rating__google" aria-hidden="true">G</span>
              <span><strong>4.9/5 <b>★★★★★</b></strong><small>Based on 60+ Reviews</small></span>
            </div>
          </div>
        </section>

        <img
          className="real-estate-hero-image"
          src={realEstateHeroImage}
          alt="Modern condominium buildings in a city"
          fetchPriority="high"
        />

        <p className="real-estate-intro">
          We partner with a range of real estate companies, from agents to
          <br className="real-estate-desktop-break" /> developers and everything in between. Let’s build a website that
          <br className="real-estate-desktop-break" /> improves your brand reputation and increases conversions.
        </p>

        <section className="real-estate-process" aria-labelledby="real-estate-process-title">
          <div className="real-estate-section-heading">
            <div>
              <p className="real-estate-eyebrow">Real Estate Web Design Workflow</p>
              <h2 id="real-estate-process-title">Our Step-by-Step Process</h2>
            </div>
            <a className="real-estate-text-link" href="#real-estate-projects">Recent Work <span aria-hidden="true">→</span></a>
          </div>
          <div className="real-estate-process-grid">
            {processSteps.map((step) => (
              <article className="real-estate-process-card" key={step.number}>
                <span className="real-estate-process-card__icon" aria-hidden="true">{step.icon}</span>
                <strong className="real-estate-process-card__number">{step.number}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="real-estate-carousel-controls" aria-label="Process navigation">
            <a href="#real-estate-projects" aria-label="Previous section">←</a>
            <a href="#real-estate-projects" aria-label="Next section">→</a>
          </div>
        </section>

        <section className="real-estate-feature">
          <a className="real-estate-feature__image" href="https://brightstone.ca/" target="_blank" rel="noreferrer">
            <img src={realEstateFeatureImage} alt="Real estate website design in progress" loading="lazy" />
          </a>
          <div className="real-estate-feature__copy">
            <p className="real-estate-eyebrow">Custom Web Design &amp; Development</p>
            <h2>Superior Websites for Real Estate</h2>
            <p>Real estate website visitors are looking for signs of trust, credibility and simplified information to understand what you do and what the next steps are. We help with every part of that experience — from design and content to user experience and search visibility on Google and ChatGPT.</p>
            <div className="real-estate-awards" aria-label="Web design awards">
              <img src="https://azurodigital.com/wp-content/uploads/web-awards-logo.svg" alt="WebAwards" loading="lazy" />
              <img src="https://azurodigital.com/wp-content/uploads/awwwards-logo.svg" alt="Awwwards" loading="lazy" />
              <img src="https://azurodigital.com/wp-content/uploads/css-design-logo.svg" alt="CSS Design Awards" loading="lazy" />
            </div>
            <div className="real-estate-feature__actions">
              <button type="button" className="real-estate-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
              <a href="https://clutch.co/profile/azuro-digital" target="_blank" rel="noreferrer" className="real-estate-clutch">Clutch <span>★★★★★</span></a>
            </div>
          </div>
        </section>

        <section className="real-estate-accessibility">
          <img className="real-estate-accessibility__badge" src="https://azurodigital.com/wp-content/uploads/AC-Badge-x3-1024x807.png" alt="AccessibilityChecker verified accessible website agency badge" loading="lazy" />
          <div>
            <p className="real-estate-eyebrow">We’re a Verified Leader in Web Accessibility for Real Estate Companies</p>
            <h2>Accessible Websites for Every Visitor</h2>
            <p>AccessibilityChecker.org has recognized Azuro Digital as a verified web agency for accessible websites. Accessibility laws like ADA and AODA are increasingly enforced. By partnering with Azuro, you can build an inclusive experience and welcome a wider audience to your site.</p>
            <div className="real-estate-accessibility__actions">
              <a className="real-estate-button" href="https://www.accessibilitychecker.org/role-model/azuro-digital-canadas-top-accessibility-focused-web-design-agency/" target="_blank" rel="noreferrer">View Certification <span aria-hidden="true">→</span></a>
              <img src="https://azurodigital.com/wp-content/uploads/WCAG-logo.png" alt="WCAG 2.2 Level AA" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="real-estate-blog" aria-labelledby="real-estate-blog-title">
          <div className="real-estate-section-heading">
            <div><h2 id="real-estate-blog-title">From Our Blog</h2></div>
            <a className="real-estate-text-link" href="https://azurodigital.com/blog/" target="_blank" rel="noreferrer">View All Posts <span aria-hidden="true">→</span></a>
          </div>
          <div className="real-estate-blog-grid">
            {blogCards.map((card) => (
              <article className="real-estate-blog-card" key={card.title}>
                <a href={card.href} target="_blank" rel="noreferrer"><img src={card.image} alt="" loading="lazy" /></a>
                <h3><a href={card.href} target="_blank" rel="noreferrer">{card.title}</a></h3>
                <small>{card.readTime}</small>
                <a className="real-estate-text-link" href={card.href} target="_blank" rel="noreferrer">Read More <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="real-estate-faq" id="real-estate-faq" aria-labelledby="real-estate-faq-title">
          <p className="real-estate-eyebrow">FAQs</p>
          <h2 id="real-estate-faq-title">Your Questions, Answered</h2>
          <div className="real-estate-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className="real-estate-faq-item" key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    aria-controls={`real-estate-faq-answer-${index}`}
                    onClick={() => setOpenFaq((current) => current === index ? -1 : index)}
                  >
                    {question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                </h3>
                {openFaq === index && <p id={`real-estate-faq-answer-${index}`}>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="real-estate-projects" id="real-estate-projects" aria-labelledby="real-estate-projects-title">
          <p className="real-estate-eyebrow">Real Estate Web Design Project</p>
          <h2 id="real-estate-projects-title">Check Out Our Recent Work!</h2>
          {brightstone && (
            <>
              <article className="real-estate-project">
                <a className="real-estate-project__screens" href={`https://${brightstone.site}`} target="_blank" rel="noreferrer" aria-label="Visit Brightstone website">
                  <img src="https://azurodigital.com/wp-content/uploads/brightstone-top.jpg" alt="Brightstone website design overview" loading="lazy" />
                  <img src="https://azurodigital.com/wp-content/uploads/brightstone-main-1.jpg" alt="Brightstone website design detail" loading="lazy" />
                  <img src="https://azurodigital.com/wp-content/uploads/brightstone-bottom.jpg" alt="Brightstone website design property listings" loading="lazy" />
                </a>
                <div className="real-estate-project__details">
                  <a href={`https://${brightstone.site}`} target="_blank" rel="noreferrer" className="real-estate-project__site">{brightstone.site} <span aria-hidden="true">↗</span></a>
                  <h3>{brightstone.name}</h3>
                  <p>Brightstone is a real estate development company in Toronto, Ontario. They design and build world-class luxury properties and needed a website that reflects the quality of their work.</p>
                  <a className="real-estate-text-link" href={`https://${brightstone.site}`} target="_blank" rel="noreferrer">Visit Site <span aria-hidden="true">→</span></a>
                </div>
              </article>
              <figure className="real-estate-testimonial">
                {brightstone.logo && <img className="real-estate-testimonial__logo" src={brightstone.logo} alt={`${brightstone.name} logo`} loading="lazy" />}
                <blockquote>“{brightstone.quote}”</blockquote>
                {brightstone.portrait && <img className="real-estate-testimonial__portrait" src="https://azurodigital.com/wp-content/uploads/noah-headshot.jpg" alt={brightstone.client} loading="lazy" />}
                <figcaption><strong>{brightstone.client}</strong><span>{brightstone.role}</span></figcaption>
              </figure>
            </>
          )}
        </section>

        <section className="real-estate-related">
          <div>
            <p className="real-estate-eyebrow">Explore Industries Similar to Real Estate</p>
            <h2>View More Work From<br />Related Sectors</h2>
          </div>
          <a className="real-estate-related-card" href="/manufacturing-web-design"><span aria-hidden="true">▦</span><strong>Manufacturing Web Design</strong><small>Learn More →</small></a>
          <a className="real-estate-related-card" href="/construction-web-design"><span aria-hidden="true">⌂</span><strong>Construction Web Design</strong><small>Learn More →</small></a>
        </section>
      </div>
    </main>
  )
}

export default RealEstate
