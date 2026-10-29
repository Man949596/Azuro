import { testimonials } from '../js/homeData.js'
import '../assets/css/portfolio.css'

const featuredProject = testimonials[0]

function Ratings() {
  return (
    <aside className="portfolio-ratings" aria-label="Client ratings">
      <div className="portfolio-rating portfolio-rating--clutch">
        <span className="portfolio-rating__top">RATED 4.9/5 <b>★★★★★</b></span>
        <strong>Clutch</strong>
        <small>79 REVIEWS</small>
      </div>
      <div className="portfolio-rating portfolio-rating--google">
        <span className="portfolio-rating__google-g" aria-hidden="true">G</span>
        <span><b>4.9/5 <strong>★★★★★</strong></b><small>Based on 60+ Reviews</small></span>
      </div>
    </aside>
  )
} 
function SchoolSeal() {
  return (
    <svg className="portfolio-quote__seal" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="20" />
      <circle cx="24" cy="24" r="16" />
      <path d="M24 11 34 15v8c0 7-4.4 11.6-10 14-5.6-2.4-10-7-10-14v-8l10-4Z" />
      <path d="M19 20h10v8H19zM21 18v-2h6v2m-3 2v8m-5-4h10" />
      <path d="m9 15 2 1m28-1-2 1M9 33l2-1m28 1-2-1" />
    </svg>
  )
}

function Portfolio() {
  return (
    <main className="portfolio-page" id="portfolio">
      <div className="portfolio-content">
        <div className="portfolio-heading">
          <div>
            <p className="portfolio-eyebrow">Web Design Portfolio</p>
            <h1>We Deliver Premium Websites<br />&amp; Form Lasting Partnerships</h1>
          </div>
          <Ratings />
        </div>

        <article className="portfolio-project" aria-labelledby="portfolio-project-title">
          <a 
            className="portfolio-project__preview"
            href={`https://${featuredProject.site}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit the Turnbull School website"
          >
            <img src={featuredProject.image} alt="Turnbull School website design" />
          </a>
          <div className="portfolio-project__details">
            <a className="portfolio-project__site" href={`https://${featuredProject.site}`} target="_blank" rel="noreferrer">
              {featuredProject.site} <span aria-hidden="true">↗</span>
            </a>
            <h2 id="portfolio-project-title">Turnbull School</h2>
            <p>A modern, warm and inviting website created for Turnbull – a private elementary school in Ottawa.</p>
            <a className="portfolio-project__button" href={`https://${featuredProject.site}`} target="_blank" rel="noreferrer">
              Visit Site <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>

        <figure className="portfolio-quote">
          <SchoolSeal />
          <blockquote>“{featuredProject.quote}”</blockquote>
          <figcaption>
            <span className="portfolio-quote__avatar" aria-hidden="true">CD</span>
            <span className="portfolio-quote__name">{featuredProject.name}</span>
            <span className="portfolio-quote__role">{featuredProject.role}</span>
          </figcaption>
        </figure>
         <article className="portfolio-project" aria-labelledby="portfolio-project-title">
          <a
            className="portfolio-project__preview"
            href={`https://${featuredProject.site}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit the Turnbull School website"
          >
            <img src={featuredProject.image} alt="Turnbull School website design" />
          </a>
          <div className="portfolio-project__details">
            <a className="portfolio-project__site" href={`https://${featuredProject.site}`} target="_blank" rel="noreferrer">
              {featuredProject.site} <span aria-hidden="true">↗</span>
            </a>
            <h2 id="portfolio-project-title">Turnbull School</h2>
            <p>A modern, warm and inviting website created for Turnbull – a private elementary school in Ottawa.</p>
            <a className="portfolio-project__button" href={`https://${featuredProject.site}`} target="_blank" rel="noreferrer">
              Visit Site <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
         <article className="portfolio-project" aria-labelledby="portfolio-project-title">
          <a
            className="portfolio-project__preview"
            href={`https://${featuredProject.site}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit the Turnbull School website"
          >
            <img src={featuredProject.image} alt="Turnbull School website design" />
          </a>
          <div className="portfolio-project__details">
            <a className="portfolio-project__site" href={`https://${featuredProject.site}`} target="_blank" rel="noreferrer">
              {featuredProject.site} <span aria-hidden="true">↗</span>
            </a>
            <h2 id="portfolio-project-title">Turnbull School</h2>
            <p>A modern, warm and inviting website created for Turnbull – a private elementary school in Ottawa.</p>
            <a className="portfolio-project__button" href={`https://${featuredProject.site}`} target="_blank" rel="noreferrer">
              Visit Site <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      </div>
    </main>
  )
}

export default Portfolio
