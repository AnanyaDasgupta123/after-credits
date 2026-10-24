
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-cinema-line bg-cinema-bg">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="shrink-0 text-lg font-bold tracking-tight sm:text-xl"
        >
          AFTER<span className="text-cinema-accent">/</span>THE CREDITS
        </Link>

        <div className="hidden items-center gap-7 text-sm text-cinema-muted md:flex">
          <a href="/#featured" className="transition hover:text-cinema-accent">
            Featured
          </a>
          <a href="/#collection" className="transition hover:text-cinema-accent">
            The collection
          </a>
          <a href="/#moods" className="transition hover:text-cinema-accent">
            By mood
          </a>
        </div>

        <a
          href="/#collection"
          className="rounded-full border border-cinema-line px-4 py-2.5 text-xs font-semibold transition hover:border-cinema-accent hover:text-cinema-accent sm:px-5 sm:text-sm"
        >
          Find your next film ↗
        </a>
      </nav>
    </header>
  );
}
