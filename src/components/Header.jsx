import { useEffect, useRef, useState } from 'react'
import '../assets/css/header.css'

const icons = {
  'Web Design Portfolio': ['M3 4h18v13H3z', 'M8 21h8m-4-4v4'],
  'SEO Case Studies': ['M4 20h17', 'M6 16v-4h3v4m3 0V9h3v7m3-7V5h3v11', 'm5 9 5-4 4 1 5-4'],
  'About Us': ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75'],
  Careers: ['M3 7h18v13H3z', 'M8 7V4h8v3', 'M3 12h18m-11 0v2h4v-2'],
  Insights: ['M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z', 'M19 15a2 2 0 0 0 1-2l2-1-2-2a2 2 0 0 0-1-3l-1-2-3 1a2 2 0 0 0-3-1L10 3 8 5a2 2 0 0 0-3 2L3 9l1 2a2 2 0 0 0 0 3l2 2-1 2 3 1a2 2 0 0 0 3 1l2 1 2-2a2 2 0 0 0 3-1l2-1Z'],
  Offices: ['M4 21V5l10-2v18', 'M14 9h6v12', 'M7 8h2m-2 4h2m-2 4h2m8-3h1m-1 4h1', 'M2 21h20'],
  'Custom Website Design': ['M3 17.5V21h3.5L19 8.5 15.5 5 3 17.5Z', 'm13.5 7 3.5 3.5', 'M19 3l.7 1.3L21 5l-1.3.7L19 7l-.7-1.3L17 5l1.3-.7L19 3Z'],
  'WordPress Development': ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z', 'm5 6 5 13m4-13 3 8 2-6m-9-1 2 7 3-8'],
  'Logo Design & Branding': ['M4 4h16v16H4z', 'M8 16l8-8m-7 0h7v7', 'M2 2h3m14 0h3m-20 20h3m14 0h3'],
  'Copywriting & Content Creation': ['m4 16 9-9 4 4-9 9H4v-4Z', 'm11 9 4 4m2-5 2-2 3 3-2 2', 'M4 21h16'],
  'Accessibility Compliance': ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M7 7h10M12 7v4m0 0-4 9m4-9 4 9m-8-5h8'],
  'Loading Speed Optimization': ['m13 2-9 12h7l-1 8 10-13h-7l1-7Z', 'M20 3v3m-1.5-1.5h3'],
  'SEO & GEO / AI Search': ['M14 4a5 5 0 0 0-7 7l2 2m1 1a5 5 0 0 0 7-7l-2-2', 'M8 16l8-8', 'M4 20l3-3'],
  'Custom Web Development': ['m8 7-5 5 5 5m8-10 5 5-5 5m-3-12-2 14'],
  'Conversion Rate Optimization': ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M7 12h10m-5-5 5 5-5 5'],
  'Graphic Design & Animation': ['M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.5-3.3 1.7 1.7 0 0 1 1.3-2.7H18a3 3 0 0 0 3-3c0-5-4-9-9-9Z', 'M7.5 11h.01M10 7.5h.01M14 7.5h.01M17 11h.01'],
  'Security & Privacy Compliance': ['M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z', 'M9 11V9a3 3 0 0 1 6 0v2m-7 0h8v6H8z', 'M12 13v2'],
  'Full-Service Digital Marketing': ['m3 11 14-6v14L3 13v-2Z', 'M7 15l2 6h4l-3-7', 'M20 8l2-2m-2 10 2 2'],
  Manufacturing: ['M3 21V8l6 3V7l6 4V4h6v17H3Z', 'M7 15h1m4 0h1m4 0h1'],
  Healthcare: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z', 'M12 6v12M6 12h12'],
  Nonprofit: ['M3 17h3l3 2h7a3 3 0 0 0 3-3v-1h-7', 'M3 13h5l3 2', 'M13 8c-2-1.5-2-4 0-4 1 0 2 1 2 2 0-1 1-2 2-2 2 0 2 2.5 0 4l-2 2-2-2Z', 'M3 12v8h2v-8H3Z'],
  'Real Estate': ['m3 10 9-7 9 7v11h-7v-7h-4v7H3V10Z', 'M2 10l10-8 10 8'],
  Insurance: ['M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z', 'm9 12 2 2 4-4'],
  SaaS: ['M3 4h18v13H3zM7 21h10m-5-4v4', 'm9 8 3-2 3 2v4l-3 2-3-2V8Zm0 0 3 2 3-2m-3 2v4'],
  Construction: ['M3 18h18', 'M5 18v-4a7 7 0 0 1 14 0v4', 'M12 7V4m-5 5-2-2m12 2 2-2M9 14v4m3-4v4m3-4v4'],
  Financial: ['M19 8h2v4h-3', 'M5.5 10.5A7 7 0 0 1 17 7l1 1', 'M18 8v3h-3', 'M18 13.5A7 7 0 0 1 7 17l-1-1', 'M6 16v-3h3', 'M9 10h.01M14 10h.01M9 14h6'],
  Dental: ['M12 21c-2-1-3 1-4-1-1-2-4-11-2-14 1-3 4-4 6-2 2-2 5-1 6 2 2 3-1 12-2 14-1 2-2 0-4 1Z', 'M10 8c1-1 3-1 4 0'],
  Legal: ['M12 3v17m-7 0h14M5 6h14', 'm5 6-3 7h6L5 6Zm14 0-3 7h6l-3-7Z', 'M2 13a3 3 0 0 0 6 0m8 0a3 3 0 0 0 6 0'],
  B2B: ['M3 21V5h12v16M15 10h6v11M7 9h1m3 0h1M7 13h1m3 0h1M7 17h1m3 0h1m7-3h.01m0 4h.01M2 21h20'],
  'View All': ['M9 18l6-6-6-6'],
  'Technical SEO/GEO Checker': ['M14.5 14.5 21 21', 'M16 9a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z', 'M7 11V9m3 2V7m3 4V5'],
  'Accessible Colour Contrast Checker': ['M12 5C7 5 3 8 1 12c2 4 6 7 11 7s9-3 11-7c-2-4-6-7-11-7Z', 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z', 'M3 5l18 14'],
  'Accessibility Statement Generator': ['M5 2h10l4 4v8', 'M14 2v5h5M8 11h7M8 14h5M5 18h6', 'm15 19 2 2 5-5'],
  'Privacy Policy Generator': ['M5 2h10l4 4v7', 'M14 2v5h5M8 11h8M8 14h5', 'M8 19a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm4-2v2l1 1'],
  'New Project Inquiries': ['M3 12V6h4l2 2h12v10H9', 'M2 15h5l3 3h7a3 3 0 0 0 3-3v-1h-9', 'M3 12v8h2v-8H3Z'],
  'Job Applications': ['M3 7h18v13H3z', 'M8 7V4h8v3', 'M3 12h18m-11 0v2h4v-2'],
  'Partnerships & Media': ['m3 11 14-6v14L3 13v-2Z', 'M7 15l2 6h4l-3-7', 'M20 8l2-2m-2 10 2 2'],
  'Client Support': ['M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z', 'M8 12h.01M12 12h.01M16 12h.01'],
}

const menus = [
  {
    label: 'Work',
    variant: 'work',
    links: [
      { label: 'Web Design Portfolio', href: '#portfolio' },
      { label: 'SEO Case Studies', href: '/seo-case-studies' },
    ],
  },
  {
    label: 'Company',
    variant: 'company',
    links: [
      { label: 'About Us', href: 'https://azurodigital.com/about/', description: 'Learn more about Azuro Digital.' },
      { label: 'Careers', href: 'https://azurodigital.com/careers/', description: 'Explore job opportunities.' },
      { label: 'Insights', href: 'https://azurodigital.com/blog/', description: 'Check out our blog.' },
    ],
  },
  {
    label: 'Services',
    variant: 'services',
    links: [
      { label: 'Custom Website Design', href: 'https://azurodigital.com/custom-web-design/' },
      { label: 'WordPress Development', href: 'https://azurodigital.com/wordpress-development/' },
      { label: 'Logo Design & Branding', href: 'https://azurodigital.com/logo-design-and-branding/' },
      { label: 'Copywriting & Content Creation', href: 'https://azurodigital.com/copy/' },
      { label: 'Accessibility Compliance', href: 'https://azurodigital.com/accessible-web-design/' },
      { label: 'Loading Speed Optimization', href: 'https://azurodigital.com/speed-optimization/' },
      { label: 'SEO & GEO / AI Search', href: 'https://azurodigital.com/seo-agency-canada/' },
      { label: 'Custom Web Development', href: 'https://azurodigital.com/custom-web-development-canada/' },
      { label: 'Conversion Rate Optimization', href: 'https://azurodigital.com/conversion-rate-optimization/' },
      { label: 'Graphic Design & Animation', href: 'https://azurodigital.com/graphic-design-and-animation/' },
      { label: 'Security & Privacy Compliance', href: 'https://azurodigital.com/security-and-privacy/' },
      { label: 'Full-Service Digital Marketing', href: 'https://azurodigital.com/digital-marketing-canada/' },
    ],
  },
  {
    label: 'Industries',
    variant: 'industries',
    links: [
      { label: 'Manufacturing', href: 'https://azurodigital.com/manufacturing-web-design/' },
      { label: 'Healthcare', href: 'https://azurodigital.com/healthcare-web-design/' },
      { label: 'Nonprofit', href: 'https://azurodigital.com/nonprofit-web-design/' },
      { label: 'Real Estate', href: 'https://azurodigital.com/real-estate-web-design/' },
      { label: 'Insurance', href: 'https://azurodigital.com/insurance-web-design/' },
      { label: 'SaaS', href: 'https://azurodigital.com/saas-web-design/' },
      { label: 'Construction', href: 'https://azurodigital.com/construction-web-design/' },
      { label: 'Financial', href: 'https://azurodigital.com/financial-services-web-design/' },
      { label: 'Dental', href: 'https://azurodigital.com/dental-web-design/' },
      { label: 'Legal', href: 'https://azurodigital.com/law-firm-web-design/' },
      { label: 'B2B', href: 'https://azurodigital.com/b2b-web-design/' },
      { label: 'View All', href: 'https://azurodigital.com/industries/' },
    ],
  },
  {
    label: 'Tools',
    variant: 'tools',
    links: [
      { label: 'Technical SEO/GEO Checker', href: 'https://azurodigital.com/technical-seo-geo-checker/', description: 'Enhance your website’s visibility.' },
      { label: 'Accessible Colour Contrast Checker', href: 'https://azurodigital.com/colour-contrast-checker/', description: 'Check colours for compliant contrast.' },
      { label: 'Accessibility Statement Generator', href: 'https://azurodigital.com/accessibility-statement-generator/', group: 'generators' },
      { label: 'Privacy Policy Generator', href: 'https://azurodigital.com/privacy-policy-generator/', group: 'generators' },
    ],
  },
  {
    label: 'Contact',
    variant: 'contact',
    links: [
      { label: 'New Project Inquiries', href: 'https://azurodigital.com/proposal/' },
      { label: 'Job Applications', href: 'https://azurodigital.com/job-application/' },
      { label: 'Partnerships & Media', href: 'https://azurodigital.com/please-do-not-contact/' },
      { label: 'Client Support', href: 'https://azurodigital.com/contact-form/' },
    ],
  },
]

function MenuIcon({ name }) {
  return (
    <span className="menu-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        {icons[name].map((path) => <path key={path} d={path} />)}
      </svg>
    </span>
  )
}

function Header({ onGetProposal, onViewPortfolio, onViewSeoCaseStudies }) {
  const [openMenu, setOpenMenu] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const closeTimer = useRef(null)

  useEffect(() => {
    const desktopLayout = window.matchMedia('(min-width: 1051px)')
    const resetMenus = () => {
      setOpenMenu('')
      setMobileMenuOpen(false)
    }

    desktopLayout.addEventListener('change', resetMenus)
    return () => desktopLayout.removeEventListener('change', resetMenus)
  }, [])

  useEffect(() => {
    const updateScrollState = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const hasScrolledPastThreshold = scrollableHeight > 0
        && window.scrollY / scrollableHeight >= 0.2

      setIsScrolled((currentState) => (
        currentState === hasScrolledPastThreshold ? currentState : hasScrolledPastThreshold
      ))
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  function showMenu(label) {
    window.clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }

  function toggleMenu(label) {
    window.clearTimeout(closeTimer.current)
    setOpenMenu((currentMenu) => currentMenu === label ? '' : label)
  }

  function scheduleMenuClose() {
    closeTimer.current = window.setTimeout(() => setOpenMenu(''), 150)
  }

  function closeMenus() {
    window.clearTimeout(closeTimer.current)
    setOpenMenu('')
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`site-header${isScrolled ? ' is-scrolled' : ''}`}
      onKeyDown={(event) => {
        if (event.key === 'Escape') closeMenus()
      }}
    >
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Azuro Digital home">
          <img
            className="brand-logo"
            src="https://azurodigital.com/wp-content/uploads/Azuro-Website-Logo.svg"
            alt="Azuro Digital"
          />
        </a>

        <button
          className={`menu-toggle${mobileMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span className="menu-toggle-icon" aria-hidden="true" />
        </button>

        <nav
          className={`main-nav${mobileMenuOpen ? ' is-open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          <ul className="nav-list">
            {menus.map((menu) => {
              const isOpen = openMenu === menu.label
              const menuId = `menu-${menu.label.toLowerCase()}`

              return (
                <li
                  className={`nav-item${isOpen ? ' has-open-menu' : ''}`}
                  key={menu.label}
                  onMouseEnter={() => {
                    if (window.matchMedia('(hover: hover)').matches) showMenu(menu.label)
                  }}
                  onMouseLeave={() => {
                    if (window.matchMedia('(hover: hover)').matches) scheduleMenuClose()
                  }}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) scheduleMenuClose()
                  }}
                >
                  <button
                    className="nav-button"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    onClick={() => {
                      if (window.matchMedia('(max-width: 1050px)').matches) {
                        toggleMenu(menu.label)
                      } else {
                        showMenu(menu.label)
                      }
                    }}
                  >
                    {menu.label}
                    <span className="chevron" aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <ul
                      className={`submenu submenu-${menu.variant}`}
                      id={menuId}
                      onMouseEnter={() => showMenu(menu.label)}
                    >
                      {menu.links.map((item) => (
                        <li 
                          className={`submenu-item${item.group ? ` group-${item.group}` : ''}`}
                          key={item.href}
                        >
                          <a
                            className="submenu-link"
                            href={item.href}
                            onClick={(event) => {
                              closeMenus()
                              if (item.href === '#portfolio') {
                                event.preventDefault()
                                onViewPortfolio()
                              }
                              if (item.href === '/seo-case-studies') {
                                event.preventDefault()
                                onViewSeoCaseStudies()
                              }
                              if (item.href === 'https://azurodigital.com/proposal/') {
                                event.preventDefault()
                                onGetProposal()
                              }
                            }}
                          >
                            <MenuIcon name={item.label} />
                            <span className="submenu-copy">
                              <span className="submenu-title">{item.label}</span>
                              {item.description && (
                                <span className="submenu-description">{item.description}</span>
                              )}
                            </span>
                          </a>
                        </li>
                      ))}
                      {menu.variant === 'company' && (
                        <li className="company-offices">
                          <MenuIcon name="Offices" />
                          <div>
                            <span className="submenu-title">Offices</span>
                            <div className="office-links">
                              <a href="https://azurodigital.com/ottawa-web-design/">Ottawa</a>
                              <a href="https://azurodigital.com/toronto-web-design/">Toronto</a>
                              <a href="https://azurodigital.com/calgary-web-design/">Calgary</a>
                            </div>
                          </div>
                        </li>
                      )}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
          <button
            className="proposal-link"
            type="button"
            onClick={() => {
              closeMenus()
              onGetProposal()
            }}
          >
            Get a Proposal <span aria-hidden="true">→</span>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header