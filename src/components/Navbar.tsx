import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenEarlyAccess: () => void;
}

export default function Navbar({ onOpenEarlyAccess }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#090E13]/85 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Brand with pn_logo.svg */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/pn_logo.svg"
            alt="projectAndNote Logo"
            className="w-8 h-8 md:w-9 md:h-9 object-contain group-hover:scale-105 transition-transform"
            width="36"
            height="36"
          />
          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-white flex items-center gap-1.5">
              projectAndNote
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F5C542] animate-pulse"></span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-[#94A8BA] uppercase hidden sm:inline-block">
              Focus & Notes
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-[#94A8BA]">
          <button
            onClick={() => scrollTo('philosophy')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Philosophy
          </button>
          <button
            onClick={() => scrollTo('capture')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Universal Canvas
          </button>
          <button
            onClick={() => scrollTo('focus')}
            className="hover:text-[#F5C542] transition-colors cursor-pointer"
          >
            Focus Sprints
          </button>
          <button
            onClick={() => scrollTo('execution')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Deadlines & Alarms
          </button>
          <button
            onClick={() => scrollTo('privacy')}
            className="hover:text-[#3DD68C] transition-colors cursor-pointer"
          >
            100% Offline
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Action Header Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#F5C542]">
            <span className="w-2 h-2 rounded-full bg-[#F5C542] animate-ping opacity-75"></span>
            <span>PRE-RELEASE</span>
          </div>

          <button
            onClick={onOpenEarlyAccess}
            className="px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-[#F5C542] hover:bg-[#FFE072] text-[#090E13] text-xs font-bold font-mono tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(245,197,66,0.3)] hover:shadow-[0_0_30px_rgba(245,197,66,0.5)] cursor-pointer"
          >
            Early Access
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0D141B] px-6 py-6 space-y-4 font-mono text-sm uppercase tracking-wider">
          <button
            onClick={() => scrollTo('philosophy')}
            className="block w-full text-left py-2 text-[#94A8BA] hover:text-white cursor-pointer"
          >
            01. Philosophy
          </button>
          <button
            onClick={() => scrollTo('capture')}
            className="block w-full text-left py-2 text-[#94A8BA] hover:text-white cursor-pointer"
          >
            02. Universal Canvas
          </button>
          <button
            onClick={() => scrollTo('focus')}
            className="block w-full text-left py-2 text-[#F5C542] cursor-pointer"
          >
            03. Focus Sprints & Energy Ball
          </button>
          <button
            onClick={() => scrollTo('execution')}
            className="block w-full text-left py-2 text-[#94A8BA] hover:text-white cursor-pointer"
          >
            04. Full-Screen Alarms
          </button>
          <button
            onClick={() => scrollTo('privacy')}
            className="block w-full text-left py-2 text-[#3DD68C] cursor-pointer"
          >
            05. 100% Offline Architecture
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="block w-full text-left py-2 text-[#94A8BA] hover:text-white cursor-pointer"
          >
            06. FAQ
          </button>
          <div className="pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEarlyAccess();
              }}
              className="w-full btn-glitch py-3 text-xs"
            >
              REQUEST EARLY ACCESS
            </button>
          </div>
        </div>
      )}
    </header>
  );
}