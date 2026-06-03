export default function Footer() {
  return (
    <footer className="relative z-10 w-full py-12 text-center text-xs text-muted-foreground/30 border-t border-white/5 select-none bg-black">
      <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-base text-foreground font-normal" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Yash Photography
        </span>
        <span>© {new Date().getFullYear()} Yash Photography. All rights reserved.</span>
      </div>
    </footer>
  )
}
