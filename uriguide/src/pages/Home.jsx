import React from "react";
import { Link } from "react-router-dom";

const tours = [
  {
    tier: "Basic",
    price: "₩44,900",
    detail: "Cultural explanation without meal",
  },
  {
    tier: "Standard",
    price: "₩53,900",
    detail: "Includes meal or local activity",
  },
  {
    tier: "Premium",
    price: "₩59,900",
    detail: "Deeper experience with added support",
  },
];

const features = [
  "Small-group cultural experiences",
  "Russian/CIS-friendly guidance",
  "Local explanations beyond translation",
  "Optional food and activity add-ons",
];

const steps = [
  {
    number: "01",
    title: "Choose your experience",
    text: "Pick a cultural tour based on your time, budget, and interests.",
  },
  {
    number: "02",
    title: "Join a small group",
    text: "Tours are designed for 8–12 people, making them social but still personal.",
  },
  {
    number: "03",
    title: "Understand Korea better",
    text: "Get cultural context, practical tips, and local explanations from guides who know both sides.",
  },
];

export default function UriGuideHomepage() {
  return (
    <main className="min-h-screen bg-[#F7F3FF] text-[#07081A]">
      <Hero />
      <WhyUriGuide />
      <TourPricingPreview />
      <HowItWorks />
      <SubscriptionPreview />
      <FinalCTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
      <div>
        <p className="mb-4 inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-800 shadow-sm">
          Cultural tours in Korea for CIS travelers and international students
        </p>

        <h1 className="max-w-3xl text-5xl font-extrabold tracking-tight text-[#07081A] md:text-6xl">
          Experience Korea with people who understand your language and culture.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          Uri Guide offers small-group cultural experiences in Korea with practical explanations, local context, and optional food or activity packages.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/tours"
            className="rounded-full bg-violet-700 px-7 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-violet-800"
          >
            Explore tours
          </Link>

          <Link
            to="/subscription"
            className="rounded-full border border-violet-300 bg-white px-7 py-3 text-center text-sm font-semibold text-violet-800 transition hover:bg-violet-50"
          >
            Student support
          </Link>
        </div>

        <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-violet-200 pt-6">
          <Stat value="8–12" label="people per group" />
          <Stat value="₩44.9k+" label="tour pricing" />
          <Stat value="30%" label="support bundle discount" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-300/40 to-purple-100 blur-2xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-violet-200 bg-white p-5 shadow-xl">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-violet-800 to-[#07081A] p-6 text-white">
            <p className="text-sm text-violet-100">Featured experience</p>
            <h2 className="mt-3 text-3xl font-bold">Seoul Culture Walk</h2>
            <p className="mt-4 text-sm leading-6 text-violet-100">
              A small-group tour with cultural explanation, neighborhood stories, and optional Korean meal experience.
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-2xl bg-violet-50 p-4 text-sm font-medium text-slate-700"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-700 text-xs text-white">
                  ✓
                </span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-2xl font-bold text-[#07081A]">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  );
}

function WhyUriGuide() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
            Why Uri Guide
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#07081A]">
            Not just translation. Cultural navigation.
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            Many visitors can find places online. The harder part is understanding what is happening, what to expect, and how to move through Korea with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <InfoCard
            title="Built for CIS travelers"
            text="Designed around language comfort, cultural familiarity, and practical travel needs."
          />
          <InfoCard
            title="Small-group format"
            text="Groups of 8–12 keep the experience affordable, social, and easier to manage."
          />
          <InfoCard
            title="Local-life explanations"
            text="Guides explain etiquette, food culture, transport, payments, and hidden context tourists often miss."
          />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, text }) {
  return (
    <article className="rounded-3xl border border-violet-100 bg-[#F7F3FF] p-6 shadow-sm">
      <h3 className="text-xl font-bold text-[#07081A]">{title}</h3>
      <p className="mt-3 leading-7 text-slate-700">{text}</p>
    </article>
  );
}

function TourPricingPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
            Tour packages
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#07081A]">
            Choose the level that fits your day.
          </h2>
        </div>

        <Link
          to="/tours"
          className="text-sm font-bold text-violet-700 underline underline-offset-4 hover:text-violet-900"
        >
          View all tours
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tours.map((tour) => (
          <article
            key={tour.tier}
            className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#07081A]">{tour.tier}</h3>
            <p className="mt-3 text-4xl font-extrabold tracking-tight text-violet-700">
              {tour.price}
            </p>
            <p className="mt-4 leading-7 text-slate-700">{tour.detail}</p>

            <Link
              to="/booking"
              className="mt-6 inline-flex rounded-full bg-violet-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-violet-800"
            >
              Book this tier
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="bg-gradient-to-br from-[#07081A] via-violet-950 to-violet-800 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
          How it works
        </p>

        <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight">
          Simple booking, guided experience, clearer Korea.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur"
            >
              <p className="text-sm font-bold text-violet-200">{step.number}</p>
              <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-7 text-violet-100">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubscriptionPreview() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
          Weekly support
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#07081A]">
          Daily-life help for students and newcomers.
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-700">
          Subscription support helps with SIM setup, banking, daily-life questions, and chat guidance. Customers who bundle it with a tour receive a 30% discount.
        </p>
      </div>

      <div className="rounded-[2rem] border border-violet-100 bg-white p-6 shadow-sm">
        <div className="grid gap-4">
          <SupportRow name="Starter" price="₩14,900 / week" />
          <SupportRow name="Plus" price="₩19,900 / week" />
          <SupportRow name="Premium" price="₩24,900 / week" />
        </div>
      </div>
    </section>
  );
}

function SupportRow({ name, price }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-violet-50 p-4">
      <p className="font-bold text-[#07081A]">{name}</p>
      <p className="text-sm font-semibold text-violet-700">{price}</p>
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-violet-800 to-[#07081A] px-6 py-14 text-center text-white shadow-xl">
        <h2 className="text-4xl font-bold tracking-tight">
          Ready to explore Korea with Uri Guide?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-violet-100">
          Start with a small-group cultural experience, then add weekly support if you need practical help after the tour.
        </p>

        <Link
          to="/booking"
          className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-bold text-violet-800 transition hover:bg-violet-50"
        >
          Start booking
        </Link>
      </div>
    </section>
  );
}