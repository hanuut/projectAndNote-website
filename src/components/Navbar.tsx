import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageSquarePlus } from 'lucide-react';

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
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0D141B]/85 border-b border-white/[0.08] transition-all">
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
            onClick={() => scrollTo('canvas')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Universal Canvas
          </button>
          <button
            onClick={() => scrollTo('bento')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Features
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
          <button
            onClick={onOpenEarlyAccess}
            className="hover:text-[#F5C542] transition-colors cursor-pointer flex items-center gap-1"
          >
            <MessageSquarePlus className="w-3.5 h-3.5 text-[#F5C542]" />
            <span>Suggestions</span>
          </button>
        </nav>

        {/* Action Header Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3DD68C]/10 border border-[#3DD68C]/30 text-[11px] font-mono text-[#3DD68C]">
            <span className="w-2 h-2 rounded-full bg-[#3DD68C] animate-pulse"></span>
            <span>LIVE ON GOOGLE PLAY</span>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.projectandnote.project_note"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-[#F5C542] hover:bg-[#FFE072] text-[#0D141B] text-xs font-bold font-mono tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(245,197,66,0.35)] hover:shadow-[0_0_30px_rgba(245,197,66,0.55)] cursor-pointer flex items-center gap-1.5"
          >
            <span>GET APP</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

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
            onClick={() => scrollTo('canvas')}
            className="block w-full text-left py-2 text-[#94A8BA] hover:text-white cursor-pointer"
          >
            01. Universal Canvas
          </button>
          <button
            onClick={() => scrollTo('bento')}
            className="block w-full text-left py-2 text-[#94A8BA] hover:text-white cursor-pointer"
          >
            02. Studio Capabilities
          </button>
          <button
            onClick={() => scrollTo('privacy')}
            className="block w-full text-left py-2 text-[#3DD68C] cursor-pointer"
          >
            03. 100% Offline Architecture
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="block w-full text-left py-2 text-[#94A8BA] hover:text-white cursor-pointer"
          >
            04. FAQ
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEarlyAccess();
            }}
            className="block w-full text-left py-2 text-[#F5C542] cursor-pointer flex items-center gap-2"
          >
            <MessageSquarePlus className="w-4 h-4" />
            05. Suggest a Feature / Feedback
          </button>
          <div className="pt-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.projectandnote.project_note"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-glitch-primary py-3 text-xs flex items-center justify-center gap-1.5"
            >
              <span>DOWNLOAD ON GOOGLE PLAY</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}