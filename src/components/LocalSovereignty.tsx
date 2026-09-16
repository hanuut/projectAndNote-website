import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function LocalSovereignty({ onOpenEarlyAccess }: { onOpenEarlyAccess: () => void }) {
  return (
    <section id="privacy" className="py-24 sm:py-36 px-4 sm:px-6 relative z-20 border-t border-white/5 bg-[#090E13]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3DD68C]/10 border border-[#3DD68C]/30 text-xs font-mono text-[#3DD68C] uppercase font-bold tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% LOCAL-FIRST SOVEREIGNTY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            100% Local-First. Zero Tracking. Zero Cloud Latency.
          </h2>
          <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
            Your thoughts, voice memos, reading habits, and documents belong to you. projectAndNote operates entirely on an offline-first SQLite database running directly on your hardware. No accounts. No servers. No telemetry.
          </p>
        </div>

        {/* 3 Metric Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl fluid-glass border border-white/15 text-center space-y-3">
            <div className="text-5xl font-black font-mono text-[#F5C542] tracking-tight">0ms</div>
            <div className="text-lg font-bold text-white">Cloud Latency</div>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Instantly open notes, run queries, and switch views with zero spinner delays or network round-trips.
            </p>
          </div>

          <div className="p-8 rounded-3xl fluid-glass border border-white/15 text-center space-y-3">
            <div className="text-5xl font-black font-mono text-[#3DD68C] tracking-tight">100%</div>
            <div className="text-lg font-bold text-white">Device Sandbox Storage</div>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Embedded SQLite architecture keeps text, voice memos, and PDFs isolated inside your local device sandbox.
            </p>
          </div>

          <div className="p-8 rounded-3xl fluid-glass border border-white/15 text-center space-y-3">
            <div className="text-5xl font-black font-mono text-white tracking-tight">0</div>
            <div className="text-lg font-bold text-white">Analytics Trackers</div>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Zero user telemetry. We do not track screen views, typing speed, or document contents. Ever.
            </p>
          </div>
        </div>

        {/* CTA Terminal Card */}
        <div className="p-8 sm:p-14 rounded-[36px] bg-gradient-to-r from-[#172330] via-[#1C2B3A] to-[#121B24] border border-[#F5C542]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Ready to stop capturing and start finishing?
            </h3>
            <p className="text-sm sm:text-base text-[#94A8BA] leading-relaxed">
              Capture now. Enrich later. Execute today with projectAndNote on Android.
            </p>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.projectandnote.project_note"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glitch-primary py-4 px-8 text-sm cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>DOWNLOAD FOR ANDROID</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}