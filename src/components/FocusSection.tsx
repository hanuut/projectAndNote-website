import React, { useState, useEffect } from 'react';
import { Zap, Play, Pause, RotateCcw, Plus, Minus, Bell, Clock, CheckCircle2, RotateCw } from 'lucide-react';

export default function FocusSection() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => setSecondsLeft(prev => prev - 1), 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="focus" className="py-24 sm:py-32 px-4 sm:px-6 relative z-20 border-t border-white/5 bg-[#0A1017]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C542]/10 border border-[#F5C542]/30 text-xs font-mono text-[#F5C542] uppercase font-bold tracking-widest">
            04 · FOCUS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Focus Sprints and unmissable deadlines.
          </h2>
          <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
            Lock in on one task with 25-minute Pomodoro Deep Work sprints and 5-minute reset breaks. Attach hard deadlines to notes and receive loud alerts that wake your phone screen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Focus Timer Simulator */}
          <div className="rounded-3xl fluid-glass-elevated p-8 border border-white/15 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-white">
              <Zap className="w-3.5 h-3.5 text-[#F5C542]" />
              Focus Sprint (25m Deep Work / 5m Break)
            </div>

            {/* Timer Display */}
            <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#F5C542]/20 blur-xl energy-orb-glow" />
              <div className="relative z-10 w-36 h-36 rounded-full bg-[#111C26] border border-[#F5C542]/50 flex flex-col items-center justify-center">
                <span className="text-4xl font-black font-mono text-white">{formatTime(secondsLeft)}</span>
                <span className="text-[10px] font-mono text-[#94A8BA] uppercase mt-1">
                  {isActive ? 'IN SPRINT' : 'READY'}
                </span>
              </div>
            </div>

            {/* Adjuster buttons */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setSecondsLeft(prev => Math.max(60, prev - 300))}
                className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-mono flex items-center gap-1 cursor-pointer"
              >
                <Minus className="w-3 h-3" /> 5m
              </button>
              <button
                onClick={() => setSecondsLeft(prev => prev + 300)}
                className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-mono flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3 h-3" /> 5m
              </button>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setIsActive(!isActive)}
                className="btn-glitch-primary px-8 py-3 text-xs font-mono cursor-pointer"
              >
                {isActive ? 'PAUSE SPRINT' : 'START SPRINT'}
              </button>
              <button
                onClick={() => { setIsActive(false); setSecondsLeft(25 * 60); }}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Deadline & Waking Alarm Showcase */}
          <div className="rounded-3xl fluid-glass p-8 border border-white/15 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F5C542] font-bold uppercase">
              <Bell className="w-4 h-4" />
              Time-Bound Deadlines
            </div>
            <h3 className="text-2xl font-extrabold text-white tracking-tight">
              Alarms that demand execution
            </h3>
            <p className="text-sm text-[#94A8BA] leading-relaxed">
              Quiet notification tray banners get ignored. Attach deadlines to any note or project to trigger unmissable alerts with customizable looped audio (lo-fi, ambient jazz, neo-soul) so you start working immediately.
            </p>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-bold flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F5C542]" />
                  Scheduled Deadline: 09:30 AM
                </span>
                <span className="text-[#3DD68C] font-bold">ALARM ARMED</span>
              </div>
              <div className="text-xs text-[#94A8BA]">
                Note: "Final Grant Submission & Budget Review"
              </div>
              <div className="flex gap-2 pt-2">
                <div className="flex-1 py-2 rounded-xl bg-[#3DD68C] text-black font-bold text-xs text-center">
                  I'M ON IT (OPENS NOTE)
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/10 text-white font-bold text-xs text-center flex items-center gap-1">
                  <RotateCw className="w-3.5 h-3.5" /> POSTPONE +15m
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}