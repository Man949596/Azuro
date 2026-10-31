import { useEffect, useState } from 'react'
import { portfolioProjects } from '../js/portfolioData.js'
import '../assets/css/healthcare.css'

const healthcareHeroImage = 'https://azurodigital.com/wp-content/uploads/Hospital-Hallway.jpg'
const healthcareProjects = ['ohfoundation.ca', 'heartforce.com', 'statenislandoralsurgery.us']
  .map((site) => portfolioProjects.find((project) => project.site === site))
  .filter(Boolean)

const processSteps = [
  {
    number: '01',
    icon: '⌕',
    title: 'Industry Research',
    text: 'We research your business, target market and competitors so your healthcare website stands out with the right design, content and SEO strategy.',
  },
  {
    number: '02',
    icon: '✎',
    title: 'Marketing Strategy Review',
    text: 'We review your marketing channels and patient journey to make sure your website supports your goals with clear messaging and analytics.',
  },
  {
    number: '03',
    icon: '⌕',
    title: 'SEO Research & Planning',
    text: 'We audit your existing site, establish benchmarks, perform keyword research and optimize your content to reach the right patients.',
  },
  {
    number: '04',
    icon: '◉',
    title: 'Conversion Strategy',
    text: 'We turn website traffic into active patients with clear calls to action, impactful social proof and a streamlined user experience.',
  },
]

const faqs = [
  [
    'What are your top strategies for healthcare web design?',
    'We prioritize patient privacy, accessibility and clear, helpful information. A strong healthcare website should explain services in plain language, make it easy to take the next step, support diverse visitors and build trust through accurate content and credentials.',
  ],
  [
    'What is your web design process and philosophy?',
    'Our collaborative process includes research, strategy, content planning, design, development, revisions, quality assurance and launch. We focus on accessibility, performance, search visibility and creating an experience that helps your organization connect with patients.',
  ],
  [
    'Which platforms do you use for web development?',
    'We offer WordPress and custom web development. The right option depends on your needs, integrations and the way your team manages content. We will help you decide during discovery.',
  ],
  [
    'Do you only provide web design services for healthcare companies?',
    'No. We work with clients in many industries, including manufacturing, insurance and B2B. Every website is tailored to the organization and the people it serves.',
  ],
  [
    'Do you perform ongoing A/B testing to maximize results?',
    'Yes. After launch, ongoing A/B testing and analytics can help identify which changes improve engagement and conversions. We can support that process with data-informed optimization.',
  ],
]

const blogCards = [
  {
    title: '10 Web Design Tips for Healthcare Companies in 2026',
    image: healthcareHeroImage,
    description: 'Practical ways to create an accessible and patient-friendly website.',
    href: 'https://azurodigital.com/healthcare-web-design-tips/',
  },
  {
    title: 'How to Optimize WordPress Security & Privacy Compliance',
    image: healthcareProjects[1]?.image || healthcareHeroImage,
    description: 'Build confidence with a secure and privacy-conscious web experience.',
    href: 'https://azurodigital.com/security-and-privacy-guide/',
  },
  {
    title: '10 Best Healthcare Website Designs of 2026',
    image: healthcareProjects[2]?.image || healthcareHeroImage,
    description: 'Explore effective approaches to designing healthcare websites.',
    href: 'https://azurodigital.com/healthcare-website-examples/',
  },
]

