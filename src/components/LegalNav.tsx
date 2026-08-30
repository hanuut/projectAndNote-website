import React from "react";
import { Link } from "react-router-dom";

export default function LegalNav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0D141B]/80 border-b border-white/10 h-16 flex items-center px-6 selection:bg-[#F5C542] selection:text-[#0D141B]">
      <div className="max-w-3xl mx-auto w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-5 h-5 rounded bg-[#F5C542] group-hover:bg-white transition-colors" />
          <span className="text-sm font-bold tracking-widest text-white">
            projectAndNote
          </span>
        </Link>
        <Link
          to="/"
          className="text-sm font-medium text-[#94A8BA] hover:text-white transition-colors"
        >
          &larr; Back to Home
        </Link>
      </div>
    </nav>
  );
}
