import React, { useState } from 'react';
import { GraduationCap, Sparkles, Terminal, Briefcase, Coffee } from 'lucide-react';

export default function PersonaSelector() {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      id: 'student',
      title: 'Students & Learners',
      icon: GraduationCap,
      quote: "I have 4 classes, homework due on Friday, and my notes are scattered everywhere.",
      resolution: "Keep class notes, lecture voice recordings, and homework to-do lists in one single project. Set alarms that ring out loud before assignments are due.",
      tags: ['Class Voice Notes', 'Homework Due Dates', '25m Focus Timer', 'To-Do Lists']
    },
    {
      id: 'creator',
      title: 'Writers & Creators',
      icon: Sparkles,
      quote: "Ideas hit me while I am walking or reading. I need a place to catch them fast.",
      resolution: "Record quick voice memos, save photos, crop images, and organize drafts easily. When you are ready to write, start a 25-minute focus session with zero distractions.",
      tags: ['Fast Voice Memos', 'Photo Cropping', 'Focus Timer', 'Drafts']
    },
    {
      id: 'builder',
      title: 'Developers & Builders',
      icon: Terminal,
      quote: "I know what I need to build. I just need to stop getting distracted by other apps.",
      resolution: "Break features into clean to-do checklists, start a focus timer right inside your note, and work completely offline with zero internet lag.",
      tags: ['Fast Checklists', '25m Work Sprints', '100% Offline', 'No Cloud Delay']
    },
    {
      id: 'professional',
      title: 'Busy Professionals',
      icon: Briefcase,
      quote: "I don't need a complicated system. I just want to finish my work on time.",
      resolution: "Keep meeting notes, client tasks, and documents in one clean offline workspace. Set unmissable deadline alarms so nothing slips through the cracks.",
      tags: ['Loud Deadline Alarms', 'Start & End Dates', '100% Private', 'Clean PDF Export']
    }
  ];

  const current = personas[activeTab];
  const IconComponent = current.icon;

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Persona Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-white/10">
        {personas.map((p, idx) => {
          const TabIcon = p.icon;
          const isSelected = activeTab === idx;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#F5C542] text-[#0D141B] shadow-lg shadow-[#F5C542]/20'
                  : 'bg-white/[0.03] border border-white/10 text-[#94A8BA] hover:text-white hover:bg-white/5'
              }`}
            >
              <TabIcon className="w-4 h-4" />
              <span>{p.title}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Persona Card */}
      <div className="fluid-glass rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F5C542]/10 border border-[#F5C542]/30 flex items-center justify-center text-[#F5C542]">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#F5C542] font-bold">WHO IS THIS FOR?</span>
              <h4 className="text-2xl font-black text-white">{current.title}</h4>
            </div>
          </div>

          <blockquote className="text-lg sm:text-xl font-medium text-white/90 italic border-l-2 border-[#F5C542] pl-4 py-1">
            "{current.quote}"
          </blockquote>

          <div className="pt-2">
            <span className="text-xs font-mono uppercase text-[#3DD68C] font-bold block mb-2">
              HOW PROJECTANDNOTE HELPS YOU
            </span>
            <p className="text-[#94A8BA] text-base leading-relaxed">
              {current.resolution}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {current.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-white/80 font-mono text-xs"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}