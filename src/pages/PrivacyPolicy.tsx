import React from 'react';
import LegalNav from '../components/LegalNav';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#090E13] font-sans selection:bg-[#F5C542] selection:text-[#090E13]">
      <LegalNav />
      
      <main className="max-w-3xl mx-auto py-16 px-6 text-[#94A8BA] space-y-6">
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#3DD68C]/15 text-[#3DD68C] border border-[#3DD68C]/30 font-bold uppercase">
              100% Local-First
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Privacy Policy for projectAndNote
          </h1>
          <p className="text-xs font-mono uppercase tracking-widest text-[#B39DDB]">
            Last Updated: August 31, 2026
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#3DD68C]"></span>
            1. Fundamental Privacy Philosophy
          </h2>
          <p className="leading-relaxed">
            projectAndNote ("we", "our", or "us") is built around a single uncompromisable premise: <strong>your thoughts belong entirely to you</strong>. Unlike cloud-centric note platforms, our architecture does not rely on remote synchronization servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#F5C542]"></span>
            2. 100% Local Storage
          </h2>
          <p className="leading-relaxed">
            All user-generated content—including formatted text, task checklists, audio voice memos, video attachments, drawings, and metadata—is stored exclusively on your Android device in an internal, encrypted-at-rest database.
          </p>
          <p className="leading-relaxed">
            We operate zero remote database servers to store or inspect your notes. We have zero access to your notes, audio recordings, or project names.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#B39DDB]"></span>
            3. Android Device Permissions
          </h2>
          <p className="leading-relaxed">
            To provide core offline productivity capabilities, projectAndNote requests the following device permissions:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><strong className="text-white">Microphone:</strong> To record audio voice memos directly within your note canvas.</li>
            <li><strong className="text-white">Storage / Photo Library:</strong> To attach images, videos, and local audio files to your notes.</li>
            <li><strong className="text-white">Exact Alarms & Full-Screen Intent:</strong> To trigger unmissable waking alarms for task deadlines that bypass lock-screen mode.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#3DD68C]"></span>
            4. Analytics & Telemetry
          </h2>
          <p className="leading-relaxed">
            We do not track screen views, typing speed, button clicks, or document contents. Zero user behavioral analytics are sent to us or any third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#F5C542]"></span>
            5. Contact Us
          </h2>
          <p className="leading-relaxed">
            If you have any questions regarding privacy or our local-first implementation, contact us directly at:{' '}
            <a href="mailto:contact.hanuut@gmail.com" className="text-[#F5C542] hover:underline font-mono">
              contact.hanuut@gmail.com
            </a>
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}