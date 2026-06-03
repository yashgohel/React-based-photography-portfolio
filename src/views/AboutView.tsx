export default function AboutView() {
  return (
    <div className="w-full pt-32 pb-24">
      {/* Section: About Page */}
      <section id="about" className="px-8 max-w-7xl mx-auto w-full select-none">
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
    </div>
  )
}
