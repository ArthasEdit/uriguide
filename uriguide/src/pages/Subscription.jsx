import React from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "₩14,900",
    description: "Basic weekly help for simple questions and arrival guidance.",
    features: [
      "Chat support",
      "SIM guidance",
      "Transport help",
      "Basic daily-life questions",
    ],
  },
  {
    name: "Plus",
    price: "₩19,900",
    description: "Better for students who need more regular support in Korea.",
    features: [
      "Everything in Starter",
      "Banking guidance",
      "Food and shopping help",
      "Priority chat response",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₩24,900",
    description: "For newcomers who want deeper support during their first weeks.",
    features: [
      "Everything in Plus",
      "More detailed personal guidance",
      "Document/location help",
      "Tour bundle support",
    ],
  },
];

const supportAreas = [
  {
    title: "SIM setup",
    text: "Guidance on mobile plans, SIM options, and basic setup steps.",
  },
  {
    title: "Banking",
    text: "Help understanding bank visits, required documents, and common procedures.",
  },
  {
    title: "Daily life",
    text: "Support with transport, food, shopping, local systems, and basic cultural questions.",
  },
];

export default function Subscription() {
  return (
    <main className="min-h-screen bg-[#F7F3FF] text-[#07081A]">
      <SubscriptionHero />
      <PlansSection />
      <SupportAreas />
      <BundleCTA />
    </main>
  );
}

function SubscriptionHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <p className="mb-4 inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-800 shadow-sm">
        Weekly support for students and newcomers
      </p>

      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-[#07081A] md:text-6xl">
        Practical Korea support after the tour ends.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
        Uri Guide subscription support helps international students and newcomers with SIM cards, banking, transport, daily-life questions, and chat guidance.
      </p>

      <div className="mt-10 rounded-[2rem] border border-violet-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
          Bundle discount
        </p>
        <h2 className="mt-3 text-3xl font-bold text-[#07081A]">
          Get 30% off when purchased with a tour.
        </h2>
        <p className="mt-3 leading-7 text-slate-700">
          This makes the support plan easier to introduce during the MVP stage.
        </p>
      </div>
    </section>
  );
}

function PlansSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
          Subscription plans
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#07081A]">
          Choose your weekly support level.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
              plan.highlighted
                ? "border-violet-700 bg-violet-700 text-white"
                : "border-violet-200 bg-white text-[#07081A]"
            }`}
          >
            {plan.highlighted && (
              <p className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-violet-700">
                Recommended
              </p>
            )}

            <h3 className="text-2xl font-bold">{plan.name}</h3>

            <p className="mt-3 text-4xl font-extrabold tracking-tight">
              {plan.price}
              <span
                className={`ml-1 text-sm font-semibold ${
                  plan.highlighted ? "text-violet-100" : "text-slate-500"
                }`}
              >
                / week
              </span>
            </p>

            <p
              className={`mt-5 leading-7 ${
                plan.highlighted ? "text-violet-100" : "text-slate-700"
              }`}
            >
              {plan.description}
            </p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                      plan.highlighted
                        ? "bg-white text-violet-700"
                        : "bg-violet-700 text-white"
                    }`}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              to="/booking"
              className={`mt-8 inline-flex rounded-full px-5 py-2 text-sm font-semibold transition ${
                plan.highlighted
                  ? "bg-white text-violet-700 hover:bg-violet-50"
                  : "bg-violet-700 text-white hover:bg-violet-800"
              }`}
            >
              Choose {plan.name}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function SupportAreas() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
            What we help with
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#07081A]">
            Support for the confusing parts of arrival.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {supportAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-violet-200 bg-[#F7F3FF] p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-[#07081A]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-700">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BundleCTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-violet-800 to-[#07081A] px-6 py-14 text-center text-white shadow-xl">
        <h2 className="text-4xl font-bold tracking-tight">
          Combine tour + support for a smoother start.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-violet-100">
          Book a cultural experience first, then add weekly support with a 30% discount.
        </p>

        <Link
          to="/booking"
          className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-50"
        >
          Book with support
        </Link>
      </div>
    </section>
  );
}