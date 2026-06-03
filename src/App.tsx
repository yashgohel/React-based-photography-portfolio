import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeView from './views/HomeView'
import GalleryView from './views/GalleryView'
import AboutView from './views/AboutView'
import ContactView from './views/ContactView'
import Lenis from 'lenis'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const path = window.location.pathname
    if (path.includes('gallery')) return 'Gallery'
    if (path.includes('about')) return 'About'
    if (path.includes('contact')) return 'Contact'
    return 'Home'
  })

  const lenisRef = useRef<any>(null)

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // Listen to browser history navigation (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      if (path.includes('gallery')) {
        setCurrentPage('Gallery')
      } else if (path.includes('about')) {
        setCurrentPage('About')
      } else if (path.includes('contact')) {
        setCurrentPage('Contact')
      } else {
        setCurrentPage('Home')
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Handle body scrolling lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      if (lenisRef.current) {
        lenisRef.current.stop()
      }
    } else {
      document.body.style.overflow = ''
      if (lenisRef.current) {
        lenisRef.current.start()
      }
    }
    return () => {
      document.body.style.overflow = ''
      if (lenisRef.current) {
        lenisRef.current.start()
      }
    }
  }, [mobileMenuOpen])

  const handleNavigate = (link: string) => {
    setCurrentPage(link)
    const path = link === 'Home' ? '/index.html' : `/${link.toLowerCase().replace(' ', '-')}.html`
    window.history.pushState(null, '', path)
    
    // Smoothly or immediately scroll to top on navigation
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-black selection:bg-white/20 selection:text-white scroll-smooth">
      <Header
        activeLink={currentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onNavigate={handleNavigate}
      />
      <main className="flex-grow">
        {currentPage === 'Home' && <HomeView onNavigate={handleNavigate} />}
        {currentPage === 'Gallery' && <GalleryView />}
        {currentPage === 'About' && <AboutView />}
        {currentPage === 'Contact' && <ContactView />}
      </main>
      <Footer />
    </div>
  )
}
