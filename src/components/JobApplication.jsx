import { useState } from 'react'
import '../assets/css/job-application.css'

const testimonials = [
  {
    quote: 'The flexibility to design my own schedule and work remotely has made balancing work and life seamless.',
    name: 'Rebecca Luu',
    role: 'Web Designer & Developer',
    image: 'https://azurodigital.com/wp-content/uploads/Rebecca-hs.jpg',
  },
  {
    quote: 'Azuro encourages new ideas and embraces challenges. I’m constantly motivated by our projects and our amazing team.',
    name: 'Cassandra Disano',
    role: 'Web Designer & Developer',
    image: 'https://azurodigital.com/wp-content/uploads/cassandra-hs.jpg',
  },
  {
    quote: 'I am constantly learning and working on exciting projects at Azuro. Every day brings new challenges that push me to expand my skills.',
    name: 'Kaylene Holman',
    role: 'Web Designer & Developer',
    image: 'https://azurodigital.com/wp-content/uploads/kaylene-hs-white-bg.jpg',
  },
]

function JobApplication() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const testimonial = testimonials[activeTestimonial]

  const showTestimonial = (offset) => {
    setActiveTestimonial((current) => (current + offset + testimonials.length) % testimonials.length)
  }

  return (
    <main className="job-application-page">
      <section className="job-application-layout" aria-labelledby="job-application-title">
        <div className="job-application-intro">
          <p className="job-application-eyebrow">Job Application</p>
          <h1 id="job-application-title">Join Our Team</h1>
          <p className="job-application-description">
            Become part of a creative, driven team shaping digital experiences – where every idea has the potential to shine.
          </p>

          <div className="job-testimonial" aria-live="polite">
            <blockquote>“{testimonial.quote}”</blockquote>
            <div className="job-testimonial__author">
              <img src={testimonial.image} alt="" />
              <div>
                <p>{testimonial.name}</p>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
          <div className="job-testimonial__dots" aria-label="Choose a team testimonial">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                className={index === activeTestimonial ? 'is-active' : ''}
                type="button"
                aria-label={`Show ${item.name}'s testimonial`}
                aria-pressed={index === activeTestimonial}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
          <div className="job-testimonial__controls">
            <button type="button" aria-label="Previous testimonial" onClick={() => showTestimonial(-1)}>
              <span aria-hidden="true">←</span>
            </button>
            <button type="button" aria-label="Next testimonial" onClick={() => showTestimonial(1)}>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="job-application-notice">
          <p>
            We’re not hiring at this time, and we apologize for the inconvenience. We will post jobs on{' '}
            <a href="https://www.indeed.com/cmp/Azuro-Digital" target="_blank" rel="noreferrer">Indeed</a>
            {' '}and/or{' '}
            <a href="https://ca.linkedin.com/company/azuro-digital" target="_blank" rel="noreferrer">LinkedIn</a>
            {' '}when we’re hiring.
          </p>
        </div>
      </section>
    </main>
  )
}

export default JobApplication
