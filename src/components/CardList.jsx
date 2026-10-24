
import { useState } from "react";
import { movies } from "../data/movies";

export default function CardList() {
  const [searchTerm, setSearchTerm] = useState("");

 const filteredMovies = movies.filter((movie) => {
  const searchText = searchTerm.trim().toLowerCase();

  return (
    movie.title.toLowerCase().includes(searchText) ||
    movie.genres.some((genre) =>
      genre.toLowerCase().includes(searchText)
    ) ||
    movie.mood.toLowerCase().includes(searchText) ||
    String(movie.year).includes(searchText)
  );
});

  return (
    <section
      id="collection"
      className="border-t border-cinema-line bg-cinema-bg py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cinema-accent">
              The watchlist
            </p>

            <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Films that <span className="italic text-cinema-accent">stay.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-cinema-muted">
            Different worlds, different lives, one unforgettable frame at a time.
            Start wherever your curiosity takes you.
          </p>
        </div>

        <div className="mt-8 max-w-md">
          <label htmlFor="movie-search" className="sr-only">
            Search films
          </label>

          <input
            id="movie-search"
            type="search"
            placeholder="Search films, genres, or moods..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full rounded-full border border-cinema-line bg-cinema-panel px-5 py-3 text-sm text-white outline-none transition placeholder:text-cinema-muted focus:border-cinema-accent"
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMovies.map((movie) => (
            <article key={movie.id} className="group min-w-0">
              <div className="relative overflow-hidden rounded-xl bg-cinema-panel">
                <img
                  src={movie.image}
                  alt={movie.alt}
                  loading="lazy"
                  className="h-72 w-full rounded-xl object-cover object-center transition duration-500 group-hover:scale-105 sm:h-80"
                />

                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                  {movie.mood}
                </span>
              </div>

              <div className="pt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-cinema-accent">
                  {movie.genres.join(" · ")}
                </p>

                <h3 className="mt-2 font-display text-2xl font-medium">
                  {movie.title} ({movie.year})
                </h3>

                <p className="mt-3 text-sm leading-7 text-cinema-muted">
                  {movie.description}
                </p>

                
<a
  href={`https://www.google.com/search?q=${encodeURIComponent(
    `${movie.title} ${movie.year} movie cast plot ratings`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block text-sm font-semibold text-white transition hover:text-cinema-accent"
>
  Explore this movie ↗
</a>

              </div>
            </article>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <p className="mt-10 text-sm text-cinema-muted">
            No films found. Try another title, genre, or mood.
          </p>
        )}
      </div>
    </section>
  );
}
