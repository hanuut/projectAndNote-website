import React, { useState } from 'react';
import { Bell, Volume2, CheckCircle2, RotateCw, Music2 } from 'lucide-react';

export default function AlarmSimulator() {
  const [alarmState, setAlarmState] = useState<'ringing' | 'postponed' | 'done'>('ringing');
  const [selectedRingtone, setSelectedRingtone] = useState('Lo-Fi Tokyo Midnight');
  const [loopDuration, setLoopDuration] = useState<'15s' | '30s'>('15s');

  const ringtones = [
    'Lo-Fi Tokyo Midnight',
    'Ambient Jazz Cafe',
    'Neo-Soul Horizon',
    'Analog Pulse Wave',
    'Bossa Nova Morning',
    'Chillwave 1984',
    'Subtle Marimba Bells',
    'Deep Space Ambient'
  ];

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left: Lock-screen Alarm */}
      <div className="relative rounded-[32px] border-2 border-white/20 bg-gradient-to-b from-[#1C1428] via-[#0E1520] to-[#090E13] p-6 sm:p-8 shadow-2xl overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#F5C542]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#B39DDB]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between text-xs font-mono text-[#94A8BA] mb-8 border-b border-white/10 pb-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
            FULL-SCREEN WAKE ALARM
          </span>
          <span>bypasses lock screen</span>
        </div>

        <div className="text-center my-6">
          <div className="w-16 h-16 rounded-2xl bg-[#F5C542]/15 border border-[#F5C542]/40 flex items-center justify-center mx-auto mb-4 text-[#F5C542] animate-bounce">
            <Bell className="w-8 h-8" />
          </div>

          <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs uppercase tracking-wider mb-3 inline-block">
            Project Deadline · 09:30 AM
          </span>

          <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            Submit Final Grant Proposal
          </h4>
          <p className="text-xs text-[#94A8BA] font-mono">
            Ringtone: <span className="text-[#FFE072] font-semibold">{selectedRingtone}</span> ({loopDuration} loop)
          </p>
        </div>

        <div className="space-y-3 mt-8">
          {alarmState === 'ringing' && (
            <>
              <button
                onClick={() => setAlarmState('done')}
                className="w-full py-4 rounded-2xl bg-[#3DD68C] hover:bg-[#55EFC4] text-[#090E13] font-extrabold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(61,214,140,0.4)] transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-5 h-5" />
                I'M ON IT (OPEN PROJECT)
              </button>

              <button
                onClick={() => setAlarmState('postponed')}
                className="w-full py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-xs font-mono tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <RotateCw className="w-4 h-4" />
                POSTPONE (+15 MINUTES)
              </button>
            </>
          )}

          {alarmState === 'done' && (
            <div className="p-4 rounded-2xl bg-[#3DD68C]/15 border border-[#3DD68C]/30 text-center">
              <span className="text-xs font-mono text-[#3DD68C] font-bold block mb-1">
                STATUS: IN PROGRESS
              </span>
              <p className="text-xs text-white">Opening project note & starting 25m Focus Sprint...</p>
              <button
                onClick={() => setAlarmState('ringing')}
                className="mt-3 text-[11px] font-mono text-white/60 hover:text-white underline cursor-pointer"
              >
                Reset alarm demo
              </button>
            </div>
          )}

          {alarmState === 'postponed' && (
            <div className="p-4 rounded-2xl bg-[#F5C542]/15 border border-[#F5C542]/30 text-center">
              <span className="text-xs font-mono text-[#F5C542] font-bold block mb-1">
                ALARM POSTPONED +15m
              </span>
              <p className="text-xs text-white">Next ring scheduled for 09:45 AM.</p>
              <button
                onClick={() => setAlarmState('ringing')}
                className="mt-3 text-[11px] font-mono text-white/60 hover:text-white underline cursor-pointer"
              >
                Reset alarm demo
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right: Audio Segment Trimmer */}
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-[#B39DDB] font-mono text-xs uppercase tracking-widest font-bold mb-2">
            <Music2 className="w-4 h-4" />
            Audio Segment Trimmer
          </div>
          <h3 className="text-3xl font-extrabold text-white tracking-tight mb-3">
            Make your alarm impossible to ignore.
          </h3>
          <p className="text-[#94A8BA] text-sm leading-relaxed">
            Choose from 8 bundled premium ringtones or load your own local audio files. Use the timeline scrubber to isolate and loop the exact 15 or 30-second chorus you want to hear.
          </p>
        </div>

        <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-white font-bold flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-[#F5C542]" />
              Timeline Scrubber
            </span>
            <div className="flex gap-1.5">
              <button
                onClick={() => setLoopDuration('15s')}
                className={`px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer ${
                  loopDuration === '15s' ? 'bg-[#F5C542] text-black font-bold' : 'bg-white/5 text-white/60'
                }`}
              >
                15s Loop
              </button>
              <button
                onClick={() => setLoopDuration('30s')}
                className={`px-2.5 py-1 rounded text-[11px] font-mono cursor-pointer ${
                  loopDuration === '30s' ? 'bg-[#F5C542] text-black font-bold' : 'bg-white/5 text-white/60'
                }`}
              >
                30s Loop
              </button>
            </div>
          </div>

          <div className="relative h-14 bg-white/[0.03] rounded-xl border border-white/10 p-2 flex items-center overflow-hidden">
            <div className="absolute left-6 w-36 h-10 rounded-lg bg-[#F5C542]/20 border border-[#F5C542] flex items-center justify-center">
              <span className="text-[10px] font-mono font-bold text-[#F5C542]">LOOP [{loopDuration}]</span>
            </div>
            <div className="w-full flex items-center justify-between gap-1 opacity-60">
              {[20, 50, 80, 40, 90, 75, 30, 60, 100, 85, 45, 95, 60, 30, 70, 90, 50, 65, 80, 40, 90].map((v, i) => (
                <div key={i} className="w-1.5 bg-white/40 rounded-full" style={{ height: `${v}%` }} />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-[#94A8BA] mb-2">
              Bundled Soundtracks:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {ringtones.slice(0, 4).map((sound) => (
                <button
                  key={sound}
                  onClick={() => setSelectedRingtone(sound)}
                  className={`px-3 py-2 rounded-xl text-left text-xs font-mono truncate transition-all cursor-pointer ${
                    selectedRingtone === sound
                      ? 'bg-[#F5C542]/15 border border-[#F5C542] text-white font-bold'
                      : 'bg-white/[0.03] border border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  ♪ {sound}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}