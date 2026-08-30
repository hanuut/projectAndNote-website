import React from 'react';
import LegalNav from '../components/LegalNav';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0D141B] font-sans selection:bg-[#F5C542] selection:text-[#0D141B]">
      <LegalNav />
      
      <main className="max-w-3xl mx-auto py-16 px-6 text-[#94A8BA] space-y-6">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Terms and Conditions for projectAndNote</h1>
          <p className="text-sm uppercase tracking-widest text-[#B39DDB]">Last Updated: August 29, 2026</p>
        </header>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#3DD68C] inline-block"></span>
            1. Acceptance of Terms
          </h2>
          <p className="leading-relaxed">
            By downloading or using projectAndNote ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use the App.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#F5C542] inline-block"></span>
            2. Data Responsibility and Loss
          </h2>
          <p className="leading-relaxed mb-4">
            projectAndNote is a "local-first" application. Your notes, files, and audio recordings are stored exclusively on your device's internal storage. You are solely responsible for your data.
          </p>
          <p className="leading-relaxed">
            We do not hold copies of your data on cloud servers. If you delete the app, lose your device, or experience a hardware failure without making a manual backup, your data will be permanently lost. We are not liable for any loss of data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#B39DDB] inline-block"></span>
            3. Artificial Intelligence (AI) Disclaimer
          </h2>
          <p className="leading-relaxed mb-4">
            The App includes optional features powered by Artificial Intelligence (AI), such as text summaries, transcriptions, and suggested tasks.
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong className="text-white/80">Accuracy:</strong> AI systems can hallucinate, make errors, or provide inaccurate information. You should not rely on AI-generated content for medical, legal, financial, or other critical advice.</li>
            <li><strong className="text-white/80">"As Is":</strong> All AI features are provided "as is." We do not guarantee the accuracy, reliability, or appropriateness of any AI-generated output.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#3DD68C] inline-block"></span>
            4. Intellectual Property
          </h2>
          <p className="leading-relaxed">
            The App itself, including its original design, graphics, UI/UX (Fluid Glass × Monomorphism), and code architecture, are the exclusive property of projectAndNote and its creators. You may not reverse-engineer, copy, or distribute the App's proprietary assets.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#F5C542] inline-block"></span>
            5. Acceptable Use
          </h2>
          <p className="leading-relaxed">
            You agree not to use the App in any way that violates applicable local, national, or international laws. You must not use the optional AI features to generate illegal, harmful, or abusive content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#B39DDB] inline-block"></span>
            6. Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            To the maximum extent permitted by law, projectAndNote and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your access to or use of the App.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#3DD68C] inline-block"></span>
            7. Governing Law
          </h2>
          <p className="leading-relaxed">
            These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mt-12 mb-4 flex items-center gap-4">
            <span className="w-6 h-1 bg-[#F5C542] inline-block"></span>
            8. Contact Us
          </h2>
          <p className="leading-relaxed">
            If you have any questions about these Terms, please contact us at: <a href="mailto:contact.hanuut@gmail.com" className="text-[#F5C542] hover:underline">contact.hanuut@gmail.com</a>.
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
