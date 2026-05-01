import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F7F3FF] text-[#07081A]">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-800 shadow-sm">
            404 · Page not found
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight text-[#07081A] md:text-6xl">
            This page took the wrong subway line.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            The page you are looking for does not exist or has been moved.
            Go back to the homepage or explore available Uri Guide tours.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/"
              className="rounded-full bg-violet-700 px-7 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-violet-800"
            >
              Back to homepage
            </Link>

            <Link
              to="/tours"
              className="rounded-full border border-violet-300 bg-white px-7 py-3 text-center text-sm font-semibold text-violet-800 transition hover:bg-violet-50"
            >
              Explore tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}