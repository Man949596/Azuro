import { useEffect, useState } from 'react'
import '../assets/css/insurance.css'

const insuranceHeroImage = 'https://azurodigital.com/wp-content/uploads/Person-Signing-Insurance-Contract-1.jpg'
const insuranceFeatureImage = 'https://azurodigital.com/wp-content/uploads/Insurance-Web-Designer.jpg'
const solBenefits = {
  site: 'solbenefits.ca',
  name: 'Sol Benefits Consulting',
  description: 'Sol Benefits Consulting is a life insurance and health benefits agency serving Canadian businesses and individuals.',
  image: 'https://azurodigital.com/wp-content/uploads/Sol-Top.jpg',
  logo: 'https://azurodigital.com/wp-content/uploads/Sol_Benefits_Consulting_Logo-1.svg',
  quote: 'Azuro Digital’s professionalism, transparency, and attention to detail is a cut above the rest. Their team provided extremely good input for the strategy of our life insurance and health benefits website. I really appreciated working with them as it was clear that they treated this project with as much care and passion as we did, and took the time to understand what our vision needed to be. They guided us from start to finish and we are very happy with the result of the branding and the website.',
  client: 'Jeff Wang',
  role: 'Partner at Sol Benefits Consulting',
}

const processSteps = [
  {
    number: '01',
    icon: '⌕',
    title: 'Industry Research',
    text: 'We conduct research on your business, target market and competitors to ensure your insurance website stands out from the crowd with the right strategy for design, content and SEO.',
  },
  {
    number: '02',
    icon: '✎',
    title: 'Marketing Strategy Review',
    text: 'We review your marketing channels and sales process to enable your website to support lead generation sources in terms of the overall user journey, messaging and analytics.',
  },
  {
    number: '03',
    icon: '⌕',
    title: 'SEO Research & Planning',
    text: 'We do an SEO audit of your existing site and establish benchmarks for future traffic expectations. We will perform comprehensive keyword research and optimize your content accordingly.',
  },
  {
    number: '04',
    icon: '◉',
    title: 'Conversion Strategy',
    text: 'We help turn website traffic into paying customers with clear calls to action, social proof and a streamlined user experience.',
  },
]

const faqs = [
  [
    'What are your top strategies for insurance web design?',
    'We make insurance products easier to understand with clear, jargon-free coverage information and dedicated pages for each service. Helpful quote tools, simple claims information, trust signals and accessible contact options make it easier for visitors to compare coverage and take the next step.',
  ],
  [
    'What is your web design process and philosophy?',
    'Our collaborative process includes research, strategy, content planning, design, development, revisions, quality assurance and launch. We focus on accessibility, performance, search visibility and helping your business generate qualified inquiries.',
  ],
  [
    'Which platforms do you use for web development?',
    'We offer WordPress and custom web development. The right option depends on your needs, integrations and the way your team manages content. We will help you choose the right fit.',
  ],
  [
    'Do you only provide web design services for insurance companies?',
    'No. We work with clients across many industries. Every website is tailored to the organization, its goals and the customers it serves.',
  ],
  [
    'Do you perform ongoing A/B testing to maximize results?',
    'Yes. After launch, ongoing A/B testing and analytics can help identify which changes improve engagement and quote requests. We can support data-informed optimization over time.',
  ],
]

const blogCards = [
  {
    title: '10 Web Design Tips for Insurance Companies in 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Insurance-shield-graphic-1024x700.jpg',
    description: 'Practical ideas to help your insurance website build trust and generate leads.',
    href: 'https://azurodigital.com/insurance-web-design-tips/',
    readTime: '11 minute read',
  },
  {
    title: 'How to Optimize Your Website for Search Engines & AI',
    image: 'https://azurodigital.com/wp-content/uploads/10-Ways-to-Get-More-Results-from-Your-Website-featured-1024x700.jpg',
    description: 'Improve visibility and help more customers find your insurance services.',
    href: 'https://azurodigital.com/seo-guide/',
    readTime: '11 minute read',
  },
  {
    title: '10 Best Insurance Website Designs of 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Insurance-Policy-Documents-1024x700.jpg',
    description: 'Explore effective approaches to designing insurance websites.',
    href: 'https://azurodigital.com/insurance-website-examples/',
    readTime: '15 minute read',
  },
]

