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
  FileText,
  Clock
} from 'lucide-react';

export default function BentoGrid() {
  const [activeChecklist, setActiveChecklist] = useState([
    { id: '1', label: 'Hit Enter to jump right to the next task', done: true },
    { id: '2', label: 'Big buttons so you never miss a tap', done: true },
    { id: '3', label: 'Hit Enter on an empty line to start writing text', done: true },
  ]);

  const [trimmerPosition, setTrimmerPosition] = useState(38);
  const [selectedFormat, setSelectedFormat] = useState<'markdown' | 'pdf' | 'card'>('pdf');

  return (
    <section className="py-24 sm:py-36 px-4 sm:px-6 relative z-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C542]/10 border border-[#F5C542]/30 text-xs font-mono text-[#F5C542] uppercase font-bold tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            EVERYTHING YOU NEED TO GET WORK DONE
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Stop switching apps. <br />
            <span className="bg-gradient-to-r from-white via-[#FFE072] to-[#F5C542] bg-clip-text text-transparent">
              Finish your projects in one place.
            </span>
          </h2>
          <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
            projectAndNote combines your notes, to-do lists, voice recordings, timers, and alarms into one easy, private app.
          </p>
        </div>

        {/* 6 Clear Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: All-in-One Notes */}
          <PerspectiveCard glowColor="gold" className="p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-[#F5C542]/15 text-[#F5C542] border border-[#F5C542]/30">
                  ALL-IN-ONE NOTES
                </span>
                <Type className="w-5 h-5 text-[#F5C542]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Don't force every idea into plain text
              </h3>
              <p className="text-sm text-[#94A8BA] leading-relaxed">
                Add titles, voice recordings, to-do lists, photos, trimmed video clips, or quick drawings right on the same page. Tap anywhere between items to add something new whenever you want.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
              <div className="text-xs font-mono text-white/80">Quick Tool Menu</div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5C542]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3DD68C]" />
              </div>
            </div>
          </PerspectiveCard>

          {/* Card 2: Fast Checklists */}
          <PerspectiveCard glowColor="gold" className="p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-[#3DD68C]/15 text-[#3DD68C] border border-[#3DD68C]/30">
                  FAST TO-DO LISTS
                </span>
                <CheckSquare className="w-5 h-5 text-[#3DD68C]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Checklists that just work
              </h3>
              <p className="text-sm text-[#94A8BA] leading-relaxed">
                Type your first task and hit Enter to make the next one immediately. Big checkmark boxes make tapping easy on mobile, and completed items cross off smoothly so you feel progress.
              </p>
            </div>

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

          {/* Card 3: Photo & Video Tools */}
          <PerspectiveCard glowColor="mixed" className="p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-[#F5C542]/15 text-[#F5C542] border border-[#F5C542]/30">
                  PHOTOS & VIDEOS
                </span>
                <Crop className="w-5 h-5 text-[#F5C542]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Crop photos and trim videos inside your note
              </h3>
              <p className="text-sm text-[#94A8BA] leading-relaxed">
                No need to open another photo editor. Crop images to square, 4:3, or wide 16:9 in one tap. Trim video clips to just the seconds you need without leaving your note.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-[#F5C542]">
                <span>00:04s</span>
                <span>SELECTED CLIP: {trimmerPosition}%</span>
                <span>00:24s</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={trimmerPosition}
                onChange={(e) => setTrimmerPosition(Number(e.target.value))}
                className="w-full accent-[#F5C542] cursor-pointer"
              />
            </div>
          </PerspectiveCard>

          {/* Card 4: PDF & Book Shelf */}
          <PerspectiveCard glowColor="mixed" className="p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
                  PDF & BOOK SHELF
                </span>
                <BookOpen className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Your private offline reading shelf
              </h3>
              <p className="text-sm text-[#94A8BA] leading-relaxed">
                Save PDF books, school papers, and manuals. The app automatically saves your page number so you can pick up right where you left off, even on an airplane with no internet.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-[#172330] border border-white/10 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-xs font-bold text-white">Physics Chapter 4.pdf</div>
                <div className="text-[10px] font-mono text-[#94A8BA]">Page 142 of 210 · 68% read</div>
              </div>
              <div className="w-9 h-9 rounded-full border-2 border-[#38BDF8] border-t-transparent flex items-center justify-center text-[10px] font-mono text-[#38BDF8] font-bold">
                68%
              </div>
            </div>
          </PerspectiveCard>

          {/* Card 5: Easy Exporting */}
          <PerspectiveCard glowColor="gold" className="p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-[#F5C542]/15 text-[#F5C542] border border-[#F5C542]/30">
                  EASY SHARING
                </span>
                <Share2 className="w-5 h-5 text-[#F5C542]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Turn your notes into PDFs, text, or picture cards
              </h3>
              <p className="text-sm text-[#94A8BA] leading-relaxed">
                Need to share your work? Export clean PDF documents, copy plain formatted text, or create a stylish picture snapshot to send to classmates, clients, or friends in seconds.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                { id: 'markdown', label: 'Plain Text', icon: FileText },
                { id: 'pdf', label: 'PDF Doc', icon: BookOpen },
                { id: 'card', label: 'Picture Card', icon: Share2 },
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

          {/* Card 6: Focus Timers & Loud Alarms */}
          <PerspectiveCard glowColor="gold" className="p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-widest uppercase bg-[#3DD68C]/15 text-[#3DD68C] border border-[#3DD68C]/30">
                  TIME & FOCUS
                </span>
                <Bell className="w-5 h-5 text-[#3DD68C]" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Focus timers and alarms that wake your screen
              </h3>
              <p className="text-sm text-[#94A8BA] leading-relaxed">
                Quiet phone notifications are easy to miss. projectAndNote rings with full-screen alarms that turn on your screen so you never ignore a deadline. Lock into 25-minute focus sprints to get things done.
              </p>
            </div>

            <div className="mt-6 p-3 rounded-2xl bg-[#172330] border border-white/15 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-white">
                <Clock className="w-4 h-4 text-[#F5C542]" />
                <span>09:30 AM · Final Assignment</span>
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