import React from 'react';
import { CheckCircle2, LayoutTemplate, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D141B] font-sans selection:bg-[#F5C542] selection:text-[#0D141B]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          src="./power_ball_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D141B]/40 to-[#0D141B] z-10"></div>
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 z-10" style={{ backgroundImage: 'radial-gradient(#F5C542 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-12 md:mt-0">
          
          {/* Subtle Logo Placeholder */}
          <div className="px-6 py-2 mb-8 flex items-center gap-3 backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-2xl">
            <div className="w-6 h-6 rounded bg-[#F5C542]" />
            <span className="text-sm font-bold tracking-widest text-white">projectNote</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-4 leading-none">
            Capture now. <br className="hidden sm:block" /> <span className="text-white/90">Enrich later.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#94A8BA] max-w-2xl font-light mb-10 leading-relaxed">
            The 100% offline workspace that adapts to your mind. From raw thoughts to structured execution.
          </p>

          {/* The Glitch CTA Button */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.projectandnote.project-note"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glitch group" 
            data-text="DOWNLOAD FREE"
          >
            <span className="relative z-10">DOWNLOAD FREE</span>
            <div className="scanline"></div>
          </a>
        </div>
      </section>

      {/* 2. THE "VALUE" SECTION */}
      <section className="bg-[#0D141B] py-24 md:py-36 px-6 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Focus */}
          <div className="bg-[#111C26] border border-white/[0.08] rounded-[24px] p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#3DD68C]/30 hover:shadow-[0_10px_40px_rgba(61,214,140,0.05)]">
            <div className="w-8 h-1 bg-[#3DD68C] mb-6"></div>
            <div className="w-10 h-10 rounded-full bg-[#3DD68C]/10 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-5 h-5 text-[#3DD68C]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Lock In. Get it Done.</h3>
            <p className="text-[#94A8BA] leading-relaxed flex-grow">
              Dynamic Focus Sprints with native timers keep you locked in until the project is finished.
            </p>
          </div>

          {/* Card 2: Structure */}
          <div className="bg-[#111C26] border border-white/[0.08] rounded-[24px] p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#F5C542]/30 hover:shadow-[0_10px_40px_rgba(245,197,66,0.05)]">
            <div className="w-8 h-1 bg-[#F5C542] mb-6"></div>
            <div className="w-10 h-10 rounded-full bg-[#F5C542]/10 flex items-center justify-center mb-6">
              <LayoutTemplate className="w-5 h-5 text-[#F5C542]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Structure Your Vision.</h3>
            <p className="text-[#94A8BA] leading-relaxed flex-grow">
              Tag, sort, and prioritize your notes. A block-based editor for text, media, and whiteboards.
            </p>
          </div>

          {/* Card 3: Privacy */}
          <div className="bg-[#111C26] border border-white/[0.08] rounded-[24px] p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#B39DDB]/30 hover:shadow-[0_10px_40px_rgba(179,157,219,0.05)]">
            <div className="w-8 h-1 bg-[#B39DDB] mb-6"></div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">100% Offline & Private.</h3>
            <p className="text-[#94A8BA] leading-relaxed flex-grow">
              Your data never leaves your device. Zero telemetry. Complete ownership of your mind's work.
            </p>
          </div>
          
        </div>
      </section>

      {/* 3. FOOTER */}
      <footer className="h-16 border-t border-white/10 bg-[#0D141B] px-6 relative z-20 flex items-center text-[11px] text-[#94A8BA] uppercase tracking-[0.2em]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            Copyright &copy; 2026 projectAndNote.
          </div>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
