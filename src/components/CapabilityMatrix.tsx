import React from 'react';
import { PenTool, FolderGit2, Zap, Clock, ShieldCheck } from 'lucide-react';

export default function CapabilityMatrix() {
  const pillars = [
    {
      label: 'CAPTURE',
      title: 'Universal Canvas',
      color: '#F5C542',
      icon: PenTool,
      features: [
        'Universal block architecture (drag, drop, interleave)',
        'Rich text formatting (H1, H2, body, highlight colors)',
        'Local voice memo recorder with visual waveform',
        'Image and video embeds directly in note stream',
        'Web link previews with cached metadata',
        'Tap-anywhere-between-blocks rapid insertion'
      ]
    },
    {
      label: 'STRUCTURE',
      title: 'Fluid Glass Hub',
      color: '#3DD68C',
      icon: FolderGit2,
      features: [
        '2-column staggered layout with fluid glass physics',
        'Instant multi-tag taxonomy and filtering',
        'Priority scoring & status tracking',
        'Custom opacity backgrounds per note',
        'Type-to-Confirm Danger Zone safe deletion',
        'Instant local search across title, body, and tags'
      ]
    },
    {
      label: 'FOCUS',
      title: 'Native Focus Sprints',
      color: '#FFE072',
      icon: Zap,
      features: [
        '25-minute deep work / 5-minute reset intervals',
        'Dynamic Energy Ball flow state visualizer',
        'Quick ±5 minute dynamic adjustment on the fly',
        'Direct link between timer and active note canvas',
        'Minimal battery consumption with local background ticks',
        'Zero distraction fullscreen focus lock'
      ]
    },
    {
      label: 'EXECUTE',
      title: 'Time-Bound Alarms',
      color: '#B39DDB',
      icon: Clock,
      features: [
        'Start dates and strict project deadlines',
        'Full-screen lock-screen waking alarm alerts',
        'Instant "Postpone +15m" or "I\'m on it" responses',
        'Instagram-style audio timeline scrubber',
        '8 bundled lo-fi, ambient jazz & neo-soul tracks',
        'Custom local audio file 15s/30s segment looping'
      ]
    },
    {
      label: 'PRIVATE',
      title: '100% Local-First',
      color: '#3DD68C',
      icon: ShieldCheck,
      features: [
        'Embedded 100% Local database architecture',
        'Zero mandatory accounts or logins',
        'Zero cloud server syncing or data telemetry',
        'Files and recordings isolated inside app sandbox',
        '0ms network latency — works entirely in airplane mode',
        'Complete user data ownership and export control'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {pillars.map((p) => {
        const Icon = p.icon;
        return (
          <div
            key={p.label}
            className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-widest uppercase"
                  style={{ backgroundColor: `${p.color}15`, color: p.color, border: `1px solid ${p.color}30` }}
                >
                  {p.label}
                </span>
                <Icon className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
              </div>

              <h4 className="text-xl font-extrabold text-white mb-4 tracking-tight">
                {p.title}
              </h4>

              <ul className="space-y-2.5 text-xs text-[#94A8BA] leading-relaxed">
                {p.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}