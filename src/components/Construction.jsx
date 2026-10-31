import { useEffect, useState } from 'react'
import { portfolioProjects } from '../js/portfolioData.js'
import seoImage from '../assets/images/seo img2.webp'
import '../assets/css/construction.css'

const constructionImage = 'https://azurodigital.com/wp-content/uploads/Construction-Site.jpg'
const constructionProjects = ['brightstone.ca', 'twistednail.com', 'sellickequipment.com']
  .map((site) => portfolioProjects.find((project) => project.site === site))
  .filter(Boolean)

const processSteps = [
  {
    number: '01',
    icon: '⌕',
    title: 'Industry Research',
    text: 'We research your business, target market and competitors so your construction website stands out with the right design, content and SEO strategy.',
  },
  {
    number: '02',
    icon: '✎',
    title: 'Marketing Strategy Review',
    text: 'We review your marketing channels and sales process to make sure your website supports lead generation with a clear user journey and messaging.',
  },
  {
    number: '03',
    icon: '⌕',
    title: 'SEO Research & Planning',
    text: 'We audit your existing site, establish benchmarks, perform keyword research and optimize your content to reach the right customers.',
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
    'What are your top strategies for construction web design?',
    'We showcase completed projects, credentials, safety records, and client testimonials in a clear, easy-to-navigate website. Strong project photography and straightforward calls to action help prospective clients understand your capabilities and get in touch.',
  ],
  [
    'What is your web design process and philosophy?',
    'Our collaborative process includes research, strategy, content planning, design, development, revisions, quality assurance and launch. We focus on accessibility, performance, search visibility and helping your business win more of the right projects.',
  ],
  [
    'Which platforms do you use for web development?',
    'We recommend a content management platform based on your requirements, integrations and the way your team manages content. We will explain the options and help you choose the right fit.',
  ],
  [
    'Do you only provide web design services for construction companies?',
    'No. We work with businesses across many industries. Our construction website experience includes contractors, developers and suppliers serving the construction industry.',
  ],
  [
    'Do you perform ongoing SEO to maximize results?',
    'Yes. We can provide technical SEO, content strategy and ongoing optimization to help your website reach relevant customers and generate qualified inquiries.',
  ],
]

const blogCards = [
  {
    title: '10 Web Design Tips for Construction Companies in 2026',
    image: constructionImage,
    description: 'Practical ways to make your construction website more effective.',
  },
  {
    title: 'How to Optimize Your Website for Search Engines & AI',
    image: seoImage,
    description: 'Help the right customers find your company online.',
  },
  {
    title: '10 Best Construction Website Designs of 2026',
    image: constructionImage,
    description: 'Explore effective ideas for showcasing construction work.',
  },
]

