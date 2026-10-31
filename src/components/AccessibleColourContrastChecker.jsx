import { useEffect, useMemo, useState } from 'react'
import '../assets/css/technical-seo-geo-checker.css'
import '../assets/css/accessible-colour-contrast-checker.css'

const contentSections = [
  {
    title: 'Ensure WCAG 2.2 AA Compliance with Our Accessible Colour Contrast Checker',
    paragraphs: [
      <>Colour accessibility can make or break your website’s usability for millions worldwide. Our <strong>Free Colour Contrast Checker for Accessibility</strong> provides instant, accurate testing to ensure your colour combinations meet <strong>WCAG 2.2 AA</strong> standards, helping you create truly inclusive digital experiences while avoiding costly accessibility violations.</>,
      <>As an <strong>accessibility-driven web design company</strong>, our team here at Azuro Digital is adamant about making each of our client websites fully accessible with proper colour contrast ratios.</>,
    ],
  },
  {
    title: 'Understanding Colour Contrast in Web Accessibility',
    paragraphs: [
      'Colour contrast refers to the difference in luminance between foreground and background colours. Proper contrast ensures that text and interactive elements are readable for users with various visual abilities, including those with colour blindness, low vision, or age-related vision changes. Poor contrast doesn’t just affect users with disabilities — it impacts everyone viewing in bright sunlight, on older monitors, or with reduced screen brightness.',
    ],
  },
  {
    title: 'WCAG 2.2 AA: The Industry Standard for Colour Accessibility',
    paragraphs: [
      <>The <strong>Web Content Accessibility Guidelines (WCAG) 2.2 AA</strong> establish specific, measurable requirements for colour contrast ratios. These internationally recognized standards ensure your website remains accessible to the broadest possible audience while meeting legal compliance requirements in jurisdictions worldwide.</>,
    ],
  },
  {
    title: 'WCAG 2.2 AA Contrast Requirements',
    bullets: [
      [<><strong>Normal Text:</strong></>, 'Must have a contrast ratio of at least 4.5:1 against its background. This applies to body text, navigation links, form labels, and other standard text content.'],
      [<><strong>Large Text:</strong></>, 'Text that is 18pt+ regular weight or 14pt+ bold requires a minimum contrast ratio of 3:1. This reduced requirement acknowledges that larger text is inherently more readable.'],
      [<><strong>Non-Text Elements:</strong></>, 'Interactive components like buttons, form inputs, and focus indicators must maintain a 3:1 contrast ratio against adjacent colours to ensure they remain distinguishable.'],
      [<><strong>Graphical Objects:</strong></>, 'Icons, charts, and other meaningful graphics require 3:1 contrast against their backgrounds to ensure information isn’t lost to users with visual impairments.'],
    ],
  },
  {
    title: 'Why Our Accessible Colour Contrast Checker Matters',
    subsections: [
      ['Real-Time WCAG 2.2 AA Validation', 'Our tool provides instant feedback on whether your colour combinations meet WCAG 2.2 AA requirements. Simply input your foreground and background colours, and receive immediate pass/fail results along with the exact contrast ratio calculation.'],
      ['Comprehensive Testing Capabilities', 'Test any colour combination using our professional-grade contrast ratio calculator.'],
    ],
    bullets: [
      ['Hex codes', '(#FF0000)'],
      ['RGB values', '(255, 0, 0)'],
      ['HSL notation', '(0, 100%, 50%)'],
      ['Visual colour picker', 'for intuitive selection'],
    ],
    note: 'While WCAG 2.2 AA provides important foundational guidelines, WCAG 2.2 AAA represents the practical standard most organizations should target for comprehensive accessibility today.',
  },
  {
    title: 'Legal and Business Implications of Colour Accessibility',
    subsections: [
      ['ADA Compliance Protection', 'Poor colour contrast is one of the most common accessibility violations cited in ADA lawsuits. Using our Accessible Colour Contrast Checker helps demonstrate good faith efforts toward accessibility compliance and can serve as documentation of your commitment to inclusive design.'],
      ['International Accessibility Standards', 'Many countries have adopted WCAG 2.2 AA as their official accessibility standard, including Canada’s AODA requirements, European Union accessibility directives, and various national accessibility laws. Proper colour contrast testing ensures global compliance.'],
      ['SEO and User Experience Benefits', 'Search engines favour accessible websites, and good contrast ratios improve readability for all users, potentially reducing bounce rates and increasing engagement. What’s good for accessibility is often good for SEO and overall user experience.'],
    ],
  },
  {
    title: 'Common Colour Contrast Mistakes to Avoid',
    subsections: [
      ['Light Grey Text', 'One of the most frequent violations involves using light grey text (#999999 or similar) on white backgrounds. While aesthetically pleasing to some designers, this combination typically fails WCAG 2.2 AA requirements and creates significant readability barriers.'],
      ['Insufficient Link Contrast', 'Links must be distinguishable from surrounding text through more than colour alone. Ensure sufficient contrast exists between link colour and the surrounding text colour, but also make the link text underlined or bolder than the surrounding text for additional clarity.'],
      ['Form Input Accessibility', 'Placeholder text, form labels, and input borders often use colours that don’t meet contrast requirements. Our tool helps identify these issues before they impact user experience.'],
      ['Button and Interactive Element Visibility', 'Call-to-action buttons, navigation elements, and form controls need adequate contrast to remain usable. Poor contrast can render critical site functions inaccessible to users with visual impairments.'],
    ],
  },
  {
    title: 'Best Practices for Colour Accessible Design',
    subsections: [
      ['Test Early and Often', 'Integrate colour contrast checking into your design workflow from the beginning. It’s much easier to adjust colours during the design phase than after development is complete.'],
      ['Consider Context and Environment', 'Remember that users access your website in various lighting conditions and on different devices. What looks fine on a high-end monitor in a controlled environment may be illegible on a mobile device in bright sunlight.'],
      ['Don’t Rely on Colour Alone', 'While proper contrast is crucial, ensure that important information isn’t conveyed through colour alone. Use icons, patterns, or text labels alongside colour coding to support users with colour vision deficiencies.'],
      ['Brand Colours and Accessibility', 'Many organizations worry that accessibility requirements will compromise their brand identity. Our Accessible Colour Contrast Checker helps you find the right balance, identifying which brand colours work well together and finding subtle adjustments that maintain brand integrity while meeting accessibility standards.'],
    ],
  },
  {
    title: 'Tools Integration and Workflow',
    subsections: [
      ['Design Tool Compatibility', 'Use our checker alongside popular design tools like Figma, Sketch, Adobe XD, and Photoshop. Copy colour values directly from your designs to verify contrast ratios before finalizing your colour palette.'],
      ['Development Workflow', 'Integrate contrast checking into your development process by testing colours during CSS creation and component development. This proactive approach prevents accessibility issues from reaching production.'],
      ['Quality Assurance Testing', 'Include colour contrast verification in your QA checklist. Regular testing ensures that design changes and content updates don’t introduce new accessibility barriers.'],
    ],
  },
  {
    title: 'Get Started with Accessible Colour Design',
    paragraphs: [
      <>Don’t let poor colour choices limit your website’s reach or expose your organization to legal risks. Our <strong>Accessible Colour Contrast Checker</strong> makes WCAG 2.2 AA compliance simple and immediate.</>,
      'Whether you’re designing a new website, auditing an existing site, or developing a design system, our tool provides the instant feedback you need to make informed colour decisions. Test unlimited colour combinations, understand exact contrast ratios, and ensure your digital experiences welcome all users.',
      'Ready to create more accessible, inclusive designs? Use our Accessible Colour Contrast Checker above and take the first step toward WCAG 2.2 AA-compliant colour accessibility.',
    ],
  },
]

