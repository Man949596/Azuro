import { useEffect } from 'react'
import '../assets/css/seo-case-studies.css'
import { seoCaseStudy } from '../js/seoCaseStudyData.js'

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
          <p className="seo-hero__eyebrow">#1   SEO Agency in Canada</p>
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

      <section className="seo-proof" aria-labelledby="seo-proof-title">
        <p className="seo-proof__eyebrow">Our Canadian SEO Specialists Produce Elite Results</p>
        <h2 id="seo-proof-title">#1 Rankings, Quality Traffic &amp;<br />Happy Clients</h2>
        <div className="seo-proof__ratings" aria-label="Rated 4.9 on Clutch and Google">
          <div className="seo-proof__clutch" aria-label="Clutch rated 4.9 out of 5, 79 reviews">
            <span className="seo-proof__clutch-rating">RATED 4.9/5</span>
            <span className="seo-proof__clutch-stars" aria-hidden="true">★★★★★</span>
            <strong>Clutch</strong>
            <small>79 REVIEWS</small>
          </div>
          <div className="seo-proof__google" aria-label="Google rated 4.9 out of 5, based on 60 or more reviews">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
              alt=""
              width="40"
              height="40"
            />
            <span>
              <b>4.9/5 <strong aria-hidden="true">★★★★★</strong></b>
              <small>Based on 60+ Reviews</small>
            </span>
          </div>
        </div>
      </section>

      <section className="seo-case-study" aria-label="Staten Island Oral Surgery SEO results">
        <div className="seo-case-study__frame">
          <div className="seo-case-study__content">
            <header className="seo-case-study__header">
              <img
                className="seo-case-study__logo"
                src={seoCaseStudy.logo}
                alt={seoCaseStudy.name}
              />
              <h2><span>125%</span> increase in revenue-driven organic traffic </h2>
            </header>

            <div className="seo-case-study__results">
              <article className="seo-result" aria-label="Google rankings for wisdom teeth removal in Staten Island">
                <div className="seo-result__heading">
                  <img
                    className="seo-result__google-icon"
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                    alt=""
                  />
                  <p><strong>Google</strong><span>·</span><q>wisdom teeth removal staten island</q></p>
                  <span className="seo-result__rank">#1 + #3 + #4</span>
                </div>
                <img
                  className="seo-result__image"
                  src={seoCaseStudy.googleResultsImage}
                  alt="Google search results showing Staten Island Oral Surgery ranking for wisdom teeth removal"
                  loading="lazy"
                  decoding="async"
                />
              </article>

              <article className="seo-result" aria-label="ChatGPT ranking for best oral surgery in Staten Island">
                <div className="seo-result__heading">
                  <span className="seo-result__chatgpt-icon" aria-hidden="true">
                    <img src="https://azurodigital.com/wp-content/uploads/chatgpt.png" alt="" />
                  </span>
                  <p><strong>ChatGPT</strong><span>·</span><q>best oral surgery in staten island</q></p>
                  <span className="seo-result__rank">#1</span>
                </div>
                <img
                  className="seo-result__image"
                  src={seoCaseStudy.chatGptResultsImage}
                  alt="ChatGPT response listing Staten Island Oral and Maxillofacial Surgery as the top oral surgery practice"
                  loading="lazy"
                  decoding="async"
                />
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="seo-testimonial" aria-label="Staten Island Oral Surgery client testimonial">
        <img
          className="seo-testimonial__logo"
          src={seoCaseStudy.logo}
          alt={seoCaseStudy.name}
          loading="lazy"
          decoding="async"
        />
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
      
      <section className="seo-case-study" aria-label="Staten Island Oral Surgery SEO results">
        <div className="seo-case-study__frame">
          <div className="seo-case-study__content">
            <header className="seo-case-study__header">
              <img
                className="seo-case-study__logo"
                src="https://azurodigital.com/wp-content/uploads/riverson-logo-colour.svg"
                alt={seoCaseStudy.name}
              />
              <h2><span>3X</span> increase in revenue-driven organic traffic</h2>
            </header>

            <div className="seo-case-study__results">
              <article className="seo-result" aria-label="Google rankings for wisdom teeth removal in Staten Island">
                <div className="seo-result__heading">
                  <img
                    className="seo-result__google-icon"
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                    alt=""
                  />
                  <p><strong>Google</strong><span>·</span><q>wisdom teeth removal staten island</q></p>
                  <span className="seo-result__rank">#1 + #3 + #4</span>
                </div>
                <img
                  className="seo-result__image"
                  src={seoCaseStudy.googleResultsImages}
                  alt="Google search results showing Staten Island Oral Surgery ranking for wisdom teeth removal"
                  loading="lazy"
                  decoding="async"
                />
              </article>

              <article className="seo-result" aria-label="ChatGPT ranking for best oral surgery in Staten Island">
                <div className="seo-result__heading">
                  <span className="seo-result__chatgpt-icon" aria-hidden="true">
                    <img src="https://azurodigital.com/wp-content/uploads/chatgpt.png" alt="" />
                  </span>
                  <p><strong>ChatGPT</strong><span>·</span><q>best oral surgery in staten island</q></p>
                  <span className="seo-result__rank">#1</span>
                </div>
                <img
                  className="seo-result__image"
                  src={seoCaseStudy.chatGptResultsImages}
                  alt="ChatGPT response listing Staten Island Oral and Maxillofacial Surgery as the top oral surgery practice"
                  loading="lazy"
                  decoding="async"
                />
              </article>
            </div>
          </div>
        </div>
      </section>
   <section className="seo-testimonial" aria-label="Staten Island Oral Surgery client testimonial">
        <img
          className="seo-testimonial__logo"
          src={seoCaseStudy.logo}
          alt={seoCaseStudy.name}
          loading="lazy"
          decoding="async"
        />
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
       <section className="seo-case-study" aria-label="Staten Island Oral Surgery SEO results">
        <div className="seo-case-study__frame">
          <div className="seo-case-study__content">
            <header className="seo-case-study__header">
              <img
                className="seo-case-study__logo"
                src="https://azurodigital.com/wp-content/uploads/CollegeHouse_fullcolor-1.svg"
                alt={seoCaseStudy.name}
              />
              <h2><span>80%</span> increase in revenue-driven organic traffic</h2>
            </header>

            <div className="seo-case-study__results">
              <article className="seo-result" aria-label="Google rankings for wisdom teeth removal in Staten Island">
                <div className="seo-result__heading">
                  <img
                    className="seo-result__google-icon"
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                    alt=""
                  />
                  <p><strong>Google</strong><span>·</span><q>wisdom teeth removal staten island</q></p>
                  <span className="seo-result__rank">#1 + #3 + #4</span>
                </div>
                <img
                  className="seo-result__image"
                  src={seoCaseStudy.googleResultsImages}
                  alt="Google search results showing Staten Island Oral Surgery ranking for wisdom teeth removal"
                  loading="lazy"
                  decoding="async"
                />
              </article>

              <article className="seo-result" aria-label="ChatGPT ranking for best oral surgery in Staten Island">
                <div className="seo-result__heading">
                  <span className="seo-result__chatgpt-icon" aria-hidden="true">
                    <img src="https://azurodigital.com/wp-content/uploads/Claude-ai-icon.svg-1536x1529.png" alt="" />
                  </span>
                  <p><strong>Claude · </strong><q>best data analytics software for student housing market</q></p>
                  <span className="seo-result__rank">#1</span>
                </div>
                <img
                  className="seo-result__image"
                  src={seoCaseStudy.claudeResultsImages}
                  alt="ChatGPT response listing Staten Island Oral and Maxillofacial Surgery as the top oral surgery practice"
                  loading="lazy"
                  decoding="async"
                />
              </article>
            </div>
          </div>
        </div>
      </section>
      
    </main>
  )
}

export default SeoCaseStudies