import { useEffect, useRef, useState } from 'react'
import '../assets/css/technical-seo-geo-checker.css'
import '../assets/css/accessibility-statement-generator.css'
import '../assets/css/privacy-policy-generator.css'

const initialForm = {
  legalName: 'Acme Innovations Inc.',
  tradeName: 'Acme',
  domain: 'https://www.example.com',
  email: 'privacy@example.com',
  policyUrl: 'https://www.example.com/privacy',
  effectiveDate: '2026-10-31',
  jurisdictions: ['Canada', 'European Union', 'United States'],
  collects: ['Contact form', 'Analytics', 'Cookies'],
  analytics: ['Google Analytics 4'],
  marketing: [],
  payments: [],
  dataUse: ['Operate and maintain our website', 'Respond to inquiries', 'Improve our services'],
  retention: 'We retain personal information only for as long as necessary for the purposes described in this policy.',
  children: 'Our services are not directed to children under 13, and we do not knowingly collect personal information from children.',
}

const options = {
  jurisdictions: ['European Union / GDPR', 'California / CCPA', 'Canada / PIPEDA', 'Other regions'],
  collects: ['Contact form', 'Account registration', 'Analytics', 'Cookies', 'Comments', 'Payment information'],
  analytics: ['Google Analytics 4', 'Google Tag Manager', 'Other analytics'],
  marketing: ['Email marketing', 'Advertising pixels', 'Remarketing'],
  payments: ['Stripe', 'PayPal', 'Other payment processor'],
  dataUse: ['Operate and maintain our website', 'Respond to inquiries', 'Improve our services', 'Send updates', 'Prevent fraud'],
}

