import { useState, useEffect, useRef } from 'react'
import { ArrowDown, Mail } from 'lucide-react'
import Gallery from './components/Gallery'
import Lightbox from './components/Lightbox'
import { photos } from './data/photos'
import type { Photo } from './data/photos'
import Lenis from 'lenis'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const overlayRef = useRef<HTMLDivElement>(null)
  const filmTrackRef = useRef<HTMLDivElement>(null)
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    let halfWidth = 0

    const updateDimensions = () => {
      if (filmTrackRef.current) {
        halfWidth = filmTrackRef.current.scrollWidth / 2
      }
    }

    const handleScroll = () => {
      if (!filmTrackRef.current) return
      if (halfWidth === 0) {
        updateDimensions()
      }
      if (halfWidth > 0) {
        const scrollY = window.scrollY
        const speed = 0.4
        const shift = (scrollY * speed) % halfWidth
        filmTrackRef.current.style.transform = `translate3d(${-halfWidth + shift}px, 0, 0)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions()
      handleScroll()
    })

    if (filmTrackRef.current) {
      resizeObserver.observe(filmTrackRef.current)
    }

    updateDimensions()
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      resizeObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    // Initialize Lenis smooth scroll
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

    let windowHeight = window.innerHeight

    const handleResize = () => {
      windowHeight = window.innerHeight
    }

    // Handle scroll and fade background video in Hero section
    const handleScroll = () => {
      if (overlayRef.current) {
        const scrollY = window.scrollY
        // Opacity goes from 0 at the top to 1 when scrolled 75% of viewport height
        const opacity = Math.min(scrollY / (windowHeight * 0.75), 1)
        overlayRef.current.style.opacity = opacity.toString()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      lenis.destroy()
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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

  const navLinks = ['Home', 'Gallery', 'About', 'Contact']

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      if (lenisRef.current) {
        lenisRef.current.start()
        lenisRef.current.scrollTo(el, {
          duration: 2.2, // Custom slow scrolling duration
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })
      } else {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  // Lightbox navigation
  const handlePrevPhoto = () => {
    if (selectedPhoto) {
      const currentIdx = photos.findIndex((p) => p.id === selectedPhoto.id)
      const prevIdx = (currentIdx - 1 + photos.length) % photos.length
      setSelectedPhoto(photos[prevIdx])
    }
  }

  const handleNextPhoto = () => {
    if (selectedPhoto) {
      const currentIdx = photos.findIndex((p) => p.id === selectedPhoto.id)
      const nextIdx = (currentIdx + 1) % photos.length
      setSelectedPhoto(photos[nextIdx])
    }
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-black selection:bg-white/20 selection:text-white scroll-smooth">

      {/* Navigation Bar */}
      <header className="fixed top-4 left-4 right-4 md:w-4/5 z-40 rounded-[50px] bg-[#ffffff12] backdrop-blur-[30px] border border-white/5 mx-auto">
        <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <a
            href="#home"
            id="nav-logo"
            onClick={(e) => {
              e.preventDefault()
              setActiveLink('Home')
              scrollToSection('home')
            }}
            className="text-2xl md:text-3xl tracking-tight text-foreground transition-opacity hover:opacity-90 select-none cursor-pointer shrink-0"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Yash's Lens<sup className="text-xs ml-0.5">®</sup>
          </a>

          {/* Nav Actions (Desktop links / Mobile menu button) */}
          <div className="flex items-center">
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  id={`nav-${link.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setActiveLink(link)
                    scrollToSection(link.toLowerCase().replace(' ', '-'))
                  }}
                  className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${activeLink === link
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              id="mobile-menu-toggle"
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-foreground/80 hover:text-foreground transition-colors z-30 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            </button>
          </div>
        </nav>

      </header>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-background/98 backdrop-blur-xl md:hidden transition-all duration-500 flex flex-col justify-center items-center space-y-8 px-6 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Close Button inside Drawer */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-8 right-8 p-3 text-foreground/80 hover:text-foreground transition-colors cursor-pointer"
          aria-label="Close Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
        </button>

        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(' ', '-')}`}
            id={`mobile-nav-${link.toLowerCase().replace(' ', '-')}`}
            onClick={(e) => {
              e.preventDefault()
              setActiveLink(link)
              setMobileMenuOpen(false)
              scrollToSection(link.toLowerCase().replace(' ', '-'))
            }}
            className={`text-2xl transition-colors duration-300 cursor-pointer ${activeLink === link
              ? 'text-foreground font-semibold'
              : 'text-muted-foreground hover:text-foreground'
              }`}
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Main Sections Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Section 1: Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center w-full px-6 pt-32 pb-24 text-center select-none overflow-hidden"
        >
          {/* Fullscreen Video Background for Hero only */}
          <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            />
            {/* Subtle cinematic dim overlay for content readability */}
            <div className="absolute inset-0 bg-background/30 backdrop-blur-[0.5px]" />

            {/* Cinematic Fade-to-Black Overlay during scroll */}
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-75 ease-out"
              style={{ opacity: 0 }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center">
            {/* Main Heading H1 */}
            <h1
              className="text-5xl sm:text-7xl md:text-8xl font-normal leading-[0.95] tracking-[-2.46px] max-w-7xl text-foreground animate-fade-rise"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Capturing
              <br />
              <em className="not-italic text-muted-foreground">Moments in Stillness.</em>
            </h1>

            {/* Subtext Paragraph */}
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed animate-fade-rise-delay">
              Capturing the poetry of light, form, and shadow. In a world of constant motion,
              we seek the fleeting frames of stillness that tell the unspoken stories of our spaces.
            </p>

            {/* Hero CTA Button */}
            <div className="flex flex-col items-center mt-12 animate-fade-rise-delay-2">
              <button
                type="button"
                id="hero-cta"
                onClick={() => scrollToSection('gallery')}
                className="liquid-glass rounded-full px-14 py-5 text-base font-medium text-foreground transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                Begin Journey
              </button>

              <button
                type="button"
                id="scroll-helper"
                aria-label="Scroll Down"
                onClick={() => scrollToSection('gallery')}
                className="mt-16 p-2 text-muted-foreground/60 hover:text-foreground transition-colors animate-bounce cursor-pointer"
              >
                <ArrowDown size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Portfolio Gallery */}
        <Gallery onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

        {/* Section 3: About Page */}
        <section id="about" className="py-24 px-8 max-w-7xl mx-auto w-full select-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-5 relative aspect-[3/4] max-h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <img
                src="/photos/selfp1.jpeg"
                alt="Yash Gohel"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 right-6 liquid-glass rounded-xl max-w-fit min-h-max px-3 py-2 border border-white/10 flex flex-col items-center shadow-lg" style={{
                float: 'inline-end',
                top: '83%',
                right: '2%'
              }}>
                <span className="text-2xl text-foreground font-semibold" style={{ fontFamily: "'Instrument Serif', serif" }}>YG</span>
                <span className="text-[9px] text-muted-foreground uppercase tracking-widest mt-1">Photographer</span>
              </div>
            </div>

            {/* About Text */}
            <div className="lg:col-span-7 flex flex-col justify-center gap-6">
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest bg-white/5 border border-white/5 rounded-full px-3 py-1 w-max">
                About the Photographer
              </span>
              <h2
                className="text-4xl sm:text-5xl text-foreground font-normal tracking-tight leading-none"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Every Frame Tells a Story
              </h2>
              <div className="flex flex-col gap-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  I'm Yash Gohel &mdash; a mobile photographer passionate about finding extraordinary beauty in ordinary moments. My lens explores the world through the interplay of light, shadow, and the fleeting emotions that define our human experience.
                </p>
                <p>
                  Specializing in landscapes, portraits, and street photography, I believe a powerful image doesn't need the most expensive gear &mdash; just a curious eye and the right moment.
                </p>
              </div>

              {/* Stats Block */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5 mt-4">
                <div>
                  <span className="text-3xl sm:text-4xl text-foreground font-normal tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>18+</span>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Selected Works</p>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl text-foreground font-normal tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>5+</span>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Categories</p>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl text-foreground font-normal tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>&infin;</span>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Passion</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Horizontal Film Strip */}
        <section className="relative z-10 w-full py-12 overflow-hidden border-t border-b border-white/5 bg-white/[0.01] select-none">
          <div className="relative w-full flex overflow-x-hidden">
            <div
              ref={filmTrackRef}
              className="flex gap-6 whitespace-nowrap py-4 will-change-transform"
            >
              {[...photos, ...photos].map((photo, index) => (
                <div
                  key={`${photo.id}-${index}`}
                  onClick={() => setSelectedPhoto(photo)}
                  className="relative w-72 h-48 sm:w-80 sm:h-52 shrink-0 rounded-xl overflow-hidden border border-white/5 shadow-md cursor-pointer transition-all duration-500 hover:scale-[1.03] hover:border-white/20 group"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="absolute inset-0 w-full h-full object-cover filter grayscale-[40%] group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 z-10 bg-background/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[10px] text-foreground font-medium tracking-wide">
                      {photo.title} &mdash; {photo.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Section 5: Contact Cards */}
        <section id="contact" className="py-24 px-8 max-w-4xl mx-auto w-full select-none animate-fade-rise">
          <div className="text-center mb-12">
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest bg-white/5 border border-white/5 rounded-full px-3 py-1 w-max">
              Get in Touch
            </span>
            <h2
              className="text-4xl sm:text-5xl text-foreground font-normal tracking-tight mt-6"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Let's Create Together
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto mt-4 leading-relaxed">
              Open for collaborations, feature opportunities, and photography projects.
              Reach out &mdash; every great story begins with a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Email Card */}
            <a
              href="mailto:ygohel07@gmail.com"
              className="liquid-glass group rounded-2xl p-8 border border-white/5 flex flex-col items-center text-center justify-center hover:scale-[1.02] hover:border-white/10 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                <Mail size={20} className="text-foreground/80 group-hover:text-foreground" />
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                Email
              </span>
              <p className="text-lg text-foreground font-medium" style={{ fontFamily: "'Instrument Serif', serif" }}>
                ygohel07@gmail.com
              </p>
            </a>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/little_things_105"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass group rounded-2xl p-8 border border-white/5 flex flex-col items-center text-center justify-center hover:scale-[1.02] hover:border-white/10 hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-foreground/80 group-hover:text-foreground"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">
                Instagram
              </span>
              <p className="text-lg text-foreground font-medium" style={{ fontFamily: "'Instrument Serif', serif" }}>
                @little_things_105
              </p>
            </a>
          </div>
        </section>
      </div>

      {/* Lightbox Modal Render */}
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onPrev={handlePrevPhoto}
          onNext={handleNextPhoto}
        />
      )}

      {/* Footer */}
      <footer className="relative z-10 w-full py-12 text-center text-xs text-muted-foreground/30 border-t border-white/5 select-none">
        <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-base text-foreground font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Yash Photography
          </span>
          <span>© {new Date().getFullYear()} Yash Photography. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
