import React, { useState } from 'react';
import PerspectiveCard from './PerspectiveCard';
import { 
  PenTool, 
  Layers, 
  Grid3X3, 
  StickyNote, 
  Square, 
  Type, 
  Eraser, 
  Undo2, 
  Redo2, 
  Kanban, 
  ListOrdered, 
  CheckCircle2 
} from 'lucide-react';

export default function BuildSection() {
  const [gridMode, setGridMode] = useState<'dots' | 'lines' | 'none'>('dots');

  return (
    <section id="build" className="py-24 sm:py-32 px-4 sm:px-6 relative z-20 border-t border-white/5 bg-[#0A1017]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/30 text-xs font-mono text-[#C084FC] uppercase font-bold tracking-widest">
            02 · BUILD
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Structure projects. Sketch on Whiteboard 2.0.
          </h2>
          <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
            Organize multi-step initiatives with Project Lists and Kanban Phase Boards. When visual thinking is required, open Whiteboard Studio 2.0—a landscape-first 16:9 canvas with vector drawing and layer controls.
          </p>
        </div>

        {/* Deep Dive 1: Whiteboard Studio 2.0 */}
        <div className="rounded-3xl fluid-glass-elevated p-6 sm:p-10 border border-white/15 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[11px] font-mono font-bold text-[#F5C542] uppercase tracking-widest">
                CREATIVE ENGINE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                Whiteboard Studio 2.0
              </h3>
              <p className="text-xs sm:text-sm text-[#94A8BA] mt-1">
                Fixed 1920×1080 (16:9) canonical coordinate system. Draw, shape, erase, and organize in layers.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-[#94A8BA]/70 mr-1">Grid:</span>
              {(['dots', 'lines', 'none'] as const).map(mode => (
                <button
                  key={mode}
                  onClick={() => setGridMode(mode)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono capitalize cursor-pointer transition-colors ${
                    gridMode === mode ? 'bg-[#F5C542] text-black font-bold' : 'bg-white/5 text-white/70 hover:text-white'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* 1920x1080 Interactive Landscape Canvas Frame */}
          <div className="relative w-full aspect-video rounded-2xl bg-[#0F1722] border border-white/15 overflow-hidden shadow-2xl flex flex-col justify-between p-4 sm:p-6">
            {/* Background Grid simulation */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  gridMode === 'dots'
                    ? 'radial-gradient(#F5C542 1px, transparent 1px)'
                    : gridMode === 'lines'
                    ? 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)'
                    : 'none',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Top Toolbar Simulation */}
            <div className="relative z-10 flex items-center justify-between bg-[#111C26]/90 backdrop-blur-md rounded-xl p-2 border border-white/10 text-xs font-mono text-white">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5C542]" />
                <span className="font-bold hidden sm:inline-block">1920 × 1080 Canvas</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-3 text-xs">
                <button className="p-1.5 rounded hover:bg-white/10" title="Undo"><Undo2 className="w-3.5 h-3.5" /></button>
                <button className="p-1.5 rounded hover:bg-white/10" title="Redo"><Redo2 className="w-3.5 h-3.5" /></button>
                <span className="text-white/30">|</span>
                <span className="text-[#3DD68C]">100% Vector</span>
              </div>
            </div>

            {/* Canvas Elements Simulation */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center my-auto">
              {/* Sticky Note */}
              <div className="p-4 rounded-xl bg-[#F5C542] text-[#0D141B] shadow-xl transform -rotate-1 border border-black/10">
                <div className="text-[10px] font-mono font-bold uppercase opacity-70 mb-1">Sticky Note Block</div>
                <div className="text-xs font-bold leading-snug">
                  "Map user flow from Raw Capture directly into Kanban execution phases."
                </div>
              </div>

              {/* Vector Geometry & Stroke Slicing */}
              <div className="p-4 rounded-xl bg-white/[0.04] border border-white/15 backdrop-blur-md text-center space-y-2">
                <div className="text-[10px] font-mono text-[#C084FC] uppercase font-bold">Vector Stroke Engine</div>
                <div className="text-xs text-white">
                  Continuous geometric stroke-splitting eraser slices exact vectors cleanly.
                </div>
                <div className="inline-flex items-center gap-1 text-[10px] font-mono text-[#3DD68C] bg-[#3DD68C]/10 px-2 py-0.5 rounded">
                  Z-Order Layers Enabled
                </div>
              </div>

              {/* Geometric Shape Entity */}
              <div className="p-4 rounded-xl bg-[#172330] border border-[#F5C542]/40 text-left space-y-1">
                <div className="text-[10px] font-mono text-[#F5C542]">SHAPE ELEMENT</div>
                <div className="text-xs font-bold text-white">16:9 Dashboard Snapshots</div>
                <div className="text-[11px] text-[#94A8BA]">Disk-cached PNG previews for instant grid loading.</div>
              </div>
            </div>

            {/* Bottom Tools bar */}
            <div className="relative z-10 self-center bg-[#111C26]/90 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10 flex items-center gap-4 text-xs text-[#94A8BA]">
              <span className="flex items-center gap-1 text-white font-bold"><PenTool className="w-3.5 h-3.5 text-[#F5C542]" /> Pen</span>
              <span className="flex items-center gap-1"><Eraser className="w-3.5 h-3.5" /> Vector Eraser</span>
              <span className="flex items-center gap-1"><Square className="w-3.5 h-3.5" /> Shapes</span>
              <span className="flex items-center gap-1"><StickyNote className="w-3.5 h-3.5" /> Sticky Note</span>
              <span className="flex items-center gap-1"><Type className="w-3.5 h-3.5" /> Text</span>
              <span className="flex items-center gap-1"><Layers className="w-3.5 h-3.5" /> Layers</span>
            </div>
          </div>
        </div>

        {/* Deep Dive 2: Project Lists & Kanban Phase Boards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PerspectiveCard glowColor="gold" className="p-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-[#F5C542]/15 text-[#F5C542] border border-[#F5C542]/30">
                ORGANIZATION
              </span>
              <ListOrdered className="w-5 h-5 text-[#F5C542]" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Simple Project Lists
            </h3>
            <p className="text-sm text-[#94A8BA] leading-relaxed">
              Group notes and tasks under structured project headers. Filter by tags, priority score, and target dates to instantly review what needs your immediate attention.
            </p>
            <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-2 text-xs font-mono">
              <div className="flex justify-between text-white"><span>Project Alpha // Launch</span><span className="text-[#3DD68C]">Active</span></div>
              <div className="flex justify-between text-[#94A8BA]"><span>Studio Renovation</span><span className="text-[#F5C542]">In Progress</span></div>
            </div>
          </PerspectiveCard>

          <PerspectiveCard glowColor="mixed" className="p-7 space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-[#3DD68C]/15 text-[#3DD68C] border border-[#3DD68C]/30">
                EXECUTION FLOW
              </span>
              <Kanban className="w-5 h-5 text-[#3DD68C]" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Kanban Phase Boards
            </h3>
            <p className="text-sm text-[#94A8BA] leading-relaxed">
              Shift tasks through defined execution stages. Move cards from Ideation to In Progress and Completed with smooth drag-and-drop mechanics.
            </p>
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/40 border border-white/10 text-[10px] font-mono text-center">
              <div className="p-2 rounded bg-white/5 text-white/70">To Do (3)</div>
              <div className="p-2 rounded bg-[#F5C542]/20 text-[#F5C542] font-bold">In Focus (1)</div>
              <div className="p-2 rounded bg-[#3DD68C]/20 text-[#3DD68C] font-bold">Done (8)</div>
            </div>
          </PerspectiveCard>
        </div>
      </div>
    </section>
  );
}