import { useEffect, useState } from 'react'
import { portfolioProjects } from '../js/portfolioData.js'
import '../assets/css/financial.css'

const financialHeroImage = 'https://azurodigital.com/wp-content/uploads/Financial-Service-Providers.jpg'
const solBenefits = {
  site: 'solbenefits.ca',
  name: 'Sol Benefits Consulting',
  description: 'Sol Benefits Consulting is a life insurance and health benefits agency serving Canadian businesses and individuals. They were seeking a brand overhaul — including a new logo and new website.',
  image: 'https://azurodigital.com/wp-content/uploads/Sol-Top.jpg',
  logo: 'https://azurodigital.com/wp-content/uploads/Sol_Benefits_Consulting_Logo-1.svg',
  quote: 'Azuro Digital’s professionalism, transparency, and attention to detail is a cut above the rest. Their team provided extremely good input for the strategy of our life insurance and health benefits website. I really appreciated working with them as it was clear that they treated this project with as much care and passion as we did, and took the time to understand what our vision needed to be. They guided us from start to finish and we are very happy with the result of the branding and the website.',
  client: 'Jeff Wang',
  role: 'Partner at Sol Benefits Consulting',
}
const vancouverBitcoin = portfolioProjects.find((project) => project.site === 'vancouverbitcoin.com')
const financialProjects = [solBenefits, vancouverBitcoin].filter(Boolean)

const processSteps = [
  {
    number: '01',
    icon: '⌕',
    title: 'Industry Research',
    text: 'We conduct research on your business, target market and competitors to ensure your financial website stands out with the right design, content and SEO strategy.',
  },
  {
    number: '02',
    icon: '✎',
    title: 'Marketing Strategy Review',
    text: 'We review your marketing channels and sales process to ensure your website supports lead generation in terms of user journey, messaging and analytics.',
  },
  {
    number: '03',
    icon: '⌕',
    title: 'SEO Research & Planning',
    text: 'We audit your existing site, establish benchmarks and perform keyword research to optimize your content and reach the right customers.',
  },
  {
    number: '04',
    icon: '◉',
    title: 'Conversion Strategy',
    text: 'We help turn website traffic into paying clients with clear calls to action, social proof and a streamlined user experience.',
  },
]

const faqs = [
  [
    'What are your top strategies for financial services web design?',
    'We build trust through clear service information, thoughtful design, transparent credentials and strong privacy practices. The website should make complex financial services easier to understand and help prospective clients take the next step.',
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
    'Do you only provide web design services for financial companies?',
    'No. We work with clients across many industries. Every website is tailored to the organization, its goals and the customers it serves.',
  ],
  [
    'Do you perform ongoing A/B testing to maximize results?',
    'Yes. After launch, ongoing A/B testing and analytics can help identify which changes improve engagement and conversions. We can support data-informed optimization over time.',
  ],
]

const blogCards = [
  {
    title: '10 Web Design Tips for Financial Companies in 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Financial-Company-Office-1024x700.jpg',
    description: 'Practical ideas to build a credible, effective financial services website.',
    href: 'https://azurodigital.com/blog/',
  },
  {
    title: 'How to Optimize Your Website for Search Engines & AI',
    image: 'https://azurodigital.com/wp-content/uploads/vancouver-bitcoin-testimonial.jpg',
    description: 'Improve visibility and help the right customers find your company.',
    href: 'https://azurodigital.com/seo-guide/',
  },
  {
    title: '10 Best Financial Website Designs of 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Financial-Service-Providers.jpg',
    description: 'See how financial brands make complex services easier to explore.',
    href: 'https://azurodigital.com/blog/',
  },
]

