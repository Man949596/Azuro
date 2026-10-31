import { useEffect, useState } from 'react'
import { portfolioProjects } from '../js/portfolioData.js'
import '../assets/css/legal.css'

const lawFirmHeroImage = 'https://azurodigital.com/wp-content/uploads/Law-Firm-Meeting.jpg'
const lawFirmFeatureImage = 'https://azurodigital.com/wp-content/uploads/Law-Firm-Web-Designer-1.jpg'
const conductLaw = portfolioProjects.find((project) => project.site === 'conductlaw.com')

const processSteps = [
  {
    number: '01',
    icon: '⌕',
    title: 'Industry Research',
    text: 'We research your firm, target market and competitors so your legal website stands out with the right design, content and SEO strategy.',
  },
  {
    number: '02',
    icon: '✎',
    title: 'Marketing Strategy Review',
    text: 'We review your marketing channels and client journey to create a website that supports lead generation through clear messaging and analytics.',
  },
  {
    number: '03',
    icon: '⌕',
    title: 'SEO Research & Planning',
    text: 'We audit your existing website, establish benchmarks and research keywords to help prospective clients find your practice areas.',
  },
  {
    number: '04',
    icon: '◉',
    title: 'Conversion Strategy',
    text: 'We turn website visitors into prospective clients with clear calls to action, trust-building details and a streamlined user experience.',
  },
]

const faqs = [
  [
    'What are your top strategies for law firm web design?',
    'We build trust by showcasing your attorneys’ credentials and experience, creating dedicated practice-area pages, clearly explaining fees where appropriate, and making confidential consultations easy to request. Clear, useful content and local SEO help the right clients find your firm.',
  ],
  [
    'What is your web design process and philosophy?',
    'Our collaborative process includes research, strategy, content planning, design, development, revisions, quality assurance and launch. We focus on accessibility, performance, search visibility and helping your firm generate qualified inquiries.',
  ],
  [
    'Which platforms do you use for web development?',
    'We offer WordPress and custom web development. The right option depends on your needs, integrations and the way your team manages content. We will help you choose the right fit.',
  ],
  [
    'Do you only provide web design services for lawyers?',
    'No. We work with clients in many industries, including manufacturing, real estate and financial services. Every website is tailored to the organization and the people it serves.',
  ],
  [
    'Do you perform ongoing A/B testing to maximize results?',
    'Yes. After launch, ongoing A/B testing and analytics can help identify which changes improve engagement and client inquiries. We can support data-informed optimization over time.',
  ],
]

const blogCards = [
  {
    title: '10 Web Design Tips for Attorneys & Law Firms in 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Law-Firm-Office-1024x700.jpg',
    description: 'Practical ideas to help your law firm website earn trust and attract clients.',
    href: 'https://azurodigital.com/law-firm-web-design-tips/',
    readTime: '11 minute read',
  },
  {
    title: 'How to Optimize Your Website for Search Engines & AI',
    image: 'https://azurodigital.com/wp-content/uploads/SEO-Traffic-1024x700.jpg',
    description: 'Improve visibility and help the right clients find your firm online.',
    href: 'https://azurodigital.com/seo-guide/',
    readTime: '11 minute read',
  },
  {
    title: '10 Best Law Firm Website Designs of 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Law-Firm-Gavel-1024x700.jpg',
    description: 'Explore effective approaches to designing law firm websites.',
    href: 'https://azurodigital.com/law-firm-website-examples/',
    readTime: '22 minute read',
  },
]

