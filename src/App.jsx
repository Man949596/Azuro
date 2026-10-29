import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Portfolio from './components/Portfolio.jsx'
import Proposal from './components/Proposal.jsx'
import SeoCaseStudies from './components/SeoCaseStudies.jsx'

function App() {
  const [showProposal, setShowProposal] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [currentPage, setCurrentPage] = useState(
    () => window.location.pathname === '/seo-case-studies' ? 'seo-case-studies' : 'home',
  )

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(window.location.pathname === '/seo-case-studies' ? 'seo-case-studies' : 'home')
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

  return (
    <>
      <Header
        onGetProposal={openProposal}
        onViewPortfolio={openPortfolio}
        onViewSeoCaseStudies={openSeoCaseStudies}
      />
      {showProposal
        ? <Proposal onBack={() => setShowProposal(false)} />
        : showPortfolio
          ? <Portfolio />
          : currentPage === 'seo-case-studies'
            ? <SeoCaseStudies onGetProposal={openProposal} onViewPortfolio={openPortfolio} />
            : <Home onViewPortfolio={openPortfolio} onViewSeoCaseStudies={openSeoCaseStudies} />}
      <Footer onGetProposal={openProposal} />
    </>
  )
}

export default App