import { useEffect, useState } from 'react'
import '../assets/css/seo-case-studies.css'
import { seoCaseStudy } from '../js/seoCaseStudyData.js'
import { seoFaqColumns } from '../js/seoFaqData.js'
import onPageResourceImage from '../assets/images/seo-resource-on-page.webp'
import technicalResourceImage from '../assets/images/seo-resource-technical.webp'
import linkBuildingResourceImage from '../assets/images/seo-resource-link-building.webp'

const seoResources = [
  {
    title: 'On-Page SEO Guide for Traditional Search and LLMs in 2026',
    image: onPageResourceImage,
    alt: 'Illustration of a desktop computer displaying a web page',
    readTime: '16 minute read',
    href: 'https://azurodigital.com/on-page-seo-guide/',
  },
  {
    title: 'Technical SEO Checklist for Google and AI SEO in 2026',
    image: technicalResourceImage,
    alt: 'Glowing gears representing technical SEO systems',
    readTime: '17 minute read',
    href: 'https://azurodigital.com/technical-seo-checklist/',
  },
  {
    title: 'Link Building Strategies for SEO and AI Search (2026 Guide)',
    image: linkBuildingResourceImage,
    alt: 'Connected globe icons representing a link network',
    readTime: '20 minute read',
    href: 'https://azurodigital.com/link-building-strategies/',
  },
]

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
  const [resourceImageOffset, setResourceImageOffset] = useState(0)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'SEO Case Studies | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  useEffect(() => {
    const images = document.querySelectorAll('.seo-practice__image')

    if (!('IntersectionObserver' in window)) {
      images.forEach((image) => image.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.18 })

    images.forEach((image) => observer.observe(image))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setResourceImageOffset((offset) => (offset + 1) % seoResources.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <main className="seo-case-studies">
      <section className="seo-hero" aria-labelledby="seo-hero-title">
        <div className="seo-hero__content">
          <p className="seo-hero__eyebrow">#1 SEO Agency in Canada </p>
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

        <div className="seo-platforms" role="group" aria-label="Search and AI platforms">
          <div className="seo-platforms__track">
            {[false, true].map((isDuplicate) => (
              <div
                className="seo-platforms__group"
                role="list"
                aria-label={isDuplicate ? undefined : 'Search and AI platforms'}
                aria-hidden={isDuplicate}
                key={String(isDuplicate)}
              >
                {searchPlatforms.map((platform) => (
                  <div
                    className={`seo-platform seo-platform--${platform.className}`}
                    role="listitem"
                    key={platform.name}
                  >
                    <img src={platform.image} alt="" loading="eager" decoding="async" />
                    <span>{platform.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
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
                src="https://azurodigital.com/wp-content/uploads/Chahal-Logo.svg"
                alt={seoCaseStudy.name}
              />
              <h2>From <span>0 to 500</span> revenue-driven organic visitors per month</h2>
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
                  <span className="seo-result__rank">#1</span>
                </div>
                <img
                  className="seo-result__image"
                  src={seoCaseStudy.googleResultsImages3}
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
                  src={seoCaseStudy.claudeResultsImages4}
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
                src="https://azurodigital.com/wp-content/uploads/twisted-nail-logo-black.svg"
                alt={seoCaseStudy.name}
              />
              <h2><span>2X</span> increase in revenue-driven organic traffic</h2>
            </header>

            <div className="seo-case-study__results">
              <article className="seo-result" aria-label="Google rankings for wisdom teeth removal in Staten Island">
                <div className="seo-result__heading">
                  <img
                    className="seo-result__google-icon"
                    src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png"
                    alt=""
                  />
                  <p><strong>Google</strong><span>·</span><q>wholesale aggregate trucking companies austin tx</q></p>
                  <span className="seo-result__rank">#1</span>
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
                  <p><strong>ChatGPT</strong><span>·</span><q>best construction truckers and wholesale aggregate suppliers in austin tx</q></p>
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
                src="https://azurodigital.com/wp-content/uploads/valpac-logo-blue.svg"
                alt={seoCaseStudy.name}
              />
              <h2><span>90%</span> increase in revenue-driven organic traffic</h2>
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
                  <span className="seo-result__rank">#1</span>
                </div>
                <img
                  className="seo-result__image"
                  src={seoCaseStudy.googleResultsImages5}
                  alt="Google search results showing Staten Island Oral Surgery ranking for wisdom teeth removal"
                  loading="lazy"
                  decoding="async"
                />
              </article>

              <article className="seo-result" aria-label="Perplexity ranking for best oral surgery in Staten Island">
                <div className="seo-result__heading">
                  <span className="seo-result__chatgpt-icon" aria-hidden="true">
                    <img src="https://azurodigital.com/wp-content/uploads/perplexity-ai-icon.webp" alt="" />
                  </span>
                  <p><strong>Perplexity · </strong><q>"best adhesive toll manufacturers usa"</q></p>
                  <span className="seo-result__rank">#1</span>
                </div>
                <img
                  className="seo-result__image"
                  src={seoCaseStudy.claudeResultsImages6}
                  alt="Perplexity response listing Staten Island Oral and Maxillofacial Surgery as the top oral surgery practice"
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
                src="https://azurodigital.com/wp-content/uploads/IOL-Logo.svg"
                alt={seoCaseStudy.name}
              />
              <h2><span>160%</span> increase in revenue-driven organic traffic</h2>
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
                  <span className="seo-result__rank">#1</span>
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
                    <img src="https://azurodigital.com/wp-content/uploads/gemini-color.png.webp" alt="" />
                  </span>
                  <p><strong>Gamini </strong><q>best orthotic manufacturers in calgary const</q></p>
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

      <section className="seo-practice" aria-labelledby="seo-practice-title">
        <div className="seo-practice__layout">
          <div className="seo-practice__gallery">
            <figure className="seo-practice__image" style={{ '--image-order': 0 }}>
              <img
                src={seoCaseStudy.googleResultsImages1}
                alt="Google search results for student housing data analytics"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="seo-practice__image" style={{ '--image-order': 1 }}>
              <img
                src={seoCaseStudy.claudeResultsImages}
                alt="AI search results for student housing analytics software"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="seo-practice__image" style={{ '--image-order': 2 }}>
              <img
                src={seoCaseStudy.googleResultsImages3}
                alt="Google local search results for a healthcare practice"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure className="seo-practice__image" style={{ '--image-order': 3 }}>
              <img
                src={seoCaseStudy.claudeResultsImages4}
                alt="AI search results for cardiovascular clinics in Oakville"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
          <div className="seo-practice__copy">
            <h2 id="seo-practice-title">We Practice<br />What We Preach </h2>
            <p>
              Azuro began as a web design agency, and our focus on our own SEO allowed us to grow into the <strong>top rated web design agency in Canada</strong> according to the <strong>Clutch Leaders Matrix</strong>. At that point, we decided to start offering full-service SEO (including off-site work). Now we deliver top-tier SEO results across various industries in Canada, the United States and worldwide. What sets us apart is our premium web design skills — many SEO agencies only focus on content and make the design look sloppy, which reduces the conversion rate. With Azuro, you’ll get a site that generates quality traffic, converts visitors into paying customers and makes your brand irresistible.
            </p>
            <button className="seo-button seo-button--primary" type="button" onClick={onGetProposal}>
              Get a Proposal <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="seo-faq" aria-labelledby="seo-faq-title">
        <p className="seo-faq__eyebrow">FAQs</p>
        <h2 id="seo-faq-title">Your SEO Questions,<br />Answered</h2>
        <div className="seo-faq__card">
          {seoFaqColumns.map((column, columnIndex) => (
            <div className="seo-faq__column" key={columnIndex}>
              {column.map(({ question, answer }) => (
                <article className="seo-faq__item" key={question}>
                  <span className="seo-faq__icon" aria-hidden="true">?</span>
                  <div>
                    <h3>{question}</h3>
                    <p>
                      {answer.map(({ text, highlight }, answerIndex) => (
                        highlight
                          ? <strong key={answerIndex}>{text}</strong>
                          : text
                      ))}
                    </p>
                  </div>
                </article>
              ))}
              {columnIndex === 1 && (
                <button
                  className="seo-faq__availability"
                  type="button"
                  onClick={onGetProposal}
                >
                  <strong>We Take One Client Per Market</strong>
                  <span>Find out if we have availability in yours →</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="seo-resources" aria-labelledby="seo-resources-title">
        <div className="seo-resources__container">
          <div className="seo-resources__header">
            <h2 id="seo-resources-title">SEO/AEO Resources</h2>
            <a className="seo-resources__all-link" href="https://azurodigital.com/blog/">
              View All Posts <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="seo-resources__grid">
            {seoResources.map(({ title, readTime, href }, index) => {
              const imageResource = seoResources[(index + resourceImageOffset) % seoResources.length]

              return (
              <article className="seo-resource" key={title}>
                <img
                  key={imageResource.image}
                  className="seo-resource__image"
                  src={imageResource.image}
                  alt={imageResource.alt}
                  loading="lazy"
                  decoding="async"
                />
                <h3>{title}</h3>
                <p className="seo-resource__read-time">{readTime}</p>
                <a className="seo-resource__read-link" href={href}>
                  Read More <span aria-hidden="true">→</span>
                </a>
              </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default SeoCaseStudies