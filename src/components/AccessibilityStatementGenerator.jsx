import { useEffect, useRef, useState } from 'react'
import '../assets/css/technical-seo-geo-checker.css'
import '../assets/css/accessibility-statement-generator.css'

const initialForm = {
  legalName: 'Acme Innovations Inc.',
  tradeName: 'Acme',
  domain: 'https://www.example.com',
  email: 'accessibility@example.com',
  statementUrl: 'https://www.example.com/accessibility',
  phone: '+1 (555) 123-4567',
  effectiveDate: '2026-10-31',
  coordinator: '',
  jurisdictions: ['United States', 'Canada'],
  standard: 'WCAG 2.2',
  level: 'Level AA',
  conformance: 'Partially conformant',
  evaluation: 'Self-evaluation',
  evaluator: '',
  contrast: ['All colour contrasts meet the AA compliance target'],
  contrastNotes: 'Example: Body text is 16px+, we maintain a 4.5:1 (or 7:1) contrast except for logos/branding.',
  navigation: ['Keyboard navigation', 'ARIA attributes', 'Skip links'],
  content: ['Alt text for images', 'Captions for videos'],
  forms: ['Programmatic labels', 'Clear error messages & validation'],
  widget: '',
  assistive: ['NVDA', 'VoiceOver', 'Chrome', 'Safari'],
  browsers: ['Chrome', 'Safari', 'Firefox', 'Edge'],
  thirdParty: ['Video content', 'Maps'],
  thirdPartyNotes: 'Example: Some historical PDF reports may not be fully accessible. Please contact us to request an accessible version.',
}

const featureChoices = {
  jurisdictions: ['United States', 'Canada', 'EU / EAA'],
  contrast: ['All colour contrasts meet the AA compliance target', 'Text sizes are 16px+ or bold'],
  navigation: ['Keyboard navigation', 'ARIA attributes', 'Skip links', 'Focus indicators'],
  content: ['Alt text for images', 'Captions for videos', 'Transcripts for audio/video'],
  forms: ['Programmatic labels', 'Error messages & validation', 'Clear instructions'],
  assistive: ['NVDA', 'VoiceOver', 'JAWS', 'Other'],
  browsers: ['Chrome', 'Safari', 'Firefox', 'Edge'],
  thirdParty: ['Video content', 'Maps', 'Payment providers', 'User-generated content'],
}

