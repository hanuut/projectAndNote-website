import React from "react";
import LegalNav from "../components/LegalNav";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#090E13] font-sans selection:bg-[#F5C542] selection:text-[#090E13]">
      <LegalNav />

      <main className="max-w-3xl mx-auto py-16 px-6 text-[#94A8BA] space-y-6">
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#3DD68C]/15 text-[#3DD68C] border border-[#3DD68C]/30 font-bold uppercase">
              Local-First Architecture
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Privacy Policy for projectAndNote
          </h1>
          <p className="text-xs font-mono uppercase tracking-widest text-[#F5C542]">
            Authoritative Version
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#3DD68C]"></span>
            1. Core Privacy Philosophy
          </h2>
          <p className="leading-relaxed">
            projectAndNote is built on a{" "}
            <strong>local-first storage architecture</strong>. Your notes,
            projects, Whiteboard Studio sketches, PDF books, voice recordings,
            and productivity insights are stored locally on your device. No
            cloud account or registration is required to use the app.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#F5C542]"></span>
            2. Local Activity Tracking & Insights
          </h2>
          <p className="leading-relaxed">
            The app calculates daily/weekly focus time, completed sprint
            streaks, and 24-hour activity rhythms for the Insights dashboard.{" "}
            <strong>
              All calculation and storage occurs strictly on your device inside
              SQLite
            </strong>
            . We do not transmit your usage behavior or note contents to
            external tracking servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#38BDF8]"></span>
            3. Network Access & Third-Party Services
          </h2>
          <p className="leading-relaxed">
            The core workspace functions completely offline. Network
            communication is only utilized under the following specific
            circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong className="text-white">Google AdMob:</strong> If ads are
              enabled in your build, Google AdMob may use device advertising
              identifiers according to Google's standard advertising policies.
            </li>
            <li>
              <strong className="text-white">
                Optional User-Configured AI (OpenRouter):
              </strong>{" "}
              If you choose to configure an optional OpenRouter API key for text
              enrichment or OCR, data you explicitly select is sent directly to
              OpenRouter. AI features are not active by default and are
              completely optional.
            </li>
            <li>
              <strong className="text-white">Link Metadata:</strong> If you
              paste a web URL into a note, basic OpenGraph preview data (such as
              title and thumbnail) is requested directly from that URL.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#A855F7]"></span>
            4. Device Permissions
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              <strong className="text-white">Microphone:</strong> To record
              audio voice memos directly within your notes.
            </li>
            <li>
              <strong className="text-white">Storage / Media:</strong> To import
              PDFs, images, and video attachments into your local workspace.
            </li>
            <li>
              <strong className="text-white">
                Exact Alarms / Notifications:
              </strong>{" "}
              To trigger scheduled focus alerts and deadline reminders.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#F5C542]"></span>
            5. Contact
          </h2>
          <p className="leading-relaxed">
            For questions regarding privacy, please contact:{" "}
            <a
              href="mailto:contact.hanuut@gmail.com"
              className="text-[#F5C542] hover:underline font-mono"
            >
              contact.hanuut@gmail.com
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
