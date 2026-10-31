import { Fragment, useEffect, useState } from 'react'
import { portfolioProjects } from '../js/portfolioData.js'
import '../assets/css/nonprofit.css'

const nonprofitHeroImage = 'https://azurodigital.com/wp-content/uploads/Volunteers-at-Nonprofit-Event.jpg'
const nonprofitFeatureImage = 'https://azurodigital.com/wp-content/uploads/Nonprofit-Web-Designer-1.jpg'
const genconFoundation = {
  site: 'genconfoundation.ca',
  name: 'Gencon Foundation',
  description: 'Gencon Foundation is an environmental charity headquartered in Vancouver. They hired Azuro Digital to create a website that matches their sustainability-driven mission.',
  image: 'https://azurodigital.com/wp-content/uploads/Gencon-Top.jpg',
  logo: 'https://azurodigital.com/wp-content/uploads/gencon-foundation-logo-black-1.svg',
  quote: 'Azuro revamped our environmental foundation’s website and was very responsive to our feedback and patient with a number of iterations of the website.',
  client: 'Colleen Reid',
  role: 'Director at Gencon Foundation',
}
const nonprofitProjects = [
  {
    ...portfolioProjects.find((project) => project.site === 'ohfoundation.ca'),
    image: 'https://azurodigital.com/wp-content/uploads/the-ottawa-hospital-top.jpg',
  },
  {
    ...portfolioProjects.find((project) => project.site === 'noblenational.org'),
    image: 'https://azurodigital.com/wp-content/uploads/noble-top.jpg',
  },
  genconFoundation,
].filter((project) => project.site)

const processSteps = [
  {
    number: '01',
    icon: '⌕',
    title: 'Industry Research',
    text: 'We research your organization, target market and competitors so your nonprofit website stands out with the right design, content and SEO strategy.',
  },
  {
    number: '02',
    icon: '✎',
    title: 'Marketing Strategy Review',
    text: 'We review your marketing channels and supporter journey to help your website support outreach, messaging and analytics.',
  },
  {
    number: '03',
    icon: '⌕',
    title: 'SEO Research & Planning',
    text: 'We audit your existing site, establish benchmarks, perform keyword research and optimize your content to reach the right supporters.',
  },
  {
    number: '04',
    icon: '◉',
    title: 'Conversion Strategy',
    text: 'We help turn website traffic into active members with clear calls to action, social proof and a streamlined user experience.',
  },
]

const faqs = [
  [
    'What are your top strategies for nonprofit web design?',
    'We make your mission and impact clear, create frictionless donation and volunteer experiences, and present outcomes transparently. A strong nonprofit website should build trust and make it simple for supporters to take action.',
  ],
  [
    'What is your web design process and philosophy?',
    'Our collaborative process includes research, strategy, content planning, design, development, revisions, quality assurance and launch. We focus on accessibility, performance, search visibility and helping your organization connect with supporters.',
  ],
  [
    'Which platforms do you use for web development?',
    'We offer WordPress and custom web development. The right option depends on your needs, integrations and the way your team manages content. We will help you choose the right fit.',
  ],
  [
    'Do you only provide web design services for nonprofits?',
    'No. We work with clients across many for-profit and nonprofit industries. Every website is tailored to the organization, its goals and the people it serves.',
  ],
  [
    'Do you perform ongoing A/B testing to maximize results?',
    'Yes. After launch, ongoing A/B testing and analytics can help identify which changes improve engagement and conversions. We can support data-informed optimization over time.',
  ],
]

const blogCards = [
  {
    title: '10 Web Design Tips for Nonprofit Organizations in 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Environmental-Nonprofit-Volunteers-1024x700.jpg',
    description: 'Practical ideas to help your nonprofit website inspire action.',
    href: 'https://azurodigital.com/nonprofit-web-design-tips/',
  },
  {
    title: 'How to Optimize Your Website for Search Engines & AI',
    image: 'https://azurodigital.com/wp-content/uploads/seo img2.webp',
    description: 'Build visibility and help more supporters discover your work.',
    href: 'https://azurodigital.com/seo-guide/',
  },
  {
    title: '10 Best Nonprofit Website Designs of 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Gencon-Top.jpg',
    description: 'Explore effective approaches to designing nonprofit websites.',
    href: 'https://azurodigital.com/nonprofit-website-examples/',
  },
]

