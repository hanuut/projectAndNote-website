import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import InteractiveCanvasMockup from '../components/InteractiveCanvasMockup';
import BentoGrid from '../components/BentoGrid';
import LocalSovereignty from '../components/LocalSovereignty';
import PersonaSelector from '../components/PersonaSelector';
import FAQAccordion from '../components/FAQAccordion';
import Footer from '../components/Footer';
import EarlyAccessModal from '../components/EarlyAccessModal';
import { ArrowUpRight, ShieldCheck, Lock, Cpu, MessageSquarePlus, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D141B] text-[#94A8BA] font-sans selection:bg-[#F5C542] selection:text-[#0D141B] overflow-x-hidden">
      {/* Sticky Header */}
      <Navbar onOpenEarlyAccess={() => setIsFeedbackOpen(true)} />

      {/* =========================================================================
          01. HERO SECTION (NOW AVAILABLE ON GOOGLE PLAY)
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden bg-grid-ambient pt-12 pb-24">
        {/* Background Atmospheric Video */}
        <video
          src="/power_ball_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 mix-blend-screen pointer-events-none"
        />

        {/* Ambient Top & Bottom Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D141B]/90 via-transparent to-[#0D141B] z-10 pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">
          {/* Live Release Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full fluid-glass border border-[#3DD68C]/40 shadow-[0_0_20px_rgba(61,214,140,0.15)] animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#3DD68C] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#3DD68C] uppercase">
              NOW AVAILABLE FOR ANDROID · 100% OFFLINE
            </span>
          </div>

          {/* Headline H1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.04]">
            Capture now. Enrich later. <br />
            <span className="bg-gradient-to-r from-white via-[#FFE072] to-[#F5C542] bg-clip-text text-transparent">
              Execute with urgency.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#94A8BA] max-w-3xl font-normal leading-relaxed">
            Move past passive note-taking. projectAndNote combines an ergonomic, block-based execution canvas with native focus sprints, waking deadline alarms, and a private local PDF library. 100% offline. Zero latency. Built for deep work.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.projectandnote.project_note"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-glitch-primary text-sm cursor-pointer"
            >
              <span className="flex items-center gap-2">
                DOWNLOAD ON GOOGLE PLAY
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>

            <button
              onClick={() => setIsFeedbackOpen(true)}
              className="w-full sm:w-auto btn-glass-secondary text-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#F5C542]" />
              SUGGEST A FEATURE / FEEDBACK
            </button>
          </div>

          {/* Assurance Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-[#94A8BA]/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3DD68C]" />
              100% Local SQLite Sandbox
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#F5C542]" />
              Zero Accounts Required
            </span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#94A8BA]" />
              Native Android Engine
            </span>
          </div>
        </div>

        {/* 3D Interactive Canvas Simulation Viewport */}
        <div id="canvas" className="relative z-20 w-full mt-16 px-2 sm:px-4">
          <InteractiveCanvasMockup />
        </div>
      </section>

      {/* =========================================================================
          02. CORE BENTO GRID
          ========================================================================= */}
      <div id="bento">
        <BentoGrid />
      </div>

      {/* =========================================================================
          03. USE CASE PERSONAS
          ========================================================================= */}
      <section className="py-24 sm:py-36 px-4 sm:px-6 relative z-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5C542] font-bold block">
              ADAPTED TO YOUR DISCIPLINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              What are you trying to get done?
            </h2>
            <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
              From engineering sprints and research dossiers to creative lookbooks and university milestones.
            </p>
          </div>

          <PersonaSelector />
        </div>
      </section>

      {/* =========================================================================
          04. PRIVACY & LOCAL SOVEREIGNTY
          ========================================================================= */}
      <LocalSovereignty onOpenEarlyAccess={() => setIsFeedbackOpen(true)} />

      {/* =========================================================================
          05. FAQ
          ========================================================================= */}
      <section id="faq" className="py-24 sm:py-36 px-4 sm:px-6 relative z-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5C542] font-bold block">
              QUESTIONS & ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
              Direct, transparent answers about our local database, focus tools, and export formats.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Feedback & Suggestion Modal */}
      <EarlyAccessModal
        isOpen={isFeedbackOpen}
        onClose={() => setIsFeedbackOpen(false)}
      />
    </div>
  );
}