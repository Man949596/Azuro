import { useEffect, useState } from 'react'
import { portfolioProjects } from '../js/portfolioData.js'
import '../assets/css/b2b.css'

const b2bHeroImage = 'https://azurodigital.com/wp-content/uploads/Downtown-Skyline.jpg'
const b2bFeatureImage = 'https://azurodigital.com/wp-content/uploads/Business-Meeting.jpg'

const b2bProjects = [
  {
    site: 'solbenefits.ca',
    name: 'Sol Benefits Consulting',
    image: 'https://azurodigital.com/wp-content/uploads/Sol-Top.jpg',
    logo: 'https://azurodigital.com/wp-content/uploads/Sol_Benefits_Consulting_Logo-1.svg',
    quote: 'Azuro Digital’s professionalism, transparency, and attention to detail is a cut above the rest. Their team provided extremely good input for the strategy of our life insurance and health benefits website. I really appreciated working with them as it was clear that they treated this project with as much care and passion as we did, and took the time to understand what our vision needed to be. They guided us from start to finish and we are very happy with the result of the branding and the website.',
    client: 'Jeff Wang',
    role: 'Partner at Sol Benefits Consulting',
    portrait: 'https://azurodigital.com/wp-content/uploads/Jeff-Wang.jpg',
    screenshots: [
      'https://azurodigital.com/wp-content/uploads/Sol-Top.jpg',
      'https://azurodigital.com/wp-content/uploads/Sol-Main.jpg',
      'https://azurodigital.com/wp-content/uploads/Sol-Bottom.jpg',
    ],
    description: 'Sol Benefits Consulting is a life insurance and health benefits agency serving Canadian businesses and individuals. They were seeking a brand overhaul — including a new logo and website — and Azuro delivered.',
  },
  {
    ...portfolioProjects.find((project) => project.site === 'valpac.com'),
    screenshots: [
      'https://azurodigital.com/wp-content/uploads/valpac-top.jpg',
      'https://azurodigital.com/wp-content/uploads/valpac-main.jpg',
      'https://azurodigital.com/wp-content/uploads/valpac-bottom.jpg',
    ],
    description: 'Valpac is an adhesive toll manufacturer in Maryland with over 40 years of industry expertise. We redesigned and redeveloped their website and created new brand guidelines.',
  },
  {
    ...portfolioProjects.find((project) => project.site === 'conductlaw.com'),
    screenshots: [
      'https://azurodigital.com/wp-content/uploads/conduct-law-top.jpg',
      'https://azurodigital.com/wp-content/uploads/conduct-law-main.jpg',
      'https://azurodigital.com/wp-content/uploads/conduct-law-bottom.jpg',
    ],
    description: 'ConductLaw is a business law firm in Ottawa, Ontario, focused on corporate and commercial law, real estate law, and estate planning. We took their digital presence to the next level with a new website design.',
  },
  {
    ...portfolioProjects.find((project) => project.site === 'twistednail.com'),
    screenshots: [
      'https://azurodigital.com/wp-content/uploads/twisted-nail-top-1.jpg',
      'https://azurodigital.com/wp-content/uploads/twisted-nail-main.jpg',
      'https://azurodigital.com/wp-content/uploads/twisted-nail-bottom.jpg',
    ],
    description: 'Twisted Nail is a trucking, logistics and aggregate supplier serving the construction industry. We redesigned and redeveloped their website with an emphasis on SEO, conversions and a distinctive visual design.',
  },
].filter((project) => project.site)

const processSteps = [
  {
    number: '01',
    icon: '⌕',
    title: 'Industry Research',
    text: 'We research your business, target market and competitors to ensure your B2B website stands out with the right design, content and SEO strategy.',
  },
  {
    number: '02',
    icon: '✎',
    title: 'Marketing Strategy Review',
    text: 'We review your marketing channels and sales process to make your website support lead generation through the overall user journey, messaging and analytics.',
  },
  {
    number: '03',
    icon: '⌕',
    title: 'SEO Research & Planning',
    text: 'We audit your existing website, establish benchmarks and perform keyword research to optimize your content and reach the right customers.',
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
    'What are your top strategies for B2B web design?',
    'We create clear paths for different decision-makers, build useful resource libraries, demonstrate measurable results with case studies and establish enterprise credibility with client logos, credentials and trust signals. These elements help shorten complex sales cycles and turn qualified visitors into leads.',
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
    'Do you only provide web design services for B2B companies?',
    'No. We also work with B2C organizations in industries such as healthcare, financial services and legal services. Every website is tailored to the organization and its goals.',
  ],
  [
    'Do you perform ongoing A/B testing to maximize results?',
    'Yes. After launch, ongoing A/B testing and analytics can help identify which changes improve engagement and conversions. We can support data-informed optimization over time.',
  ],
]

