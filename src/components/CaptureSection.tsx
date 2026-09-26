import React, { useState } from 'react';
import PerspectiveCard from './PerspectiveCard';
import { 
  Type, 
  CheckSquare, 
  Mic, 
  Crop, 
  Video, 
  Link as LinkIcon, 
  BookOpen, 
  PenTool, 
  Plus, 
  Play, 
  Square, 
  Check 
} from 'lucide-react';

export default function CaptureSection() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Mix sample natural dye swatch', done: true },
    { id: '2', text: 'Align 16:9 crop for collection header', done: true },
    { id: '3', text: 'Cite Chapter 3 from Natural Textiles PDF', done: false },
    { id: '4', text: 'Attach Whiteboard draft for studio layout', done: false }
  ]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<'16:9' | '4:3' | '1:1'>('16:9');

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <section id="capture" className="py-24 sm:py-32 px-4 sm:px-6 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C542]/10 border border-[#F5C542]/30 text-xs font-mono text-[#F5C542] uppercase font-bold tracking-widest">
            01 · CAPTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            One document for your entire thought.
          </h2>
          <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
            Don't force every idea into plain text paragraphs. Combine text, voice notes, checklists, cropped images, trimmed videos, web links, PDF page references, and embedded whiteboards in a unified block canvas.
          </p>
        </div>

        {/* Interactive Block Canvas Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: The Block Editor Simulator */}
          <div className="lg:col-span-8 rounded-3xl fluid-glass-elevated p-6 sm:p-8 border border-white/15 shadow-2xl space-y-5">
            {/* Note Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-[#F5C542]/15 text-[#F5C542] border border-[#F5C542]/30">
                  #DESIGN_STUDIO
                </span>
                <span className="text-xs font-mono text-[#94A8BA]/60">Document Canvas · Saved Locally</span>
              </div>
              <div className="text-xs font-mono text-[#94A8BA]/60">Block Editor</div>
            </div>

            {/* Block 1: Rich Text with Selection Formatting */}
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-[#F5C542] font-bold">H1 HEADING BLOCK</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Autumn Studio Lookbook & Plan 🪻
              </h3>
              <p className="text-xs sm:text-sm text-[#94A8BA] leading-relaxed pt-1">
                Format text with precision using selection-aware tools: bold, italic, custom highlights, bullet points, and subheadings.
              </p>
            </div>

            {/* Block 2: Photo Cropper */}
            <div className="rounded-2xl bg-black/40 border border-white/10 p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-bold flex items-center gap-1.5">
                  <Crop className="w-3.5 h-3.5 text-[#F5C542]" />
                  Image Block with Aspect Ratio Presets
                </span>
                <div className="flex gap-1">
                  {(['16:9', '4:3', '1:1'] as const).map(ratio => (
                    <button
                      key={ratio}
                      onClick={() => setAspectRatio(ratio)}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono cursor-pointer ${
                        aspectRatio === ratio ? 'bg-[#F5C542] text-black font-bold' : 'bg-white/5 text-white/60'
                      }`}
                    >
                      {ratio}
                    </button>
                  ))}
                </div>
              </div>
              <div
                className={`relative w-full rounded-xl bg-gradient-to-tr from-[#172330] to-[#1F2E3D] border border-white/10 flex items-center justify-center transition-all ${
                  aspectRatio === '16:9' ? 'h-36' : aspectRatio === '4:3' ? 'h-44' : 'h-48'
                }`}
              >
                <div className="border border-dashed border-[#F5C542]/60 rounded-lg p-3 text-center">
                  <span className="text-xs font-mono text-white/90 font-medium">
                    Crop directly on-device without opening a third-party editor
                  </span>
                </div>
              </div>
            </div>

            {/* Block 3: Audio Voice Memo */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="w-10 h-10 rounded-xl bg-[#F5C542] text-black flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-transform"
                >
                  {isPlayingAudio ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-[#F5C542]" />
                    Voice Memo (Recorded on device)
                  </div>
                  <div className="text-[10px] font-mono text-[#94A8BA]">
                    {isPlayingAudio ? '0:12 / 0:45' : '0:45 · Local audio block'}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 h-6">
                {[30, 70, 95, 60, 40, 85, 100, 50, 75, 90, 45, 95, 30, 60].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1 rounded-full transition-all ${isPlayingAudio ? 'bg-[#F5C542] animate-pulse' : 'bg-white/20'}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Block 4: Interactive Checklist */}
            <div className="p-4 rounded-2xl bg-[#111C26] border border-white/10 space-y-2">
              <div className="text-xs font-mono text-[#3DD68C] font-bold uppercase tracking-wider mb-2">
                Checklist Block (Hit Enter to chain)
              </div>
              {tasks.map(task => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-white/[0.03] cursor-pointer select-none"
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center ${task.done ? 'bg-[#3DD68C] text-black font-bold' : 'border border-white/20'}`}>
                    {task.done && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <span className={`text-xs sm:text-sm ${task.done ? 'line-through text-[#94A8BA]/50' : 'text-white'}`}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Block 5: Book Reference & Whiteboard Block preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">Natural Textiles Handbook.pdf</div>
                  <div className="text-[10px] font-mono text-[#38BDF8]">Book Reference · p. 48</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#A855F7]/10 text-[#C084FC] flex items-center justify-center shrink-0">
                  <PenTool className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">Studio Floor Layout Drawing</div>
                  <div className="text-[10px] font-mono text-[#C084FC]">Embedded 16:9 Whiteboard</div>
                </div>
              </div>
            </div>

            {/* Tap between blocks cue */}
            <div className="pt-2 border-t border-dashed border-white/10 flex items-center justify-center gap-2 text-xs font-mono text-[#94A8BA]/60">
              <Plus className="w-3.5 h-3.5 text-[#F5C542]" />
              <span>Tap anywhere between blocks to insert text, media, or tasks</span>
            </div>
          </div>

          {/* Right: Block Capabilities Breakdown */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              Supported Canvas Blocks
            </h3>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Every block is stored locally in your device's internal SQLite database without external formatting lock-in.
            </p>

            <div className="space-y-3 pt-2">
              {[
                { icon: Type, title: 'Rich Text & Headings', desc: 'H1, H2, body, bold, italic, custom highlights, and bullet lists.' },
                { icon: CheckSquare, title: 'Smart Checklists', desc: 'Auto-chain into next task on Enter. One-tap completion.' },
                { icon: Mic, title: 'Voice Memos', desc: 'Record audio directly inside notes with live waveform playback.' },
                { icon: Crop, title: 'Photo Cropper', desc: 'Crop attached photos with 1:1, 4:3, and 16:9 aspect presets.' },
                { icon: Video, title: 'Video Trimmer', desc: 'Trim videos down to the exact millisecond interval needed.' },
                { icon: BookOpen, title: 'Book References', desc: 'Link directly to exact page numbers in your offline PDF library.' },
                { icon: PenTool, title: 'Whiteboard Embeds', desc: 'Attach drawings from Whiteboard Studio 2.0 directly into notes.' },
                { icon: LinkIcon, title: 'Web Link Previews', desc: 'Save external research links with offline-cached page titles.' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-3 rounded-2xl fluid-glass border border-white/10 flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{item.title}</div>
                      <div className="text-[11px] text-[#94A8BA] leading-snug">{item.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}