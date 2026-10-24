
export default function Hero() {
  return (
    <section
      id="featured"
      className="mx-auto max-w-7xl px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12"
    >
      <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-cinema-accent sm:text-xs">
        <span className="h-px w-8 bg-cinema-accent" />
        For the love of the frame
      </div>

      <div className="relative isolate overflow-hidden rounded-2xl bg-cinema-panel sm:rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=85"
          alt="Rows of seats in a dark movie theatre"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

        <div className="relative z-10 flex min-h-[470px] items-end px-6 py-10 sm:min-h-[540px] sm:px-12 sm:py-14 lg:min-h-[600px] lg:px-16 lg:py-16">
          <div className="max-w-2xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-cinema-accent">
              A little less scrolling. A little more cinema.
            </p>

            <h1 className="font-display text-5xl font-medium leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Some stories
              <br />
              <span className="italic text-cinema-accent">
                never really end.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              For the films that leave you staring at the credits.
              Discover unforgettable stories, overlooked gems, and
              the kind of cinema that stays with you long after the screen goes dark.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#collection"
                className="rounded-full bg-cinema-accent px-6 py-3.5 text-sm font-bold text-black transition hover:bg-white"
              >
                Explore the collection ↗
              </a>

              <a
                href="#about"
                className="text-sm font-medium text-white/80 transition hover:text-cinema-accent"
              >
                Our point of view
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 pt-5 text-xs text-white/60 sm:text-sm">
              <span>Independent perspectives</span>
              <span className="hidden h-1 w-1 rounded-full bg-cinema-accent sm:block" />
              <span>Stories worth staying for</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
