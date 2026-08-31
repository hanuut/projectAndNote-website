import React, { useState } from 'react';
import { Mic, CheckSquare, Plus, Link as LinkIcon, Play, Square } from 'lucide-react';

export default function BlockEditorPreview() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Outline architecture & SQLite schema', completed: true },
    { id: '2', text: 'Calibrate 25-minute Energy Ball rhythm', completed: true },
    { id: '3', text: 'Test lock-screen full waking alarms', completed: false },
    { id: '4', text: 'Audio segment trimmer loop test (15s lo-fi)', completed: false }
  ]);

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl glass-panel border border-white/15 p-5 sm:p-7 shadow-2xl relative overflow-hidden">
      {/* Note Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <span className="px-2.5 py-1 rounded-md bg-[#3DD68C]/15 border border-[#3DD68C]/30 text-[#3DD68C] font-mono text-xs font-bold">
            #RESEARCH
          </span>
          <span className="text-xs font-mono text-[#94A8BA]/70">Updated 2m ago · 100% Local</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
        </div>
      </div>

      {/* Block 1: H1 Title */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono text-[#F5C542] font-bold">H1 BLOCK</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Autonomous Drone Mapping System
        </h3>
      </div>

      {/* Block 2: Audio Voice Memo */}
      <div className="mb-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className="w-10 h-10 rounded-xl bg-[#F5C542] text-[#090E13] flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
            aria-label={isPlayingAudio ? "Stop audio" : "Play audio"}
          >
            {isPlayingAudio ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <Mic className="w-3.5 h-3.5 text-[#F5C542]" />
              Voice Memo #04 (Field Observation)
            </div>
            <div className="text-[11px] font-mono text-[#94A8BA]">
              {isPlayingAudio ? '0:14 / 0:42' : '0:42 recorded locally'}
            </div>
          </div>
        </div>

        {/* Visual Waveform */}
        <div className="flex items-center gap-1 h-6">
          {[40, 70, 90, 60, 30, 80, 100, 50, 65, 85, 45, 95, 30, 60].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full transition-all duration-300 ${
                isPlayingAudio ? 'bg-[#F5C542] animate-pulse' : 'bg-white/20'
              }`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Block 3: Interactive Checklist */}
      <div className="mb-4 p-4 rounded-2xl bg-[#111C26] border border-white/10">
        <div className="text-xs font-mono uppercase text-[#3DD68C] font-bold mb-3 flex items-center gap-1.5">
          <CheckSquare className="w-3.5 h-3.5" />
          Interactive Sprint Milestones
        </div>
        <div className="space-y-2">
          {tasks.map((task) => (
            <label
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/[0.03] transition-colors cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={task.completed}
                readOnly
                className="w-4 h-4 rounded border-white/20 accent-[#3DD68C]"
              />
              <span
                className={`text-sm transition-colors ${
                  task.completed ? 'line-through text-[#94A8BA]/50' : 'text-white'
                }`}
              >
                {task.text}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Block 4: Web Preview Card */}
      <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A8BA]">
          <LinkIcon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold text-white truncate">
            SQLite Architecture for Low-Latency Mobile Systems
          </div>
          <div className="text-[11px] font-mono text-[#94A8BA]/70 truncate">
            https://localfirst.engineering/sqlite-embedded
          </div>
        </div>
      </div>

      {/* Helper */}
      <div className="mt-4 pt-3 border-t border-dashed border-white/10 flex items-center justify-center gap-2 text-xs font-mono text-[#94A8BA]/60">
        <Plus className="w-3.5 h-3.5 text-[#F5C542]" />
        <span>Tap between any block to insert Text, Audio, Images, or Tasks</span>
      </div>
    </div>
  );
}