const blogCards = [
  {
    title: '10 Web Design Tips for B2B Companies in 2026',
    image: 'https://azurodigital.com/wp-content/uploads/Corporate-Office-Buildings-1024x700.jpg',
    description: 'Ideas for a polished B2B website that supports your growth.',
    href: 'https://azurodigital.com/b2b-web-design-tips/',
    readTime: '11 minute read',
  },
  {
    title: 'How to Optimize WordPress Security & Privacy Compliance',
    image: 'https://azurodigital.com/wp-content/uploads/Secure-Network-1024x700.jpg',
    description: 'Build trust with a secure and privacy-conscious website.',
    href: 'https://azurodigital.com/security-and-privacy-guide/',
    readTime: '6 minute read',
  },
  {
    title: 'How to Optimize Your Website for Search Engines & AI',
    image: 'https://azurodigital.com/wp-content/uploads/SEO-Traffic-1024x700.jpg',
    description: 'Improve visibility and help more business customers find you.',
    href: 'https://azurodigital.com/seo-guide/',
    readTime: '11 minute read',
  },
]

function B2B({ onGetProposal }) {
  const [openFaq, setOpenFaq] = useState(-1)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Website Design for B2B Companies | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <main className="b2b-page" id="content">
      <div className="b2b-container">
        <section className="b2b-hero" aria-labelledby="b2b-title">
          <div className="b2b-hero__copy">
            <p className="b2b-eyebrow">Web Design Agency for B2B Companies</p>
            <h1 id="b2b-title">Creating Professional,<br />Custom Website Designs<br />for B2B Companies</h1>
          </div>
          <div className="b2b-hero__aside">
            <p>Work with Azuro to get a lead-generating website for your business. Your next stage of growth is through cutting-edge B2B web design, development &amp; SEO.</p>
            <button type="button" className="b2b-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
            <div className="b2b-rating" aria-label="Rated 4.9 out of 5">
              <span className="b2b-rating__google" aria-hidden="true">G</span>
              <span><strong>4.9/5 <b>★★★★★</b></strong><small>Based on 60+ Reviews</small></span>
            </div>
          </div>
        </section>

        <img
          className="b2b-hero-image"
          src={b2bHeroImage}
          alt="Modern office buildings in a downtown skyline"
          fetchPriority="high"
        />

        <p className="b2b-intro">
          Since 2018, Azuro Digital has been meticulously designing &amp; developing
          <br className="b2b-desktop-break" /> custom B2B websites in various sectors across the globe. Are you ready
          <br className="b2b-desktop-break" /> to be our next success story?
        </p>

        <section className="b2b-process" aria-labelledby="b2b-process-title">
          <div className="b2b-section-heading">
            <div>
              <p className="b2b-eyebrow">B2B Web Design Workflow</p>
              <h2 id="b2b-process-title">Our Step-by-Step Process</h2>
            </div>
            <a className="b2b-text-link" href="#b2b-projects">Recent Work <span aria-hidden="true">→</span></a>
          </div>
          <div className="b2b-process-grid">
            {processSteps.map((step) => (
              <article className="b2b-process-card" key={step.number}>
                <span className="b2b-process-card__icon" aria-hidden="true">{step.icon}</span>
                <strong className="b2b-process-card__number">{step.number}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="b2b-carousel-controls" aria-label="Process navigation">
            <a href="#b2b-projects" aria-label="Previous section">←</a>
            <a href="#b2b-projects" aria-label="Next section">→</a>
          </div>
        </section>

        <section className="b2b-feature">
          <a className="b2b-feature__image" href="https://azurodigital.com/b2b-web-design/" target="_blank" rel="noreferrer">
            <img src={b2bFeatureImage} alt="Business professionals collaborating in a meeting" loading="lazy" />
          </a>
          <div className="b2b-feature__copy">
            <p className="b2b-eyebrow">Custom Web Design &amp; Development</p>
            <h2>Superior Websites for B2B Companies</h2>
            <p>Many B2B companies rely on direct relationships and referral networks for lead generation. A high-quality website helps warm leads decide whether to move forward, while presenting a strong impression of your company. Your website should also be SEO-focused to generate additional leads.</p>
            <div className="b2b-awards" aria-label="Web design awards">
              <img src="https://azurodigital.com/wp-content/uploads/awwwards-logo.svg" alt="Awwwards" loading="lazy" />
              <img src="https://azurodigital.com/wp-content/uploads/css-design-logo.svg" alt="CSS Design Awards" loading="lazy" />
              <img src="https://azurodigital.com/wp-content/uploads/web-awards-logo.svg" alt="WebAwards" loading="lazy" />
            </div>
            <div className="b2b-feature__actions">
              <button type="button" className="b2b-button" onClick={onGetProposal}>Get a Proposal <span aria-hidden="true">→</span></button>
              <a href="https://clutch.co/profile/azuro-digital" target="_blank" rel="noreferrer" className="b2b-clutch">Clutch <span>★★★★★</span></a>
            </div>
          </div>
        </section>

        <section className="b2b-accessibility">
          <img className="b2b-accessibility__badge" src="https://azurodigital.com/wp-content/uploads/AC-Badge-x3-1024x807.png" alt="AccessibilityChecker verified accessible website agency badge" loading="lazy" />
          <div>
            <p className="b2b-eyebrow">We’re a Verified Leader in Web Accessibility for B2B Companies</p>
            <h2>Accessible Websites for Every Customer</h2>
            <p>AccessibilityChecker.org has recognized Azuro Digital as a verified web agency for accessible websites. Accessibility laws like ADA and AODA are increasingly enforced. By partnering with Azuro, you can build an inclusive experience and welcome a wider audience to your site.</p>
            <div className="b2b-accessibility__actions">
              <a className="b2b-button" href="https://www.accessibilitychecker.org/role-model/azuro-digital-canadas-top-accessibility-focused-web-design-agency/" target="_blank" rel="noreferrer">View Certification <span aria-hidden="true">→</span></a>
              <img src="https://azurodigital.com/wp-content/uploads/WCAG-logo.png" alt="WCAG 2.2 Level AA" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="b2b-blog" aria-labelledby="b2b-blog-title">
          <div className="b2b-section-heading">
            <div><h2 id="b2b-blog-title">From Our Blog</h2></div>
            <a className="b2b-text-link" href="https://azurodigital.com/blog/" target="_blank" rel="noreferrer">View All Posts <span aria-hidden="true">→</span></a>
          </div>
          <div className="b2b-blog-grid">
            {blogCards.map((card) => (
              <article className="b2b-blog-card" key={card.title}>
                <a href={card.href} target="_blank" rel="noreferrer"><img src={card.image} alt="" loading="lazy" /></a>
                <h3><a href={card.href} target="_blank" rel="noreferrer">{card.title}</a></h3>
                <small>{card.readTime}</small>
                <a className="b2b-text-link" href={card.href} target="_blank" rel="noreferrer">Read More <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className="b2b-faq" id="b2b-faq" aria-labelledby="b2b-faq-title">
          <p className="b2b-eyebrow">FAQs</p>
          <h2 id="b2b-faq-title">Your Questions, Answered</h2>
          <div className="b2b-faq-list">
            {faqs.map(([question, answer], index) => (
              <article className="b2b-faq-item" key={question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    aria-controls={`b2b-faq-answer-${index}`}
                    onClick={() => setOpenFaq((current) => current === index ? -1 : index)}
                  >
                    {question}<span aria-hidden="true">{openFaq === index ? '−' : '+'}</span>
                  </button>
                </h3>
                {openFaq === index && <p id={`b2b-faq-answer-${index}`}>{answer}</p>}
              </article>
            ))}
          </div>
        </section>

        <section className="b2b-projects" id="b2b-projects" aria-labelledby="b2b-projects-title">
          <p className="b2b-eyebrow">Recent Work</p>
          <h2 id="b2b-projects-title">Some of Our B2B Web Design Projects</h2>
          {b2bProjects.map((project) => (
            <div key={project.site}>
              <article className="b2b-project">
                <a className="b2b-project__screens" href={`https://${project.site}`} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name} website`}>
                  {project.screenshots.map((screenshot, index) => (
                    <img src={screenshot} alt={`${project.name} website design ${index + 1}`} loading="lazy" key={screenshot} />
                  ))}
                </a>
                <div className="b2b-project__details">
                  <a href={`https://${project.site}`} target="_blank" rel="noreferrer" className="b2b-project__site">{project.site} <span aria-hidden="true">↗</span></a>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a className="b2b-text-link" href={`https://${project.site}`} target="_blank" rel="noreferrer">Visit Site <span aria-hidden="true">→</span></a>
                </div>
              </article>
              <figure className="b2b-testimonial">
                {project.logo && <img className="b2b-testimonial__logo" src={project.logo} alt={`${project.name} logo`} loading="lazy" />}
                <blockquote>“{project.quote}”</blockquote>
                {project.portrait && <img className="b2b-testimonial__portrait" src={project.portrait} alt={project.client} loading="lazy" />}
                <figcaption><strong>{project.client}</strong><span>{project.role}</span></figcaption>
              </figure>
            </div>
          ))}
        </section>

        <section className="b2b-related">
          <div>
            <p className="b2b-eyebrow">Explore Specific B2B Industries</p>
            <h2>View More Work From<br />Related Sectors</h2>
          </div>
          <a className="b2b-related-card" href="/manufacturing-web-design"><span aria-hidden="true">▦</span><strong>Manufacturing Web Design</strong><small>Learn More →</small></a>
          <a className="b2b-related-card" href="https://azurodigital.com/saas-web-design/" target="_blank" rel="noreferrer"><span aria-hidden="true">⌂</span><strong>SaaS Web Design</strong><small>Learn More →</small></a>
        </section>
      </div>
    </main>
  )
}

export default B2B
