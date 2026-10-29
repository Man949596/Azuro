import { useEffect, useRef, useState } from 'react'
import { portfolioProjects } from '../js/portfolioData.js'
import '../assets/css/portfolio.css'

function Ratings() {
    return (
        <aside className="portfolio-ratings" aria-label="Client ratings">
            <div className="portfolio-rating portfolio-rating--clutch">
                <span className="portfolio-rating__top">RATED 4.9/5</span>
                <span className="portfolio-rating__stars" aria-label="5 out of 5 stars">★★★★★</span>
                <strong className="portfolio-rating__clutch-logo">Clutch</strong>
                <small>79 REVIEWS</small>
            </div>
            <div className="portfolio-rating portfolio-rating--google">
                <svg className="portfolio-rating__google-g" viewBox="0 0 48 48" aria-hidden="true">
                    <path fill="#4285F4" d="M47.5 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h13.22a11.3 11.3 0 0 1-4.9 7.42v6.12h7.94c4.65-4.28 7.24-10.58 7.24-18.01Z" />
                    <path fill="#34A853" d="M24 48c6.63 0 12.2-2.2 16.27-5.95l-7.94-6.12c-2.2 1.48-5.02 2.35-8.33 2.35-6.4 0-11.82-4.32-13.76-10.13H2.04v6.3A24 24 0 0 0 24 48Z" />
                    <path fill="#FBBC05" d="M10.24 28.15a14.4 14.4 0 0 1 0-8.3v-6.3H2.04a24 24 0 0 0 0 20.9l8.2-6.3Z" />
                    <path fill="#EA4335" d="M24 9.52c3.6 0 6.83 1.24 9.38 3.68l7.02-7.02C36.19 2.34 30.63 0 24 0A24 24 0 0 0 2.04 13.55l8.2 6.3C12.18 13.84 17.6 9.52 24 9.52Z" />
                </svg>
                <span><b>4.9/5 <strong>★★★★★</strong></b><small>Based on 60+ Reviews</small></span>
            </div>
        </aside>
    )
}

function useScrollVisibility(ref) {
    const [visible, setVisible] = useState(() => typeof IntersectionObserver === 'undefined')

    useEffect(() => {
        const element = ref.current
        if (!element) return undefined

        if (typeof IntersectionObserver === 'undefined') return undefined

        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting)
        }, { threshold: 0.12 })

        observer.observe(element)
        return () => observer.disconnect()
    }, [ref])

    return visible
}

function ProjectCard({ project, index }) {
    const projectRef = useRef(null)
    const testimonialRef = useRef(null)
    const projectVisible = useScrollVisibility(projectRef)
    const testimonialVisible = useScrollVisibility(testimonialRef)
    const titleId = `portfolio-project-title-${index}`

    return (
        <section className="portfolio-case" aria-label={`${project.name} project and testimonial`}>
            <article
                ref={projectRef}
                className={`portfolio-project${projectVisible ? ' portfolio-project--visible' : ''}`}
                aria-labelledby={titleId}
            >
                <a
                    className="portfolio-project__preview"
                    href={`https://${project.site}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit the ${project.name} website`}
                >
                    <img src={project.image} alt={`${project.name} website design`} loading="lazy" decoding="async" />
                    <span className="portfolio-project__image-arrow" aria-hidden="true">↗</span>
                </a>
                <div className="portfolio-project__details">
                    <a className="portfolio-project__site" href={`https://${project.site}`} target="_blank" rel="noreferrer">
                        {project.site} <span aria-hidden="true">↗</span>
                    </a>
                    <h2 id={titleId}>{project.name}</h2>
                    <p>{project.description}</p>
                    <a className="portfolio-project__button" href={`https://${project.site}`} target="_blank" rel="noreferrer">
                        Visit Site <span aria-hidden="true">→</span>
                    </a>
                </div>
            </article>
            <figure
                ref={testimonialRef}
                className={`portfolio-testimonial${testimonialVisible ? ' portfolio-testimonial--visible' : ''}`}
            >
                {project.logo
                    ? <img className="portfolio-testimonial__crest" src={project.logo} alt={`${project.name} logo`} loading="lazy" />
                    : <span className="portfolio-testimonial__wordmark">{project.logoText || project.name}</span>}
                <blockquote>“{project.quote}”</blockquote>
                <figcaption>
                    {project.portrait
                        ? <img className="portfolio-testimonial__portrait" src={project.portrait} alt={project.client} loading="lazy" />
                        : <span className="portfolio-testimonial__avatar" aria-hidden="true">{project.client.split(' ').map((part) => part[0]).join('')}</span>}
                    <strong>{project.client}</strong>
                    <span>{project.role}</span>
                </figcaption>
            </figure>
        </section>
    )
}

function Portfolio() {
    const portfolioRef = useRef(null)

    useEffect(() => {
        const portfolio = portfolioRef.current
        if (!portfolio) return undefined

        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
        if (reducedMotion.matches) return undefined

        let frameId = 0
        const updateImagePositions = () => {
            frameId = 0
            const viewportCenter = window.innerHeight / 2

            portfolio.querySelectorAll('.portfolio-project__preview img').forEach((image) => {
                const bounds = image.getBoundingClientRect()
                const imageCenter = bounds.top + bounds.height / 2
                const offset = Math.max(-28, Math.min(28, (viewportCenter - imageCenter) * 0.08))
                image.style.setProperty('--portfolio-scroll-y', `${offset}px`)
            })
        }

        const requestImageUpdate = () => {
            if (!frameId) frameId = window.requestAnimationFrame(updateImagePositions)
        }

        requestImageUpdate()
        window.addEventListener('scroll', requestImageUpdate, { passive: true })
        window.addEventListener('resize', requestImageUpdate)

        return () => {
            window.removeEventListener('scroll', requestImageUpdate)
            window.removeEventListener('resize', requestImageUpdate)
            if (frameId) window.cancelAnimationFrame(frameId)
        }
    }, [])

    return (
        <main ref={portfolioRef} className="portfolio-page" id="portfolio">
            <div className="portfolio-content">
                <div className="portfolio-heading">
                    <div>
                        <p className="portfolio-eyebrow">Web Design Portfolio</p>
                        <h1>We Deliver Premium Websites<br />&amp; Form Lasting Partnerships</h1>
                    </div>
                    <Ratings />
                </div>

                {portfolioProjects.map((project, index) => (
                    <ProjectCard key={project.site} project={project} index={index} />
                ))}
            </div> 
        </main>
    )
}

export default Portfolio