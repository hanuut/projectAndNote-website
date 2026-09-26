import React, { useState } from 'react';
import PerspectiveCard from './PerspectiveCard';
import { Search, FileText, BookOpen, Share2, Globe, SunMoon } from 'lucide-react';

export default function SupportingCapabilities() {
  const [activeTheme, setActiveTheme] = useState<'dark' | 'light'>('dark');

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 relative z-20 border-t border-white/5 bg-[#0A1017]">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C542]/10 border border-[#F5C542]/30 text-xs font-mono text-[#F5C542] uppercase font-bold tracking-widest">
            SYSTEM UTILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Built for everyday reliability.
          </h2>
          <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
            Fast global search, multi-format export options, 15 built-in languages, and a coherent Light/Dark theme system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Global Search */}
          <PerspectiveCard glowColor="gold" className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Instant Search</h4>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Full-text local database indexing queries across note bodies, checklist items, tags, and project titles instantly.
            </p>
          </PerspectiveCard>

          {/* 2. Multi-format Export */}
          <PerspectiveCard glowColor="mixed" className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#3DD68C]/10 text-[#3DD68C] flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Multi-Format Export</h4>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Export notes as formatted Markdown (.md), clean multi-page styled PDFs, or high-resolution graphic social cards.
            </p>
          </PerspectiveCard>

          {/* 3. 15 Languages */}
          <PerspectiveCard glowColor="gold" className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">15 Languages Built-In</h4>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Complete native localization across 15 world languages with support for right-to-left scripts.
            </p>
          </PerspectiveCard>

          {/* 4. Light / Dark / System Theme */}
          <PerspectiveCard glowColor="mixed" className="p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#A855F7]/10 text-[#C084FC] flex items-center justify-center">
              <SunMoon className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white">Light, Dark & System Themes</h4>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Seamlessly toggle between the signature Amber Gold Dark mode and Vibrant Purple Light mode, or follow Android system settings.
            </p>
          </PerspectiveCard>
        </div>
      </div>
    </section>
  );
}