
interface HeaderProps {
  activeLink: string
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  onNavigate: (link: string) => void
}

export default function Header({ activeLink, mobileMenuOpen, setMobileMenuOpen, onNavigate }: HeaderProps) {
  const navLinks = ['Home', 'Gallery', 'About', 'Contact']

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault()
    onNavigate(link)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Navigation Bar */}
      <header className="fixed top-4 left-4 right-4 md:w-4/5 z-40 rounded-[50px] bg-[#ffffff12] backdrop-blur-[30px] border border-white/5 mx-auto">
        <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <a
            href="/index.html#home"
            id="nav-logo"
            onClick={(e) => handleLinkClick(e, 'Home')}
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
                  href={link === 'Home' ? '/index.html' : `/${link.toLowerCase().replace(' ', '-')}.html`}
                  id={`nav-${link.toLowerCase().replace(' ', '-')}`}
                  onClick={(e) => handleLinkClick(e, link)}
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
            href={link === 'Home' ? '/index.html' : `/${link.toLowerCase().replace(' ', '-')}.html`}
            id={`mobile-nav-${link.toLowerCase().replace(' ', '-')}`}
            onClick={(e) => handleLinkClick(e, link)}
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
    </>
  )
}