function PolicyField({ label, value, onChange, type = 'text', placeholder, required = false }) {
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

function PolicyChoices({ label, items, selected, onChange }) {
  function toggle(item) {
    onChange(
      selected.includes(item)
        ? selected.filter((selectedItem) => selectedItem !== item)
        : [...selected, item],
    )
  }

  return (
    <fieldset className="statement-choice">
      <legend>{label}</legend>
      <div className="statement-choice__options">
        {items.map((item) => (
          <label key={item}>
            <input type="checkbox" checked={selected.includes(item)} onChange={() => toggle(item)} />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}

function PolicyTextarea({ label, value, onChange, placeholder }) {
  return (
    <label className="statement-field statement-field--textarea">
      <span>{label}</span>
      <textarea value={value} placeholder={placeholder} onChange={(event) => onChange(event.target.value)} />
    </label>
  )
}

function PolicyCard({ title, children, className = '' }) {
  return (
    <section className={`statement-form-card ${className}`}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function formatPolicyDate(value) {
  return value ? new Date(`${value}T00:00:00`).toLocaleDateString('en-US') : 'Not specified'
}

function PrivacyPolicyGenerator() {
  const [form, setForm] = useState(initialForm)
  const [copyStatus, setCopyStatus] = useState('')
  const previewRef = useRef(null)

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Privacy Policy Generator | Azuro Digital'
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

  async function copyPolicy() {
    const policy = previewRef.current?.innerText
    if (!policy) {
      setCopyStatus('The policy preview is not available to copy.')
      return
    }
    if (!navigator.clipboard?.writeText) {
      setCopyStatus('Clipboard access is unavailable. Select and copy the policy preview manually.')
      return
    }

    try {
      await navigator.clipboard.writeText(policy)
      setCopyStatus('Privacy policy copied to clipboard.')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'NotAllowedError') {
        setCopyStatus('Clipboard permission was denied. Select and copy the policy preview manually.')
        return
      }
      throw error
    }
  }

  const siteName = form.tradeName || form.legalName || '[Business name]'
  const jurisdictions = form.jurisdictions.length ? form.jurisdictions.join(', ') : 'the regions where our users are located'
  const collectedInformation = form.collects.length ? form.collects.join(', ') : 'information you choose to provide to us'

  return (
    <main className="technical-checker statement-checker privacy-checker">
      <section className="checker-hero statement-hero privacy-hero" aria-labelledby="privacy-title">
        <p className="checker-eyebrow">Free Privacy Policy Generator</p>
        <h1 id="privacy-title">
          <span>Generate a Privacy Policy For</span>
          <span>Your Website</span>
        </h1>
        <p className="statement-hero__intro">
          Fill out your details below and get an instant privacy policy ready to copy/paste
          <br className="checker-desktop-break" /> on your website. Completely free and highly customizable.
        </p>
      </section>

      <div className="statement-builder privacy-builder">
        <div className="statement-form">
          <PolicyCard title="Your Site Details" className="privacy-details">
            <PolicyField label="Legal business name" value={form.legalName} required onChange={(value) => updateField('legalName', value)} />
            <PolicyField label="Trade name (optional)" value={form.tradeName} onChange={(value) => updateField('tradeName', value)} />
            <PolicyField label="Website domain" type="url" value={form.domain} required onChange={(value) => updateField('domain', value)} />
            <PolicyField label="Privacy contact email" type="email" value={form.email} required onChange={(value) => updateField('email', value)} />
            <PolicyField label="Privacy policy page link (optional)" type="url" value={form.policyUrl} onChange={(value) => updateField('policyUrl', value)} />
            <PolicyField label="Effective date" type="date" value={form.effectiveDate} required onChange={(value) => updateField('effectiveDate', value)} />
          </PolicyCard>

          <PolicyCard title="Regions You Target" className="privacy-regions">
            <PolicyChoices label="Applicable privacy regulations" items={options.jurisdictions} selected={form.jurisdictions} onChange={(value) => updateField('jurisdictions', value)} />
          </PolicyCard>

          <PolicyCard title="Site Features" className="privacy-features">
            <PolicyChoices label="Information collected" items={options.collects} selected={form.collects} onChange={(value) => updateField('collects', value)} />
            <PolicyChoices label="Analytics" items={options.analytics} selected={form.analytics} onChange={(value) => updateField('analytics', value)} />
            <PolicyChoices label="Marketing and advertising" items={options.marketing} selected={form.marketing} onChange={(value) => updateField('marketing', value)} />
            <PolicyChoices label="Payments" items={options.payments} selected={form.payments} onChange={(value) => updateField('payments', value)} />
            <PolicyChoices label="How we use information" items={options.dataUse} selected={form.dataUse} onChange={(value) => updateField('dataUse', value)} />
            <PolicyField label="Other tools / services (optional)" value={form.analyticsOther || ''} placeholder="Specify other services" onChange={(value) => updateField('analyticsOther', value)} />
          </PolicyCard>

          <PolicyCard title="Data Retention & Children" className="privacy-retention">
            <PolicyTextarea label="Data retention (optional)" value={form.retention} onChange={(value) => updateField('retention', value)} />
            <PolicyTextarea label="Children’s privacy (optional)" value={form.children} onChange={(value) => updateField('children', value)} />
          </PolicyCard>

          <div className="statement-actions">
            <button type="button" onClick={copyPolicy}>Copy Policy</button>
            <button type="button" className="statement-actions__reset" onClick={resetForm}>Reset</button>
            {copyStatus && <span role="status">{copyStatus}</span>}
          </div>
        </div>

        <section className="statement-preview-card" aria-labelledby="privacy-preview-title">
          <h2>Live Preview</h2>
          <article className="statement-preview privacy-preview" ref={previewRef}>
            <h3 id="privacy-preview-title">Privacy Policy</h3>
            <p><strong>Effective:</strong> {formatPolicyDate(form.effectiveDate)}</p>
            <p>
              {siteName} respects your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you visit {form.domain || 'our website'}.
            </p>
            <p>
              This policy was created with the help of Azuro Digital’s Privacy Policy Generator.
            </p>
            <h4>Information We Collect</h4>
            <p>We may collect the following information when you use our website: {collectedInformation}. The information collected depends on how you interact with our services.</p>
            <ul>
              {form.collects.includes('Contact form') && <li>Contact information and any details you include in a message.</li>}
              {form.collects.includes('Account registration') && <li>Account details needed to create and maintain your account.</li>}
              {form.collects.includes('Analytics') && <li>Usage and device information, such as pages viewed, browser type, and approximate location.</li>}
              {form.collects.includes('Cookies') && <li>Cookie and similar technology data used to operate and understand the website.</li>}
              {form.collects.includes('Payment information') && <li>Transaction details; payment card information is handled by the selected payment provider.</li>}
              {form.collects.includes('Comments') && <li>Comments and other content you choose to submit.</li>}
            </ul>
            <h4>How We Use Your Information</h4>
            <p>We may use information for these purposes: {form.dataUse.length ? form.dataUse.join('; ') : 'to provide the services you request'}.</p>
            <h4>Cookies and Similar Technologies</h4>
            <p>We may use cookies and similar technologies to remember preferences, support essential website functions, and understand how visitors use the site. You can manage cookies through your browser settings.</p>
            <h4>Analytics and Advertising</h4>
            {form.analytics.length || form.marketing.length ? (
              <p>
                {form.analytics.length > 0 && <>Analytics services used may include {form.analytics.join(', ')}. </>}
                {form.marketing.length > 0 && <>Marketing technologies may include {form.marketing.join(', ')}. </>}
                These providers may process information according to their own privacy policies.
              </p>
            ) : <p>We have not selected analytics or marketing services in this generator.</p>}
            {form.analyticsOther && <p>Other tools or services: {form.analyticsOther}.</p>}
            {form.payments.length > 0 && (
              <>
                <h4>Payments</h4>
                <p>Payments may be processed by {form.payments.join(', ')}. Payment providers handle payment information under their own privacy terms.</p>
              </>
            )}
            <h4>Sharing and Service Providers</h4>
            <p>We may share information with service providers that help us operate the website, provide requested services, protect our rights, or comply with legal obligations. Update this section to describe any other sharing, sale, or targeted advertising practices that apply to your business.</p>
            <h4>International Data Transfers</h4>
            <p>Depending on your settings and service providers, information may be processed in countries other than where you live. Where required, appropriate safeguards may apply to these transfers.</p>
            <h4>Data Retention</h4>
            <p>{form.retention || 'We retain personal information only for as long as needed for the purposes described in this policy.'}</p>
            <h4>Your Privacy Rights</h4>
            <p>Depending on your location, you may have rights to request access to, correction of, deletion of, or a copy of your personal information. To make a request, contact us using the details below.</p>
            <p>This policy is intended to address privacy requirements that may apply in {jurisdictions}.</p>
            <h4>Children’s Privacy</h4>
            <p>{form.children || 'Our website is not intended for children, and we do not knowingly collect personal information from children.'}</p>
            <h4>Changes to This Policy</h4>
            <p>We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the effective date above.</p>
            <h4>How to Contact Us</h4>
            <p>If you have questions or requests about this Privacy Policy or our privacy practices, contact us at {form.email || '[privacy contact email]'}.</p>
            {form.policyUrl && <p>Privacy policy page: {form.policyUrl}</p>}
          </article>
        </section>

        <div className="statement-actions statement-actions--bottom">
          <button type="button" onClick={copyPolicy}>Copy Policy</button>
          <button type="button" className="statement-actions__reset" onClick={resetForm}>Reset</button>
        </div>
        <p className="statement-disclaimer">
          <strong>Legal Disclaimer:</strong> This privacy policy generator provides a general template, not legal advice. Privacy requirements vary by location and business practices. Review the generated policy carefully, ensure it accurately describes your website and data handling (including any sale, sharing, or targeted advertising of personal information), and consult a qualified legal professional before publishing. Azuro Digital cannot guarantee that this template meets every legal requirement or applies to your specific situation.
        </p>
      </div>

      <article className="checker-content statement-content privacy-content">
        <section className="checker-copy-group">
          <h2>Create a Professional Privacy Policy with Our Free Privacy Policy Generator</h2>
          <p>In an era where data privacy regulations are becoming increasingly complex and penalties more severe, having a comprehensive privacy policy isn’t optional — it’s essential for businesses worldwide. Our <strong>Free Privacy Policy Generator</strong> empowers businesses to create legally compliant privacy policies that protect both their users and their organization while meeting the requirements of major privacy regulations worldwide.</p>
          <p>As a privacy-focused web design agency, our team here at Azuro Digital is committed to developing comprehensive digital solutions for all our clients, following the best practices for privacy and data protection.</p>
        </section>
        <section className="checker-copy-group">
          <h2>The Critical Importance of Privacy Policies</h2>
          <p>A privacy policy serves as the cornerstone of your organization’s data protection strategy. It is a legally binding document that explains how you collect, use, and protect personal information from your website visitors, customers, and users. Beyond legal compliance, a well-crafted privacy policy builds trust and assures users that you will handle their data responsibly.</p>
        </section>
        <section className="checker-copy-group">
          <h2>Navigating Complex Privacy Regulations</h2>
          <h3>GDPR: The European Gold Standard</h3>
          <p>The General Data Protection Regulation (GDPR) revolutionized global privacy standards when it took effect in 2018. This comprehensive European Union regulation applies to any organization that processes personal data of EU residents, regardless of where the business is located. GDPR compliance requires detailed privacy notices that explain:</p>
          <ul className="checker-list">
            <li>The legal basis for data processing</li>
            <li>Types of personal data collected</li>
            <li>How data is used and shared</li>
            <li>Individual rights, including access, rectification, and deletion</li>
            <li>Data retention periods and data protection contacts</li>
          </ul>
          <p>Non-compliance with GDPR can result in fines up to €20 million or 4% of annual global revenue, whichever is higher. Our generator helps businesses create GDPR-compliant language to protect privacy interests from potential penalties.</p>
          <h3>PIPEDA: Canadian Privacy Protection</h3>
          <p>The Personal Information Protection and Electronic Documents Act (PIPEDA) governs how private-sector organizations in Canada collect, use, and disclose personal information during commercial activities. PIPEDA requires organizations to clearly explain what personal information is collected and how it is handled.</p>
          <ul className="checker-list">
            <li>Clear identification of the purposes for data collection</li>
            <li>Obtaining consent before collecting or using personal information</li>
            <li>Limiting collection to what is necessary</li>
            <li>Providing individuals with access to their personal information</li>
            <li>Responding to privacy complaints and inquiries</li>
          </ul>
          <h3>CCPA: California’s Privacy Leadership</h3>
          <p>The California Consumer Privacy Act (CCPA) grants California residents significant rights regarding their personal information and requires businesses to be transparent about their data practices.</p>
        </section>
        <section className="checker-copy-group">
          <h2>Benefits of Our Free Privacy Policy Generator</h2>
          <h3>Comprehensive Legal Coverage</h3>
          <p>Creating a privacy policy that addresses multiple regulations can be time-consuming. Our free privacy policy generator streamlines the process by asking relevant questions and producing a structured starting point you can review and customize.</p>
          <h3>Cost-Effective Compliance</h3>
          <p>Legal consultation for privacy policy creation can cost thousands of dollars. Our generator provides an immediate draft to help you organize your privacy disclosures. Review the result with a qualified legal professional to ensure it meets your needs.</p>
          <h3>Industry-Specific Customization</h3>
          <p>Different businesses require different privacy approaches. Whether you’re running an eCommerce website or an informational website, our generator lets you specify key data practices to create a more relevant draft.</p>
        </section>
        <section className="checker-copy-group">
          <h2>Essential Elements of Effective Privacy Policies</h2>
          <h3>Clear, Accessible Language</h3>
          <p>Privacy policies should be understandable to a wide audience. Use clear headings, short paragraphs, and plain language while explaining how personal information is handled.</p>
          <h3>Comprehensive Data Mapping</h3>
          <p>Effective privacy policies require thorough understanding of your data practices. Our tool guides you through identifying key types of personal information collected, how it is used, and with whom it is shared.</p>
          <h3>Contact and Complaint Mechanisms</h3>
          <p>Regulations like GDPR, PIPEDA, and CCPA require clear channels for privacy inquiries and complaints. Our generator ensures your policy includes appropriate contact information and response procedures.</p>
        </section>
        <section className="checker-copy-group">
          <h2>Implementation Best Practices</h2>
          <h3>Prominent Placement and Easy Access</h3>
          <p>Your privacy policy should be easily accessible through clear links in your website footer, checkout process, and data collection forms.</p>
          <h3>Regular Reviews and Updates</h3>
          <p>Business practices evolve, and privacy regulations change. Review your privacy policy regularly to ensure it accurately reflects your information handling practices.</p>
          <h3>Internal Training and Compliance</h3>
          <p>Ensure your team understands the commitments made in your privacy policy. Regular training helps prevent inadvertent violations and demonstrates good faith compliance efforts.</p>
        </section>
        <section className="checker-copy-group">
          <h2>Beyond Compliance: Building User Trust</h2>
          <p>While regulatory compliance is crucial, privacy policies serve a broader purpose in building customer trust. Transparent data practices differentiate your business in a privacy-conscious marketplace and can become a competitive advantage.</p>
        </section>
        <section className="checker-copy-group">
          <h2>Get Started with Professional Privacy Protection</h2>
          <p>Don’t leave your business vulnerable to privacy regulations. Use our Free Privacy Policy Generator to create a comprehensive, legally compliant privacy policy draft. With your site details and data practices clearly described, you’ll have a useful starting point for review and customization.</p>
          <p>Ready to protect your business and build user trust? Generate your privacy policy now and take control of your privacy compliance strategy.</p>
        </section>
      </article>

      <section className="checker-more-tools statement-more-tools" aria-labelledby="privacy-more-tools-title">
        <div className="checker-more-tools__heading">
          <p>Explore Further</p>
          <h2 id="privacy-more-tools-title">Check Out Our Other<br />Helpful Tools</h2>
        </div>
        <a className="checker-tool-card" href="/accessible-colour-contrast-checker">
          <span className="checker-tool-card__icon" aria-hidden="true">◎</span>
          <strong>WCAG Colour Contrast Checker</strong>
          <span>Learn More <span aria-hidden="true">→</span></span>
        </a>
        <a className="checker-tool-card" href="/accessibility-statement-generator">
          <span className="checker-tool-card__icon" aria-hidden="true">♧</span>
          <strong>Accessibility Statement Generator</strong>
          <span>Learn More <span aria-hidden="true">→</span></span>
        </a>
      </section>
    </main>
  )
}

export default PrivacyPolicyGenerator
