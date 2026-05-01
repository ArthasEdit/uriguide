import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold text-[#07081A]">Uri Guide</h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-700">
            CIS-friendly cultural experiences and practical support services in Korea.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
            Pages
          </h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-700">
            <Link to="/tours" className="hover:text-violet-700">Tours</Link>
            <Link to="/subscription" className="hover:text-violet-700">Support</Link>
            <Link to="/about" className="hover:text-violet-700">About</Link>
            <Link to="/booking" className="hover:text-violet-700">Booking</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-violet-700">
            MVP stage
          </h3>
          <p className="mt-4 text-sm leading-6 text-slate-700">
            Current website collects booking interest before backend, payment, or account systems are added.
          </p>
        </div>
      </div>
    </footer>
  );
}