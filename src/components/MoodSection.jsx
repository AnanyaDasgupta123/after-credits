
const moods = [
  "Mind-bending",
  "A little heartbroken",
  "Slow & thoughtful",
  "Edge of your seat",
  "Comfort watch",
];

export default function MoodSection() {
  return (
    <section
      id="moods"
      className="border-y border-cinema-line bg-cinema-panel py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cinema-accent">
          Pick your atmosphere
        </p>

        <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
          Tell us how you feel.
          <br />
          <span className="italic text-cinema-muted">
            We'll meet you there.
          </span>
        </h2>

        <div className="mt-9 flex flex-wrap gap-3">
          {moods.map((mood) => (
            <a
              key={mood}
              href="#collection"
              className="rounded-full border border-cinema-line px-5 py-3 text-sm transition hover:border-cinema-accent hover:text-cinema-accent"
            >
              {mood}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
