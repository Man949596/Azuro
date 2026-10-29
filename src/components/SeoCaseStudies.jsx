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
    </main>
  )
}

export default SeoCaseStudies