function Financial({ onGetProposal }) {
  const [openFaq, setOpenFaq] = useState(-1)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Financial Services Web Design | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <main className="manufacturing-page" id="content">
      <div className="manufacturing-container">
        <section className="manufacturing-hero" aria-labelledby="financial-title">
          <div className="manufacturing-hero__copy">
            <p className="manufacturing-eyebrow">Web Design Agency for Financial Services Companies</p>
            <h1 id="financial-title">Creating Professional,<br />Custom Website Designs<br />for Financial Services</h1>
          </div>
          <div className="manufacturing-hero__aside">
            <p>We provide cutting-edge web design services for financial services firms worldwide. Let’s grow your business with a website that converts!</p>
            <button type="button" className="manufacturing-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
            <div className="manufacturing-rating" aria-label="Rated 4.9 out of 5">
              <span className="manufacturing-rating__google" aria-hidden="true">G</span>
              <span><strong>4.9/5 <b>★★★★★</b></strong><small>Based on 60+ Reviews</small></span>
            </div>
          </div>
        </section>

        <img
          className="manufacturing-hero-image"
          src={financialHeroImage}
          alt="Financial advisors reviewing documents, charts and figures"
          fetchPriority="high"
        />

        <p className="manufacturing-intro">
          At Azuro, we build high-performing websites for a range of financial
          <br className="manufacturing-desktop-break" /> services — from accounting to wealth management and everything in
          <br className="manufacturing-desktop-break" /> between. Are you ready to be our next success story?
        </p>

        <section className="manufacturing-process" aria-labelledby="financial-process-title">
          <div className="manufacturing-section-heading">
            <div>
              <p className="manufacturing-eyebrow">Financial Services Web Design Workflow</p>
              <h2 id="financial-process-title">Our Step-by-Step Process</h2>
            </div>
            <a className="manufacturing-text-link" href="#financial-projects">Recent Work <span aria-hidden="true">→</span></a>
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
            <a href="#financial-projects" aria-label="Previous section">←</a>
            <a href="#financial-projects" aria-label="Next section">→</a>
          </div>
        </section>

        <section className="manufacturing-feature">
          <a className="manufacturing-feature__image" href={`https://${financialProjects[0]?.site || 'solbenefits.ca'}`} target="_blank" rel="noreferrer">
            <img src={financialProjects[0]?.image || financialHeroImage} alt="Website design project for Sol Benefits Consulting" loading="lazy" />
          </a>
          <div className="manufacturing-feature__copy">
            <p className="manufacturing-eyebrow">Custom Web Design &amp; Development</p>
            <h2>Elite Websites for Financial Services</h2>
            <p>As a financial company, your website visitors are looking for signs of trust, credibility and simplified information to easily understand what you do and what the next steps are. At Azuro, we help you achieve that goal — from the design aesthetic to content quality and user experience. We also help your website rank highly on search engines and LLMs for your most profitable keywords, driving quality traffic to your site.</p>
            <div className="manufacturing-feature__actions">
              <button type="button" className="manufacturing-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
              <a href="https://clutch.co/profile/azuro-digital" target="_blank" rel="noreferrer" className="manufacturing-clutch">Clutch <span>★★★★★</span></a>
            </div>
          </div>
        </section>

        <section className="manufacturing-accessibility">
          <div className="manufacturing-accessibility__seal" aria-label="Verified leader in web accessibility">Verified<br />Accessible</div>
          <div>
            <p className="manufacturing-eyebrow">We’re a Verified Leader in Web Accessibility for Financial Services</p>
            <h2>Accessible Websites for Financial Services</h2>
            <p>AccessibilityChecker.org has recognized Azuro Digital as a verified web agency for accessible websites. Accessibility laws like ADA and AODA are increasingly enforced. By partnering with Azuro, not only will you avoid fines, but you’ll also attract a whole new audience to your site.</p>
            <a className="manufacturing-text-link" href="https://www.accessibilitychecker.org/role-model/azuro-digital-canadas-top-accessibility-focused-web-design-agency/" target="_blank" rel="noreferrer">View Certification <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="manufacturing-blog" aria-labelledby="financial-blog-title">
          <div className="manufacturing-section-heading">
            <div>
              <p className="manufacturing-eyebrow">From Our Blog</p>
              <h2 id="financial-blog-title">Financial Services Website Insights</h2>
            </div>
            <a className="manufacturing-text-link" href="https://azurodigital.com/blog/" target="_blank" rel="noreferrer">View All Posts <span aria-hidden="true">→</span></a>
          </div>
          <div className="manufacturing-blog-grid">
            {blogCards.map((card) => (
              <article className="manufacturing-blog-card" key={card.title}>
                <a href={card.href} target="_blank" rel="noreferrer"><img src={card.image} alt="" loading="lazy" /></a>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a className="manufacturing-text-link" href={card.href} target="_blank" rel="noreferrer">Read More <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="manufacturing-faq" id="financial-faq" aria-labelledby="financial-faq-title">
          <p className="manufacturing-eyebrow">FAQs</p>
          <h2 id="financial-faq-title">Your Questions, Answered</h2>
          <div className="manufacturing-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className="manufacturing-faq-item" key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    aria-controls={`financial-faq-answer-${index}`}
                    onClick={() => setOpenFaq((current) => current === index ? -1 : index)}
                  >
                    {question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                </h3>
                {openFaq === index && <p id={`financial-faq-answer-${index}`}>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="manufacturing-projects" id="financial-projects" aria-labelledby="financial-projects-title">
          <p className="manufacturing-eyebrow">Recent Work</p>
          <h2 id="financial-projects-title">Some of Our Financial Website<br className="manufacturing-desktop-break" /> Design Projects</h2>
          {financialProjects.map((project) => (
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
          {financialProjects.map((project) => (
            <figure className="manufacturing-testimonial" key={`${project.site}-quote`}>
              {project.logo && <img className="manufacturing-testimonial__logo" src={project.logo} alt={`${project.name} logo`} loading="lazy" />}
              <blockquote>“{project.quote}”</blockquote>
              <figcaption><strong>{project.client}</strong><span>{project.role}</span></figcaption>
            </figure>
          ))}
        </section>

        <section className="manufacturing-related">
          <div>
            <p className="manufacturing-eyebrow">Explore Industries Similar to Finance</p>
            <h2>View More Work From<br />Related Sectors</h2>
          </div>
          <a className="manufacturing-related-card" href="https://azurodigital.com/legal-web-design/" target="_blank" rel="noreferrer"><span aria-hidden="true">§</span><strong>Legal Web Design</strong><small>Learn More →</small></a>
          <a className="manufacturing-related-card" href="https://azurodigital.com/insurance-web-design/" target="_blank" rel="noreferrer"><span aria-hidden="true">◇</span><strong>Insurance Web Design</strong><small>Learn More →</small></a>
        </section>
      </div>
    </main>
  )
}

export default Financial
