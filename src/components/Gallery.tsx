import { useState } from 'react'
import { photos } from '../data/photos'
import type { Photo } from '../data/photos'

interface GalleryProps {
  onSelectPhoto: (photo: Photo) => void
}

type CategoryFilter = 'All' | 'Street' | 'Architecture' | 'Nature' | 'Minimalist' | 'Landscape' | 'Portrait'

export default function Gallery({ onSelectPhoto }: GalleryProps) {
  const [filter, setFilter] = useState<CategoryFilter>('All')

  const categories: CategoryFilter[] = ['All', 'Street', 'Architecture', 'Nature', 'Minimalist', 'Landscape', 'Portrait']

  const filteredPhotos = filter === 'All'
    ? photos
    : photos.filter(p => p.category === filter)

  return (
    <section id="gallery" className="py-24 px-8 max-w-7xl mx-auto w-full select-none">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2
          className="text-4xl sm:text-5xl text-foreground font-normal tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Captured Moments
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mt-4 leading-relaxed">
          A selection of raw, unedited frames capturing stillness amidst urban movement and natural silence.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            id={`filter-${cat.toLowerCase()}`}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-5 py-2 text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${filter === cat
              ? 'bg-foreground text-background scale-[1.02] shadow-lg'
              : 'liquid-glass text-muted-foreground hover:text-foreground hover:scale-[1.02]'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Photos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            id={`photo-card-${photo.id}`}
            onClick={() => onSelectPhoto(photo)}
            className="group relative flex flex-col justify-end aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 bg-white/[0.01] shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:border-white/10 hover:shadow-2xl animate-fade-rise"
          >
            {/* Image Source */}
            <img
              src={photo.src}
              alt={photo.title}
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Subtle Gradient Shadow (visible by default to assist readability) */}
            <div className="absolute inset-0 z-5 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />

            {/* Full Glassmorphic Info Card Overlay (reveals fully on hover) */}
            <div className="relative z-10 p-6 flex flex-col justify-end h-full w-full bg-gradient-to-t from-background/90 via-background/40 to-transparent lg:opacity-0 lg:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest bg-white/5 border border-white/5 rounded-full px-3 py-1 w-max mb-3">
                {photo.category}
              </span>

              <h3
                className="text-2xl text-foreground font-normal tracking-tight mb-2"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {photo.title}
              </h3>

              <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">
                {photo.description}
              </p>


            </div>

            {/* Overlay trigger text on mobile when not hovered */}
            <div className="absolute bottom-4 left-4 z-8 lg:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none bg-background/40 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/5">
              <p className="text-xs text-foreground font-medium">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
