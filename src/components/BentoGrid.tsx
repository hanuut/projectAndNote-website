import React, { useState } from 'react';
import PerspectiveCard from './PerspectiveCard';
import { 
  Type, 
  CheckSquare, 
  Crop, 
  BookOpen, 
  Share2, 
  Bell, 
  Sparkles,
  ArrowRight,
  FileText,
  Clock,
  RotateCw
} from 'lucide-react';

export default function BentoGrid() {
  const [activeChecklist, setActiveChecklist] = useState([
    { id: '1', label: 'Inherit styling on Enter-key chaining', done: true },
    { id: '2', label: 'Tactile 44×44pt zero-misfire touch targets', done: true },
    { id: '3', label: 'Empty line triggers clean paragraph exit', done: true },
  ]);

  const [trimmerPosition, setTrimmerPosition] = useState(38);
  const [selectedFormat, setSelectedFormat] = useState<'markdown' | 'pdf' | 'card'>('pdf');

  return (
    <section className="py-24 sm:py-36 px-4 sm:px-6 relative z-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/30 text-xs font-mono text-[#C084FC] uppercase font-bold tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#F5C542]" />
            STUDIO ENGINE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Engineered for <span className="bg-gradient-to-r from-white via-[#C084FC] to-[#F5C542] bg-clip-text text-transparent">deep execution</span>.
          </h2>
          <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
            Move past static text notes. Every tool inside projectAndNote is designed to eliminate friction between your mind and your output.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Modular Canvas & Vertical Studio Dock */}
          <PerspectiveCard glowColor="violet" className="p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-[#A855F7]/15 text-[#C084FC] border border-[#A855F7]/30">
                  MODULAR CANVAS
                </span>
                <Type className="w-5 h-5 text-[#C084FC]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                A Canvas That Respects Your Flow
              </h3>
              <p className="text-sm text-[#94A8BA] leading-relaxed">
                No rigid page boundaries. Seamlessly interleave precision text, voice memos, cropped photo swatches, trimmed video clips, and whiteboard diagrams. Tap anywhere between blocks to insert thoughts without losing your spot.
              </p>
            </div>

            {/* Interactive Visual Element */}
            <div className="mt-6 p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
              <div className="text-xs font-mono text-white/80">Vertical Studio Dock</div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFFFFF]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#A855F7] animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5C542]" />
              </div>
            </div>
          </PerspectiveCard>

          {/* Card 2: Smarter Checklists & Rapid Task Chaining */}
          <PerspectiveCard glowColor="gold" className="p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-[#3DD68C]/15 text-[#3DD68C] border border-[#3DD68C]/30">
                  RAPID EXECUTION
                </span>
                <CheckSquare className="w-5 h-5 text-[#3DD68C]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Checklists with Tactile Muscle Memory
              </h3>
              <p className="text-sm text-[#94A8BA] leading-relaxed">
                Hit Enter to instantly chain into the next task with inherited checklist formatting. Expanded 44×44 pt touch targets eliminate mis-taps, accompanied by instantaneous haptic feedback and strikethrough animations.
              </p>
            </div>

            {/* Interactive Checklist Visual */}
            <div className="mt-6 space-y-2 p-3 rounded-2xl bg-black/40 border border-white/10">
              {activeChecklist.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveChecklist(activeChecklist.map(c => c.id === item.id ? { ...c, done: !c.done } : c));
                  }}
                  className="flex items-center gap-2.5 text-xs text-white/90 cursor-pointer select-none"
                >
                  <div className={`w-4 h-4 rounded flex items-center justify-center ${item.done ? 'bg-[#3DD68C] text-black font-bold' : 'border border-white/30'}`}>
                    {item.done && '✓'}
                  </div>
                  <span className={item.done ? 'line-through text-white/40' : 'text-white'}>{item.label}</span>
                </div>
              ))}
            </div>
          </PerspectiveCard>

          {/* Card 3: In-Note Media Studio */}
          <PerspectiveCard glowColor="violet" className="p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-[#C084FC]/15 text-[#C084FC] border border-[#C084FC]/30">
                  LOCAL MEDIA
                </span>
                <Crop className="w-5 h-5 text-[#C084FC]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Crop Photos. Trim Videos. No Cloud Required.
              </h3>
              <p className="text-sm text-[#94A8BA] leading-relaxed">
                Never switch to a bloated third-party editor. Crop images directly inside your document with 1:1, 4:3, and 16:9 aspect ratio presets. Trim video attachments using a millisecond-precision timeline scrubber while keeping original files safe in your private device sandbox.
              </p>
            </div>

            {/* Video Trimmer Scrubber simulation */}
            <div className="mt-6 p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-[#C084FC]">
                <span>00:04.250</span>
                <span>SCRUBBER: {trimmerPosition}%</span>
                <span>00:24.000</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={trimmerPosition}
                onChange={(e) => setTrimmerPosition(Number(e.target.value))}
                className="w-full accent-[#A855F7] cursor-pointer"
              />
            </div>
          </PerspectiveCard>

          {/* Card 4: Personal Offline PDF & Book Library */}
          <PerspectiveCard glowColor="mixed" className="p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
                  LOCAL-FIRST LIBRARY
                </span>
                <BookOpen className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Your Private eBook & Research Shelf
              </h3>
              <p className="text-sm text-[#94A8BA] leading-relaxed">
                Import research papers, PDF books, and manuals into an elegant personal library. Automatically generates cover thumbnails on-device and tracks your reading progress page-by-page. Resume reading instantly with our distraction-free, pinch-to-zoom in-app viewer.
              </p>
            </div>

            {/* Book Progress Visual */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#172330] to-[#1F1430] border border-white/10 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-xs font-bold text-white">Quantum Field Dynamics.pdf</div>
                <div className="text-[10px] font-mono text-[#94A8BA]">p. 142 / 210 · 68% complete</div>
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-[#38BDF8] border-t-transparent flex items-center justify-center text-[10px] font-mono text-[#38BDF8] font-bold">
                68%
              </div>
            </div>
          </PerspectiveCard>

          {/* Card 5: Multi-Format Note Export in Read Mode */}
          <PerspectiveCard glowColor="gold" className="p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-[#F5C542]/15 text-[#F5C542] border border-[#F5C542]/30">
                  INTEROPERABILITY
                </span>
                <Share2 className="w-5 h-5 text-[#F5C542]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Export Full Notes or Select Exact Blocks
              </h3>
              <p className="text-sm text-[#94A8BA] leading-relaxed">
                Take your work anywhere. Copy pristine, formatted Markdown to your clipboard, generate multi-page styled PDFs with embedded media and Arabic/Unicode support, or create high-resolution branded social media graphic snapshot cards for instant sharing.
              </p>
            </div>

            {/* Export Mode Selector Visual */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                { id: 'markdown', label: 'Markdown', icon: FileText },
                { id: 'pdf', label: 'Styled PDF', icon: BookOpen },
                { id: 'card', label: 'Social Card', icon: Share2 },
              ].map((fmt) => {
                const Icon = fmt.icon;
                return (
                  <button
                    key={fmt.id}
                    onClick={() => setSelectedFormat(fmt.id as any)}
                    className={`p-2.5 rounded-xl text-center flex flex-col items-center gap-1 text-[10px] font-mono transition-all cursor-pointer ${
                      selectedFormat === fmt.id
                        ? 'bg-[#F5C542] text-black font-bold shadow-md'
                        : 'bg-white/5 text-white/70 hover:text-white border border-white/10'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{fmt.label}</span>
                  </button>
                );
              })}
            </div>
          </PerspectiveCard>

          {/* Card 6: Time-Bound Sprints & Full-Screen Waking Alarms */}
          <PerspectiveCard glowColor="violet" className="p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-[#E9D5FF]/15 text-[#E9D5FF] border border-[#E9D5FF]/30">
                  TIME INTEGRITY
                </span>
                <Bell className="w-5 h-5 text-[#C084FC]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Alarms That Demand Execution
              </h3>
              <p className="text-sm text-[#94A8BA] leading-relaxed">
                Standard push notifications are easily ignored. projectAndNote triggers full-screen waking alarms with custom-looped audio segments (neo-soul, lofi, ambient jazz) that demand your attention. Combined with 25-minute Focus Sprints, deadlines are impossible to miss.
              </p>
            </div>

            {/* Alarm Preview Button */}
            <div className="mt-6 p-3 rounded-2xl bg-gradient-to-tr from-[#1E112E] to-[#111C26] border border-[#C084FC]/30 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <Clock className="w-4 h-4 text-[#F5C542]" />
                <span>09:30 AM · Grant Deadline</span>
              </div>
              <span className="px-2 py-1 rounded bg-[#3DD68C] text-black font-mono font-bold text-[9px] uppercase">
                WAKE ALARM
              </span>
            </div>
          </PerspectiveCard>

        </div>
      </div>
    </section>
  );
}