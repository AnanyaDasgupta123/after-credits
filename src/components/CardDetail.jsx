
import { Link, useParams } from "react-router-dom";
import { movies } from "../data/movies";

export default function CardDetail() {
  const { id } = useParams();
  const movie = movies.find((item) => item.id === id);

  if (!movie) {
    return (
      <main className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <h1 className="font-display text-4xl">Film not found</h1>
        <Link
          to="/"
          className="mt-6 inline-block text-cinema-accent hover:text-white"
        >
          ← Back to the collection
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
      <Link
        to="/"
        className="text-sm text-cinema-muted transition hover:text-cinema-accent"
      >
        ← Back to the collection
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-start">
        <img
          src={movie.image}
          alt={movie.alt}
          className="max-h-[650px] w-full rounded-2xl object-cover"
        />

        <div className="py-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cinema-accent">
            {movie.mood}
          </p>

          <h1 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">
            {movie.title} ({movie.year})
          </h1>

          <p className="mt-5 text-sm leading-7 text-cinema-muted">
            {movie.genres.join(" · ")}
          </p>

          <p className="mt-6 text-base leading-8 text-white/80">
            {movie.description}
          </p>

          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-cinema-accent px-6 py-3 text-sm font-bold text-black transition hover:bg-white"
          >
            Discover more films ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
