import React from "react";
import { Link } from "react-router-dom";

export default function LegalNav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#090E13]/90 border-b border-white/10 h-16 flex items-center px-6 selection:bg-[#F5C542] selection:text-[#090E13]">
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/pn_logo.svg"
            alt="projectAndNote Logo"
            className="w-7 h-7 object-contain group-hover:scale-105 transition-transform"
            width="28"
            height="28"
          />
          <span className="text-sm font-bold tracking-widest text-white">
            projectAndNote
          </span>
        </Link>
        <Link
          to="/"
          className="text-xs font-mono font-medium text-[#94A8BA] hover:text-white transition-colors flex items-center gap-1"
        >
          &larr; Back to Overview
        </Link>
      </div>
    </nav>
  );
}