function ChoiceList({ label, options, selected, onChange, inline = false }) {
  function toggle(option) {
    onChange(
      selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option],
    )
  }

  return (
    <fieldset className={`statement-choice${inline ? ' statement-choice--inline' : ''}`}>
      <legend>{label}</legend>
      <div className="statement-choice__options">
        {options.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggle(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function TextField({ label, value, onChange, type = 'text', placeholder, required = false }) {
  return (
    <label className="statement-field">
      <span>{label}{required && <span aria-hidden="true"> *</span>}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="statement-field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  )
}

function FormCard({ title, children, className = '' }) {
  return (
    <section className={`statement-form-card ${className}`}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function dateLabel(date) {
  if (!date) return 'Not specified'
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US')
}

function AccessibilityStatementGenerator() {
  const [form, setForm] = useState(initialForm)
  const [copyStatus, setCopyStatus] = useState('')
  const previewRef = useRef(null)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Accessibility Statement Generator | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  function updateField(key, value) {
    setForm((current) => ({ ...current, [key]: value }))
    setCopyStatus('')
  }

  function resetForm() {
    setForm(initialForm)
    setCopyStatus('')
  }

  async function copyStatement() {
    const statement = previewRef.current?.innerText
    if (!statement) {
      setCopyStatus('The statement preview is not available to copy.')
      return
    }
    if (!navigator.clipboard?.writeText) {
      setCopyStatus('Clipboard access is unavailable. Select and copy the statement preview manually.')
      return
    }

    try {
      await navigator.clipboard.writeText(statement)
      setCopyStatus('Accessibility statement copied to clipboard.')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        setCopyStatus('Clipboard permission was denied. Select and copy the statement preview manually.')
        return
      }
      throw error
    }
  }

  const businessName = form.legalName || '[Business name]'
  const date = dateLabel(form.effectiveDate)

  return (
    <main className="technical-checker statement-checker">
      <section className="checker-hero statement-hero" aria-labelledby="statement-title">
        <p className="checker-eyebrow">Free Accessibility Statement Generator</p>
        <h1 id="statement-title">
          <span>Generate an Accessibility</span>
          <span>Statement for Your Website</span>
        </h1>
        <p className="statement-hero__intro">
          Fill out your details below and get an instant accessibility statement ready to
          <br className="checker-desktop-break" /> copy/paste on your website. Completely free and highly customizable.
        </p>
      </section>

      <div className="statement-builder">
        <div className="statement-form">
          <FormCard title="Your Site Details" className="statement-details">
            <TextField label="Legal business name" value={form.legalName} required onChange={(value) => updateField('legalName', value)} />
            <TextField label="Trade name (optional)" value={form.tradeName} onChange={(value) => updateField('tradeName', value)} />
            <TextField label="Website domain" type="url" value={form.domain} required onChange={(value) => updateField('domain', value)} />
            <TextField label="Accessibility contact email" type="email" value={form.email} required onChange={(value) => updateField('email', value)} />
            <TextField label="Accessibility page link (optional)" type="url" value={form.statementUrl} onChange={(value) => updateField('statementUrl', value)} />
            <TextField label="Phone (optional)" type="tel" value={form.phone} onChange={(value) => updateField('phone', value)} />
            <TextField label="Effective date" type="date" value={form.effectiveDate} required onChange={(value) => updateField('effectiveDate', value)} />
            <TextField label="Accessibility coordinator (optional)" placeholder="Name / Title" value={form.coordinator} onChange={(value) => updateField('coordinator', value)} />
          </FormCard>

          <FormCard title="Laws & Standards" className="statement-standards">
            <ChoiceList label="Regions / Jurisdictions" options={featureChoices.jurisdictions} selected={form.jurisdictions} onChange={(value) => updateField('jurisdictions', value)} inline />
            <SelectField label="Compliance target" value={form.standard} onChange={(value) => updateField('standard', value)} options={['WCAG 2.2', 'WCAG 2.1', 'WCAG 2.0']} />
            <SelectField label="Target level" value={form.level} onChange={(value) => updateField('level', value)} options={['Level A', 'Level AA', 'Level AAA']} />
            <SelectField label="Conformance status" value={form.conformance} onChange={(value) => updateField('conformance', value)} options={['Fully conformant', 'Partially conformant', 'Not conformant']} />
            <SelectField label="Evaluation method" value={form.evaluation} onChange={(value) => updateField('evaluation', value)} options={['Self-evaluation', 'External audit', 'Combined evaluation']} />
            <TextField label="Auditor / vendor name (optional)" value={form.evaluator} placeholder="Auditor / vendor name" onChange={(value) => updateField('evaluator', value)} />
          </FormCard>

          <FormCard title="Colour Contrast & Font Sizing" className="statement-contrast">
            <ChoiceList label="Colour contrast" options={featureChoices.contrast} selected={form.contrast} onChange={(value) => updateField('contrast', value)} />
            <label className="statement-field statement-field--textarea">
              <span>Notes (optional)</span>
              <textarea value={form.contrastNotes} onChange={(event) => updateField('contrastNotes', event.target.value)} />
            </label>
          </FormCard>

          <FormCard title="Site Accessibility Features" className="statement-features">
            <ChoiceList label="Structure & navigation" options={featureChoices.navigation} selected={form.navigation} onChange={(value) => updateField('navigation', value)} />
            <ChoiceList label="Content & media" options={featureChoices.content} selected={form.content} onChange={(value) => updateField('content', value)} />
            <ChoiceList label="Forms & feedback" options={featureChoices.forms} selected={form.forms} onChange={(value) => updateField('forms', value)} />
            <label className="statement-field statement-field--widget">
              <span>Accessibility widget (optional)</span>
              <input value={form.widget} placeholder="e.g. Specify software" onChange={(event) => updateField('widget', event.target.value)} />
            </label>
          </FormCard>

          <FormCard title="Testing & Compatibility" className="statement-testing">
            <ChoiceList label="Assistive technologies tested" options={featureChoices.assistive} selected={form.assistive} onChange={(value) => updateField('assistive', value)} />
            <ChoiceList label="Browsers tested" options={featureChoices.browsers} selected={form.browsers} onChange={(value) => updateField('browsers', value)} />
          </FormCard>

          <FormCard title="Third-Party Content & Known Limitations" className="statement-limitations">
            <ChoiceList label="Third-party content on the site" options={featureChoices.thirdParty} selected={form.thirdParty} onChange={(value) => updateField('thirdParty', value)} />
            <label className="statement-field statement-field--textarea">
              <span>Known limitations & alternatives (optional)</span>
              <textarea value={form.thirdPartyNotes} onChange={(event) => updateField('thirdPartyNotes', event.target.value)} />
            </label>
          </FormCard>

          <div className="statement-actions">
            <button type="button" onClick={copyStatement}>Copy Statement</button>
            <button type="button" className="statement-actions__reset" onClick={resetForm}>Reset</button>
            {copyStatus && <span role="status">{copyStatus}</span>}
          </div>
        </div>

        <section className="statement-preview-card" aria-labelledby="statement-preview-title">
          <h2>Live Preview</h2>
          <article className="statement-preview" ref={previewRef}>
            <h3 id="statement-preview-title">Accessibility Statement</h3>
            <p><strong>Effective:</strong> {date}</p>
            <p>
              {form.tradeName || businessName} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards on our website.
            </p>
            <p>
              This statement was created with the help of Azuro Digital’s Accessibility Statement Generator.
            </p>
            <h4>Measures to Support Accessibility</h4>
            <ul>
              <li>Ensuring the site is fully navigable by keyboard</li>
              <li>Providing all digital interfaces with clear labels</li>
              <li>Supporting zoom up to 200% without loss of content or functionality</li>
              {form.contrast.includes('All colour contrasts meet the AA compliance target') && <li>Using appropriate text and background colour contrast</li>}
              <li>Offering clear error identification and suggestions on forms</li>
              <li>{form.evaluation} evaluation against {form.standard} {form.level} criteria</li>
            </ul>
            <h4>Compliance Status</h4>
            <p>
              The website is {form.conformance.toLowerCase()} with {form.standard} {form.level}. This statement reflects that some parts of the content may not yet be accessible.
            </p>
            <h4>Technical Specifications</h4>
            <p>
              This website relies on HTML, WAI-ARIA, CSS, and JavaScript to ensure accessibility across devices and browsers.
              {form.assistive.length > 0 && <> Assistive technologies tested include {form.assistive.join(', ')}.</>}
              {form.browsers.length > 0 && <> Browsers tested include {form.browsers.join(', ')}.</>}
            </p>
            {(form.thirdParty.length > 0 || form.thirdPartyNotes) && (
              <>
                <h4>Third-Party Content and Limitations</h4>
                {form.thirdParty.length > 0 && <p>Some content is provided by third parties, including {form.thirdParty.join(', ')}.</p>}
                {form.thirdPartyNotes && <p>{form.thirdPartyNotes}</p>}
              </>
            )}
            <h4>Feedback and Contact</h4>
            <p>
              We welcome your feedback on the accessibility of {form.domain || 'our website'}. Please let us know if you encounter accessibility barriers:
            </p>
            <ul>
              {form.email && <li>Email: {form.email}</li>}
              {form.phone && <li>Phone: {form.phone}</li>}
              {form.statementUrl && <li>Accessibility page: {form.statementUrl}</li>}
              {form.coordinator && <li>Accessibility coordinator: {form.coordinator}</li>}
            </ul>
            <h4>Preparation of This Statement</h4>
            <p>
              This statement was prepared using a {form.evaluation.toLowerCase()} based on the {form.standard} {form.level} criteria.
              {form.evaluator && <> Evaluation completed by {form.evaluator}.</>}
            </p>
            <h4>Ongoing Improvements</h4>
            <p>
              We are committed to continuous improvement. As we add new pages and features, we review them for accessibility and prioritize fixes based on impact and feasibility.
            </p>
            <p><strong>Updated:</strong> {date}</p>
          </article>
        </section>

        <div className="statement-actions statement-actions--bottom">
          <button type="button" onClick={copyStatement}>Copy Statement</button>
          <button type="button" className="statement-actions__reset" onClick={resetForm}>Reset</button>
        </div>
        <p className="statement-disclaimer">
          <strong>Legal Disclaimer:</strong> This accessibility statement generator is only intended for websites (not apps, PDFs or anything else). Azuro Digital Inc. cannot guarantee that this accessibility statement generator does not contain errors and we cannot be held legally responsible for any mistakes. Use this accessibility statement generator at your own discretion and review/edit the output to ensure that it’s accurate and sufficient for your specific website. Having a lawyer review your accessibility statement is always the safest option. Please note that accessibility laws are constantly changing, and the output of this accessibility statement generator is static and does not automatically update as laws change. However, we aim to update it regularly.
        </p>
      </div>

      <article className="checker-content statement-content">
        <section className="checker-copy-group">
          <h2>Why Your Website Needs a Professional Accessibility Statement</h2>
          <p>Website accessibility isn’t just a nice-to-have feature — it’s a legal requirement and moral imperative. Our <strong>Free Accessibility Statement Generator</strong> helps businesses create comprehensive accessibility statements that demonstrate their commitment to inclusive web design while ensuring compliance with major accessibility standards.</p>
          <p>As an accessibility-focused web design agency, our team here at Azuro Digital is firmly committed to making each and every one of our client websites accessible and compliant with laws like ADA and AODA, following the WCAG 2.2 AA guidelines.</p>
          <p>Web accessibility compliance is a particularly important requirement for any healthcare website and nonprofit web design clients, but we ensure that all of our websites are accessible — regardless of the industry.</p>
        </section>
        <section className="checker-copy-group">
          <h2>Why Your Website Needs a Professional Accessibility Statement</h2>
          <p>An accessibility statement is a public declaration that outlines your website’s accessibility features, known limitations, and your organization’s ongoing commitment to digital inclusion. This transparent communication tool helps users with disabilities understand what accessibility features are available and how to request assistance when needed.</p>
        </section>
        <section className="checker-copy-group">
          <h2>Legal Compliance Made Simple</h2>
          <h3>ADA Compliance Requirements</h3>
          <p>The Americans with Disabilities Act (ADA) doesn’t explicitly mention websites, but federal courts have increasingly applied ADA principles to digital spaces. While specific web accessibility requirements aren’t detailed in the original ADA legislation, businesses are expected to ensure their digital properties are accessible to users with disabilities. An accessibility statement demonstrates good faith efforts toward ADA compliance and can serve as important documentation in legal proceedings.</p>
          <h3>AODA Standards in Canada</h3>
          <p>For Canadian businesses, the Accessibility for Ontarians with Disabilities Act (AODA) sets clear requirements for web accessibility. Organizations must comply with AODA standards, and maintaining a current accessibility statement is part of demonstrating compliance.</p>
        </section>
        <section className="checker-copy-group">
          <h2>WCAG 2.2 AA: The Gold Standard</h2>
          <p>The Web Content Accessibility Guidelines (WCAG) 2.2 AA represent the current international standard for web accessibility. These guidelines provide specific, testable criteria that ensure websites are perceivable, operable, understandable, and robust for all users, including those using assistive technologies.</p>
          <ul className="checker-list">
            <li><strong>Visual impairments:</strong> Proper colour contrast, scalable text, and screen reader compatibility</li>
            <li><strong>Motor disabilities:</strong> Keyboard navigation support and sufficient click target sizes</li>
            <li><strong>Cognitive disabilities:</strong> Clear language, consistent layouts, and logical site navigation</li>
            <li><strong>Hearing impairments:</strong> Captions for audio content and visual alternatives for sound-based information</li>
          </ul>
        </section>
        <section className="checker-copy-group">
          <h2>Benefits of Using Our Free Accessibility Statement Generator</h2>
          <h3>Professional, Legally Sound Language</h3>
          <p>Creating an accessibility statement from scratch can be challenging, especially ensuring it includes all necessary legal protections and compliance statements. Our generator uses professionally crafted language that addresses key legal requirements while maintaining clarity for your users.</p>
          <h3>Comprehensive Coverage</h3>
          <p>The tool ensures your accessibility statement addresses current information about your website, known limitations, contact details, and your organization’s commitment to ongoing accessibility improvements.</p>
          <h3>Time and Cost Savings</h3>
          <p>Rather than hiring expensive legal consultation or spending hours researching requirements, our Free Accessibility Statement Generator provides immediate results. Simply input your website details, select your target WCAG compliance level, and receive an immediate customized statement ready for publication.</p>
          <h3>Implementation Best Practices</h3>
          <p>Once you’ve generated your accessibility statement, prepare implementation with regularly reviewed content, accessible contact options, and visible links from your website footer or main navigation.</p>
        </section>
        <section className="checker-copy-group">
          <h2>Beyond Compliance: Building Inclusive Experiences</h2>
          <p>While legal compliance is important, true accessibility goes beyond checking boxes. An accessibility statement represents your commitment to creating inclusive digital experiences that welcome all users. By using our Free Accessibility Statement Generator, you’re taking a proactive step toward building a more accessible web.</p>
        </section>
        <section className="checker-copy-group">
          <h2>Get Started Today</h2>
          <p>Don’t let accessibility compliance overwhelm your business. Our Free Accessibility Statement Generator makes the process simple, comprehensive, and legally protective for your organization. Whether you need to address ADA requirements, AODA compliance, or WCAG 2.2 AA standards, our tool provides the foundation for demonstrating your commitment to digital accessibility.</p>
          <p>Ready to make your website more inclusive? Generate your accessibility statement now and take the first step toward comprehensive web accessibility compliance.</p>
        </section>
      </article>

      <section className="checker-more-tools statement-more-tools" aria-labelledby="statement-more-tools-title">
        <div className="checker-more-tools__heading">
          <p>Explore Further</p>
          <h2 id="statement-more-tools-title">Check Out Our Other<br />Helpful Tools</h2>
        </div>
        <a className="checker-tool-card" href="/accessible-colour-contrast-checker">
          <span className="checker-tool-card__icon" aria-hidden="true">◎</span>
          <strong>WCAG Colour Contrast Checker</strong>
          <span>Learn More <span aria-hidden="true">→</span></span>
        </a>
        <a className="checker-tool-card" href="/privacy-policy-generator">
          <span className="checker-tool-card__icon" aria-hidden="true">♧</span>
          <strong>Privacy Policy Generator</strong>
          <span>Learn More <span aria-hidden="true">→</span></span>
        </a>
      </section>
    </main>
  )
}

export default AccessibilityStatementGenerator
