import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Portfolio from './components/Portfolio.jsx'
import Proposal from './components/Proposal.jsx'
import SeoCaseStudies from './components/SeoCaseStudies.jsx'
import Careers from './components/Careers.jsx'
import PartnershipsMedia from './components/PartnershipsMedia.jsx'
import JobApplication from './components/JobApplication.jsx'
import ClientSupport from './components/ClientSupport.jsx'
import TechnicalSeoGeoChecker from './components/TechnicalSeoGeoChecker.jsx'
import AccessibleColourContrastChecker from './components/AccessibleColourContrastChecker.jsx'
import AccessibilityStatementGenerator from './components/AccessibilityStatementGenerator.jsx'
import PrivacyPolicyGenerator from './components/PrivacyPolicyGenerator.jsx'
import Manufacturing from './components/Manufacturing.jsx'
import Construction from './components/Construction.jsx'
import Healthcare from './components/Healthcare.jsx'
import Financial from './components/Financial.jsx'
import Nonprofit from './components/Nonprofit.jsx'
import Dental from './components/Dental.jsx'
import RealEstate from './components/RealEstate.jsx'
import Legal from './components/Legal.jsx'
import Insurance from './components/Insurance.jsx'
import B2B from './components/B2B.jsx'
import SaaS from './components/SaaS.jsx'

function getCurrentPage() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/seo-case-studies') return 'seo-case-studies'
  if (path === '/technical-seo-geo-checker') return 'technical-seo-geo-checker'
  if (path === '/accessible-colour-contrast-checker') return 'accessible-colour-contrast-checker'
  if (path === '/accessibility-statement-generator') return 'accessibility-statement-generator'
  if (path === '/privacy-policy-generator') return 'privacy-policy-generator'
  if (path === '/manufacturing-web-design') return 'manufacturing'
  if (path === '/construction-web-design') return 'construction'
  if (path === '/healthcare-web-design') return 'healthcare'
  if (path === '/financial-web-design') return 'financial'
  if (path === '/nonprofit-web-design') return 'nonprofit'
  if (path === '/dental-web-design') return 'dental'
  if (path === '/real-estate-web-design') return 'real-estate'
  if (path === '/law-firm-web-design') return 'legal'
  if (path === '/insurance-web-design') return 'insurance'
  if (path === '/b2b-web-design') return 'b2b'
  if (path === '/saas-web-design') return 'saas'
  if (path === '/careers') return 'careers'
  if (path === '/please-do-not-contact') return 'partnerships-media'
  if (path === '/job-application') return 'job-application'
  if (path === '/contact-form') return 'client-support'
  return 'home'
}