function Nonprofit({ onGetProposal }) {
  const [openFaq, setOpenFaq] = useState(-1)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Nonprofit Web Design | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <main className="manufacturing-page" id="content">
      <div className="manufacturing-container">
        <section className="manufacturing-hero" aria-labelledby="nonprofit-title">
          <div className="manufacturing-hero__copy">
            <p className="manufacturing-eyebrow">Web Design Agency for Nonprofit Organizations</p>
            <h1 id="nonprofit-title">Creating Professional,<br />Custom Website Designs<br />for Nonprofits</h1>
          </div>
          <div className="manufacturing-hero__aside">
            <p>Is your nonprofit looking for a website overhaul? With our nonprofit web design services, your organization can get a high-converting website at a fair price.</p>
            <button type="button" className="manufacturing-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
            <div className="manufacturing-rating" aria-label="Rated 4.9 out of 5">
              <span className="manufacturing-rating__google" aria-hidden="true">G</span>
              <span><strong>4.9/5 <b>★★★★★</b></strong><small>Based on 60+ Reviews</small></span>
            </div>
          </div>
        </section>

        <img
          className="manufacturing-hero-image"
          src={nonprofitHeroImage}
          alt="Volunteers working together at a nonprofit community event"
          fetchPriority="high"
        />

        <p className="manufacturing-intro">
          We partner with all sorts of nonprofits, from environmental to
          <br className="manufacturing-desktop-break" /> humanitarian organizations and everything in between. Is your nonprofit
          <br className="manufacturing-desktop-break" /> ready to become our next success story?
        </p>

        <section className="manufacturing-process" aria-labelledby="nonprofit-process-title">
          <div className="manufacturing-section-heading">
            <div>
              <p className="manufacturing-eyebrow">Nonprofit Web Design Workflow</p>
              <h2 id="nonprofit-process-title">Our Step-by-Step Process</h2>
            </div>
            <a className="manufacturing-text-link" href="#nonprofit-projects">Recent Work <span aria-hidden="true">→</span></a>
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
            <a href="#nonprofit-projects" aria-label="Previous section">←</a>
            <a href="#nonprofit-projects" aria-label="Next section">→</a>
          </div>
        </section>

        <section className="manufacturing-feature">
          <a className="manufacturing-feature__image" href="https://azurodigital.com/nonprofit-web-design/" target="_blank" rel="noreferrer">
            <img src={nonprofitFeatureImage} alt="Nonprofit web design and development in progress" loading="lazy" />
          </a>
          <div className="manufacturing-feature__copy">
            <p className="manufacturing-eyebrow">Custom Web Design &amp; Development</p>
            <h2>Superior Websites for Nonprofits</h2>
            <p>As a nonprofit, your website visitors are looking for signs of trust, credibility and simplified information to understand what your organization does. We help with every part of that experience — from design and content to usability and search visibility — so more people can learn about your mission and get involved.</p>
            <div className="manufacturing-feature__actions">
              <button type="button" className="manufacturing-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
              <a href="https://clutch.co/profile/azuro-digital" target="_blank" rel="noreferrer" className="manufacturing-clutch">Clutch <span>★★★★★</span></a>
            </div>
          </div>
        </section>

        <section className="manufacturing-accessibility">
          <div className="manufacturing-accessibility__seal" aria-label="Verified leader in web accessibility">Verified<br />Accessible</div>
          <div>
            <p className="manufacturing-eyebrow">We’re a Verified Leader in Web Accessibility for Nonprofits</p>
            <h2>Accessible Websites for Nonprofits</h2>
            <p>AccessibilityChecker.org has recognized Azuro Digital as a verified web agency for accessible websites. Accessibility laws like ADA and AODA are increasingly enforced. By partnering with Azuro, you can build an inclusive experience and welcome a wider audience to your site.</p>
            <a className="manufacturing-text-link" href="https://www.accessibilitychecker.org/role-model/azuro-digital-canadas-top-accessibility-focused-web-design-agency/" target="_blank" rel="noreferrer">View Certification <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="manufacturing-blog" aria-labelledby="nonprofit-blog-title">
          <div className="manufacturing-section-heading">
            <div>
              <p className="manufacturing-eyebrow">From Our Blog</p>
              <h2 id="nonprofit-blog-title">Nonprofit Website Insights</h2>
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

        <section className="manufacturing-faq" id="nonprofit-faq" aria-labelledby="nonprofit-faq-title">
          <p className="manufacturing-eyebrow">FAQs</p>
          <h2 id="nonprofit-faq-title">Your Questions, Answered</h2>
          <div className="manufacturing-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className="manufacturing-faq-item" key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    aria-controls={`nonprofit-faq-answer-${index}`}
                    onClick={() => setOpenFaq((current) => current === index ? -1 : index)}
                  >
                    {question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                </h3>
                {openFaq === index && <p id={`nonprofit-faq-answer-${index}`}>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="manufacturing-projects" id="nonprofit-projects" aria-labelledby="nonprofit-projects-title">
          <p className="manufacturing-eyebrow">Recent Work</p>
          <h2 id="nonprofit-projects-title">Some of Our Nonprofit Website<br className="manufacturing-desktop-break" /> Design Projects</h2>
          {nonprofitProjects.map((project) => (
            <Fragment key={project.site}>
              <article className="manufacturing-project">
                <a className="manufacturing-project__image" href={`https://${project.site}`} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={`${project.name} website design`} loading="lazy" />
                </a>
                <div className="manufacturing-project__details">
                  <a href={`https://${project.site}`} target="_blank" rel="noreferrer" className="manufacturing-project__site">{project.site} <span aria-hidden="true">↗</span></a>
                  <h3>{project.name}</h3>
                  <p>{project.site === 'ohfoundation.ca'
                    ? 'The Ottawa Hospital Foundation drives community support and donations for The Ottawa Hospital. With an outdated website, they hired Azuro to upgrade their site to better support their mission.'
                    : project.site === 'noblenational.org'
                      ? 'The National Organization of Black Law Enforcement Executives is a nonprofit with chapters across the US. We revamped its website to streamline the user experience and boost its reputation.'
                      : project.description}</p>
                  <a className="manufacturing-text-link" href={`https://${project.site}`} target="_blank" rel="noreferrer">Visit Site <span aria-hidden="true">→</span></a>
                </div>
              </article>
              <figure className="manufacturing-testimonial">
                {project.logo && <img className="manufacturing-testimonial__logo" src={project.logo} alt={`${project.name} logo`} loading="lazy" />}
                <blockquote>“{project.quote}”</blockquote>
                <figcaption><strong>{project.client}</strong><span>{project.role}</span></figcaption>
              </figure>
            </Fragment>
          ))}
        </section>

        <section className="manufacturing-related">
          <div>
            <p className="manufacturing-eyebrow">Explore Industries Similar to Nonprofits</p>
            <h2>View More Work From<br />Related Sectors</h2>
          </div>
          <a className="manufacturing-related-card" href="https://azurodigital.com/environmental-web-design/" target="_blank" rel="noreferrer"><span aria-hidden="true">♧</span><strong>Environmental Web Design</strong><small>Learn More →</small></a>
          <a className="manufacturing-related-card" href="/healthcare-web-design"><span aria-hidden="true">✚</span><strong>Healthcare Web Design</strong><small>Learn More →</small></a>
        </section>
      </div>
    </main>
  )
}

export default Nonprofit