function Legal({ onGetProposal }) {
  const [openFaq, setOpenFaq] = useState(-1)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Website Design for Law Firms | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <main className="legal-page" id="content">
      <div className="legal-container">
        <section className="legal-hero" aria-labelledby="legal-title">
          <div className="legal-hero__copy">
            <p className="legal-eyebrow">Web Design Agency for Law Firms</p>
            <h1 id="legal-title">Creating Professional,<br />Custom Website Designs<br />for Law Firms</h1>
          </div>
          <div className="legal-hero__aside">
            <p>Since 2018, Azuro has been designing and developing lead-generating websites for lawyers and attorneys worldwide. Ready to become our next success story?</p>
            <button type="button" className="legal-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
            <div className="legal-rating" aria-label="Rated 4.9 out of 5">
              <span className="legal-rating__google" aria-hidden="true">G</span>
              <span><strong>4.9/5 <b>★★★★★</b></strong><small>Based on 60+ Reviews</small></span>
            </div>
          </div>
        </section>

        <img
          className="legal-hero-image"
          src={lawFirmHeroImage}
          alt="Lawyers meeting around a conference table"
          fetchPriority="high"
        />

        <p className="legal-intro">
          Our legal web design services cater to a range of practice areas — from
          <br className="legal-desktop-break" /> corporate law to immigration law and everything in between. Let’s take
          <br className="legal-desktop-break" /> your firm to the next level with a high-converting website!
        </p>

        <section className="legal-process" aria-labelledby="legal-process-title">
          <div className="legal-section-heading">
            <div>
              <p className="legal-eyebrow">Law Firm Web Design Workflow</p>
              <h2 id="legal-process-title">Our Step-by-Step Process</h2>
            </div>
            <a className="legal-text-link" href="#legal-projects">Recent Work <span aria-hidden="true">→</span></a>
          </div>
          <div className="legal-process-grid">
            {processSteps.map((step) => (
              <article className="legal-process-card" key={step.number}>
                <span className="legal-process-card__icon" aria-hidden="true">{step.icon}</span>
                <strong className="legal-process-card__number">{step.number}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="legal-carousel-controls" aria-label="Process navigation">
            <a href="#legal-projects" aria-label="Previous section">←</a>
            <a href="#legal-projects" aria-label="Next section">→</a>
          </div>
        </section>

        <section className="legal-feature">
          <a className="legal-feature__image" href="https://conductlaw.com/" target="_blank" rel="noreferrer">
            <img src={lawFirmFeatureImage} alt="Law firm website designer working at a computer" loading="lazy" />
          </a>
          <div className="legal-feature__copy">
            <p className="legal-eyebrow">Custom Web Design &amp; Development</p>
            <h2>Superior Websites for Law Firms</h2>
            <p>As a law firm, your website visitors are looking for signs of trust, credibility and simplified information to understand what you do and what the next steps are. We help with every part of that experience — from design and content to user experience. We also help your website rank on search engines and LLMs for your most profitable keywords, driving quality traffic to your site.</p>
            <div className="legal-awards" aria-label="Web design awards">
              <img src="https://azurodigital.com/wp-content/uploads/web-awards-logo.svg" alt="WebAwards" loading="lazy" />
              <img src="https://azurodigital.com/wp-content/uploads/awwwards-logo.svg" alt="Awwwards" loading="lazy" />
              <img src="https://azurodigital.com/wp-content/uploads/css-design-logo.svg" alt="CSS Design Awards" loading="lazy" />
            </div>
            <div className="legal-feature__actions">
              <button type="button" className="legal-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
              <a href="https://clutch.co/profile/azuro-digital" target="_blank" rel="noreferrer" className="legal-clutch">Clutch <span>★★★★★</span></a>
            </div>
          </div>
        </section>

        <section className="legal-accessibility">
          <img className="legal-accessibility__badge" src="https://azurodigital.com/wp-content/uploads/AC-Badge-x3-1024x807.png" alt="AccessibilityChecker verified accessible website agency badge" loading="lazy" />
          <div>
            <p className="legal-eyebrow">We’re a Verified Leader in Web Accessibility for Law Firms</p>
            <h2>Accessible Websites for Every Client</h2>
            <p>AccessibilityChecker.org has recognized Azuro Digital as a verified web agency for accessible websites. Accessibility laws like ADA and AODA are increasingly enforced. By partnering with Azuro, you can build an inclusive experience and welcome a wider audience to your site.</p>
            <div className="legal-accessibility__actions">
              <a className="legal-button" href="https://www.accessibilitychecker.org/role-model/azuro-digital-canadas-top-accessibility-focused-web-design-agency/" target="_blank" rel="noreferrer">View Certification <span aria-hidden="true">→</span></a>
              <img src="https://azurodigital.com/wp-content/uploads/WCAG-logo.png" alt="WCAG 2.2 Level AA" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="legal-blog" aria-labelledby="legal-blog-title">
          <div className="legal-section-heading">
            <div><h2 id="legal-blog-title">From Our Blog</h2></div>
            <a className="legal-text-link" href="https://azurodigital.com/blog/" target="_blank" rel="noreferrer">View All Posts <span aria-hidden="true">→</span></a>
          </div>
          <div className="legal-blog-grid">
            {blogCards.map((card) => (
              <article className="legal-blog-card" key={card.title}>
                <a href={card.href} target="_blank" rel="noreferrer"><img src={card.image} alt="" loading="lazy" /></a>
                <h3><a href={card.href} target="_blank" rel="noreferrer">{card.title}</a></h3>
                <small>{card.readTime}</small>
                <a className="legal-text-link" href={card.href} target="_blank" rel="noreferrer">Read More <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="legal-faq" id="legal-faq" aria-labelledby="legal-faq-title">
          <p className="legal-eyebrow">FAQs</p>
          <h2 id="legal-faq-title">Your Questions, Answered</h2>
          <div className="legal-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className="legal-faq-item" key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    aria-controls={`legal-faq-answer-${index}`}
                    onClick={() => setOpenFaq((current) => current === index ? -1 : index)}
                  >
                    {question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                </h3>
                {openFaq === index && <p id={`legal-faq-answer-${index}`}>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="legal-projects" id="legal-projects" aria-labelledby="legal-projects-title">
          <p className="legal-eyebrow">Law Firm Web Design Project</p>
          <h2 id="legal-projects-title">Check Out Our Recent Work!</h2>
          {conductLaw && (
            <>
              <article className="legal-project">
                <a className="legal-project__screens" href={`https://${conductLaw.site}`} target="_blank" rel="noreferrer" aria-label="Visit ConductLaw website">
                  <img src="https://azurodigital.com/wp-content/uploads/conduct-law-top.jpg" alt="ConductLaw website overview" loading="lazy" />
                  <img src="https://azurodigital.com/wp-content/uploads/conduct-law-main.jpg" alt="ConductLaw website design detail" loading="lazy" />
                  <img src="https://azurodigital.com/wp-content/uploads/conduct-law-bottom.jpg" alt="ConductLaw website practice areas" loading="lazy" />
                </a>
                <div className="legal-project__details">
                  <a href={`https://${conductLaw.site}`} target="_blank" rel="noreferrer" className="legal-project__site">{conductLaw.site} <span aria-hidden="true">↗</span></a>
                  <h3>{conductLaw.name}</h3>
                  <p>ConductLaw is a business law firm in Ottawa, Ontario, with a focus on corporate and commercial law, real estate law, and estate planning. We took their digital presence to the next level with a new website design.</p>
                  <a className="legal-text-link" href={`https://${conductLaw.site}`} target="_blank" rel="noreferrer">Visit Site <span aria-hidden="true">→</span></a>
                </div>
              </article>
              <figure className="legal-testimonial">
                {conductLaw.logo && <img className="legal-testimonial__logo" src={conductLaw.logo} alt={`${conductLaw.name} logo`} loading="lazy" />}
                <blockquote>“{conductLaw.quote}”</blockquote>
                {conductLaw.portrait && <img className="legal-testimonial__portrait" src="https://azurodigital.com/wp-content/uploads/jp-headshot.jpg" alt={conductLaw.client} loading="lazy" />}
                <figcaption><strong>{conductLaw.client}</strong><span>{conductLaw.role}</span></figcaption>
              </figure>
            </>
          )}
        </section>

        <section className="legal-related">
          <div>
            <p className="legal-eyebrow">Explore Industries Similar to Law</p>
            <h2>View More Work From<br />Related Sectors</h2>
          </div>
          <a className="legal-related-card" href="https://azurodigital.com/insurance-web-design/" target="_blank" rel="noreferrer"><span aria-hidden="true">◇</span><strong>Insurance Web Design</strong><small>Learn More →</small></a>
          <a className="legal-related-card" href="/financial-web-design"><span aria-hidden="true">◉</span><strong>Financial Web Design</strong><small>Learn More →</small></a>
        </section>
      </div>
    </main>
  )
}

export default Legal
