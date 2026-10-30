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

function getCurrentPage() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/seo-case-studies') return 'seo-case-studies'
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
            : currentPage === 'careers'
              ? <Careers onViewPortfolio={openPortfolio} />
              : currentPage === 'partnerships-media'
                ? <PartnershipsMedia />
                : currentPage === 'job-application'
                  ? <JobApplication />
                  : currentPage === 'client-support'
                    ? <ClientSupport />
                    : <Home onViewPortfolio={openPortfolio} onViewSeoCaseStudies={openSeoCaseStudies} />}
      <Footer onViewCareers={openCareers} onGetProposal={openProposal} />
    </>
  )
}

export default App