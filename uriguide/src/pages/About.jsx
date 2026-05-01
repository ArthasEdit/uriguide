import React from "react";

const values = [
  {
    title: "Cultural bridge",
    text: "Uri Guide helps visitors understand Korea through people who understand both local life and foreigner challenges.",
  },
  {
    title: "Small-group comfort",
    text: "Tours are designed for 8–12 people so the experience stays affordable, social, and manageable.",
  },
  {
    title: "Practical support",
    text: "Beyond sightseeing, Uri Guide helps with daily-life questions such as SIM cards, banking, transport, and local systems.",
  },
];

const audiences = [
  "CIS tourists visiting Korea",
  "International students arriving in Korea",
  "Newcomers who need cultural and practical guidance",
];

export default function About() {
  return (
    <main className="min-h-screen bg-violet-50 text-slate-900">
      <AboutHero />
      <MissionSection />
      <AudienceSection />
      <AboutCTA />
    </main>
  );
}

function AboutHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <p className="mb-4 inline-flex rounded-full border border-violet-300 bg-white px-7 py-3 text-sm font-semibold text-violet-800 transition hover:bg-violet-50">
        About Uri Guide
      </p>

      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-[#07081A] md:text-6xl">
        Helping visitors experience Korea with context, comfort, and confidence.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-750">
        Uri Guide is built for CIS travelers and international students who want more than basic translation. We explain culture, daily systems, and local experiences in a way that feels understandable.
      </p>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Our mission
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#07081A]">
            Make Korea easier to understand.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-750">
            Korea can be exciting, but also confusing for first-time visitors and newcomers. Uri Guide turns cultural confusion into clear, guided experiences.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-3xl border border-violet-100 bg-violet-50 p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-[#07081A]">
                {value.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-750">{value.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-500">
          Who we serve
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#07081A]">
          Built for people who need both travel and life guidance.
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-750">
          Our first focus is CIS tourists. Our secondary audience is international students who need help adjusting to Korea.
        </p>
      </div>

      <div className="rounded-[2rem] border border-violet-100 bg-white p-6 shadow-sm">
        <div className="grid gap-4">
          {audiences.map((audience) => (
            <div
              key={audience}
              className="flex items-center gap-3 rounded-2xl bg-violet-50 p-4 text-sm font-medium text-violet-700"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#07081A] text-xs text-white">
                ✓
              </span>
              {audience}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="px-6 pb-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#07081A] px-6 py-14 text-center text-white shadow-xl">
        <h2 className="text-4xl font-bold tracking-tight">
          Start with a cultural experience.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
          Explore Korea in a small group, then add support if you need help with daily-life questions.
        </p>
        <a
          href="/tours"
          className="mt-8 inline-flex rounded-full border border-violet-300 bg-white px-7 py-3 text-sm font-semibold text-violet-800 transition hover:bg-violet-100"
        >
          Explore tours
        </a>
      </div>
    </section>
  );
}