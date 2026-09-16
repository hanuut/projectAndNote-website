import React, { useState, useEffect } from 'react';
import { Type, CheckSquare, Mic, Crop, Video, BookOpen, PenTool, Sparkles } from 'lucide-react';

interface ToolItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  hotkey: string;
  color: string;
}

const TOOLS: ToolItem[] = [
  { id: 'text', name: 'Text & Headings', icon: Type, hotkey: 'T', color: '#FFFFFF' },
  { id: 'checklist', name: 'Smart Checklist', icon: CheckSquare, hotkey: 'C', color: '#3DD68C' },
  { id: 'audio', name: 'Voice Memo', icon: Mic, hotkey: 'V', color: '#F5C542' },
  { id: 'crop', name: 'Photo Cropper', icon: Crop, hotkey: 'P', color: '#C084FC' },
  { id: 'trim', name: 'Video Trimmer', icon: Video, hotkey: 'M', color: '#A855F7' },
  { id: 'pdf', name: 'PDF Library', icon: BookOpen, hotkey: 'B', color: '#38BDF8' },
  { id: 'draw', name: 'Whiteboard', icon: PenTool, hotkey: 'W', color: '#F472B6' },
];

export default function VerticalStudioToolbox({ onSelectTool }: { onSelectTool?: (toolId: string) => void }) {
  const [activeTool, setActiveTool] = useState<string>('text');
  const [isIdle, setIsIdle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // 3-second auto-dimming idle state simulation
  useEffect(() => {
    if (isHovered) {
      setIsIdle(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsIdle(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isHovered, activeTool]);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl transition-all duration-500 ease-out studio-glow-border ${
        isIdle && !isHovered ? 'opacity-40 scale-95' : 'opacity-100 scale-100 shadow-[0_0_35px_rgba(168,85,247,0.3)]'
      }`}
    >
      <div className="bg-[#111C26]/90 backdrop-blur-2xl rounded-2xl p-2 flex flex-col gap-1.5 border border-white/15">
        <div className="px-2 py-1 text-[9px] font-mono text-[#C084FC] uppercase tracking-widest text-center border-b border-white/10 pb-1.5 flex items-center justify-center gap-1">
          <Sparkles className="w-2.5 h-2.5 text-[#F5C542] animate-pulse" />
          <span>STUDIO</span>
        </div>

        {TOOLS.map((tool) => {
          const Icon = tool.icon;
          const isSelected = activeTool === tool.id;

          return (
            <button
              key={tool.id}
              onClick={() => {
                setActiveTool(tool.id);
                setIsIdle(false);
                onSelectTool?.(tool.id);
              }}
              title={`${tool.name} (${tool.hotkey})`}
              className={`group relative p-2.5 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-tr from-[#A855F7]/30 to-[#F5C542]/20 text-white border border-[#C084FC]/60 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                  : 'text-[#94A8BA] hover:text-white hover:bg-white/[0.06] border border-transparent'
              }`}
            >
              <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />

              {/* Tooltip on hover */}
              <div className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-[#090E13]/95 border border-white/15 text-white text-[10px] font-mono whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity shadow-xl z-50 flex items-center gap-1.5">
                <span>{tool.name}</span>
                <span className="px-1 py-0.2 rounded bg-white/10 text-[#F5C542] text-[8px] font-bold">
                  {tool.hotkey}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}