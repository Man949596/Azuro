import { useEffect, useRef } from 'react'
import clutchBadge from '../assets/images/careers-clutch-badge.png'
import upcityBadge from '../assets/images/careers-upcity-badge.png'
import goodfirmsBadge from '../assets/images/careers-goodfirms-badge.png'
import careersImage from '../assets/images/careers-featured.jpg'
import { seoCaseStudy } from '../js/seoCaseStudyData.js'
import '../assets/css/careers.css'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  )
}

function ValueIcon({ name }) {
  const iconPaths = {
    autonomy: (
      <>
        <circle cx="8" cy="7" r="2.4" />
        <circle cx="17" cy="8" r="2" />
        <path d="M4.5 17c.3-2.2 1.5-3.5 3.5-3.5s3.2 1.3 3.5 3.5M14.5 14.5l1.5-1.5 1.5 1.5 2-1v3l-2 1-1.5-1.5-1.5 1.5z" />
        <path d="M6 4.5 4.5 3M10 4.5 11.5 3" />
      </>
    ),
    remote: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M4.8 8h4.4l1.5 2.2 2.5.8 1.3 2.5 2.6.5 1.2 2M10.5 3.8l1.2 2.4-1 1.8M5.2 15.7l2.4-.2 1.1 2.8M15.2 5.3l-.2 2.2 2.6 1.2" />
        <circle cx="12" cy="12" r="1.5" />
      </>
    ),
    training: (
      <>
        <path d="M4 19.5h16M6 17V7.5l5-3v12.7M11 17h8V9l-8 2.2" />
        <path d="M8 9.5h.1M8 12.5h.1M14 13.5h.1M17 12.7h.1M14 16.3h.1M17 15.5h.1" />
        <path d="m3.5 16 2-2 2 2" />
      </>
    ),
    people: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="9" cy="10" r="2" />
        <circle cx="15.5" cy="11" r="1.6" />
        <path d="M5.8 17c.4-2.1 1.5-3.2 3.2-3.2s2.8 1.1 3.2 3.2M13.5 14.3c1.8-.3 3.2.6 3.8 2.5M12 3.5v-2M4.2 5 2.8 3.6M19.8 5l1.4-1.4M20.5 12h2" />
      </>
    ),
    growth: (
      <>
        <path d="M4 18.5h16M6 16l4-4 3 2 5-6" />
        <path d="M14.5 8H18v3.5M7 20v-1.5M12 20v-1.5M17 20v-1.5" />
        <path d="m4.5 8.5 2 2 3.2-3.2 2.2 2.2 4.6-4.6" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  )
}

const valueCards = [
  { title: 'Have Autonomy Over Your Work', icon: 'autonomy' },
  { title: 'Remote Work & Flexible Hours', icon: 'remote' },
  { title: 'Receive Helpful Resources & Training', icon: 'training' },
  { title: 'Work With Friendly & Supportive People', icon: 'people' },
  { title: 'Plenty of Opportunities for Career Growth', icon: 'growth' },
]

const teamMembers = [
  {
    name: 'Daniel Houle',
    role: 'Founder & Creative Director',
    image: 'https://azurodigital.com/wp-content/uploads/Daniel-hs-1.jpg',
  },
  {
    name: 'Cassandra Disano',
    role: 'Web Designer & Developer',
    image: 'https://azurodigital.com/wp-content/uploads/cassandra-hs.jpg',
  },
  {
    name: 'Kaylene Holman',
    role: 'Web Designer & Developer',
    image: 'https://azurodigital.com/wp-content/uploads/kaylene-hs-white-bg.jpg',
  },
  {
    name: 'Rebecca Luu',
    role: 'Web Designer & Developer',
    image: 'https://azurodigital.com/wp-content/uploads/Rebecca-hs.jpg',
  },
  {
    name: 'Aman Saini',
    role: 'Web Developer & WordPress Specialist',
    image: 'https://azurodigital.com/wp-content/uploads/aman-hs.jpg',
  },
  {
    name: 'Austin Benoit',
    role: 'SEO & GEO Specialist',
    image: 'https://azurodigital.com/wp-content/uploads/Austin-hs.jpg',
  },
  {
    name: 'Ian Perincek',
    role: 'Web Accessibility Specialist',
    image: 'https://azurodigital.com/wp-content/uploads/ian-hs-1.jpg',
  },
  {
    name: 'Abdullah Al Mamun',
    role: 'Website Maintenance Specialist',
    image: 'https://azurodigital.com/wp-content/uploads/Abdullah-hs.jpg',
  },
]

