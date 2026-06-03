import { useState } from 'react'
import Gallery from '../components/Gallery'
import Lightbox from '../components/Lightbox'
import { photos } from '../data/photos'
import type { Photo } from '../data/photos'

export default function GalleryView() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

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
    <div className="w-full pt-24">
      {/* Portfolio Gallery */}
      <Gallery onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

      {/* Lightbox Modal Render */}
      {selectedPhoto && (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onPrev={handlePrevPhoto}
          onNext={handleNextPhoto}
        />
      )}
    </div>
  )
}
