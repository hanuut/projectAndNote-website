import React from 'react';
import LegalNav from '../components/LegalNav';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#090E13] font-sans selection:bg-[#F5C542] selection:text-[#090E13]">
      <LegalNav />
      
      <main className="max-w-3xl mx-auto py-16 px-6 text-[#94A8BA] space-y-6">
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#F5C542]/15 text-[#F5C542] border border-[#F5C542]/30 font-bold uppercase">
              Terms & Conditions
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs font-mono uppercase tracking-widest text-[#B39DDB]">
            Last Updated: August 31, 2026
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#3DD68C]"></span>
            1. Agreement to Terms
          </h2>
          <p className="leading-relaxed">
            By downloading, installing, or testing projectAndNote ("the Application"), you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#F5C542]"></span>
            2. Local Data Responsibility
          </h2>
          <p className="leading-relaxed">
            Because projectAndNote operates exclusively as a local-first application, your files and notes exist only on your physical device. You are solely responsible for device-level backups. Deleting the application sandbox or resetting your device will erase local data unless you maintain device backups.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#B39DDB]"></span>
            3. Intellectual Property
          </h2>
          <p className="leading-relaxed">
            The application design, animations, Energy Ball focus system, code architecture, and proprietary graphics are the exclusive property of projectAndNote and its creators.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#3DD68C]"></span>
            4. Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            The application is provided on an "AS IS" and "AS AVAILABLE" basis. To the maximum extent permitted by law, projectAndNote shall not be liable for any indirect, incidental, or consequential damages resulting from app usage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="w-4 h-1 bg-[#F5C542]"></span>
            5. Contact Information
          </h2>
          <p className="leading-relaxed">
            Inquiries regarding these terms may be directed to:{' '}
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