function CareersTeam({ onViewPortfolio }) {
  return (
    <section className="careers-team" aria-labelledby="careers-team-title">
      <div className="careers-team__inner">
        <p className="careers-team__eyebrow">Team Members</p>
        <h2 id="careers-team-title">Who You'll Work<br />Alongside With</h2>
        <div className="careers-team__grid">
          {teamMembers.map((member) => (
            <article className="careers-team-card" key={member.name}>
              <img
                className="careers-team-card__portrait"
                src={member.image}
                alt={member.name}
                loading="eager"
                decoding="async"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
        <div className="careers-team__actions">
          <a className="careers-button careers-button--primary" href="mailto:azurocareers@gmail.com">
            Apply Now <ArrowIcon />
          </a>
          <button className="careers-button careers-button--outline" type="button" onClick={onViewPortfolio}>
            Recent Work <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

function CareersValues({ onViewPortfolio }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.careers-value-card')
    if (!cards) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.18 })

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="careers-values" aria-labelledby="careers-values-title" ref={sectionRef}>
      <div className="careers-values__layout">
        <div className="careers-values__copy">
          <p className="careers-values__eyebrow">Our Values </p>
          <h2 id="careers-values-title">Enjoy Your Work</h2>
          <p className="careers-values__description">
            The high job satisfaction of our team is what enables us to be a{' '}
            <strong>top web design firm in Canada.</strong>
          </p>
          <div className="careers-values__actions">
            <a className="careers-button careers-button--primary" href="mailto:azurocareers@gmail.com">
              Apply Now <ArrowIcon />
            </a>
            <button className="careers-button careers-button--outline" type="button" onClick={onViewPortfolio}>
              Recent Work <ArrowIcon />
            </button>
          </div>
        </div>
        <div className="careers-values__cards">
          <div className="careers-values__column">
            {valueCards.filter((_, index) => index % 2 === 0).map((card) => (
              <article className="careers-value-card" key={card.title}>
                <span className="careers-value-card__icon">
                  <ValueIcon name={card.icon} />
                </span>
                <h3>{card.title}</h3>
              </article>
            ))}
          </div>
          <div className="careers-values__column careers-values__column--offset">
            {valueCards.filter((_, index) => index % 2 === 1).map((card) => (
              <article className="careers-value-card" key={card.title}>
                <span className="careers-value-card__icon">
                  <ValueIcon name={card.icon} />
                </span>
                <h3>{card.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Careers({ onViewPortfolio }) {
  return (
    <main className="careers-page">
      <section className="careers-hero" aria-labelledby="careers-title">
        <div className="careers-hero__content">
          <p className="careers-hero__eyebrow">Careers</p>
          <h1 id="careers-title">Work With Azuro </h1>
          <p className="careers-hero__description">
            Join a winning team of web designers, developers, and SEO experts, where your skills grow, and your contributions make a real impact.
          </p>
          <div className="careers-hero__actions">
            <a className="careers-button careers-button--primary" href="mailto:azurocareers@gmail.com">
              Apply Now <ArrowIcon />
            </a>
            <button className="careers-button careers-button--outline" type="button" onClick={onViewPortfolio}>
              Recent Work <ArrowIcon />
            </button>
          </div>
          <div className="careers-awards" aria-label="Agency awards">
            <img src={clutchBadge} alt="Clutch Top Web Designers Canada award" />
            <img src={upcityBadge} alt="UpCity Best of Creative and Design award" />
            <img src={goodfirmsBadge} alt="GoodFirms Top Web Design Agencies in Canada award" />
          </div>
        </div>
        <img
          className="careers-hero__image"
          src={careersImage}
          alt="A winding path through a blue mountain landscape"
        />
      </section>
      <section className="seo-testimonial" aria-label="Staten Island Oral Surgery client testimonial">
        <blockquote className="seo-testimonial__quote">
          “{seoCaseStudy.quote}”
        </blockquote>
        <figure className="seo-testimonial__author">
          <img
            className="seo-testimonial__portrait"
            src={seoCaseStudy.portrait}
            alt={seoCaseStudy.client}
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span className="seo-testimonial__name">{seoCaseStudy.client}</span>
            <span className="seo-testimonial__role">{seoCaseStudy.role}</span>
          </figcaption>
        </figure>
      </section>
            <CareersValues onViewPortfolio={onViewPortfolio} />
      <CareersTeam onViewPortfolio={onViewPortfolio} />

    </main>
  )
}

export default Careers
