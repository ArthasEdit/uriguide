import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo2.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-violet-100 bg-violet-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Uri Guide logo" className="h-18 w-auto" />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <Link to="/tours" className="hover:text-violet-700">Tours</Link>
          <Link to="/subscription" className="hover:text-violet-700">Support</Link>
          <Link to="/about" className="hover:text-violet-700">About</Link>
          <Link to="/booking" className="hover:text-violet-700">Booking</Link>
        </div>

        <Link
          to="/booking"
          className="rounded-full bg-violet-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-800"
        >
          Book now
        </Link>
      </nav>
    </header>
  );
}