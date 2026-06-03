import { useEffect, useRef } from 'react'

interface HomeViewProps {
  onNavigate: (link: string) => void
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let windowHeight = window.innerHeight

    const handleResize = () => {
      windowHeight = window.innerHeight
    }

    const handleScroll = () => {
      if (overlayRef.current) {
        const scrollY = window.scrollY
        const opacity = Math.min(scrollY / (windowHeight * 0.75), 1)
        overlayRef.current.style.opacity = opacity.toString()
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
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
            onClick={() => onNavigate('Gallery')}
            className="liquid-glass rounded-full px-14 py-5 text-base font-medium text-foreground transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            Begin Journey
          </button>
        </div>
      </div>
    </section>
  )
}
