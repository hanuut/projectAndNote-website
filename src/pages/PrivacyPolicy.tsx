import React from 'react';
import LegalNav from '../components/LegalNav';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0D141B] font-sans selection:bg-[#F5C542] selection:text-[#0D141B]">
      <LegalNav />
      
      <main className="max-w-3xl mx-auto py-16 px-6 text-[#94A8BA] space-y-6">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Privacy Policy for projectAndNote</h1>
          <p className="text-sm uppercase tracking-widest text-[#B39DDB]">Last Updated: August 29, 2026</p>
        </header>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#3DD68C] inline-block"></span>
            1. Introduction
          </h2>
          <p className="leading-relaxed">
            projectAndNote ("we", "our", or "us") respects your privacy. Our core philosophy is that your thoughts belong to you. This Privacy Policy explains how we handle your data when you use our mobile application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#F5C542] inline-block"></span>
            2. 100% Local Storage & Data Ownership
          </h2>
          <p className="leading-relaxed mb-4">
            All of your user-generated content—including text notes, audio recordings, to-do lists, whiteboard drawings, and imported files—is stored locally on your device using an internal SQLite database and secure file sandbox.
          </p>
          <p className="leading-relaxed">
            We do not collect, transmit, or store your personal notes on our servers. We have zero access to your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#B39DDB] inline-block"></span>
            3. Device Permissions Explained
          </h2>
          <p className="leading-relaxed mb-4">
            To provide core functionality, the app requests the following device permissions. Data accessed via these permissions never leaves your device unless explicitly triggered by an AI feature (see section 4):
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong className="text-white/80">Microphone:</strong> To record voice memos locally.</li>
            <li><strong className="text-white/80">Camera & Photo Library:</strong> To attach images or videos to your notes.</li>
            <li><strong className="text-white/80">Notifications / Alarms:</strong> To trigger full-screen focus sprint alerts and scheduled deadlines.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#3DD68C] inline-block"></span>
            4. Third-Party Services & Network Access
          </h2>
          <p className="leading-relaxed mb-4">
            While the app operates offline-first, it utilizes specific third-party services that require internet access:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong className="text-white/80">Google AdMob (Advertising):</strong> To keep the app free, we use Google AdMob. AdMob may collect and use your Device ID, Advertising ID, and general usage data to serve personalized or non-personalized ads. You can learn more about how Google uses data at: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-[#F5C542] hover:underline">https://policies.google.com/technologies/partner-sites</a></li>
            <li><strong className="text-white/80">OpenRouter (Optional AI Enrichment):</strong> If you choose to enable "Smart Enrichment" or "AI OCR", specific note text or images you select will be transmitted securely to OpenRouter (acting as an AI gateway) to generate summaries, tags, or transcriptions. This data is processed momentarily and is not used to train AI models.</li>
            <li><strong className="text-white/80">OpenGraph Previews:</strong> If you paste a web URL into a note, the app fetches metadata (like the site title and thumbnail) directly from that website.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#F5C542] inline-block"></span>
            5. Analytics and Telemetry
          </h2>
          <p className="leading-relaxed">
            We employ zero developer telemetry. We do not use tools like Firebase Analytics or Crashlytics. We do not track your taps, screens viewed, or app usage habits.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#B39DDB] inline-block"></span>
            6. Children's Privacy
          </h2>
          <p className="leading-relaxed">
            Our application does not knowingly collect personally identifiable information from children under the age of 13. Because the app does not collect personal data to begin with, no data of minors is ever transmitted to us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#3DD68C] inline-block"></span>
            7. Changes to This Privacy Policy
          </h2>
          <p className="leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#F5C542] inline-block"></span>
            8. Contact Us
          </h2>
          <p className="leading-relaxed">
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at: <a href="mailto:contact.hanuut@gmail.com" className="text-[#F5C542] hover:underline">contact.hanuut@gmail.com</a>.
          </p>
        </section>
      </main>
      
      {/* 3. FOOTER */}
      <footer className="h-16 border-t border-white/10 bg-[#0D141B] px-6 mt-16 relative z-20 flex items-center text-[11px] text-[#94A8BA] uppercase tracking-[0.2em]">
        <div className="max-w-3xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            Copyright &copy; 2026 projectAndNote.
          </div>
        </div>
      </footer>
    </div>
  );
}
