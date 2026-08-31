import React, { useState } from 'react';
import { GraduationCap, Microscope, Sparkles, Terminal, Briefcase } from 'lucide-react';

export default function PersonaSelector() {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      id: 'student',
      title: 'Student',
      icon: GraduationCap,
      quote: "I have 6 classes, 3 assignments due this Friday, and my notes are completely scattered.",
      resolution: "Keep lecture notes, recorded voice snippets, and checklist milestones unified in one project. Set full-screen alarms that wake your screen before due dates.",
      tags: ['Lecture Memos', 'Assignment Deadlines', 'Focus Sprints', 'Checklists']
    },
    {
      id: 'researcher',
      title: 'Researcher & Academic',
      icon: Microscope,
      quote: "My research is spread across PDFs, field audio notes, hypotheses, and external paper links.",
      resolution: "Consolidate your entire line of inquiry inside a single block canvas with zero cloud latency. Tag, sort, and search across local SQLite without data leakage.",
      tags: ['Field Voice Memos', 'Universal Blocks', 'Tags & Filter', 'Zero Cloud Sync']
    },
    {
      id: 'creator',
      title: 'Creator & Writer',
      icon: Sparkles,
      quote: "Raw ideas hit me while walking or reading. I need a place that captures thoughts instantly.",
      resolution: "Record quick voice memos, drop reference images, and organize drafts in a fluid 2-column staggered hub. When ready to write, lock into a 25-minute sprint.",
      tags: ['Fast Capture', 'Media Attachments', 'Energy Ball', 'Draft Hub']
    },
    {
      id: 'developer',
      title: 'Developer & Builder',
      icon: Terminal,
      quote: "I already know what I need to build. I just need to stop context switching and finish the sprint.",
      resolution: "Break features into bite-sized block checklists. Trigger the Energy Ball timer directly on the canvas and execute without distractions.",
      tags: ['Task Checklists', 'Priority Scores', '25/5 Sprint Rhythm', 'Local-First']
    },
    {
      id: 'professional',
      title: 'Independent Professional',
      icon: Briefcase,
      quote: "I don't need another complex enterprise software. I need to get my client work finished.",
      resolution: "Manage projects with custom opacity tags, start dates, and unmissable waking alarms. Your proprietary data never touches third-party servers.",
      tags: ['Waking Alarms', 'Start & End Dates', '100% Private', 'Type-to-Confirm']
    }
  ];

  const current = personas[activeTab];
  const IconComponent = current.icon;

  return (
    <div className="w-full max-w-5xl mx-auto">
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
                  ? 'bg-[#F5C542] text-[#090E13] shadow-lg shadow-[#F5C542]/20'
                  : 'bg-white/[0.03] border border-white/10 text-[#94A8BA] hover:text-white hover:bg-white/5'
              }`}
            >
              <TabIcon className="w-4 h-4" />
              <span>{p.title}</span>
            </button>
          );
        })}
      </div>

      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 relative overflow-hidden">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F5C542]/10 border border-[#F5C542]/30 flex items-center justify-center text-[#F5C542]">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#F5C542] font-bold">Use Case Perspective</span>
              <h4 className="text-2xl font-black text-white">{current.title}</h4>
            </div>
          </div>

          <blockquote className="text-lg sm:text-xl font-medium text-white/90 italic border-l-2 border-[#F5C542] pl-4 py-1">
            "{current.quote}"
          </blockquote>

          <div className="pt-2">
            <span className="text-xs font-mono uppercase text-[#3DD68C] font-bold block mb-2">
              HOW PROJECTANDNOTE SOLVES IT
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