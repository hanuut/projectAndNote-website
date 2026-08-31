import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Plus, Minus, Zap, Coffee } from 'lucide-react';

export default function FocusSprintSimulator() {
  const [mode, setMode] = useState<'work' | 'break'>('work');
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = (newMode = mode) => {
    setIsActive(false);
    setSecondsLeft(newMode === 'work' ? 25 * 60 : 5 * 60);
  };

  const adjustMinutes = (delta: number) => {
    setSecondsLeft((prev) => Math.max(60, prev + delta * 60));
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl glass-panel-glow p-6 sm:p-8 relative overflow-hidden text-center">
      {/* Mode Switcher */}
      <div className="inline-flex p-1.5 rounded-2xl bg-black/40 border border-white/10 mb-8">
        <button
          onClick={() => {
            setMode('work');
            resetTimer('work');
          }}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
            mode === 'work'
              ? 'bg-[#F5C542] text-[#090E13] shadow-lg shadow-[#F5C542]/20'
              : 'text-[#94A8BA] hover:text-white'
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          25m Deep Work
        </button>
        <button
          onClick={() => {
            setMode('break');
            resetTimer('break');
          }}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
            mode === 'break'
              ? 'bg-[#3DD68C] text-[#090E13] shadow-lg shadow-[#3DD68C]/20'
              : 'text-[#94A8BA] hover:text-white'
          }`}
        >
          <Coffee className="w-3.5 h-3.5" />
          5m Reset Break
        </button>
      </div>

      {/* Dynamic Energy Ball */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto my-4 flex items-center justify-center">
        <div
          className={`absolute inset-0 rounded-full blur-2xl transition-all duration-700 ${
            mode === 'work' ? 'bg-[#F5C542]/25 energy-orb-work' : 'bg-[#3DD68C]/25 energy-orb-rest'
          }`}
        />
        
        <div className="absolute inset-2 rounded-full border border-white/20 border-dashed animate-spin" style={{ animationDuration: '40s' }} />

        <div
          className={`relative z-10 w-36 h-36 sm:w-40 sm:h-40 rounded-full flex flex-col items-center justify-center border shadow-2xl transition-all ${
            mode === 'work'
              ? 'bg-gradient-to-tr from-[#111C26] via-[#1A2836] to-[#2B2310] border-[#F5C542]/50 text-white'
              : 'bg-gradient-to-tr from-[#111C26] via-[#1A2836] to-[#102B1D] border-[#3DD68C]/50 text-white'
          }`}
        >
          <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight">
            {formatTime(secondsLeft)}
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#94A8BA] uppercase mt-1">
            {isActive ? (mode === 'work' ? 'FLOW LOCKED' : 'RESTING') : 'READY'}
          </span>
        </div>
      </div>

      {/* Adjusters */}
      <div className="flex items-center justify-center gap-3 my-6">
        <button
          onClick={() => adjustMinutes(-5)}
          className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer"
        >
          <Minus className="w-3 h-3" /> 5m
        </button>
        <button
          onClick={() => adjustMinutes(5)}
          className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-mono flex items-center gap-1 transition-colors cursor-pointer"
        >
          <Plus className="w-3 h-3" /> 5m
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={toggleTimer}
          className={`px-8 py-3.5 rounded-full font-extrabold text-xs font-mono tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer ${
            mode === 'work'
              ? 'bg-[#F5C542] hover:bg-[#FFE072] text-[#090E13] shadow-[0_0_30px_rgba(245,197,66,0.4)]'
              : 'bg-[#3DD68C] hover:bg-[#55EFC4] text-[#090E13] shadow-[0_0_30px_rgba(61,214,140,0.4)]'
          }`}
        >
          {isActive ? (
            <>
              <Pause className="w-4 h-4 fill-current" />
              <span>PAUSE SPRINT</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" />
              <span>START SPRINT</span>
            </>
          )}
        </button>

        <button
          onClick={() => resetTimer()}
          className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors cursor-pointer"
          aria-label="Reset timer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}