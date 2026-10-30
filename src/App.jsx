import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Portfolio from './components/Portfolio.jsx'
import Proposal from './components/Proposal.jsx'
import SeoCaseStudies from './components/SeoCaseStudies.jsx'
import Careers from './components/Careers.jsx'

function getCurrentPage() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/seo-case-studies') return 'seo-case-studies'
  if (path === '/careers') return 'careers'
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

  return (
    <>
      <Header
        onGetProposal={openProposal}
        onViewPortfolio={openPortfolio}
        onViewSeoCaseStudies={openSeoCaseStudies}
        onViewCareers={openCareers}
      />
      {showProposal
        ? <Proposal onBack={() => setShowProposal(false)} />
        : showPortfolio
          ? <Portfolio />
          : currentPage === 'seo-case-studies'
            ? <SeoCaseStudies onGetProposal={openProposal} onViewPortfolio={openPortfolio} />
            : currentPage === 'careers'
              ? <Careers onViewPortfolio={openPortfolio} />
              : <Home onViewPortfolio={openPortfolio} onViewSeoCaseStudies={openSeoCaseStudies} />}
      <Footer onViewCareers={openCareers} onGetProposal={openProposal} />
    </>
  )
}

export default App