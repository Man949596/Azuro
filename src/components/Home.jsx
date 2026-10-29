import { useState } from 'react'
import { questions, services, testimonials } from '../js/homeData.js'
import webAwardsLogo from '../assets/images/logo1.svg'
import webExcellenceLogo from '../assets/images/logo2.svg'
import awwwardsLogo from '../assets/images/logo3.svg'
import cssDesignAwardsLogo from '../assets/images/logo4.svg'
import designRushLogo from '../assets/images/logo.svg'
import '../assets/css/home.css'

const awardLogos = [
  ['Web Awards', webAwardsLogo],
  ['Web Excellence Awards', webExcellenceLogo],
  ['Awwwards', awwwardsLogo],
  ['CSS Design Awards', cssDesignAwardsLogo],
  ['DesignRush Best Design Awards', designRushLogo],
]

const showcaseRows = [
  [
    ['Sellick Equipment', 'https://azurodigital.com/wp-content/uploads/sellick-equipment-hp-slider-1.jpg.webp'],
    ['HeartForce', 'https://azurodigital.com/wp-content/uploads/portfolio-featured-images-heatforce.jpg.webp'],
    ['Maverin', 'https://azurodigital.com/wp-content/uploads/Maverin-Website-Screenshot.jpg.webp'],
    ['College House', 'https://azurodigital.com/wp-content/uploads/college-house-featured-hero-1.jpg.webp'],
  ],
  [
    ['NOBLE', 'https://azurodigital.com/wp-content/uploads/NOBLE-Website.jpg'],
    ['Park Shield', 'https://azurodigital.com/wp-content/uploads/park-shield-featured-hero.jpg.webp'],
    ['Twisted Nail', 'https://azurodigital.com/wp-content/uploads/Twisted-Nail-Website-Screenshot.jpg.webp'],
    ['Brightstone', 'https://azurodigital.com/wp-content/uploads/brightstone-portfolio-featured-image.jpg.webp'],
    ['NOBLE', 'https://azurodigital.com/wp-content/uploads/NOBLE-Website.jpg'],
  ],
]

