import React from 'react';
import { ShieldCheck, ArrowUpRight, HardDrive, Lock, WifiOff } from 'lucide-react';

export default function LocalSovereignty({ onOpenEarlyAccess }: { onOpenEarlyAccess: () => void }) {
  return (
    <section id="privacy" className="py-24 sm:py-36 px-4 sm:px-6 relative z-20 border-t border-white/5 bg-[#090E13]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3DD68C]/10 border border-[#3DD68C]/30 text-xs font-mono text-[#3DD68C] uppercase font-bold tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" />
            100% PRIVATE & OFFLINE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Your thoughts stay on your phone.
          </h2>
          <p className="text-[#94A8BA] text-base sm:text-lg leading-relaxed">
            No accounts to create. No cloud servers reading your notes. No constant internet required. Everything you write, record, or save stays directly on your device.
          </p>
        </div>

        {/* 3 Simple Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl fluid-glass border border-white/15 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F5C542]/10 border border-[#F5C542]/30 flex items-center justify-center text-[#F5C542] mx-auto mb-2">
              <WifiOff className="w-6 h-6" />
            </div>
            <div className="text-lg font-bold text-white">Works Everywhere Offline</div>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Use it on airplanes, subways, or in the basement with zero internet. It opens instantly without any loading spinners.
            </p>
          </div>

          <div className="p-8 rounded-3xl fluid-glass border border-white/15 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#3DD68C]/10 border border-[#3DD68C]/30 flex items-center justify-center text-[#3DD68C] mx-auto mb-2">
              <Lock className="w-6 h-6" />
            </div>
            <div className="text-lg font-bold text-white">No Account or Password</div>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Download and start writing right away. You will never be asked for an email, password, or credit card.
            </p>
          </div>

          <div className="p-8 rounded-3xl fluid-glass border border-white/15 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white mx-auto mb-2">
              <HardDrive className="w-6 h-6" />
            </div>
            <div className="text-lg font-bold text-white">Saved Only On Your Phone</div>
            <p className="text-xs text-[#94A8BA] leading-relaxed">
              Your voice recordings, photos, and notes are saved in your phone's private storage. We have zero access to your thoughts.
            </p>
          </div>
        </div>

        {/* Big Call to Action Banner */}
        <div className="p-8 sm:p-14 rounded-[36px] bg-gradient-to-r from-[#172330] via-[#1C2B3A] to-[#121B24] border border-[#F5C542]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Ready to stop feeling scattered and start finishing?
            </h3>
            <p className="text-sm sm:text-base text-[#94A8BA] leading-relaxed">
              Free to download on Google Play. Start working with zero distractions today.
            </p>
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.projectandnote.project_note"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glitch-primary py-4 px-8 text-sm cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>DOWNLOAD FOR ANDROID</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}