function Insurance({ onGetProposal }) {
  const [openFaq, setOpenFaq] = useState(-1)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Website Design for Insurance Companies | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <main className="insurance-page" id="content">
      <div className="insurance-container">
        <section className="insurance-hero" aria-labelledby="insurance-title">
          <div className="insurance-hero__copy">
            <p className="insurance-eyebrow">Web Design Agency for Insurance Companies</p>
            <h1 id="insurance-title">Creating Professional,<br />Custom Website Designs<br />for Insurance</h1>
          </div>
          <div className="insurance-hero__aside">
            <p>Delivering modern, lead-generating website design services for insurance companies since 2018. Are you ready to become our next success story?</p>
            <button type="button" className="insurance-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
            <div className="insurance-rating" aria-label="Rated 4.9 out of 5">
              <span className="insurance-rating__google" aria-hidden="true">G</span>
              <span><strong>4.9/5 <b>★★★★★</b></strong><small>Based on 60+ Reviews</small></span>
            </div>
          </div>
        </section>

        <img
          className="insurance-hero-image"
          src={insuranceHeroImage}
          alt="Insurance professional reviewing and signing a policy document"
          fetchPriority="high"
        />

        <p className="insurance-intro">
          Whether you represent an insurance company, brokerage or carrier,
          <br className="insurance-desktop-break" /> Azuro Digital has you covered with our cutting-edge insurance web
          <br className="insurance-desktop-break" /> design services. Let’s grow your digital presence!
        </p>

        <section className="insurance-process" aria-labelledby="insurance-process-title">
          <div className="insurance-section-heading">
            <div>
              <p className="insurance-eyebrow">Insurance Web Design Workflow</p>
              <h2 id="insurance-process-title">Our Step-by-Step Process</h2>
            </div>
            <a className="insurance-text-link" href="#insurance-projects">Recent Work <span aria-hidden="true">→</span></a>
          </div>
          <div className="insurance-process-grid">
            {processSteps.map((step) => (
              <article className="insurance-process-card" key={step.number}>
                <span className="insurance-process-card__icon" aria-hidden="true">{step.icon}</span>
                <strong className="insurance-process-card__number">{step.number}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="insurance-carousel-controls" aria-label="Process navigation">
            <a href="#insurance-projects" aria-label="Previous section">←</a>
            <a href="#insurance-projects" aria-label="Next section">→</a>
          </div>
        </section>

        <section className="insurance-feature">
          <a className="insurance-feature__image" href={`https://${solBenefits.site}`} target="_blank" rel="noreferrer">
            <img src={insuranceFeatureImage} alt="Insurance website designer working at a computer" loading="lazy" />
          </a>
          <div className="insurance-feature__copy">
            <p className="insurance-eyebrow">Custom Web Design &amp; Development</p>
            <h2>Superior Websites for Insurance</h2>
            <p>We work with all types of insurance providers — from life insurance to cyber insurance and everything in between. We help visitors understand your coverage and next steps, with a design, content and user experience built to earn trust and support your marketing goals.</p>
            <div className="insurance-awards" aria-label="Web design awards">
              <img src="https://azurodigital.com/wp-content/uploads/web-awards-logo.svg" alt="WebAwards" loading="lazy" />
              <img src="https://azurodigital.com/wp-content/uploads/design-rush-best-design-logo.svg" alt="DesignRush Awards" loading="lazy" />
              <img src="https://azurodigital.com/wp-content/uploads/awwwards-logo.svg" alt="Awwwards" loading="lazy" />
            </div>
            <div className="insurance-feature__actions">
              <button type="button" className="insurance-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
              <a href="https://clutch.co/profile/azuro-digital" target="_blank" rel="noreferrer" className="insurance-clutch">Clutch <span>★★★★★</span></a>
            </div>
          </div>
        </section>

        <section className="insurance-accessibility">
          <img className="insurance-accessibility__badge" src="https://azurodigital.com/wp-content/uploads/AC-Badge-x3-1024x807.png" alt="AccessibilityChecker verified accessible website agency badge" loading="lazy" />
          <div>
            <p className="insurance-eyebrow">We’re a Verified Leader in Web Accessibility for Insurance Companies</p>
            <h2>Accessible Websites for Every Customer</h2>
            <p>AccessibilityChecker.org has recognized Azuro Digital as a verified web agency for accessible websites. Accessibility laws like ADA and AODA are increasingly enforced. By partnering with Azuro, you can build an inclusive experience and welcome a wider audience to your site.</p>
            <div className="insurance-accessibility__actions">
              <a className="insurance-button" href="https://www.accessibilitychecker.org/role-model/azuro-digital-canadas-top-accessibility-focused-web-design-agency/" target="_blank" rel="noreferrer">View Certification <span aria-hidden="true">→</span></a>
              <img src="https://azurodigital.com/wp-content/uploads/WCAG-logo.png" alt="WCAG 2.2 Level AA" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="insurance-blog" aria-labelledby="insurance-blog-title">
          <div className="insurance-section-heading">
            <div><h2 id="insurance-blog-title">From Our Blog</h2></div>
            <a className="insurance-text-link" href="https://azurodigital.com/blog/" target="_blank" rel="noreferrer">View All Posts <span aria-hidden="true">→</span></a>
          </div>
          <div className="insurance-blog-grid">
            {blogCards.map((card) => (
              <article className="insurance-blog-card" key={card.title}>
                <a href={card.href} target="_blank" rel="noreferrer"><img src={card.image} alt="" loading="lazy" /></a>
                <h3><a href={card.href} target="_blank" rel="noreferrer">{card.title}</a></h3>
                <small>{card.readTime}</small>
                <a className="insurance-text-link" href={card.href} target="_blank" rel="noreferrer">Read More <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="insurance-faq" id="insurance-faq" aria-labelledby="insurance-faq-title">
          <p className="insurance-eyebrow">FAQs</p>
          <h2 id="insurance-faq-title">Your Questions, Answered</h2>
          <div className="insurance-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className="insurance-faq-item" key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    aria-controls={`insurance-faq-answer-${index}`}
                    onClick={() => setOpenFaq((current) => current === index ? -1 : index)}
                  >
                    {question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                </h3>
                {openFaq === index && <p id={`insurance-faq-answer-${index}`}>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="insurance-projects" id="insurance-projects" aria-labelledby="insurance-projects-title">
          <p className="insurance-eyebrow">Insurance Web Design Project</p>
          <h2 id="insurance-projects-title">Check Out Our Recent Work!</h2>
          <article className="insurance-project">
            <a className="insurance-project__screens" href={`https://${solBenefits.site}`} target="_blank" rel="noreferrer" aria-label="Visit Sol Benefits Consulting website">
              <img src="https://azurodigital.com/wp-content/uploads/Sol-Top.jpg" alt="Sol Benefits Consulting website overview" loading="lazy" />
              <img src="https://azurodigital.com/wp-content/uploads/Sol-Main.jpg" alt="Sol Benefits Consulting website design detail" loading="lazy" />
              <img src="https://azurodigital.com/wp-content/uploads/Sol-Bottom.jpg" alt="Sol Benefits Consulting services" loading="lazy" />
            </a>
            <div className="insurance-project__details">
              <a href={`https://${solBenefits.site}`} target="_blank" rel="noreferrer" className="insurance-project__site">{solBenefits.site} <span aria-hidden="true">↗</span></a>
              <h3>{solBenefits.name}</h3>
              <p>{solBenefits.description} They were seeking a brand overhaul — including a new logo and website.</p>
              <a className="insurance-text-link" href={`https://${solBenefits.site}`} target="_blank" rel="noreferrer">Visit Site <span aria-hidden="true">→</span></a>
            </div>
          </article>
          <figure className="insurance-testimonial">
            <img className="insurance-testimonial__logo" src={solBenefits.logo} alt={`${solBenefits.name} logo`} loading="lazy" />
            <blockquote>“{solBenefits.quote}”</blockquote>
            <img className="insurance-testimonial__portrait" src="https://azurodigital.com/wp-content/uploads/Jeff-Wang.jpg" alt={solBenefits.client} loading="lazy" />
            <figcaption><strong>{solBenefits.client}</strong><span>{solBenefits.role}</span></figcaption>
          </figure>
        </section>

        <section className="insurance-related">
          <div>
            <p className="insurance-eyebrow">Explore Industries Similar to Insurance</p>
            <h2>View More Work From<br />Related Sectors</h2>
          </div>
          <a className="insurance-related-card" href="/law-firm-web-design"><span aria-hidden="true">⚖</span><strong>Law Firm Web Design</strong><small>Learn More →</small></a>
          <a className="insurance-related-card" href="https://azurodigital.com/fintech-web-design/" target="_blank" rel="noreferrer"><span aria-hidden="true">⌂</span><strong>Fintech Web Design</strong><small>Learn More →</small></a>
        </section>
      </div>
    </main>
  )
}

export default Insurance
