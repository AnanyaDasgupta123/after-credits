
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import CardList from "./components/CardList";
import MoodSection from "./components/MoodSection";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <main id="home">
        <Hero />
        <CardList />

        <MoodSection />

        <section
          id="about"
          className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
        >
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cinema-accent">
                A note from the editor
              </p>

              <h2 className="mt-4 max-w-xl font-display text-4xl font-medium leading-tight sm:text-5xl">
                The best part of a film is sometimes{" "}
                <span className="italic text-cinema-accent">what stays.</span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-8 text-cinema-muted sm:text-base">
              After the Credits is a small corner of the internet for people
              who love stories. The quiet endings, the unexpected turns,
              the unforgettable characters, and the conversations that continue
              long after the screen goes dark. No endless rankings. Just a
              little space to find your next favourite film.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-cinema-bg font-sans text-white antialiased">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
}
