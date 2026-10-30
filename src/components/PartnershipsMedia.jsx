import '../assets/css/partnerships-media.css'

const officeImage = 'https://azurodigital.com/wp-content/uploads/careers-featured-v2-1536x1050.jpg'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  )
}

function PartnershipsMedia() {
  return (
    <main className="partnerships-media-page">
      <section className="partnerships-media-hero" aria-labelledby="partnerships-media-title">
        <div className="partnerships-media-hero__content">
          <p className="partnerships-media-hero__eyebrow">Sorry!</p>
          <h1 id="partnerships-media-title">Please Don't Contact Us</h1>
          <p className="partnerships-media-hero__description">
            If you’re selling backlinks, software, white label services, or anything else, we’re not interested. Please don’t contact us. If you’re contacting us about an award or high-profile media coverage, contact us{' '}
            <a href="https://azurodigital.com/contact-form/">here.</a>
          </p>
          <a className="partnerships-media-button" href="/">
            Back to Homepage <ArrowIcon />
          </a>
        </div>
        <img
          className="partnerships-media-hero__image"
          src={officeImage}
          alt="A modern office with a desk and computer"
          fetchPriority="high"
        />
   </section>
    </main>
  )
}

export default PartnershipsMedia
