import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B0E] py-14 px-6 relative z-20 text-[#94A8BA]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
          <div className="flex items-center gap-3">
            <img
              src="/pn_logo.svg"
              alt="projectAndNote Logo"
              className="w-7 h-7 object-contain"
              width="28"
              height="28"
            />
            <span className="text-white font-black tracking-tight text-lg">
              projectAndNote
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3DD68C]/10 border border-[#3DD68C]/30 text-[#3DD68C]">
              Live on Google Play
            </span>
          </div>
          <p className="text-xs font-mono text-[#94A8BA]/70 max-w-sm">
            Capture the thought. Structure the work. Lock in. Get it done.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-widest">
          <a
            href="https://play.google.com/store/apps/details?id=com.projectandnote.project_note"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5C542] hover:text-white transition-colors flex items-center gap-1 font-bold"
          >
            <span>Google Play</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <Link to="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
          <a
            href="mailto:contact.hanuut@gmail.com"
            className="hover:text-[#F5C542] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-[#94A8BA]/50">
        <div>&copy; 2026 projectAndNote. All rights reserved.</div>
        <div>100% Local-First Architecture · SQLite Engine</div>
      </div>
    </footer>
  );
}