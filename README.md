# Yash's Lens — React Photography Portfolio

A premium, modern, and highly responsive photography portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Designed to display high-resolution imagery with a fluid, dark-cinematic aesthetic and buttery-smooth interactions.

## ✨ Key Features

- **Cinematic Hero Landing**: Immersive full-screen background video landing with auto-fade styling on scroll.
- **Buttery Smooth Scroll**: Powered by [Lenis](https://github.com/darkroomengineering/lenis) for premium, inertia-based smooth scrolling transitions.
- **Glassmorphic Navigation Bar**: Fully responsive, floating translucent header with intelligent navigation drawer for mobile screens.
- **Dynamic Category Filter**: Easily browse photos by genre (Street, Landscape, Portrait, Architecture, Minimalist, Nature) with fluid layout transitions.
- **Infinite Film Strip**: A horizontal scrolling marquee presenting photos like a physical film roll, pausing on hover.
- **Interactive Lightbox**: Full-screen lightbox carousel modal allowing close-up views of each work with touch/click control and fluid navigation.
- **SEO & Performance Optimized**: Out-of-the-box SEO meta tags, semantic HTML, modern typeface pairing (Instrument Serif & Inter), and optimized image loading.

## 🛠️ Built With

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using dynamic HSL variables and custom glassmorphism)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Scroll Engine**: [Lenis Smooth Scroll](https://github.com/darkroomengineering/lenis)

## 🚀 Getting Started

To run this project locally, follow these simple steps:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yashgohel/React-based-photography-portfolio.git
   cd React-based-photography-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
├── public/                 # Static assets (Favicons, videos, etc.)
├── src/
│   ├── assets/             # Global graphics and assets
│   ├── components/         # Reusable React components (Gallery, Lightbox, etc.)
│   ├── data/               # Photo portfolio database source files
│   ├── App.tsx             # Main application layout and routing/scrolling orchestration
│   ├── index.css           # Custom theme layer, variables, and animations
│   ├── main.tsx            # React application entry point
├── package.json            # Configuration details and dependencies
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.js      # Tailwind CSS customized styling properties
```

## 📄 License

This project is licensed under the MIT License.
