import React from 'react';
import { ShieldCheck, HardDrive, Lock, WifiOff, ArrowUpRight } from 'lucide-react';

export default function LocalFirstPrivacySection() {
  return (
    <section id="privacy" className="py-24 sm:py-32 px-4 sm:px-6 relative z-20 border-t border-white/5 bg-[#090E13]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3DD68C]/10 border border-[#3DD68C]/30 text-xs font-mono text-[#3DD68C] uppercase font-bold tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            LOCAL-FIRST PRIVACY
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Your data belongs on your device.
          </h2>
          <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
            projectAndNote is architected around local-first storage. No account is required to use your workspace. Notes, projects, PDF books, media attachments, and productivity insights stay directly on your physical hardware.
          </p>
        </div>

        {/* Privacy Fact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl fluid-glass border border-white/15 space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#F5C542]/10 text-[#F5C542] flex items-center justify-center mx-auto mb-2">
              <WifiOff className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Full Offline Functionality</h4>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Every core tool—editor, whiteboard, PDF reader, and timer—works on airplanes and subway commutes with zero internet connection.
            </p>
          </div>

          <div className="p-8 rounded-3xl fluid-glass border border-white/15 space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#3DD68C]/10 text-[#3DD68C] flex items-center justify-center mx-auto mb-2">
              <Lock className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">No Mandatory Accounts</h4>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Open the app and start writing immediately. There are no mandatory cloud logins or account creation walls.
            </p>
          </div>

          <div className="p-8 rounded-3xl fluid-glass border border-white/15 space-y-3 text-center">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mx-auto mb-2">
              <HardDrive className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-white">Local-First Storage</h4>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Data is stored in your device's internal storage. Network access is only utilized for AdMob or if you explicitly configure optional OpenRouter AI features.
            </p>
          </div>
        </div>

        {/* CTA Terminal Banner */}
        <div className="p-8 sm:p-14 rounded-[36px] bg-gradient-to-r from-[#172330] via-[#1C2B3A] to-[#121B24] border border-[#F5C542]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Capture anything. Turn it into work.
            </h3>
            <p className="text-sm sm:text-base text-[#94A8BA] leading-relaxed">
              Download projectAndNote on Android and experience a fast, private workspace built for deep focus.
            </p>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.projectandnote.project_note"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glitch-primary py-4 px-8 text-sm cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>GET IT ON GOOGLE PLAY</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}