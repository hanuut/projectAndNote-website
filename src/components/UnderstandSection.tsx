import React, { useState } from 'react';
import PerspectiveCard from './PerspectiveCard';
import { BarChart3, Clock, Flame, Calendar, ShieldCheck, Activity } from 'lucide-react';

export default function UnderstandSection() {
  const [timeRange, setTimeRange] = useState<'daily' | 'weekly' | 'monthly'>('weekly');

  return (
    <section id="understand" className="py-24 sm:py-32 px-4 sm:px-6 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3DD68C]/10 border border-[#3DD68C]/30 text-xs font-mono text-[#3DD68C] uppercase font-bold tracking-widest">
            05 · UNDERSTAND
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            See your productivity rhythm. Processed 100% locally.
          </h2>
          <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
            Understand how you spend your energy. The app automatically tracks your focus sprints, completed tasks, and note activity to build your 24-hour rhythm chart and activity journey—without sending a single byte of telemetry to external servers.
          </p>
        </div>

        {/* Interactive Insights Visualizer */}
        <div className="rounded-3xl fluid-glass-elevated p-6 sm:p-10 border border-white/15 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs font-mono text-[#3DD68C] font-bold uppercase flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                Workspace Insights Dashboard
              </div>
              <h3 className="text-2xl font-extrabold text-white mt-1">Focus & Activity Trends</h3>
            </div>

            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/10 text-xs font-mono">
              {(['daily', 'weekly', 'monthly'] as const).map(range => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-3 py-1.5 rounded-lg capitalize cursor-pointer transition-colors ${
                    timeRange === range ? 'bg-[#3DD68C] text-black font-bold' : 'text-[#94A8BA] hover:text-white'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Metric Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#172330] border border-white/10 space-y-1">
              <div className="text-[11px] font-mono text-[#94A8BA]">TOTAL FOCUS TIME</div>
              <div className="text-3xl font-black font-mono text-white">4h 35m</div>
              <div className="text-[11px] font-mono text-[#3DD68C]">+45m vs yesterday</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#172330] border border-white/10 space-y-1">
              <div className="text-[11px] font-mono text-[#94A8BA]">TASKS COMPLETED</div>
              <div className="text-3xl font-black font-mono text-white">18 tasks</div>
              <div className="text-[11px] font-mono text-[#F5C542]">8 checklist milestones</div>
            </div>

            <div className="p-5 rounded-2xl bg-[#172330] border border-white/10 space-y-1">
              <div className="text-[11px] font-mono text-[#94A8BA]">PEAK FOCUS WINDOW</div>
              <div className="text-3xl font-black font-mono text-white">09:00 - 11:30</div>
              <div className="text-[11px] font-mono text-white/60">Morning flow rhythm</div>
            </div>
          </div>

          {/* 24-Hour Rhythm Chart Simulation */}
          <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-4">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-white font-bold">24-Hour Activity Rhythm</span>
              <span className="text-[#94A8BA]/60">Local SQLite Aggregation</span>
            </div>

            <div className="h-32 flex items-end justify-between gap-1 sm:gap-2 pt-4">
              {[10, 5, 0, 0, 0, 15, 45, 80, 100, 90, 75, 60, 40, 70, 85, 95, 65, 50, 30, 20, 15, 10, 5, 0].map((val, hour) => (
                <div key={hour} className="flex-1 flex flex-col items-center gap-1 group">
                  <div
                    className={`w-full rounded-t transition-all ${
                      val > 70 ? 'bg-[#F5C542]' : val > 30 ? 'bg-[#3DD68C]' : 'bg-white/15'
                    }`}
                    style={{ height: `${val}%` }}
                  />
                  <span className="text-[8px] font-mono text-white/30 hidden sm:inline-block">{hour}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}