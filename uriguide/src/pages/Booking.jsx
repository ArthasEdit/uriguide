import React, { useState } from "react";
import { Link } from "react-router-dom";

const tourOptions = ["Basic", "Standard", "Premium"];
const supportOptions = ["No support", "Starter", "Plus", "Premium"];

export default function Booking() {
  return (
    <main className="min-h-screen bg-[#F7F3FF] text-[#07081A]">
      <BookingHero />
      <BookingFormSection />
    </main>
  );
}

function BookingHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <p className="mb-4 inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-800 shadow-sm">
        Book your Uri Guide experience
      </p>

      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-[#07081A] md:text-6xl">
        Tell us what kind of Korea experience you want.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
        Fill out the form below. For the MVP stage, this can collect booking
        requests before connecting payment or backend systems.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          to="/tours"
          className="rounded-full bg-violet-700 px-7 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-violet-800"
        >
          View tours
        </Link>

        <Link
          to="/subscription"
          className="rounded-full border border-violet-300 bg-white px-7 py-3 text-center text-sm font-semibold text-violet-800 transition hover:bg-violet-50"
        >
          View support plans
        </Link>
      </div>
    </section>
  );
}

function BookingFormSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 md:grid-cols-[1fr_0.8fr]">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-violet-100 bg-white p-6 shadow-sm"
      >
        <div className="grid gap-5">
          <Input label="Full name" type="text" placeholder="Enter your name" />
          <Input
            label="Email or phone"
            type="text"
            placeholder="example@email.com / Kakao / WhatsApp"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <Select label="Tour package" options={tourOptions} />
            <Select label="Weekly support" options={supportOptions} />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Input label="Preferred date" type="date" />
            <Input label="Group size" type="number" placeholder="8–12 people" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#07081A]">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell us about your interests, language preference, food restrictions, or arrival situation."
              className="w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-700"
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-violet-700 px-7 py-3 text-sm font-bold text-white shadow-md transition hover:bg-violet-800"
          >
            Submit booking request
          </button>

          {submitted && (
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4 text-sm font-medium text-violet-800">
              Booking request received on the front-end. Later, we can connect
              this to Google Sheets, email, Firebase, Supabase, or a backend.
            </div>
          )}
        </div>
      </form>

      <aside className="rounded-[2rem] bg-gradient-to-br from-violet-800 to-[#07081A] p-6 text-white shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">
          Booking summary
        </p>

        <h2 className="mt-3 text-3xl font-bold">
          What happens after you submit?
        </h2>

        <div className="mt-8 space-y-5">
          <Step number="01" title="We review your request" />
          <Step number="02" title="We confirm tour details and availability" />
          <Step number="03" title="You receive final price and meeting info" />
        </div>

        <div className="mt-10 rounded-3xl bg-white/10 p-5">
          <h3 className="font-bold">Need to compare options?</h3>
          <p className="mt-2 text-sm leading-6 text-violet-100">
            You can check tour packages or weekly support plans before sending
            your request.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              to="/tours"
              className="rounded-full bg-white px-5 py-2 text-center text-sm font-bold text-violet-800 transition hover:bg-violet-50"
            >
              Compare tour packages
            </Link>

            <Link
              to="/subscription"
              className="rounded-full border border-white/30 px-5 py-2 text-center text-sm font-bold text-white transition hover:bg-white/10"
            >
              Compare support plans
            </Link>
          </div>
        </div>
      </aside>
    </section>
  );
}

function Input({ label, type, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#07081A]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-700"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-[#07081A]">
        {label}
      </label>
      <select className="w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-700">
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

function Step({ number, title }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-violet-800">
        {number}
      </span>
      <p className="pt-2 text-sm font-semibold text-violet-100">{title}</p>
    </div>
  );
}