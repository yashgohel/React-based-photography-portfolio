export interface Photo {
  id: string
  title: string
  description: string
  category: 'Street' | 'Architecture' | 'Nature' | 'Minimalist' | 'Landscape' | 'Portrait'
  src: string
  camera: string
  focalLength: string
  aperture: string
  shutterSpeed: string
  iso: string
  location: string
  date: string
}

export const photos: Photo[] = [
  {
    id: 'mountain-vista',
    title: 'Mountain Vista',
    description: 'A breathtaking view of mountain peaks emerging from the clouds, capturing the majestic scale of nature.',
    category: 'Landscape',
    src: '/photos/abu.jpeg',
    camera: 'iPhone 15 Pro',
    focalLength: '24mm (1x)',
    aperture: 'f/1.78',
    shutterSpeed: '1/120s',
    iso: 'ISO 50',
    location: 'Mount Abu, Rajasthan, India',
    date: 'October 2025'
  },
  {
    id: 'into-the-green',
    title: 'Into the Green',
    description: 'A deep forest path surrounded by lush, vibrant greenery and towering trees.',
    category: 'Nature',
    src: '/photos/tree2.jpeg',
    camera: 'iPhone 15 Pro',
    focalLength: '13mm (0.5x)',
    aperture: 'f/2.2',
    shutterSpeed: '1/100s',
    iso: 'ISO 160',
    location: 'Wayanad, Kerala, India',
    date: 'August 2025'
  },
  {
    id: 'city-glow',
    title: 'City Glow',
    description: 'Abstract light leaks and bokeh patterns capturing the energetic heartbeat of the city at night.',
    category: 'Minimalist',
    src: '/photos/lights.jpeg',
    camera: 'iPhone 15 Pro',
    focalLength: '77mm (3x)',
    aperture: 'f/2.8',
    shutterSpeed: '1/30s',
    iso: 'ISO 800',
    location: 'Mumbai, India',
    date: 'December 2025'
  },
  {
    id: 'udaipur-serenity',
    title: 'Udaipur Serenity',
    description: 'The calm waters of Lake Pichola reflecting the heritage palaces under a soft evening sky.',
    category: 'Street',
    src: '/photos/udaipur.jpeg',
    camera: 'iPhone 15 Pro',
    focalLength: '24mm (1x)',
    aperture: 'f/1.78',
    shutterSpeed: '1/200s',
    iso: 'ISO 80',
    location: 'Lake Pichola, Udaipur, India',
    date: 'November 2025'
  },
  {
    id: 'lunar-close-up',
    title: 'Lunar Close-up',
    description: "A sharp, clear capture of the moon's craters against the dark void of night.",
    category: 'Minimalist',
    src: '/photos/moon.jpeg',
    camera: 'iPhone 15 Pro',
    focalLength: '77mm (3x)',
    aperture: 'f/2.8',
    shutterSpeed: '1/500s',
    iso: 'ISO 100',
    location: 'Pune, India',
    date: 'January 2026'
  },
  {
    id: 'self-portrait-i',
    title: 'Self Portrait I',
    description: 'A moody, low-key self-portrait exploring soft shadows and minimal light geometry.',
    category: 'Portrait',
    src: '/photos/selfp1.jpeg',
    camera: 'iPhone 15 Pro',
    focalLength: '24mm (1x)',
    aperture: 'f/1.78',
    shutterSpeed: '1/60s',
    iso: 'ISO 400',
    location: 'Studio, India',
    date: 'February 2026'
  },
  {
    id: 'night-light',
    title: 'Night Light',
    description: 'A portrait set against the ambient glow of neon and street lights, emphasizing soft focus and atmosphere.',
    category: 'Portrait',
    src: '/photos/self0.jpeg',
    camera: 'iPhone 15 Pro',
    focalLength: '48mm (2x)',
    aperture: 'f/1.78',
    shutterSpeed: '1/40s',
    iso: 'ISO 640',
    location: 'Ahmedabad, India',
    date: 'December 2025'
  },
  {
    id: 'golden-shore',
    title: 'Golden Shore',
    description: 'Gentle waves washing over a wet, sandy beach reflecting the warm hues of the setting sun.',
    category: 'Landscape',
    src: '/photos/beach.jpeg',
    camera: 'iPhone 15 Pro',
    focalLength: '24mm (1x)',
    aperture: 'f/1.78',
    shutterSpeed: '1/320s',
    iso: 'ISO 50',
    location: 'Goa, India',
    date: 'November 2025'
  },
  {
    id: 'solitary-tree',
    title: 'Solitary',
    description: 'A single, standing tree captured against a clean sky, symbolizing peace and isolation.',
    category: 'Nature',
    src: '/photos/tree.jpeg',
    camera: 'iPhone 15 Pro',
    focalLength: '24mm (1x)',
    aperture: 'f/1.78',
    shutterSpeed: '1/1000s',
    iso: 'ISO 50',
    location: 'Gujarat, India',
    date: 'September 2025'
  },
  {
    id: 'urban-horizon',
    title: 'Urban Horizon',
    description: 'A sweeping sunset view framing the clean contrast between urban outlines and soft sky gradients.',
    category: 'Landscape',
    src: '/photos/media__1775658234230.jpg',
    camera: 'iPhone 15 Pro',
    focalLength: '24mm (1x)',
    aperture: 'f/1.78',
    shutterSpeed: '1/180s',
    iso: 'ISO 64',
    location: 'Ahmedabad, India',
    date: 'January 2026'
  },
  {
    id: 'painted-hopper',
    title: 'Painted Hopper',
    description: 'A vibrant grasshopper perched delicately on a branch, showcasing rich details of micro-world textures.',
    category: 'Nature',
    src: '/photos/media__1775658234389.jpg',
    camera: 'iPhone 15 Pro',
    focalLength: '24mm (Macro mode)',
    aperture: 'f/2.2',
    shutterSpeed: '1/250s',
    iso: 'ISO 125',
    location: 'Gujarat, India',
    date: 'July 2025'
  },
  {
    id: 'fallen-gold',
    title: 'Fallen Gold',
    description: 'A detailed close-up of a dry autumn leaf resting on damp ground, representing life cycles in nature.',
    category: 'Nature',
    src: '/photos/media__1775658234415.jpg',
    camera: 'iPhone 15 Pro',
    focalLength: '24mm (Macro)',
    aperture: 'f/2.2',
    shutterSpeed: '1/120s',
    iso: 'ISO 200',
    location: 'Shimla, India',
    date: 'November 2025'
  },
  {
    id: 'shaded-hideaway',
    title: 'Shaded Hideaway',
    description: 'A vintage car parked quietly in a narrow, shaded alleyway, capturing a nostalgic urban corner.',
    category: 'Street',
    src: '/photos/media__1775658234445.jpg',
    camera: 'iPhone 15 Pro',
    focalLength: '48mm (2x)',
    aperture: 'f/1.78',
    shutterSpeed: '1/80s',
    iso: 'ISO 250',
    location: 'Old Ahmedabad, India',
    date: 'September 2025'
  },
  {
    id: 'forest-canopy',
    title: 'Forest Canopy',
    description: 'Looking straight up at towering trees intersecting with the sky, forming a rich natural mosaic.',
    category: 'Nature',
    src: '/photos/media__1775658234746.jpg',
    camera: 'iPhone 15 Pro',
    focalLength: '13mm (0.5x)',
    aperture: 'f/2.2',
    shutterSpeed: '1/125s',
    iso: 'ISO 80',
    location: 'Manali, India',
    date: 'June 2025'
  },
  {
    id: 'roadside-greens',
    title: 'Roadside Greens',
    description: 'A peaceful perspective of overgrown plants alongside a quiet travel route.',
    category: 'Nature',
    src: '/photos/img_3626.jpg',
    camera: 'iPhone 15 Pro',
    focalLength: '24mm (1x)',
    aperture: 'f/1.78',
    shutterSpeed: '1/400s',
    iso: 'ISO 50',
    location: 'Himachal Pradesh, India',
    date: 'June 2025'
  },
  {
    id: 'roadside-canopy',
    title: 'Roadside Canopy',
    description: 'Lush green branches forming a natural arch over a mountain highway.',
    category: 'Nature',
    src: '/photos/img_3629.jpg',
    camera: 'iPhone 15 Pro',
    focalLength: '24mm (1x)',
    aperture: 'f/1.78',
    shutterSpeed: '1/200s',
    iso: 'ISO 50',
    location: 'Himachal Pradesh, India',
    date: 'June 2025'
  },
  {
    id: 'ancient-ruins',
    title: 'Ancient Ruins',
    description: 'The stunning structural heritage of ancient stone pillars whispering tales of history.',
    category: 'Street',
    src: '/photos/img_3727.jpg',
    camera: 'iPhone 15 Pro',
    focalLength: '24mm (1x)',
    aperture: 'f/1.78',
    shutterSpeed: '1/120s',
    iso: 'ISO 64',
    location: 'Hampi, Karnataka, India',
    date: 'September 2025'
  },
  {
    id: 'golden-silhouette',
    title: 'Golden Silhouette',
    description: 'A glowing evening sunset silhouetting distant landforms and trees, radiating absolute calm.',
    category: 'Landscape',
    src: '/photos/img_3803.jpg',
    camera: 'iPhone 15 Pro',
    focalLength: '48mm (2x)',
    aperture: 'f/1.78',
    shutterSpeed: '1/500s',
    iso: 'ISO 50',
    location: 'Gujarat, India',
    date: 'December 2025'
  }
]
