import { useEffect, useState } from 'react'
import '../assets/css/client-support.css'

const testimonials = [
  {
    quote: 'Azuro did an in-depth analysis, worked on keyword research and customized our content to improve SEO.',
    name: 'Steve Chamberlain',
    role: 'President at International Orthotic Labs',
    image: 'https://azurodigital.com/wp-content/uploads/Steve-Chamberlain-hs.jpg',
  },
  {
    quote: 'We’ve seen an increase in website traffic, and we’ve received lots of positive feedback from the community.',
    name: 'Craig Dunn',
    role: 'Director at Turnbull School',
  },
  {
    quote: 'The project scope was well understood and it shows with the improvements they made to our design quality and SEO.',
    name: 'Devin Peters',
    role: 'Sales Manager at Sellick Equipment',
  },
  {
    quote: 'Goes above and beyond, always exceeding my expectations.',
    name: 'Dr. Mangeet Chahal',
    role: 'Chahal Cardiovascular Centre',
  },
  {
    quote: 'Azuro Digital brought us from being almost invisible to ranking within the top 3 (usually number 1) for all of our target keywords on Google and AI search platforms.',
    name: 'Brian Pearson',
    role: 'CFO at Riverson Scaffold',
  },
  {
    quote: 'I’ve overseen more than 10 website development projects in my career, and this was by far the smoothest.',
    name: 'Moniek Haan',
    role: 'Head of Global Marketing at HeartForce',
  },
  {
    quote: 'From initial consultation to final launch, Azuro exceeded expectations with their creativity and professionalism.',
    name: 'Noah Shechtman',
    role: 'Director of Development at Brightstone',
  },
  {
    quote: 'Our traffic has increased significantly with higher rankings on Google and ChatGPT. We’re also converting a larger percentage of traffic.',
    name: 'Quentin Servais-Laval',
    role: 'Director of Marketing at SIOMS',
  },
  {
    quote: 'Took the time to listen to our ideas, ask insightful questions and provided valuable suggestions to enhance the website’s functionality.',
    name: 'Giovanna Rogow',
    role: 'Deputy Director at NOBLE',
  },
  {
    quote: 'Our new site has a 60% higher conversion rate than our old one. We’re seeing more clients come through the door.',
    name: 'JP McAvoy',
    role: 'Managing Partner at ConductLaw',
  },
  {
    quote: 'Azuro Digital did a great job on our website redesign while optimizing SEO and content. The customer service and value has been immense.',
    name: 'MacRae Brown',
    role: 'Marketing Manager at College House',
  },
  {
    quote: 'We have seen a large increase in traffic from ranking better on search engines, and have been receiving higher quality leads.',
    name: 'Hunter Kosar',
    role: 'President of Twisted Nail',
  },
  {
    quote: 'Very professional, very high level work.',
    name: 'Jeff Radziewicz',
    role: 'Business Development Director at Valpac',
  },
  {
    quote: 'Azuro didn’t just build us a nice looking website - they designed it with a clear understanding of the automotive industry.',
    name: 'Marek Seta',
    role: 'Owner of Fraser River Paint & Body',
  },
]

const fields = [
  { name: 'firstName', label: 'First Name', placeholder: 'John', required: true },
  { name: 'lastName', label: 'Last Name', placeholder: 'Smith', required: true },
  { name: 'email', label: 'Email Address', placeholder: 'john@mail.com', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', placeholder: '+1 (555) 555-5555', type: 'tel' },
  { name: 'company', label: 'Company Name', placeholder: 'Apple' },
  { name: 'website', label: 'Website URL', placeholder: 'apple.com', type: 'url' },
]

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {direction === 'left'
        ? <path d="M20 12H5m6 6-6-6 6-6" />
        : <path d="M4 12h15m-6-6 6 6-6 6" />}
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function ClientSupport() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [submitMessage, setSubmitMessage] = useState('')
  const testimonial = testimonials[activeTestimonial]

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Contact Form | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  const showTestimonial = (offset) => {
    setActiveTestimonial((current) => (current + offset + testimonials.length) % testimonials.length)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const message = [
      `Name: ${formData.get('firstName')} ${formData.get('lastName')}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      `Company: ${formData.get('company') || 'Not provided'}`,
      `Website: ${formData.get('website') || 'Not provided'}`,
      '',
      `Message: ${formData.get('message')}`,
    ].join('\n')
    const subject = `Website inquiry from ${formData.get('firstName')} ${formData.get('lastName')}`
    setSubmitMessage('Your email app should open with your message ready to send.')
    window.location.href = `mailto:info@azurodigital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
  }

  return (
    <main className="client-support-page">
      <section className="client-support-layout" aria-labelledby="client-support-title">
        <div className="client-support-intro">
          <p className="client-support-eyebrow">Contact Form</p>
          <h1 id="client-support-title">Get in Touch</h1>
          <p className="client-support-description">
            Please submit your inquiry by filling out the form, and a member of our team will reach out to provide the information and support you need.
          </p>

          <div className="support-testimonial" aria-live="polite">
            <blockquote>“{testimonial.quote}”</blockquote>
            <div className="support-testimonial__author">
              {testimonial.image
                ? <img src={testimonial.image} alt="" />
                : <span className="support-testimonial__avatar" aria-hidden="true">{testimonial.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}</span>}
              <div>
                <p>{testimonial.name}</p>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
          <div className="support-testimonial__dots" aria-label="Choose a client testimonial">
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
          <div className="support-testimonial__controls">
            <button type="button" aria-label="Previous testimonial" onClick={() => showTestimonial(-1)}>
              <ArrowIcon direction="left" />
            </button>
            <button type="button" aria-label="Next testimonial" onClick={() => showTestimonial(1)}>
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div className="client-support-form-frame">
          <form className="client-support-form" onSubmit={handleSubmit}>
            <div className="client-support-fields">
              {fields.map((field) => (
                <label className="client-support-field" htmlFor={`support-${field.name}`} key={field.name}>
                  <span>{field.label}{field.required && <span className="client-support-required"> *</span>}</span>
                  <input
                    id={`support-${field.name}`}
                    name={field.name}
                    type={field.type || 'text'}
                    placeholder={field.placeholder}
                    required={field.required}
                    autoComplete={field.name === 'firstName' ? 'given-name' : field.name === 'lastName' ? 'family-name' : field.name === 'email' ? 'email' : field.name === 'phone' ? 'tel' : undefined}
                  />
                </label>
              ))}
              <label className="client-support-field client-support-field--message" htmlFor="support-message">
                <span>Message<span className="client-support-required"> *</span></span>
                <textarea id="support-message" name="message" placeholder="Type your message here..." required />
              </label>
            </div>
            <button className="client-support-submit" type="submit">
              Send Message <EnvelopeIcon />
            </button>
            <p className="client-support-submit-message" aria-live="polite">{submitMessage}</p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default ClientSupport
