import { useEffect, useState } from 'react'
import { portfolioProjects } from '../js/portfolioData.js'
import '../assets/css/dental.css'

const dentalHeroImage = 'https://azurodigital.com/wp-content/uploads/Dental-Clinic.jpg'
const dentalFeatureImage = 'https://azurodigital.com/wp-content/uploads/Web-Designer-for-Dentists.jpg'
const dentalProject = {
  ...portfolioProjects.find((project) => project.site === 'statenislandoralsurgery.us'),
  image: 'https://azurodigital.com/wp-content/uploads/sioms-top.jpg',
}

const processSteps = [
  {
    number: '01',
    icon: '⌕',
    title: 'Industry Research',
    text: 'We learn about your dental practice, services, patients and local competitors to shape a website strategy around your goals.',
  },
  {
    number: '02',
    icon: '✎',
    title: 'Marketing Strategy Review',
    text: 'We review your brand and patient journey, then clarify the messages and actions that help prospective patients choose your practice.',
  },
  {
    number: '03',
    icon: '⌕',
    title: 'SEO Research & Planning',
    text: 'We research local search opportunities and plan useful, well-structured content that helps nearby patients find your services.',
  },
  {
    number: '04',
    icon: '◉',
    title: 'Conversion Strategy',
    text: 'We make it easy to book, call or learn more with reassuring content, clear calls to action and a smooth mobile experience.',
  },
]

const faqs = [
  [
    'What are your top strategies for dental web design?',
    'We build trust with clear service information, welcoming photography and patient testimonials. Convenient appointment booking, accessible design, local SEO and straightforward information about insurance and payment options help visitors take the next step.',
  ],
  [
    'What is your web design process and philosophy?',
    'Our collaborative process includes research, strategy, content planning, design, development, revisions, quality assurance and launch. We focus on accessibility, performance, search visibility and creating an experience that helps your practice attract and support patients.',
  ],
  [
    'Which platforms do you use for web development?',
    'We offer WordPress and custom web development. The right option depends on your needs, integrations and the way your team manages content. We will help you decide during discovery.',
  ],
  [
    'Do you only provide web design services for dental practices?',
    'No. We work with clients in many industries, including healthcare, construction and financial services. Every website is tailored to the organization and the people it serves.',
  ],
  [
    'Do you perform ongoing A/B testing to maximize results?',
    'Yes. After launch, analytics and ongoing A/B testing can help identify which website updates improve engagement and appointment inquiries. We can support data-informed optimization over time.',
  ],
]

const blogCards = [
  {
    title: '10 Web Design Tips for Dentists in 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Dentist-Office-1024x700.jpg',
    description: 'Helpful ways to build a patient-friendly website for your dental practice.',
    href: 'https://azurodigital.com/dental-web-design-tips/',
  },
  {
    title: 'How to Optimize Your Website for Search Engines & AI',
    image: 'https://azurodigital.com/wp-content/uploads/seo img2.webp',
    description: 'Help prospective patients discover your dental services online.',
    href: 'https://azurodigital.com/seo-guide/',
  },
  {
    title: '10 Best Dental Website Designs of 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Tooth-1024x700.jpg',
    description: 'See how thoughtful design can make dental websites more effective.',
    href: 'https://azurodigital.com/dental-website-examples/',
  },
]