function Healthcare({ onGetProposal }) {
  const [openFaq, setOpenFaq] = useState(-1)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Healthcare Web Design | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <main className="manufacturing-page" id="content">
      <div className="manufacturing-container">
        <section className="manufacturing-hero" aria-labelledby="healthcare-title">
          <div className="manufacturing-hero__copy">
            <p className="manufacturing-eyebrow">Web Design Agency for Healthcare Companies</p>
            <h1 id="healthcare-title">We Create Stunning<br />Website Designs for<br />Healthcare Providers</h1>
          </div>
          <div className="manufacturing-hero__aside">
            <p>Delivering professional web design services for the healthcare industry since 2018. Are you ready to become our next success story?</p>
            <button type="button" className="manufacturing-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
            <div className="manufacturing-rating" aria-label="Rated 4.9 out of 5">
              <span className="manufacturing-rating__google" aria-hidden="true">G</span>
              <span><strong>4.9/5 <b>★★★★★</b></strong><small>Based on 60+ Reviews</small></span>
            </div>
          </div>
        </section>

        <img
          className="manufacturing-hero-image"
          src={healthcareHeroImage}
          alt="Modern hospital hallway with healthcare professionals"
          fetchPriority="high"
        />

        <p className="manufacturing-intro">
          Whether you’re a hospital, dental practice, mental health clinic,
          <br className="manufacturing-desktop-break" /> pharmaceutical company or anything in between, we’ve got you covered
          <br className="manufacturing-desktop-break" /> with our web design, development and SEO services (prioritizing HIPAA compliance).
        </p>

        <section className="manufacturing-process" aria-labelledby="healthcare-process-title">
          <div className="manufacturing-section-heading">
            <div>
              <p className="manufacturing-eyebrow">Healthcare Web Design Workflow</p>
              <h2 id="healthcare-process-title">Our Step-by-Step Process</h2>
            </div>
            <a className="manufacturing-text-link" href="#healthcare-projects">Recent Work <span aria-hidden="true">→</span></a>
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
            <a href="#healthcare-projects" aria-label="Previous section">←</a>
            <a href="#healthcare-projects" aria-label="Next section">→</a>
          </div>
        </section>

        <section className="manufacturing-feature">
          <a className="manufacturing-feature__image" href="https://ohfoundation.ca/" target="_blank" rel="noreferrer">
            <img src={healthcareProjects[0]?.image || healthcareHeroImage} alt="Website design project for The Ottawa Hospital Foundation" loading="lazy" />
          </a>
          <div className="manufacturing-feature__copy">
            <p className="manufacturing-eyebrow">Custom Web Design &amp; Development</p>
            <h2>Superior Websites for Healthcare</h2>
            <p>As a healthcare company, your website visitors are looking for signs of trust, credibility and easily digestible information to understand your services and processes. At Azuro, we help you achieve that goal — from the design aesthetic to content quality and user experience. We also help your website rank on Google and ChatGPT for your most profitable keywords, driving more traffic to your site.</p>
            <div className="manufacturing-feature__actions">
              <button type="button" className="manufacturing-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
              <a href="https://clutch.co/profile/azuro-digital" target="_blank" rel="noreferrer" className="manufacturing-clutch">Clutch <span>★★★★★</span></a>
            </div>
          </div>
        </section>

        <section className="manufacturing-accessibility">
          <div className="manufacturing-accessibility__seal" aria-label="Verified leader in web accessibility">Verified<br />Accessible</div>
          <div>
            <p className="manufacturing-eyebrow">We’re a Verified Leader in Web Accessibility for Healthcare Companies</p>
            <h2>Accessibility-First Design for Your Healthcare Website</h2>
            <p>AccessibilityChecker.org has recognized Azuro Digital as a verified web agency for accessible websites. Accessibility laws like ADA and AODA are increasingly enforced. By partnering with Azuro, not only will you avoid fines, but you’ll also attract a whole new audience to your site.</p>
            <a className="manufacturing-text-link" href="https://www.accessibilitychecker.org/role-model/azuro-digital-canadas-top-accessibility-focused-web-design-agency/" target="_blank" rel="noreferrer">View Certification <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="manufacturing-blog" aria-labelledby="healthcare-blog-title">
          <div className="manufacturing-section-heading">
            <div>
              <p className="manufacturing-eyebrow">From Our Blog</p>
              <h2 id="healthcare-blog-title">Healthcare Website Insights</h2>
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

        <section className="manufacturing-faq" id="healthcare-faq" aria-labelledby="healthcare-faq-title">
          <p className="manufacturing-eyebrow">FAQs</p>
          <h2 id="healthcare-faq-title">Your Questions, Answered</h2>
          <div className="manufacturing-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className="manufacturing-faq-item" key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    aria-controls={`healthcare-faq-answer-${index}`}
                    onClick={() => setOpenFaq((current) => current === index ? -1 : index)}
                  >
                    {question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                </h3>
                {openFaq === index && <p id={`healthcare-faq-answer-${index}`}>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="manufacturing-projects" id="healthcare-projects" aria-labelledby="healthcare-projects-title">
          <p className="manufacturing-eyebrow">Healthcare Web Design Project</p>
          <h2 id="healthcare-projects-title">Check Out Our Recent Work!</h2>
          {healthcareProjects.map((project) => (
            <article className="manufacturing-project" key={project.site}>
              <a className="manufacturing-project__image" href={`https://${project.site}`} target="_blank" rel="noreferrer">
                <img src={project.image} alt={`${project.name} website design`} loading="lazy" />
              </a>
              <div className="manufacturing-project__details">
                <a href={`https://${project.site}`} target="_blank" rel="noreferrer" className="manufacturing-project__site">{project.site} <span aria-hidden="true">↗</span></a>
                <h3>{project.name}</h3>
                <p>{project.site === 'ohfoundation.ca'
                  ? 'The Ottawa Hospital Foundation drives community support and donations for The Ottawa Hospital. We created an engaging website that helps raise awareness and makes it easier to support their mission.'
                  : project.site === 'heartforce.com'
                    ? 'HeartForce is a cutting-edge medtech startup known for its fast, non-invasive screening device for coronary artery disease. We revamped its website to clearly communicate the technology and its impact.'
                    : 'Staten Island Oral & Maxillofacial Surgery has served its community since 1981. We refreshed its outdated website with a modern, patient-friendly experience.'}</p>
                <a className="manufacturing-text-link" href={`https://${project.site}`} target="_blank" rel="noreferrer">Visit Site <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
          {healthcareProjects.map((project) => (
            <figure className="manufacturing-testimonial" key={`${project.site}-quote`}>
              {project.logo && <img className="manufacturing-testimonial__logo" src={project.logo} alt={`${project.name} logo`} loading="lazy" />}
              <blockquote>“{project.quote}”</blockquote>
              <figcaption><strong>{project.client}</strong><span>{project.role}</span></figcaption>
            </figure>
          ))}
        </section>

        <section className="manufacturing-related">
          <div>
            <p className="manufacturing-eyebrow">Explore Industries Similar to Healthcare</p>
            <h2>View More Work From<br />Related Sectors</h2>
          </div>
          <a className="manufacturing-related-card" href="https://azurodigital.com/doctor-web-design/" target="_blank" rel="noreferrer"><span aria-hidden="true">✚</span><strong>Physician Web Design</strong><small>Learn More →</small></a>
          <a className="manufacturing-related-card" href="https://azurodigital.com/nonprofit-web-design/" target="_blank" rel="noreferrer"><span aria-hidden="true">♧</span><strong>Nonprofit Web Design</strong><small>Learn More →</small></a>
        </section>
      </div>
    </main>
  )
}

export default Healthcare