function getLuminance(hex) {
  const channels = hex.slice(1).match(/.{2}/g).map((channel) => parseInt(channel, 16) / 255)
  const linearChannels = channels.map((channel) => (
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  ))
  return 0.2126 * linearChannels[0] + 0.7152 * linearChannels[1] + 0.0722 * linearChannels[2]
}

function ColorControl({ label, value, fallbackValue, onChange }) {
  return (
    <label className="contrast-color-control">
      <span>{label}</span>
      <span className="contrast-color-control__fields">
        <input
          className="contrast-color-control__picker"
          type="color"
          value={value}
          aria-label={`${label} colour picker`}
          onChange={(event) => onChange(event.target.value.toUpperCase())}
        />
        <input
          className="contrast-color-control__hex"
          type="text"
          value={value}
          aria-label={`${label} hex value`}
          maxLength={7}
          spellCheck="false"
          onChange={(event) => {
            const nextValue = event.target.value.toUpperCase()
            if (/^#[0-9A-F]{0,6}$/.test(nextValue)) onChange(nextValue)
          }}
          onBlur={() => {
            if (!/^#[0-9A-F]{6}$/.test(value)) onChange(fallbackValue)
          }}
        />
      </span>
    </label>
  )
}

function AccessibleColourContrastChecker() {
  const [foreground, setForeground] = useState('#FFFFFF')
  const [background, setBackground] = useState('#0072D2')

  const contrastRatio = useMemo(() => {
    if (!/^#[0-9A-F]{6}$/.test(foreground) || !/^#[0-9A-F]{6}$/.test(background)) return null
    const luminanceValues = [getLuminance(foreground), getLuminance(background)].sort((a, b) => b - a)
    return (luminanceValues[0] + 0.05) / (luminanceValues[1] + 0.05)
  }, [foreground, background])

  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Accessible Colour Contrast Checker | Azuro Digital'
    return () => {
      document.title = originalTitle
    }
  }, [])

  const normalTextPasses = contrastRatio !== null && contrastRatio >= 4.5
  const largeTextPasses = contrastRatio !== null && contrastRatio >= 3

  return (
    <main className="technical-checker contrast-checker">
      <section className="checker-hero contrast-hero" aria-labelledby="contrast-title">
        <p className="checker-eyebrow">Accessible Colour Contrast Checker</p>
        <h1 id="contrast-title">
          <span>Make Your Colours Accessible &amp;</span>
          <span>Compliant</span>
        </h1>
        <p className="contrast-intro">
          Customize the foreground and background colours below and
          <br className="checker-desktop-break" /> verify compliance with accessibility guidelines.
        </p>

        <div className="contrast-tool" aria-label="Colour contrast calculator">
          <ColorControl label="Foreground Colour:" value={foreground} fallbackValue="#FFFFFF" onChange={setForeground} />
          <ColorControl label="Background Colour:" value={background} fallbackValue="#0072D2" onChange={setBackground} />
          <p className="contrast-ratio">
            Contrast Ratio: <strong>{contrastRatio === null ? 'Enter valid hex colours' : `${contrastRatio.toFixed(2)}:1`}</strong>
          </p>
          <ul className="contrast-results" aria-live="polite">
            <li>WCAG 2.2 AA (Normal Text): <strong className={normalTextPasses ? 'is-pass' : 'is-fail'}>{normalTextPasses ? '✓ Pass' : '✕ Fail'}</strong></li>
            <li>WCAG 2.2 AA (Large Text): <strong className={largeTextPasses ? 'is-pass' : 'is-fail'}>{largeTextPasses ? '✓ Pass' : '✕ Fail'}</strong></li>
          </ul>
          <p className={`contrast-compliance${normalTextPasses ? ' is-pass' : ' is-fail'}`} role="status">
            {normalTextPasses ? '✓ WCAG 2.2 AA Compliant' : '✕ Does not meet WCAG 2.2 AA for normal text'}
          </p>
          <div className="contrast-sample" style={{ color: foreground, backgroundColor: background }}>
            Sample Text: Abc123
          </div>
        </div>
      </section>

      <article className="checker-content contrast-content">
        {contentSections.map((section) => (
          <section className="checker-copy-group" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            {section.subsections?.map(([title, description]) => (
              <section className="checker-copy-group" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </section>
            ))}
            {section.bullets && (
              <ul className="checker-list">
                {section.bullets.map(([title, description], index) => (
                  <li key={index}><strong>{title}</strong> {description}</li>
                ))}
              </ul>
            )}
            {section.note && <p><em>Note: {section.note}</em></p>}
          </section>
        ))}
      </article>

      <section className="checker-more-tools contrast-more-tools" aria-labelledby="contrast-more-tools-title">
        <div className="checker-more-tools__heading">
          <p>Explore Further</p>
          <h2 id="contrast-more-tools-title">Check Out Our Other<br />Helpful Tools</h2>
        </div>
        <a className="checker-tool-card" href="/accessibility-statement-generator">
          <span className="checker-tool-card__icon" aria-hidden="true">♧</span>
          <strong>Accessibility Statement Generator</strong>
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

export default AccessibleColourContrastChecker