function Showcase() {
  const [failedImages, setFailedImages] = useState(() => new Set())

  return (
    <div className="showcase" aria-label="Featured website projects">
      {showcaseRows.map((projects, rowIndex) => (
        <div className={`showcase__row showcase__row--${rowIndex === 0 ? 'first' : 'second'}`} key={rowIndex}>
          <div className="showcase__track">
            {[0, 1].map((copy) => (
              <div className="showcase__group" key={copy} aria-hidden={copy === 1}>
                {projects.map(([name, image], index) => {
                  if (failedImages.has(image)) return null

                  const imageIndex = copy * projects.length + index
                  return (
                    <div className="showcase__item" key={`${name}-${imageIndex}`} style={{ '--delay': `${index * 60}ms` }}>
                      <img
                        src={image}
                        alt={copy === 0 ? `${name} website design` : ''}
                        loading="eager"
                        decoding="async"
                        onError={() => setFailedImages((current) => new Set(current).add(image))}
                      />
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function Awards() {
  return (
    <section className="awards" aria-label="Awards and recognition">
      <h2 className="awards__title">We Win Awards For Our Work</h2>
      <div className="awards__viewport">
        <div className="awards__track">
          {[0, 1].map((copy) => (
            <div className="awards__group" key={copy} aria-hidden={copy === 1}>
              {awardLogos.map(([name, image]) => (
                <div className="awards__item" key={name}>
                  <img
                    className="awards__image"
                    src={image}
                    alt={copy === 0 ? name : ''}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <p className="eyebrow">Conversion-Focused Web Design, SEO &amp; AI Search Optimization</p>
      <h1 id="hero-title">Creating Beautiful Websites<br />That Drive Revenue</h1>
      <Showcase />
      <Awards /> 
    </section>
  )
}

function Services() {
  const serviceIcons = {
    design: ['M14 4h6v6', 'm20 4-9 9', 'M11 6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-6'],
    search: ['M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z', 'm16 16 5 5', 'M8 11l2-2 2 2 3-4'],
    wordpress: ['M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z', 'm6 7 4 11', 'm13 7 3 8 2-6', 'M10 7h3'],
    development: ['m8 8-4 4 4 4', 'm16 8 4 4-4 4', 'm14 6-4 12'],
    branding: ['M5 5h14v14H5z', 'm8 16 8-8', 'M8 9h3V6', 'M16 15h-3v3'],
    conversion: ['M12 21v-7', 'm8 14 4-4 4 4', 'M5 4h14v4H5z', 'M12 4V2'],
    copywriting: ['m4 16 9-9 4 4-9 9H4v-4Z', 'm11 9 4 4', 'M14 5l2-2 4 4-2 2'],
    'graphic-design': ['M12 3a9 9 0 1 0 0 18h1.5a2 2 0 0 0 1.4-3.4 1.6 1.6 0 0 1 1.1-2.7H18a3 3 0 0 0 3-3c0-5-4-9-9-9Z', 'M7.5 10h.01', 'M10 7h.01', 'M14 7h.01', 'M17 10h.01'],
    accessibility: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M7 7h10', 'M12 7v4', 'm12 11-4 8', 'm12 11 4 8'],
    security: ['M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z', 'M9 11V9a3 3 0 0 1 6 0v2', 'M8 11h8v6H8z'],
    speed: ['m13 2-9 12h7l-1 8 10-13h-7l1-7Z', 'M5 5h3', 'M4 8h2'],
    marketing: ['M4 19v-5', 'M10 19V9', 'M16 19v-8', 'M22 5l-8 8-4-4-6 6', 'M17 5h5v5'],
  }

  return (
    <section className="section services-section" id="services">
      <div className="section-heading">
        <p className="eyebrow">Our Services</p>
        <h2>Everything Your Website<br />Needs For Success</h2>
      </div>
      <div className="service-grid">
        {services.map(([icon, title, description], index) => (
          <article className="service-card" key={title} style={{ '--delay': `${index * 45}ms` }}>
            <span className="service-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                {serviceIcons[icon].map((path) => (
                  <path key={path} d={path} />
                ))}
              </svg>
            </span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
      <a className="button button--primary services-cta" href="https://azurodigital.com/proposal/">
        Get a Proposal <span aria-hidden="true">→</span>
      </a>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section testimonials-section" id="work">
      <div className="testimonial-list">
        {testimonials.map((item, index) => (
          <article className={`testimonial testimonial--${index % 2 ? 'reverse' : 'normal'}`} key={item.site}>
            <div className="testimonial__copy">
              <a className="testimonial__site" href={`https://${item.site}`} target="_blank" rel="noreferrer">
                {item.site} <span aria-hidden="true">↗</span>
              </a>
              <p className="testimonial__quote">“{item.quote}”</p>
              <div className="testimonial__person">
                <span className="avatar" aria-hidden="true">{item.name.charAt(0)}</span>
                <span><b>{item.name}</b><small>{item.role}</small></span>
              </div>
            </div>
            <div className="testimonial__image-frame">
              <img className="testimonial__image" src={item.image} alt={`${item.site} project`} loading="lazy" decoding="async" />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function FAQ({ onViewSeoCaseStudies }) {
  const [openQuestion, setOpenQuestion] = useState(null)

  const renderAnswerBlock = (block, index) => {
    if (block.type === 'heading') {
      return <h3 key={`${block.type}-${index}`}>{block.text}</h3>
    }

    if (block.type === 'ordered-list' || block.type === 'list') {
      const List = block.type === 'ordered-list' ? 'ol' : 'ul'

      return (
        <List key={`${block.type}-${index}`}>
          {block.items.map((item) => (
            <li key={typeof item === 'string' ? item : item.title}>
              {typeof item === 'string'
                ? item
                : <><strong>{item.title} – </strong>{item.text}</>}
            </li>
          ))}
        </List>
      )
    }

    return <p key={`${block.type}-${index}`}>{block.text}</p>
  }

  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-links">
        <a className="button button--primary" href="#work">Full Web Design Portfolio <span aria-hidden="true">→</span></a>
        <a
          className="button button--outline"
          href="/seo-case-studies"
          onClick={(event) => {
            event.preventDefault()
            onViewSeoCaseStudies()
          }}
        >
          SEO Case Studies <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="section-heading">
        <p className="eyebrow">FAQs</p>
        <h2 id="faq-title">Your Questions,<br />Answered</h2>
      </div>
      <div className="faq-list">
        {questions.map(({ question, answer }, index) => {
          const isOpen = openQuestion === index
          const answerId = `faq-answer-${index}`

          return (
            <article className={`faq-item${isOpen ? ' faq-item--open' : ''}`} key={question}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => setOpenQuestion(isOpen ? null : index)}
              >
                {question}
                <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              <div className="faq-item__answer" id={answerId} hidden={!isOpen}>
                {answer.map(renderAnswerBlock)}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Home({ onViewSeoCaseStudies }) {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <FAQ onViewSeoCaseStudies={onViewSeoCaseStudies} />
    </main>
  )
}

export default Home