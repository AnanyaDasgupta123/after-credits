
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-cinema-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <Link to="/" className="text-sm font-bold tracking-tight">
          AFTER<span className="text-cinema-accent">/</span>THE CREDITS
        </Link>

        <p className="text-xs leading-6 text-cinema-muted">
          Made for the love of stories, frames, and everything in between.
        </p>

        <a
          href="/#home"
          className="text-xs font-semibold text-cinema-accent transition hover:text-white"
        >
          Back to the beginning ↑
        </a>
      </div>
    </footer>
  );
}
