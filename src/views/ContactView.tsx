import { Mail } from 'lucide-react'

export default function ContactView() {
  return (
    <div className="w-full pt-32 pb-24">
      {/* Section: Contact Cards */}
      <section id="contact" className="px-8 max-w-4xl mx-auto w-full select-none animate-fade-rise">
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
  )
}
