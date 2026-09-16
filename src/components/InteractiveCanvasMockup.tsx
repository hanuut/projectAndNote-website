import React, { useState } from 'react';
import VerticalStudioToolbox from './VerticalStudioToolbox';
import { Mic, Check, Play, Square, Crop, Zap } from 'lucide-react';

export default function InteractiveCanvasMockup() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Mix natural violet dyes & sample test swatch', done: true },
    { id: '2', text: 'Align 16:9 crop framing for runway teaser', done: true },
    { id: '3', text: 'Trim lookbook b-roll (00:04.250 - 00:18.500)', done: false },
    { id: '4', text: 'Export high-res snapshot card for social preview', done: false },
  ]);

  const [aspectRatio, setAspectRatio] = useState<'16:9' | '4:3' | '1:1'>('16:9');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [newTaskInput, setNewTaskInput] = useState('');

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && newTaskInput.trim()) {
      e.preventDefault();
      setTasks([
        ...tasks,
        { id: Date.now().toString(), text: newTaskInput.trim(), done: false },
      ]);
      setNewTaskInput('');
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-[32px] fluid-glass-elevated p-6 sm:p-9 border border-white/20 shadow-2xl overflow-visible">
      {/* Studio Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#A855F7]/15 text-[#C084FC] border border-[#A855F7]/30">
            #COLLECTION_2026
          </span>
          <span className="text-xs font-mono text-[#94A8BA]/70 hidden sm:inline-block">
            Local SQLite Sandbox · 0ms sync latency
          </span>
        </div>

        {/* Ambient Focus Sprint Energy Ball (⚡) */}
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-black/40 border border-[#F5C542]/30 shadow-[0_0_20px_rgba(245,197,66,0.15)]">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#F5C542] to-[#A855F7] energy-orb-glow flex items-center justify-center text-[#0D141B]">
            <Zap className="w-3 h-3 fill-current" />
          </div>
          <span className="text-xs font-mono font-bold text-white tracking-wider">
            24:48 <span className="text-[#F5C542] text-[10px]">SPRINT</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        {/* Main Note Canvas */}
        <div className="lg:col-span-11 space-y-6">
          {/* Note Title */}
          <div>
            <span className="text-[11px] font-mono font-bold text-[#F5C542] uppercase tracking-widest">
              DOC // MY.BRAND
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Autumn Collection 🪻
            </h2>
          </div>

          {/* Photo Cropper Block Component */}
          <div className="rounded-2xl bg-black/50 border border-white/15 p-4 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3 text-xs font-mono">
              <span className="text-[#C084FC] flex items-center gap-1.5 font-bold">
                <Crop className="w-3.5 h-3.5" />
                In-Note Photo Cropper
              </span>
              <div className="flex gap-1">
                {(['16:9', '4:3', '1:1'] as const).map((ratio) => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono cursor-pointer transition-colors ${
                      aspectRatio === ratio
                        ? 'bg-[#A855F7] text-white font-bold'
                        : 'bg-white/5 text-white/60 hover:text-white'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Photo preview with dynamic aspect ratio overlay */}
            <div
              className={`relative w-full rounded-xl overflow-hidden bg-gradient-to-tr from-[#172330] via-[#2A1B3D] to-[#121B24] border border-white/10 flex items-center justify-center transition-all duration-300 ${
                aspectRatio === '16:9' ? 'h-44 sm:h-52' : aspectRatio === '4:3' ? 'h-56' : 'h-64'
              }`}
            >
              {/* Overlay Crop Lines */}
              <div className="absolute inset-4 border border-dashed border-[#F5C542]/70 rounded-lg pointer-events-none flex flex-col justify-between p-2">
                <div className="flex justify-between text-[9px] font-mono text-[#F5C542]">
                  <span>[CROP_PRESET: {aspectRatio}]</span>
                  <span>100% RAW SANDBOX</span>
                </div>
                <div className="text-center text-xs font-mono text-white/90 bg-black/60 py-1 px-3 rounded-full backdrop-blur-md self-center border border-white/10">
                  Natural Silk & Velvet Texture Studies
                </div>
              </div>
            </div>
          </div>

          {/* Audio Voice Memo Block */}
          <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F5C542] to-[#FFD566] text-[#0D141B] flex items-center justify-center hover:scale-105 transition-transform cursor-pointer shadow-lg"
              >
                {isPlayingAudio ? (
                  <Square className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Mic className="w-3.5 h-3.5 text-[#F5C542]" />
                  Lookbook Director Memo #03
                </div>
                <div className="text-[10px] font-mono text-[#94A8BA]">
                  {isPlayingAudio ? '0:08 / 0:34' : '0:34 recorded locally'}
                </div>
              </div>
            </div>

            {/* Audio Waveform */}
            <div className="flex items-center gap-1 h-7">
              {[30, 75, 95, 60, 40, 85, 100, 50, 70, 90, 45, 100, 35, 65, 85, 40].map((h, idx) => (
                <span
                  key={idx}
                  className={`w-1 rounded-full transition-all duration-300 ${
                    isPlayingAudio ? 'bg-[#F5C542] animate-pulse' : 'bg-white/20'
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Smart Checklist with Chaining */}
          <div className="p-4 rounded-2xl bg-[#111C26]/80 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-[#3DD68C] font-bold uppercase tracking-wider">
                EXECUTION CHECKLIST (CHAIN ON ENTER)
              </span>
              <span className="text-[10px] font-mono text-[#94A8BA]/60">44×44 pt touch targets</span>
            </div>

            <div className="space-y-2">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/[0.04] transition-colors cursor-pointer select-none"
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                      task.done
                        ? 'bg-[#3DD68C] text-[#0D141B] shadow-[0_0_12px_rgba(61,214,140,0.5)]'
                        : 'border border-white/25 bg-white/5'
                    }`}
                  >
                    {task.done && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <span
                    className={`text-sm transition-colors ${
                      task.done ? 'line-through text-[#94A8BA]/50' : 'text-white font-medium'
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
              ))}

              {/* Enter-key Rapid Task Chaining Input */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-6 h-6 rounded-lg border border-dashed border-[#F5C542]/50 flex items-center justify-center text-[#F5C542] text-xs">
                  +
                </div>
                <input
                  type="text"
                  placeholder="Type next milestone and press Enter to chain..."
                  value={newTaskInput}
                  onChange={(e) => setNewTaskInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-sm text-white placeholder-white/30 focus:outline-none font-sans"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Floating Studio Toolbox Docked to the Right */}
        <div className="hidden lg:flex lg:col-span-1 justify-center items-start pt-8">
          <VerticalStudioToolbox />
        </div>
      </div>
    </div>
  );
}