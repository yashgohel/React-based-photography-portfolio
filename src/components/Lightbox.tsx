import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Camera, Sliders } from 'lucide-react'
import type { Photo } from '../data/photos'

interface LightboxProps {
  photo: Photo
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ photo, onClose, onPrev, onNext }: LightboxProps) {
  // Listen for keyboard events for navigation and close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    // Prevent body scrolling when lightbox is open
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-background/95 backdrop-blur-xl animate-fade-rise"
      role="dialog"
      aria-modal="true"
    >
      {/* Background Blur Overlay Click-to-close */}
      <div className="absolute inset-0 z-0" onClick={onClose} />

      {/* Top Header Row */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <span
          className="text-2xl text-foreground font-normal tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {photo.title}
        </span>
        <button
          type="button"
          id="lightbox-close"
          onClick={onClose}
          className="p-3 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-all duration-300 cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X size={24} />
        </button>
      </header>

      {/* Main Content Area: Image + Nav Buttons + Meta Sidebar */}
      <div className="relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto w-full px-6 gap-8 h-auto lg:h-[calc(100vh-160px)] overflow-y-auto lg:overflow-hidden py-4 lg:py-0">
        {/* Navigation & Image Container */}
        <div className="relative flex-grow flex items-center justify-center w-full h-[45vh] lg:h-full lg:w-2/3 shrink-0">
          {/* Previous Button */}
          <button
            type="button"
            id="lightbox-prev"
            onClick={onPrev}
            className="absolute left-0 p-3 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-all duration-300 z-10 cursor-pointer"
            aria-label="Previous Photo"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Core Image */}
          <img
            src={photo.src}
            alt={photo.title}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-500 scale-[0.98] select-none"
          />

          {/* Next Button */}
          <button
            type="button"
            id="lightbox-next"
            onClick={onNext}
            className="absolute right-0 p-3 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-all duration-300 z-10 cursor-pointer"
            aria-label="Next Photo"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Metadata Sidebar Pane */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center h-auto lg:h-full lg:border-l lg:border-border lg:pl-8 py-4 select-none">
          <div className="liquid-glass rounded-2xl p-6 w-full flex flex-col gap-6">
            <div>
              <h3
                className="text-3xl text-foreground font-normal tracking-tight mb-2"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {photo.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{photo.description}</p>
            </div>

            <hr className="border-border" />

            {/* Shoot Metadata Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <MapPin size={14} className="text-foreground/60 shrink-0" />
                <div className="truncate">
                  <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">Location</p>
                  <p className="text-foreground font-medium text-xs truncate">{photo.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-xs">
                <Calendar size={14} className="text-foreground/60 shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">Captured</p>
                  <p className="text-foreground font-medium text-xs">{photo.date}</p>
                </div>
              </div>
            </div>

            <hr className="border-border" />

            {/* EXIF Camera Settings */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Camera size={16} className="text-foreground/80 shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">Camera Model</p>
                  <p className="text-foreground font-medium text-sm">{photo.camera}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mt-1">
                <Sliders size={16} className="text-foreground/80 shrink-0" />
                <div className="w-full">
                  <p className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">EXIF Settings</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-foreground/80 font-medium text-xs mt-0.5">
                    <span>{photo.focalLength}</span>
                    <span className="text-muted-foreground/45">•</span>
                    <span>{photo.aperture}</span>
                    <span className="text-muted-foreground/45">•</span>
                    <span>{photo.shutterSpeed}</span>
                    <span className="text-muted-foreground/45">•</span>
                    <span>{photo.iso}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Balanced space on bottom */}
      <footer className="relative z-10 w-full py-6 text-center text-xs text-muted-foreground/20">
        Use Left/Right Arrow keys to navigate, Esc to exit
      </footer>
    </div>
  )
}