function App() {
  const [showProposal, setShowProposal] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [currentPage, setCurrentPage] = useState(getCurrentPage)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getCurrentPage())
      setShowProposal(false)
      setShowPortfolio(false)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openProposal = () => {
    setShowPortfolio(false)
    setShowProposal(true)
  }

  const openPortfolio = () => {
    setShowProposal(false)
    setShowPortfolio(true)
  }

  const openSeoCaseStudies = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('seo-case-studies')
    if (window.location.pathname !== '/seo-case-studies') {
      window.history.pushState({}, '', '/seo-case-studies')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openTechnicalSeoGeoChecker = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('technical-seo-geo-checker')
    if (window.location.pathname !== '/technical-seo-geo-checker') {
      window.history.pushState({}, '', '/technical-seo-geo-checker')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openAccessibleColourContrastChecker = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('accessible-colour-contrast-checker')
    if (window.location.pathname !== '/accessible-colour-contrast-checker') {
      window.history.pushState({}, '', '/accessible-colour-contrast-checker')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openAccessibilityStatementGenerator = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('accessibility-statement-generator')
    if (window.location.pathname !== '/accessibility-statement-generator') {
      window.history.pushState({}, '', '/accessibility-statement-generator')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openPrivacyPolicyGenerator = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('privacy-policy-generator')
    if (window.location.pathname !== '/privacy-policy-generator') {
      window.history.pushState({}, '', '/privacy-policy-generator')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openManufacturing = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('manufacturing')
    if (window.location.pathname !== '/manufacturing-web-design') {
      window.history.pushState({}, '', '/manufacturing-web-design')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openConstruction = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('construction')
    if (window.location.pathname !== '/construction-web-design') {
      window.history.pushState({}, '', '/construction-web-design')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openHealthcare = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('healthcare')
    if (window.location.pathname !== '/healthcare-web-design') {
      window.history.pushState({}, '', '/healthcare-web-design')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openFinancial = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('financial')
    if (window.location.pathname !== '/financial-web-design') {
      window.history.pushState({}, '', '/financial-web-design')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openNonprofit = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('nonprofit')
    if (window.location.pathname !== '/nonprofit-web-design') {
      window.history.pushState({}, '', '/nonprofit-web-design')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openDental = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('dental')
    if (window.location.pathname !== '/dental-web-design') {
      window.history.pushState({}, '', '/dental-web-design')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openRealEstate = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('real-estate')
    if (window.location.pathname !== '/real-estate-web-design') {
      window.history.pushState({}, '', '/real-estate-web-design')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openLegal = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('legal')
    if (window.location.pathname !== '/law-firm-web-design') {
      window.history.pushState({}, '', '/law-firm-web-design')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openInsurance = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('insurance')
    if (window.location.pathname !== '/insurance-web-design') {
      window.history.pushState({}, '', '/insurance-web-design')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openB2B = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('b2b')
    if (window.location.pathname !== '/b2b-web-design') {
      window.history.pushState({}, '', '/b2b-web-design')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openSaaS = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('saas')
    if (window.location.pathname !== '/saas-web-design') {
      window.history.pushState({}, '', '/saas-web-design')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openCareers = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('careers')
    if (window.location.pathname !== '/careers') {
      window.history.pushState({}, '', '/careers')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openPartnershipsMedia = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('partnerships-media')
    if (window.location.pathname !== '/please-do-not-contact') {
      window.history.pushState({}, '', '/please-do-not-contact')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openJobApplication = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('job-application')
    if (window.location.pathname !== '/job-application') {
      window.history.pushState({}, '', '/job-application')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openClientSupport = () => {
    setShowProposal(false)
    setShowPortfolio(false)
    setCurrentPage('client-support')
    if (window.location.pathname !== '/contact-form') {
      window.history.pushState({}, '', '/contact-form')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Header
        onGetProposal={openProposal}
        onViewPortfolio={openPortfolio}
        onViewSeoCaseStudies={openSeoCaseStudies}
        onViewTechnicalSeoGeoChecker={openTechnicalSeoGeoChecker}
        onViewAccessibleColourContrastChecker={openAccessibleColourContrastChecker}
        onViewAccessibilityStatementGenerator={openAccessibilityStatementGenerator}
        onViewPrivacyPolicyGenerator={openPrivacyPolicyGenerator}
        onViewManufacturing={openManufacturing}
        onViewConstruction={openConstruction}
        onViewHealthcare={openHealthcare}
        onViewFinancial={openFinancial}
        onViewNonprofit={openNonprofit}
        onViewDental={openDental}
        onViewRealEstate={openRealEstate}
        onViewLegal={openLegal}
        onViewInsurance={openInsurance}
        onViewB2B={openB2B}
        onViewSaaS={openSaaS}
        onViewCareers={openCareers}
        onViewPartnershipsMedia={openPartnershipsMedia}
        onViewJobApplication={openJobApplication}
        onViewClientSupport={openClientSupport}
      />
      {showProposal
        ? <Proposal onBack={() => setShowProposal(false)} />
        : showPortfolio
          ? <Portfolio />
          : currentPage === 'seo-case-studies'
            ? <SeoCaseStudies onGetProposal={openProposal} onViewPortfolio={openPortfolio} />
            : currentPage === 'technical-seo-geo-checker'
              ? <TechnicalSeoGeoChecker />
              : currentPage === 'accessible-colour-contrast-checker'
                ? <AccessibleColourContrastChecker />
                : currentPage === 'accessibility-statement-generator'
                  ? <AccessibilityStatementGenerator />
                  : currentPage === 'privacy-policy-generator'
                    ? <PrivacyPolicyGenerator />
                    : currentPage === 'manufacturing'
                      ? <Manufacturing onGetProposal={openProposal} />
                      : currentPage === 'construction'
                        ? <Construction onGetProposal={openProposal} />
                        : currentPage === 'healthcare'
                          ? <Healthcare onGetProposal={openProposal} />
                          : currentPage === 'financial'
                            ? <Financial onGetProposal={openProposal} />
                            : currentPage === 'nonprofit'
                              ? <Nonprofit onGetProposal={openProposal} />
                              : currentPage === 'dental'
                                ? <Dental onGetProposal={openProposal} />
                                : currentPage === 'real-estate'
                                  ? <RealEstate onGetProposal={openProposal} />
                                  : currentPage === 'legal'
                                    ? <Legal onGetProposal={openProposal} />
                                    : currentPage === 'insurance'
                                      ? <Insurance onGetProposal={openProposal} />
                                      : currentPage === 'b2b'
                                        ? <B2B onGetProposal={openProposal} />
                                        : currentPage === 'saas'
                                          ? <SaaS onGetProposal={openProposal} />
                    : currentPage === 'careers'
                      ? <Careers onViewPortfolio={openPortfolio} />
                      : currentPage === 'partnerships-media'
                        ? <PartnershipsMedia />
                        : currentPage === 'job-application'
                          ? <JobApplication />
                          : currentPage === 'client-support'
                            ? <ClientSupport />
                            : <Home onViewPortfolio={openPortfolio} onViewSeoCaseStudies={openSeoCaseStudies} />}
      <Footer
        onViewCareers={openCareers}
        onViewTechnicalSeoGeoChecker={openTechnicalSeoGeoChecker}
        onViewAccessibleColourContrastChecker={openAccessibleColourContrastChecker}
        onViewAccessibilityStatementGenerator={openAccessibilityStatementGenerator}
        onViewPrivacyPolicyGenerator={openPrivacyPolicyGenerator}
        onViewManufacturing={openManufacturing}
        onViewConstruction={openConstruction}
        onViewHealthcare={openHealthcare}
        onViewFinancial={openFinancial}
        onViewNonprofit={openNonprofit}
        onViewDental={openDental}
        onViewRealEstate={openRealEstate}
        onViewLegal={openLegal}
        onViewInsurance={openInsurance}
        onViewB2B={openB2B}
        onViewSaaS={openSaaS}
        onGetProposal={openProposal}
      />
    </>
  )
}

export default App