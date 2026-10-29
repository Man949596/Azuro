import azuroLogo from '../assets/images/azuro-logo.svg'
import '../assets/css/footer.css'

const serviceLinks = [
  'Custom Website Design',
  'SEO & GEO / AI Search',
  'WordPress Development',
  'Custom Web Development',
  'Logo Design & Branding',
  'Conversion Rate Optimization',
  'Graphic Design & Animation',
  'Copywriting & Content Creation',
  'Accessibility Compliance',
  'Security & Privacy Compliance',
  'Loading Speed Optimization',
  'Full-Service Digital Marketing',
]

const industryLinks = [
  'Manufacturing Web Design',
  'Healthcare Web Design',
  'Nonprofit Web Design',
  'Real Estate Web Design',
  'Insurance Web Design',
  'SaaS Web Design',
  'Dental Web Design',
  'Legal Web Design',
  'B2B Web Design',
  'Financial Web Design',
  'Construction Web Design',
  'More Industries',
]

const companyLinks = ['About', 'Blog', 'Careers', 'Contact']
const toolLinks = [
  'Technical SEO/GEO Checker',
  'Colour Contrast Checker',
  'Accessibility Statement Generator',
  'Privacy Policy Generator',
]

function Icon({ name }) {
  const paths = {
    pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.2" /></>,
    award: <><circle cx="12" cy="9" r="6.5" /><path d="m8 14-1 7 5-2 5 2-1-7" /><path d="m10 9 1.4 1.4L14.5 7" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3.5 9h17M3.5 15h17M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
    arrow: <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  }

  return <svg className={`footer-icon footer-icon--${name}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

function FooterLinkList({ links, className = '' }) {
  return (
    <div className={`footer-link-list ${className}`}>
      {links.map((link) => (
        <a href={link === 'Contact' ? '#contact' : '#services'} key={link}>
          <Icon name="arrow" />
          <span>{link}</span>
        </a>
      ))}
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-card">
        <section className="footer-cta" id="contact" aria-labelledby="footer-cta-title">
          <h2 id="footer-cta-title">We Treat Our Clients Like Partners</h2>
          <p>Let’s find out if we’re the right fit for each other.</p>
          <a className="footer-proposal" href="mailto:hello@azurodigital.com">Get a Proposal <span aria-hidden="true">→</span></a>
        </section> 

        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-brand__logo" href="https://azurodigital.com/" aria-label="Azuro Digital home">
              <img
                src={azuroLogo}
                alt="Azuro Digital"
                width="300"
                height="93"
                loading="eager"
                decoding="async"
              />
            </a>
            <div className="footer-facts">
              <p><Icon name="pin" />Based in Ottawa, Toronto &amp; Calgary</p>
              <p><Icon name="award" />Canada’s #1 Web Design Agency</p>
              <p><Icon name="award" />Canada’s #1 Digital Marketing Agency</p>
              <p><Icon name="globe" />Serving Clients Across the Globe</p>
            </div>

            <div className="footer-brand__links">
              <div className="footer-mini-column">
                <h3>Company</h3>
                <FooterLinkList links={companyLinks} />
              </div>
              <div className="footer-mini-column">
                <h3>Tools</h3>
                <FooterLinkList links={toolLinks} />
              </div>
            </div>

            <div className="footer-reviews" aria-label="Client ratings">
              <div className="footer-review footer-review--clutch">
                <span className="footer-review__rating">RATED 4.9/5 <b>★★★★★</b></span>
                <strong>Clutch</strong>
                <small>79 REVIEWS</small>
              </div>
              <div className="footer-review footer-review--google">
                <span className="footer-google-g" aria-hidden="true">G</span>
                <span><b>4.9/5 <span>★★★★★</span></b><small>Based on 60+ Reviews</small></span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h3>Services</h3>
            <FooterLinkList links={serviceLinks} />
          </div>

          <div className="footer-column">
            <h3>Industries</h3>
            <FooterLinkList links={industryLinks} />
          </div>
        </div>

        <div className="footer-locations">
          <div><a href="#contact">Ottawa Web Design &amp; SEO</a><p>150 Elgin St #1026, Ottawa, ON K2P 1L4</p></div>
          <div><a href="#contact">Toronto Web Design &amp; SEO</a><p>10 Navy Wharf Ct #4307, Toronto, ON M5V 3V2</p></div>
          <div><a href="#contact">Calgary Web Design &amp; SEO</a><p>3616 5 Ave NW, Calgary, AB T2N 3A6</p></div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-compliance" aria-label="Accessibility and privacy certifications">
          <span className="footer-compliance__wcag"><b>WCAG 2.2</b><small>LEVEL AA</small><i>✓</i></span>
          <span className="footer-compliance__eu" aria-label="European Union">
            {Array.from({ length: 12 }, (_, index) => (
              <i key={index} style={{ '--star': index }}>★</i>
            ))}
          </span>
          <span className="footer-compliance__gdpr"><b>GDPR</b><small>COMPLIANT</small></span>
        </div>
        <nav className="footer-legal" aria-label="Legal links">
          <a href="#faq">Privacy</a>
          <a href="#faq">Site Map</a>
          <a href="#faq">Accessibility Statement</a>
        </nav>
        <div className="footer-attribution">
          <span className="footer-copyright">© 2026 Azuro Digital Inc.</span>
          <a className="footer-linkedin" href="#contact" aria-label="LinkedIn">in</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer