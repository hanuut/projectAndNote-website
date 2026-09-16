import React, { useState } from "react";
import Navbar from "../components/Navbar";
import InteractiveCanvasMockup from "../components/InteractiveCanvasMockup";
import BentoGrid from "../components/BentoGrid";
import LocalSovereignty from "../components/LocalSovereignty";
import PersonaSelector from "../components/PersonaSelector";
import FAQAccordion from "../components/FAQAccordion";
import Footer from "../components/Footer";
import EarlyAccessModal from "../components/EarlyAccessModal";
import {
  ArrowUpRight,
  ShieldCheck,
  Lock,
  WifiOff,
  MessageSquarePlus,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D141B] text-[#94A8BA] font-sans selection:bg-[#F5C542] selection:text-[#0D141B] overflow-x-hidden">
      {/* Sticky Header */}
      <Navbar onOpenEarlyAccess={() => setIsFeedbackOpen(true)} />

      {/* =========================================================================
          01. HERO SECTION
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
          {/* Live Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full fluid-glass border border-[#3DD68C]/40 shadow-[0_0_20px_rgba(61,214,140,0.15)] animate-fadeIn">
            <span className="text-xs font-mono font-bold tracking-widest text-[#3DD68C] uppercase">
              AVAILABLE FOR ANDROID
            </span>
          </div>

          {/* Simple, Punchy Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.04]">
            Your ideas don't wait. <br />
            <span className="bg-gradient-to-r from-white via-[#FFE072] to-[#F5C542] bg-clip-text text-transparent">
              Neither should your work.
            </span>
          </h1>

          {/* Plain English Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#94A8BA] max-w-3xl font-normal leading-relaxed">
            Stop juggling notes, voice memos, to-do lists, and timers across
            five different apps. projectAndNote puts everything in one clean,
            fast workspace that works 100% offline.
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
              SUGGEST A FEATURE
            </button>
          </div>

          {/* Plain Assurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-[#94A8BA]/80">
            <span className="flex items-center gap-1.5">
              <WifiOff className="w-4 h-4 text-[#3DD68C]" />
              100% Offline (No Wi-Fi Needed)
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#F5C542]" />
              No Account or Sign Up
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-white" />
              Saved Only On Your Phone
            </span>
          </div>
        </div>

        {/* 3D Interactive Canvas Simulation Viewport */}
        <div id="canvas" className="relative z-20 w-full mt-16 px-2 sm:px-4">
          <InteractiveCanvasMockup />
        </div>
      </section>

      {/* =========================================================================
          02. PROBLEM RECOGNITION (EVERYDAY SITUATIONS)
          ========================================================================= */}
      <section
        id="philosophy"
        className="py-24 sm:py-32 px-4 sm:px-6 relative border-t border-white/5 bg-[#0A1017]"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5C542] font-bold block">
              DOES THIS SOUND FAMILIAR?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Your brain wasn't built to remember everything.
            </h2>
            <p className="text-base sm:text-lg text-[#94A8BA] leading-relaxed">
              Every day, good ideas get lost between too many apps and quiet
              notifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                step: "01",
                title: "The sudden idea",
                desc: "A great thought hits you during class or a walk, but your notes app takes 10 seconds to load.",
              },
              {
                step: "02",
                title: "The forgotten deadline",
                desc: "A project is due tomorrow, but standard quiet phone notifications got buried under social media alerts.",
              },
              {
                step: "03",
                title: "The lost voice note",
                desc: "You recorded a quick voice memo, but now you have no idea which folder it saved to.",
              },
              {
                step: "04",
                title: "The scattered mess",
                desc: "Your to-do list is in one app, your photos are in your gallery, and your notes are in another folder.",
              },
              {
                step: "05",
                title: "The distraction trap",
                desc: "You open an app to work, but confusing menus and settings pull you out of your focus.",
              },
              {
                step: "06",
                title: "The offline blackout",
                desc: "You are on a plane or subway with no internet, and cloud apps lock you out of your own notes.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl fluid-glass border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#F5C542] font-bold block mb-2">
                    SITUATION {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#94A8BA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#111C26] via-[#162432] to-[#111C26] border border-[#F5C542]/30 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              projectAndNote puts all the pieces back together.
            </h3>
            <p className="text-sm text-[#94A8BA] max-w-xl mx-auto leading-relaxed">
              Capture your thought, organize your tasks, start a focus timer,
              and finish the job.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03. CORE BENTO GRID (CLEAR FEATURES)
          ========================================================================= */}
      <div id="bento">
        <BentoGrid />
      </div>

      {/* =========================================================================
          04. WHO IS THIS FOR?
          ========================================================================= */}
      <section className="py-24 sm:py-36 px-4 sm:px-6 relative z-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5C542] font-bold block">
              REAL USE CASES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              What are you trying to finish?
            </h2>
            <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
              Whether you are studying for exams, writing articles, planning
              projects, or managing your day.
            </p>
          </div>

          <PersonaSelector />
        </div>
      </section>

      {/* =========================================================================
          05. PRIVACY & LOCAL ARCHITECTURE
          ========================================================================= */}
      <LocalSovereignty onOpenEarlyAccess={() => setIsFeedbackOpen(true)} />

      {/* =========================================================================
          06. FAQ SECTION
          ========================================================================= */}
      <section
        id="faq"
        className="py-24 sm:py-36 px-4 sm:px-6 relative z-20 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5C542] font-bold block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
              Straightforward answers about how the app works, privacy, and
              focus tools.
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
