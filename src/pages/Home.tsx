import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import EarlyAccessModal from '../components/EarlyAccessModal';
import BlockEditorPreview from '../components/BlockEditorPreview';
import FocusSprintSimulator from '../components/FocusSprintSimulator';
import AlarmSimulator from '../components/AlarmSimulator';
import PersonaSelector from '../components/PersonaSelector';
import CapabilityMatrix from '../components/CapabilityMatrix';
import FAQAccordion from '../components/FAQAccordion';
import Footer from '../components/Footer';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2,
  HardDrive,
  Lock,
  ChevronDown
} from 'lucide-react';

export default function Home() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090E13] text-[#94A8BA] font-sans selection:bg-[#F5C542] selection:text-[#090E13] overflow-x-hidden">
      <Navbar onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)} />

      {/* 01. HERO */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden bg-grid-pattern pt-8 pb-16">
        <video
          src="/power_ball_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen pointer-events-none"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#090E13]/80 via-transparent to-[#090E13] z-10 pointer-events-none" />

        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-[#F5C542]/30 mb-8">
            <img
              src="/pn_logo.svg"
              alt="projectAndNote Logo"
              className="w-4 h-4 object-contain"
              width="16"
              height="16"
            />
            <span className="text-xs font-mono font-bold tracking-widest text-[#F5C542] uppercase">
              PRE-RELEASE · ANDROID
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[1.05]">
            Your ideas don't wait. <br />
            <span className="bg-gradient-to-r from-white via-[#FFE072] to-[#F5C542] bg-clip-text text-transparent">
              Neither should your work.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#94A8BA] max-w-2xl font-normal mb-10 leading-relaxed">
            Capture a thought, build a project, start a Focus Sprint, and keep moving — in one private workspace that works 100% offline.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => setIsEarlyAccessOpen(true)}
              className="w-full sm:w-auto btn-glitch cursor-pointer text-sm"
              data-text="GET EARLY ACCESS"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET EARLY ACCESS
                <ArrowRight className="w-4 h-4" />
              </span>
              <div className="scanline"></div>
            </button>

            <a
              href="#philosophy"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full glass-panel hover:bg-white/10 text-white font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 border border-white/15 cursor-pointer"
            >
              SEE HOW IT WORKS
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-12 text-xs font-mono text-[#94A8BA]/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#3DD68C]" />
              100% Local SQLite
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#F5C542]" />
              Zero Accounts Required
            </span>
            <span className="flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#B39DDB]" />
              Native Android Engine
            </span>
          </div>
        </div>
      </section>

      {/* 02. PROBLEM RECOGNITION */}
      <section id="philosophy" className="py-24 sm:py-32 px-4 sm:px-6 relative border-t border-white/5 bg-[#0A1017]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5C542] font-bold block mb-3">
              THE DISPERSION PROBLEM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
              Your brain wasn't built to remember everything.
            </h2>
            <p className="text-base sm:text-lg text-[#94A8BA] leading-relaxed">
              Every day, high-value thoughts evaporate between fragmented tools and endless sync screens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                step: '01',
                title: 'The sudden classroom spark',
                desc: 'A vital realization appears during class or research. You scramble for an app that takes 10 seconds to load.'
              },
              {
                step: '02',
                title: 'The creeping deadline',
                desc: 'A critical date gets closer, but calendar notifications get silently dismissed in a cluttered tray.'
              },
              {
                step: '03',
                title: 'The fragmented voice note',
                desc: 'You record a 45-second audio memo, but it gets buried in a separate recorder app with no context.'
              },
              {
                step: '04',
                title: 'The multi-project sprawl',
                desc: 'You start three ambitious projects, but notes, checklists, and references are scattered across five folders.'
              },
              {
                step: '05',
                title: 'The broken concentration',
                desc: 'You sit down to work, but productivity apps pull you into configuration menus instead of deep focus.'
              },
              {
                step: '06',
                title: 'The cloud dependency',
                desc: 'You lose internet connection on a flight or commute, and your notes lock you out.'
              }
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#F5C542] font-bold block mb-2">
                    SCENARIO {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-[#94A8BA] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#111C26] via-[#162432] to-[#111C26] border border-[#F5C542]/30 text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              projectAndNote puts the pieces back together.
            </h3>
            <p className="text-sm text-[#94A8BA] max-w-xl mx-auto leading-relaxed">
              From raw thought to structured execution in one unified, 100% offline workspace.
            </p>
          </div>
        </div>
      </section>

      {/* 03. CAPTURE */}
      <section id="capture" className="py-24 sm:py-32 px-4 sm:px-6 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3DD68C] font-bold block mb-3">
              01 · UNIVERSAL CAPTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Don't force every idea into a paragraph.
            </h2>
            <p className="text-base sm:text-lg text-[#94A8BA] leading-relaxed">
              Write it. Record it. Attach it. Break it into tasks. Give it a deadline. Work on it.
            </p>
          </div>

          <BlockEditorPreview />
        </div>
      </section>

      {/* 04. STRUCTURE */}
      <section id="structure" className="py-24 sm:py-32 px-4 sm:px-6 relative border-t border-white/5 bg-[#0B1117]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F5C542] font-bold block">
                02 · STRUCTURE & TAXONOMY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Turn the mess into a project.
              </h2>
              <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
                Keep ideas together. Give them a place. Find what matters. View your notes in a clean 2-column staggered grid with instantaneous multi-tag filtering.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Instant Multi-Tag search (#research, #launch, #study)',
                  'Priority Scores to elevate high-impact initiatives',
                  'Type-to-Confirm safe deletion for critical projects',
                  'Custom opacity visual tinting per note card'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-white/90">
                    <div className="w-5 h-5 rounded-full bg-[#F5C542]/10 border border-[#F5C542]/30 flex items-center justify-center text-[#F5C542] shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-5 rounded-3xl glass-panel border border-white/15">
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-[#F5C542]/40 shadow-lg">
                  <span className="text-[10px] font-mono text-[#F5C542] font-bold block mb-1">#RESEARCH · HIGH</span>
                  <div className="text-sm font-bold text-white mb-1">Autonomous Drone Specs</div>
                  <div className="text-xs text-[#94A8BA] line-clamp-3">
                    Calculated flight telemetry, power consumption metrics, and motor specs.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-[10px] font-mono text-[#3DD68C] font-bold block mb-1">#STUDY</span>
                  <div className="text-sm font-bold text-white mb-1">Bioengineering Exam prep</div>
                  <div className="text-xs text-[#94A8BA]">4 checklist milestones remaining.</div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-[10px] font-mono text-[#B39DDB] font-bold block mb-1">#CREATIVE</span>
                  <div className="text-sm font-bold text-white mb-1">Sci-Fi Short Story Draft</div>
                  <div className="text-xs text-[#94A8BA]">2 voice memos + storyboard images.</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-[#3DD68C]/40">
                  <span className="text-[10px] font-mono text-[#3DD68C] font-bold block mb-1">#DEV · SPRINT</span>
                  <div className="text-sm font-bold text-white mb-1">SQLite Migration 2.0</div>
                  <div className="text-xs text-[#94A8BA]">0ms query optimization locked in.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. FOCUS SPRINT */}
      <section id="focus" className="py-24 sm:py-32 px-4 sm:px-6 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5C542] font-bold block mb-3">
              03 · NATIVE FOCUS SPRINTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              You already know what to do. <br />
              <span className="text-[#F5C542]">Now lock in.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#94A8BA] leading-relaxed">
              Start a Focus Sprint and give one task your full attention. The dynamic Energy Ball visualizer tracks your flow state right on the canvas.
            </p>
          </div>

          <FocusSprintSimulator />
        </div>
      </section>

      {/* 06 & 07. DEADLINES & AUDIO ALARMS */}
      <section id="execution" className="py-24 sm:py-32 px-4 sm:px-6 relative border-t border-white/5 bg-[#080D12]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B39DDB] font-bold block mb-3">
              04 & 05 · TIME-BOUND EXECUTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              A note can remember. <br />
              <span className="text-white/90">A deadline can move you.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#94A8BA] leading-relaxed">
              Attach start dates and deadlines to your projects. When the time comes, full-screen waking alarms bypass the lock screen so nothing slips through.
            </p>
          </div>

          <AlarmSimulator />
        </div>
      </section>

      {/* 08. USE CASE PERSPECTIVES */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5C542] font-bold block mb-3">
              WHO IT IS FOR
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              What are you trying to get done?
            </h2>
            <p className="text-base sm:text-lg text-[#94A8BA] leading-relaxed">
              Different disciplines. Same core challenge: moving from scattered ideas to finished work.
            </p>
          </div>

          <PersonaSelector />
        </div>
      </section>

      {/* 09. PRIVACY */}
      <section id="privacy" className="py-24 sm:py-32 px-4 sm:px-6 relative border-t border-white/5 bg-[#0A1017]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#3DD68C] font-bold block mb-3">
              100% LOCAL-FIRST
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Your thoughts are yours.
            </h2>
            <p className="text-base sm:text-lg text-[#94A8BA] leading-relaxed">
              No account. No cloud storage. No forced sync. No constant connection. Your data stays on your device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl glass-panel border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#3DD68C]/10 border border-[#3DD68C]/30 flex items-center justify-center text-[#3DD68C] mb-4">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Embedded SQLite</h3>
              <p className="text-xs text-[#94A8BA] leading-relaxed">
                All notes, checklists, and metadata live in a high-speed SQLite database inside your Android app sandbox with 0ms network latency.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-panel border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#F5C542]/10 border border-[#F5C542]/30 flex items-center justify-center text-[#F5C542] mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Zero Telemetry</h3>
              <p className="text-xs text-[#94A8BA] leading-relaxed">
                We do not track screen taps, navigation events, or keystrokes. We have zero access to your thoughts, recordings, or images.
              </p>
            </div>

            <div className="p-6 rounded-3xl glass-panel border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#B39DDB]/10 border border-[#B39DDB]/30 flex items-center justify-center text-[#B39DDB] mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">True Offline Freedom</h3>
              <p className="text-xs text-[#94A8BA] leading-relaxed">
                Works in airplane mode, subway commutes, or remote field locations without losing a single character or timer tick.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CAPABILITY MATRIX */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5C542] font-bold block mb-3">
              COMPLETE CAPABILITY SYSTEM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Built for serious execution.
            </h2>
            <p className="text-base sm:text-lg text-[#94A8BA] leading-relaxed">
              Every tool in projectAndNote serves one purpose: getting your projects across the finish line.
            </p>
          </div>

          <CapabilityMatrix />
        </div>
      </section>

      {/* 11. EARLY ACCESS CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 relative border-t border-white/5 bg-gradient-to-b from-[#090E13] via-[#111C26] to-[#090E13]">
        <div className="max-w-4xl mx-auto text-center glass-panel-glow rounded-[36px] p-8 sm:p-16 border border-[#F5C542]/30 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5C542]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5C542]/10 border border-[#F5C542]/30 text-xs font-mono text-[#F5C542] uppercase font-bold">
              It's almost time
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              projectAndNote is getting ready for launch.
            </h2>

            <p className="text-base sm:text-lg text-[#94A8BA] max-w-xl mx-auto leading-relaxed">
              Be among the first to receive the Android early access APK and launch invitation.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setIsEarlyAccessOpen(true)}
                className="btn-glitch text-sm py-4 px-10 cursor-pointer"
              >
                <span>REQUEST EARLY ACCESS</span>
              </button>
            </div>

            <p className="text-xs font-mono text-[#94A8BA]/60 pt-2">
              Free · 100% Offline · Android Initial Release
            </p>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 relative border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F5C542] font-bold block mb-3">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-[#94A8BA] leading-relaxed">
              Straightforward answers about our architecture, privacy, and focus tools.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      <Footer />

      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
      />
    </div>
  );
}