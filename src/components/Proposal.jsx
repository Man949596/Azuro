import { useState } from 'react'
import '../assets/css/proposal.css'

function Proposal({ onBack }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="proposal-page">
      <section className="proposal-content" aria-labelledby="proposal-title">
        <p className="proposal-eyebrow">Get a Proposal</p>
        <h1 id="proposal-title">Start the Conversation</h1>
        <p className="proposal-intro">
          To get in touch, you may submit the form below or send an email to{' '}
          <a href="mailto:info@azurodigital.com">info@azurodigital.com</a>
        </p>

        <form className="proposal-form" onSubmit={handleSubmit}>
          <div className="proposal-fields">
            <label>
              First Name <span aria-hidden="true">*</span>
              <input name="firstName" type="text" placeholder="John" autoComplete="given-name" required />
            </label>
            <label>
              Last Name <span aria-hidden="true">*</span>
              <input name="lastName" type="text" placeholder="Smith" autoComplete="family-name" required />
            </label>
            <label>
              Email Address <span aria-hidden="true">*</span>
              <input name="email" type="email" placeholder="john@mail.com" autoComplete="email" required />
            </label>
            <label>
              Phone Number
              <input name="phone" type="tel" placeholder="555-555-5555" autoComplete="tel" />
            </label>
            <label>
              Company Name
              <input name="company" type="text" placeholder="Apple" autoComplete="organization" />
            </label>
            <label>
              Website URL
              <input name="website" type="url" placeholder="apple.com" />
            </label>
          </div>

          <label className="proposal-field">
            Initial Web Design &amp; Development Budget <span aria-hidden="true">*</span>
            <select name="budget" defaultValue="" required>
              <option value="" disabled>Select Budget</option>
              <option value="under-5000">Under $5,000</option>
              <option value="5000-10000">$5,000 - $10,000</option>
              <option value="10000-25000">$10,000 - $25,000</option>
              <option value="25000-50000">$25,000 - $50,000</option>
              <option value="over-50000">$50,000+</option>
            </select>
          </label>

          <label className="proposal-field">
            Upload Project Files (Optional)
            <input className="proposal-file" name="files" type="file" multiple />
          </label>

          <label className="proposal-field">
            Project Summary <span aria-hidden="true">*</span>
            <textarea
              name="summary"
              placeholder={'You may type "N/A" if you already uploaded a file with all project info.'}
              rows="4"
              required
            />
          </label>

          <button className="proposal-submit" type="submit">
            Submit Request <span aria-hidden="true">✉</span>
          </button>
          {submitted && (
            <p className="proposal-confirmation" role="status">
              Your form is complete. This preview does not send submissions yet; please email{' '}
              <a href="mailto:info@azurodigital.com">info@azurodigital.com</a>.
            </p>
          )}
        </form>
      </section>
    </main>
  )
}

export default Proposal
