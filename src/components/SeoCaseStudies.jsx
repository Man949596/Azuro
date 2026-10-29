import { useEffect } from 'react'
import '../assets/css/seo-case-studies.css'

const searchPlatforms = [
  {
    name: 'Copilot',
    image: 'https://copilot.microsoft.com/favicon.ico',
    className: 'copilot',
  },
  {
    name: 'perplexity',
    image: 'https://cdn.simpleicons.org/Perplexity/159B9A',
    className: 'perplexity',
  },
  {
    name: 'Gemini',
    image: 'https://cdn.simpleicons.org/GoogleGemini/4285F4',
    className: 'gemini',
  },
  {
    name: 'Google',
    image: 'https://cdn.simpleicons.org/Google/4285F4',
    className: 'google',
  },
  {
    name: 'ChatGPT',
    image: 'https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128',
    className: 'chatgpt',
  },
]

const reviewers = [
  ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80', 'Client reviewer'],
  ['https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&h=80&q=80', 'Client reviewer'],
  ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80', 'Client reviewer'],
  ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&h=80&q=80', 'Client reviewer'],
]

function ReviewStars({ className = '' }) {
  return (
    <span className={`seo-results__stars ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} aria-hidden="true" viewBox="0 0 20 20">
          <path d="m10 1.4 2.67 5.42 5.98.87-4.33 4.22 1.02 5.96L10 15.06l-5.34 2.81 1.02-5.96-4.33-4.22 5.98-.87L10 1.4Z" />
        </svg>
      ))}
    </span>
  )
}

function SeoCaseStudies({ onGetProposal, onViewPortfolio }) {
  useEffect(() => {
    const originalTitle = document.title
    document.title = 'SEO Case Studies | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <main className="seo-case-studies">
      <section className="seo-hero" aria-labelledby="seo-hero-title">
        <div className="seo-hero__content">
          <p className="seo-hero__eyebrow">#1 SEO Agency in Canada</p>
          <h1 id="seo-hero-title">Dominate Google &amp; AI Search</h1>
          <p className="seo-hero__description">
            Azuro Digital is the top rated SEO agency in Canada, helping
            <br className="seo-hero__desktop-break" /> brands get discovered by their ideal customers on Google,
            <br className="seo-hero__desktop-break" /> ChatGPT, Claude, Copilot, Perplexity and Gemini.
          </p>
          <div className="seo-hero__actions">
            <button className="seo-button seo-button--primary" type="button" onClick={onGetProposal}>
              Get a Proposal <span aria-hidden="true">→</span>
            </button>
            <button className="seo-button seo-button--light" type="button" onClick={onViewPortfolio}>
              View client results <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="seo-rating" aria-label="Rated 4.9 across more than 100 reviews">
            <div className="seo-rating__avatars" aria-hidden="true">
              {reviewers.map(([image], index) => (
                <img key={image} src={image} alt="" style={{ '--avatar-order': index }} />
              ))}
            </div>
            <span>Rated 4.9 across 100+ reviews</span>
          </div>
        </div>

        <div className="seo-platforms" aria-label="Search and AI platforms">
          {searchPlatforms.map((platform) => (
            <div className={`seo-platform seo-platform--${platform.className}`} key={platform.name}>
              <img src={platform.image} alt="" loading="eager" decoding="async" />
              <span>{platform.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="seo-results" aria-labelledby="seo-results-title">
        <p className="seo-results__eyebrow">
          Our Canadian SEO Specialists Produce Elite Results
        </p>
        <h2 id="seo-results-title">
          #1 Rankings, Quality Traffic
          <br />
          &amp; Happy Clients
        </h2>

        <div className="seo-results__ratings" aria-label="Client ratings">
          <div className="seo-results__clutch" aria-label="Clutch rated 4.9 out of 5, 79 reviews">
            <span className="seo-results__rated">RATED 4.9/5</span>
            <ReviewStars />
            <strong className="seo-results__clutch-logo">
              Clut<span>c</span>h
            </strong>
            <small>79 REVIEWS</small>
          </div>

          <div className="seo-results__google" aria-label="Google rated 4.9 out of 5, based on more than 60 reviews">
            <svg className="seo-results__google-logo" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#4285F4" d="M47.5 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h13.22a11.3 11.3 0 0 1-4.9 7.42v6.12h7.94c4.65-4.28 7.24-10.58 7.24-18.01Z" />
              <path fill="#34A853" d="M24 48c6.63 0 12.2-2.2 16.27-5.95l-7.94-6.12c-2.2 1.48-5.02 2.35-8.33 2.35-6.4 0-11.82-4.32-13.76-10.13H2.04v6.3A24 24 0 0 0 24 48Z" />
              <path fill="#FBBC05" d="M10.24 28.15a14.4 14.4 0 0 1 0-8.3v-6.3H2.04a24 24 0 0 0 0 20.9l8.2-6.3Z" />
              <path fill="#EA4335" d="M24 9.52c3.6 0 6.83 1.24 9.38 3.68l7.02-7.02C36.19 2.34 30.63 0 24 0A24 24 0 0 0 2.04 13.55l8.2 6.3C12.18 13.84 17.6 9.52 24 9.52Z" />
            </svg>
            <div className="seo-results__google-details">
              <div className="seo-results__google-score">
                <span>4.9/5</span>
                <ReviewStars className="seo-results__stars--google" />
              </div>
              <small>Based on 60+ Reviews</small>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SeoCaseStudies