import React from "react";
import { Link } from "react-router-dom";

const includedItems = [
  "Small-group cultural experience",
  "CIS-friendly explanation",
  "Local etiquette and context",
  "Photo-friendly walking route",
  "Optional meal or activity depending on package",
];

export default function TourDetail() {
  return (
    <main className="min-h-screen bg-[#F7F3FF] text-[#07081A]">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-start md:py-28">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-800 shadow-sm">
            Featured tour
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-[#07081A] md:text-6xl">
            Seoul Culture Walk
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            A small-group cultural tour for travelers who want to understand Korean neighborhoods, food culture, etiquette, and daily-life details beyond basic sightseeing.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <InfoBox label="Duration" value="2–3 hours" />
            <InfoBox label="Group size" value="8–12 people" />
            <InfoBox label="From" value="₩44,900" />
          </div>
        </div>

        <aside className="rounded-[2rem] border border-violet-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#07081A]">Book this tour</h2>

          <p className="mt-3 leading-7 text-slate-700">
            Choose Basic, Standard, or Premium depending on whether you want only explanation or an included meal/activity.
          </p>

          <div className="mt-6 space-y-3">
            <PackageRow name="Basic" price="₩44,900" />
            <PackageRow name="Standard" price="₩53,900" />
            <PackageRow name="Premium" price="₩59,900" />
          </div>

          <Link
            to="/booking"
            className="mt-8 inline-flex w-full justify-center rounded-full bg-violet-700 px-7 py-3 text-sm font-bold text-white shadow-md transition hover:bg-violet-800"
          >
            Continue to booking
          </Link>
        </aside>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
            What is included
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#07081A]">
            Designed to make Korea easier to understand.
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {includedItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-violet-100 bg-[#F7F3FF] p-4 text-sm font-medium text-slate-700"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-700 text-xs text-white">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-violet-800 to-[#07081A] px-6 py-14 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold tracking-tight">
            Want this experience with weekly support?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-violet-100">
            Add student or newcomer support and receive a 30% discount when purchased with a tour.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/subscription"
              className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-50"
            >
              View support plans
            </Link>

            <Link
              to="/booking"
              className="inline-flex rounded-full border border-white/30 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Book this tour
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-3xl border border-violet-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-violet-700">{label}</p>
      <p className="mt-2 text-2xl font-bold text-[#07081A]">{value}</p>
    </div>
  );
}

function PackageRow({ name, price }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-violet-50 p-4">
      <p className="font-bold text-[#07081A]">{name}</p>
      <p className="text-sm font-semibold text-violet-700">{price}</p>
    </div>
  );
}