function Construction({ onGetProposal }) {
  const [openFaq, setOpenFaq] = useState(-1)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Construction Web Design | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <main className="manufacturing-page" id="content">
      <div className="manufacturing-container">
        <section className="manufacturing-hero" aria-labelledby="construction-title">
          <div className="manufacturing-hero__copy">
            <p className="manufacturing-eyebrow">Web Design Agency for Construction Companies</p>
            <h1 id="construction-title">Creating Professional,<br />Custom Website Designs<br />for Construction</h1>
          </div>
          <div className="manufacturing-hero__aside">
            <p>Our agency has been delivering modern web design services for construction companies and contractors since 2018. Ready to become our next success story?</p>
            <button type="button" className="manufacturing-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
            <div className="manufacturing-rating" aria-label="Rated 4.9 out of 5">
              <span className="manufacturing-rating__google" aria-hidden="true">G</span>
              <span><strong>4.9/5 <b>★★★★★</b></strong><small>Based on 60+ Reviews</small></span>
            </div>
          </div>
        </section>

        <img
          className="manufacturing-hero-image"
          src={constructionImage}
          alt="Construction site with cranes and buildings at sunset"
          fetchPriority="high"
        />

        <p className="manufacturing-intro">
          Your construction company deserves a website that enhances your
          <br className="manufacturing-desktop-break" /> reputation, generates traffic and increases conversions. Let’s take your
          <br className="manufacturing-desktop-break" /> online presence to the next level and surpass your competition!
        </p>

        <section className="manufacturing-process" aria-labelledby="construction-process-title">
          <div className="manufacturing-section-heading">
            <div>
              <p className="manufacturing-eyebrow">Construction Web Design Workflow</p>
              <h2 id="construction-process-title">Our Step-by-Step Process</h2>
            </div>
            <a className="manufacturing-text-link" href="#construction-projects">Recent Work <span aria-hidden="true">→</span></a>
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
            <a href="#construction-projects" aria-label="Previous section">←</a>
            <a href="#construction-projects" aria-label="Next section">→</a>
          </div>
        </section>

        <section className="manufacturing-feature">
          <a className="manufacturing-feature__image" href="https://brightstone.ca/" target="_blank" rel="noreferrer">
            <img src={constructionProjects[0]?.image || constructionImage} alt="Website design project for Brightstone" loading="lazy" />
          </a>
          <div className="manufacturing-feature__copy">
            <p className="manufacturing-eyebrow">Custom Web Design &amp; Development</p>
            <h2>Superior Websites for Construction</h2>
            <p>We work with the entire construction industry — including real estate developers, trucking and transportation, equipment manufacturers, general contractors and everything in between. As a construction company, your website serves as a lasting first impression and helps potential customers understand your capabilities and trust your work.</p>
            <div className="manufacturing-feature__actions">
              <button type="button" className="manufacturing-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
              <a href="https://clutch.co/profile/azuro-digital" target="_blank" rel="noreferrer" className="manufacturing-clutch">Clutch <span>★★★★★</span></a>
            </div>
          </div>
        </section>

        <section className="manufacturing-accessibility">
          <div className="manufacturing-accessibility__seal" aria-label="Verified leader in web accessibility">Verified<br />Accessible</div>
          <div>
            <p className="manufacturing-eyebrow">We’re a Verified Leader in Web Accessibility for Construction Companies</p>
            <h2>Accessibility-First Design for Your Construction Website</h2>
            <p>AccessibilityChecker.org has recognized Azuro Digital as a verified web agency for accessible websites. Accessibility laws like ADA and AODA are increasingly enforced. By partnering with Azuro, not only will you avoid fines, but you’ll also attract a whole new audience to your site.</p>
            <a className="manufacturing-text-link" href="https://www.accessibilitychecker.org/role-model/azuro-digital-canadas-top-accessibility-focused-web-design-agency/" target="_blank" rel="noreferrer">View Certification <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="manufacturing-blog" aria-labelledby="construction-blog-title">
          <div className="manufacturing-section-heading">
            <div>
              <p className="manufacturing-eyebrow">From Our Blog</p>
              <h2 id="construction-blog-title">Insights for Construction Companies</h2>
            </div>
            <a className="manufacturing-text-link" href="https://azurodigital.com/blog/" target="_blank" rel="noreferrer">View All Posts <span aria-hidden="true">→</span></a>
          </div>
          <div className="manufacturing-blog-grid">
            {blogCards.map((card) => (
              <article className="manufacturing-blog-card" key={card.title}>
                <img src={card.image} alt="" loading="lazy" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a className="manufacturing-text-link" href="https://azurodigital.com/blog/" target="_blank" rel="noreferrer">Read More <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="manufacturing-faq" id="construction-faq" aria-labelledby="construction-faq-title">
          <p className="manufacturing-eyebrow">FAQs</p>
          <h2 id="construction-faq-title">Your Questions, Answered</h2>
          <div className="manufacturing-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className="manufacturing-faq-item" key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    aria-controls={`construction-faq-answer-${index}`}
                    onClick={() => setOpenFaq((current) => current === index ? -1 : index)}
                  >
                    {question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                </h3>
                {openFaq === index && <p id={`construction-faq-answer-${index}`}>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="manufacturing-projects" id="construction-projects" aria-labelledby="construction-projects-title">
          <p className="manufacturing-eyebrow">Recent Work</p>
          <h2 id="construction-projects-title">Some of Our Construction Web<br className="manufacturing-desktop-break" /> Design Projects</h2>
          {constructionProjects.map((project) => (
            <article className="manufacturing-project" key={project.site}>
              <a className="manufacturing-project__image" href={`https://${project.site}`} target="_blank" rel="noreferrer">
                <img src={project.image} alt={`${project.name} website design`} loading="lazy" />
              </a>
              <div className="manufacturing-project__details">
                <a href={`https://${project.site}`} target="_blank" rel="noreferrer" className="manufacturing-project__site">{project.site} <span aria-hidden="true">↗</span></a>
                <h3>{project.name}</h3>
                <p>{project.site === 'brightstone.ca'
                  ? 'Brightstone is a real estate development company in Toronto, Ontario. They design and build world-class luxury properties and needed a website that reflects the quality of their work.'
                  : project.site === 'twistednail.com'
                    ? 'Twisted Nail is a trucking, logistics and aggregate supplier serving the construction industry. We redesigned their website with an emphasis on SEO, conversions and a design that WOWs visitors.'
                    : project.description}</p>
                <a className="manufacturing-text-link" href={`https://${project.site}`} target="_blank" rel="noreferrer">Visit Site <span aria-hidden="true">→</span></a>
              </div>
            </article>
          ))}
          {constructionProjects.map((project) => (
            <figure className="manufacturing-testimonial" key={`${project.site}-quote`}>
              {project.logo && <img className="manufacturing-testimonial__logo" src={project.logo} alt={`${project.name} logo`} loading="lazy" />}
              <blockquote>“{project.quote}”</blockquote>
              <figcaption><strong>{project.client}</strong><span>{project.role}</span></figcaption>
            </figure>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Construction
