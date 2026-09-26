import React from 'react';
import PerspectiveCard from './PerspectiveCard';
import { BookOpen, BookmarkCheck, FileText, ArrowRight } from 'lucide-react';

export default function ReadSection() {
  return (
    <section id="read" className="py-24 sm:py-32 px-4 sm:px-6 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8] uppercase font-bold tracking-widest">
            03 · READ
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            A private PDF shelf connected to your notes.
          </h2>
          <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
            Import PDF books, research papers, and technical manuals directly into your local library. The app generates covers on-device, tracks your page progress, and lets you link exact book citations into your document notes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Bookshelf Preview */}
          <div className="lg:col-span-7 rounded-3xl fluid-glass-elevated p-6 sm:p-8 border border-white/15 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="text-xs font-mono text-white font-bold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#38BDF8]" />
                Local PDF Library & Reader
              </div>
              <span className="text-[11px] font-mono text-[#3DD68C]">Automatic Page Saving</span>
            </div>

            {/* Book Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#172330] border border-white/10 space-y-3">
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-tr from-[#0F1722] to-[#25364A] border border-white/10 flex flex-col justify-between p-3">
                  <span className="text-[9px] font-mono text-[#38BDF8] uppercase">PDF EBOOK</span>
                  <div className="text-xs font-bold text-white">Quantum Physics & Systems</div>
                  <span className="text-[9px] font-mono text-white/50">210 pages</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono text-[#94A8BA]">
                    <span>Progress:</span>
                    <span className="text-white font-bold">Page 142 (68%)</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-[#38BDF8] rounded-full" style={{ width: '68%' }} />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#172330] border border-white/10 space-y-3">
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-tr from-[#0F1722] to-[#2A2338] border border-white/10 flex flex-col justify-between p-3">
                  <span className="text-[9px] font-mono text-[#F5C542] uppercase">RESEARCH PAPER</span>
                  <div className="text-xs font-bold text-white">Local-First Storage Architectures</div>
                  <span className="text-[9px] font-mono text-white/50">45 pages</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono text-[#94A8BA]">
                    <span>Progress:</span>
                    <span className="text-white font-bold">Page 38 (84%)</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-[#F5C542] rounded-full" style={{ width: '84%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Book Reference Workflow */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Cite pages directly in your notes
            </h3>
            <p className="text-sm text-[#94A8BA] leading-relaxed">
              When taking research notes, insert a <strong>Book Reference block</strong>. Tap the block at any time to jump straight to the exact page inside the in-app PDF reader without losing your reading position.
            </p>

            <div className="p-4 rounded-2xl fluid-glass border border-white/10 space-y-3">
              <div className="text-xs font-mono text-[#38BDF8] font-bold flex items-center gap-2">
                <BookmarkCheck className="w-4 h-4" />
                In-Note Citation Block
              </div>
              <p className="text-xs text-white/90 italic pl-3 border-l-2 border-[#38BDF8]">
                "As demonstrated on page 142, local storage guarantees zero round-trip latency for embedded device queries."
              </p>
              <div className="text-[10px] font-mono text-[#94A8BA]">
                Ref: Quantum Physics & Systems.pdf · Tap to open reader
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}