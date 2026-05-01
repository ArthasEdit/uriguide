import React from "react";
import { Link } from "react-router-dom";

const tourPackages = [
  {
    tier: "Basic",
    price: "₩44,900",
    cost: "Estimated cost: ₩20,000–₩25,000",
    description: "For travelers who want cultural explanation without extra meal or activity costs.",
    includes: [
      "Small-group cultural tour",
      "CIS-friendly guidance",
      "Local etiquette explanations",
      "Photo-friendly route",
    ],
  },
  {
    tier: "Standard",
    price: "₩53,900",
    cost: "Estimated cost: ₩30,000–₩35,000",
    description: "Best for tourists who want the main experience plus a meal or local activity.",
    includes: [
      "Everything in Basic",
      "Meal or activity included",
      "Local food explanation",
      "Recommended for first-time visitors",
    ],
    highlighted: true,
  },
  {
    tier: "Premium",
    price: "₩59,900",
    cost: "Estimated cost: ₩35,000–₩40,000",
    description: "A richer cultural experience with deeper guidance and more personalized support.",
    includes: [
      "Everything in Standard",
      "More detailed cultural context",
      "Extra guide support",
      "Priority booking support",
    ],
  },
];

const sampleTours = [
  {
    title: "Seoul Culture Walk",
    location: "Seoul",
    time: "2–3 hours",
    text: "Explore Korean neighborhoods, daily culture, etiquette, and hidden context behind places tourists often pass by.",
    link: "/tours/seoul-culture-walk",
  },
  {
    title: "Korean Food Experience",
    location: "Seoul / Incheon",
    time: "2 hours",
    text: "Understand Korean food culture while trying local dishes with explanations about customs and dining behavior.",
    link: "/booking",
  },
  {
    title: "Student Arrival Guide",
    location: "Incheon / Seoul",
    time: "2–4 hours",
    text: "Designed for international students who need practical help understanding transport, payments, food, and local systems.",
    link: "/booking",
  },
];

export default function Tours() {
  return (
    <main className="min-h-screen bg-[#F7F3FF] text-[#07081A]">
      <ToursHero />
      <PackageSection />
      <SampleTours />
      <TourCTA />
    </main>
  );
}

function ToursHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <p className="mb-4 inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-800 shadow-sm">
        Small-group cultural experiences in Korea
      </p>

      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-[#07081A] md:text-6xl">
        Choose a tour package that fits your Korea experience.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
        Uri Guide tours are built for CIS tourists and international students who want cultural explanation, practical local guidance, and a comfortable small-group format.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/booking"
          className="rounded-full bg-violet-700 px-7 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-violet-800"
        >
          Start booking
        </Link>

        <Link
          to="/subscription"
          className="rounded-full border border-violet-300 bg-white px-7 py-3 text-center text-sm font-semibold text-violet-800 transition hover:bg-violet-50"
        >
          Add support plan
        </Link>
      </div>
    </section>
  );
}

function PackageSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
          Tour packages
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#07081A]">
          Simple pricing, clear value.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tourPackages.map((tour) => (
          <article
            key={tour.tier}
            className={`rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
              tour.highlighted
                ? "border-violet-700 bg-violet-700 text-white"
                : "border-violet-200 bg-white text-[#07081A]"
            }`}
          >
            {tour.highlighted && (
              <p className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-violet-700">
                Most popular
              </p>
            )}

            <h3 className="text-2xl font-bold">{tour.tier}</h3>

            <p className="mt-3 text-4xl font-extrabold tracking-tight">
              {tour.price}
            </p>

            <p
              className={`mt-2 text-sm ${
                tour.highlighted ? "text-violet-100" : "text-slate-500"
              }`}
            >
              {tour.cost}
            </p>

            <p
              className={`mt-5 leading-7 ${
                tour.highlighted ? "text-violet-100" : "text-slate-700"
              }`}
            >
              {tour.description}
            </p>

            <ul className="mt-6 space-y-3">
              {tour.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs ${
                      tour.highlighted
                        ? "bg-white text-violet-700"
                        : "bg-violet-700 text-white"
                    }`}
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/booking"
              className={`mt-8 inline-flex rounded-full px-5 py-2 text-sm font-semibold transition ${
                tour.highlighted
                  ? "bg-white text-violet-700 hover:bg-violet-50"
                  : "bg-violet-700 text-white hover:bg-violet-800"
              }`}
            >
              Book {tour.tier}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function SampleTours() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
            Example experiences
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#07081A]">
            Tour ideas for the MVP launch.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {sampleTours.map((tour) => (
            <article
              key={tour.title}
              className="rounded-3xl border border-violet-200 bg-[#F7F3FF] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-violet-700">
                {tour.location} · {tour.time}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#07081A]">
                {tour.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-700">{tour.text}</p>

              <Link
                to={tour.link}
                className="mt-6 inline-flex rounded-full bg-violet-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-800"
              >
                View details
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TourCTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-violet-800 to-[#07081A] px-6 py-14 text-center text-white shadow-xl">
        <h2 className="text-4xl font-bold tracking-tight">
          Not sure which tour fits you?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-violet-100">
          Start with the Standard package if you want the best balance of price, cultural explanation, and included food or activity.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/booking"
            className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-50"
          >
            Go to booking
          </Link>

          <Link
            to="/subscription"
            className="inline-flex rounded-full border border-white/30 px-7 py-3 text-sm font-bold text-white transition hover:bg-white/10"
          >
            View support plans
          </Link>
        </div>
      </div>
    </section>
  );
}