function Dental({ onGetProposal }) {
  const [openFaq, setOpenFaq] = useState(-1)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Dental Web Design | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <main className="manufacturing-page" id="content">
      <div className="manufacturing-container">
        <section className="manufacturing-hero" aria-labelledby="dental-title">
          <div className="manufacturing-hero__copy">
            <p className="manufacturing-eyebrow">Web Design Agency for Dental Practices</p>
            <h1 id="dental-title">Creating Professional,<br />Custom Website Designs<br />for Dental Practices</h1>
          </div>
          <div className="manufacturing-hero__aside">
            <p>Since 2018, our dental web design services have helped practices strengthen their online presence, grow brand awareness and connect with more patients.</p>
            <button type="button" className="manufacturing-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
            <div className="manufacturing-rating" aria-label="Rated 4.9 out of 5">
              <span className="manufacturing-rating__google" aria-hidden="true">G</span>
              <span><strong>4.9/5 <b>★★★★★</b></strong><small>Based on 60+ Reviews</small></span>
            </div>
          </div>
        </section>

        <img
          className="manufacturing-hero-image"
          src={dentalHeroImage}
          alt="Bright, modern dental clinic"
          fetchPriority="high"
        />

        <p className="manufacturing-intro">
          From general dentistry and orthodontics to oral surgery, we create
          <br className="manufacturing-desktop-break" /> tailored websites that help dental practices build trust and make it
          <br className="manufacturing-desktop-break" /> easy for patients to learn about services and book an appointment.
        </p>

        <section className="manufacturing-process" aria-labelledby="dental-process-title">
          <div className="manufacturing-section-heading">
            <div>
              <p className="manufacturing-eyebrow">Dental Web Design Workflow</p>
              <h2 id="dental-process-title">Our Step-by-Step Process</h2>
            </div>
            <a className="manufacturing-text-link" href="#dental-projects">Recent Work <span aria-hidden="true">→</span></a>
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
            <a href="#dental-projects" aria-label="Previous section">←</a>
            <a href="#dental-projects" aria-label="Next section">→</a>
          </div>
        </section>

        <section className="manufacturing-feature">
          <a className="manufacturing-feature__image" href="https://statenislandoralsurgery.us/" target="_blank" rel="noreferrer">
            <img src={dentalFeatureImage} alt="Website design for dental practices" loading="lazy" />
          </a>
          <div className="manufacturing-feature__copy">
            <p className="manufacturing-eyebrow">Custom Web Design &amp; Development</p>
            <h2>Stunning Websites for Dentists</h2>
            <p>Your website is often a patient’s first impression of your practice. We create clear, welcoming experiences that explain your treatments, highlight your team and expertise, and make it simple to request an appointment. From responsive design to search visibility, every detail is built around your patients and your practice.</p>
            <div className="manufacturing-feature__actions">
              <button type="button" className="manufacturing-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
              <a href="https://clutch.co/profile/azuro-digital" target="_blank" rel="noreferrer" className="manufacturing-clutch">Clutch <span>★★★★★</span></a>
            </div>
          </div>
        </section>

        <section className="manufacturing-accessibility">
          <div className="manufacturing-accessibility__seal" aria-label="Verified leader in web accessibility">Verified<br />Accessible</div>
          <div>
            <p className="manufacturing-eyebrow">A Verified Leader in Web Accessibility for Dental Practices</p>
            <h2>Accessible Design for Every Patient</h2>
            <p>Accessible websites are easier for more people to use, including patients who rely on assistive technology. We consider inclusive content, keyboard navigation, readable contrast and accessibility best practices throughout the design and development process.</p>
            <a className="manufacturing-text-link" href="https://www.accessibilitychecker.org/role-model/azuro-digital-canadas-top-accessibility-focused-web-design-agency/" target="_blank" rel="noreferrer">View Certification <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <section className="manufacturing-blog" aria-labelledby="dental-blog-title">
          <div className="manufacturing-section-heading">
            <div>
              <p className="manufacturing-eyebrow">From Our Blog</p>
              <h2 id="dental-blog-title">Dental Website Insights</h2>
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

        <section className="manufacturing-faq" id="dental-faq" aria-labelledby="dental-faq-title">
          <p className="manufacturing-eyebrow">FAQs</p>
          <h2 id="dental-faq-title">Your Questions, Answered</h2>
          <div className="manufacturing-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className="manufacturing-faq-item" key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    aria-controls={`dental-faq-answer-${index}`}
                    onClick={() => setOpenFaq((current) => current === index ? -1 : index)}
                  >
                    {question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                </h3>
                {openFaq === index && <p id={`dental-faq-answer-${index}`}>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="manufacturing-projects" id="dental-projects" aria-labelledby="dental-projects-title">
          <p className="manufacturing-eyebrow">Dental Web Design Project</p>
          <h2 id="dental-projects-title">Check Out Our Recent Work!</h2>
          {dentalProject && (
            <>
              <article className="manufacturing-project">
                <a className="manufacturing-project__image" href={`https://${dentalProject.site}`} target="_blank" rel="noreferrer">
                  <img src={dentalProject.image} alt={`${dentalProject.name} website design`} loading="lazy" />
                </a>
                <div className="manufacturing-project__details">
                  <a href={`https://${dentalProject.site}`} target="_blank" rel="noreferrer" className="manufacturing-project__site">{dentalProject.site} <span aria-hidden="true">↗</span></a>
                  <h3>{dentalProject.name}</h3>
                  <p>Serving Staten Island since 1981, this oral and maxillofacial surgery practice partnered with Azuro for a modern website that helps patients find clear information and feel confident about their care.</p>
                  <a className="manufacturing-text-link" href={`https://${dentalProject.site}`} target="_blank" rel="noreferrer">Visit Site <span aria-hidden="true">→</span></a>
                </div>
              </article>
              <figure className="manufacturing-testimonial">
                {dentalProject.logo && <img className="manufacturing-testimonial__logo" src={dentalProject.logo} alt={`${dentalProject.name} logo`} loading="lazy" />}
                <blockquote>“{dentalProject.quote}”</blockquote>
                <figcaption><strong>{dentalProject.client}</strong><span>{dentalProject.role}</span></figcaption>
              </figure>
            </>
          )}
        </section>

        <section className="manufacturing-related">
          <div>
            <p className="manufacturing-eyebrow">Explore Industries Similar to Dental</p>
            <h2>View More Work From<br />Related Sectors</h2>
          </div>
          <a className="manufacturing-related-card" href="https://azurodigital.com/small-business-web-design/" target="_blank" rel="noreferrer"><span aria-hidden="true">◇</span><strong>Small Business Web Design</strong><small>Learn More →</small></a>
          <a className="manufacturing-related-card" href="/healthcare-web-design"><span aria-hidden="true">✚</span><strong>Healthcare Web Design</strong><small>Learn More →</small></a>
        </section>
      </div>
    </main>
  )
}

export default Dental
