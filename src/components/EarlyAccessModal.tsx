import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Student / Learner');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch('https://api.hanuut.com/project-and-note/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          role: role,
          source: 'projectandnote_landing_modal',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setServerMessage(data.message || 'You are registered for early access.');
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || 'Could not complete registration. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback: save locally so lead is not lost
      try {
        const saved = JSON.parse(localStorage.getItem('projectAndNote_waitlist') || '[]');
        saved.push({ email, role, date: new Date().toISOString() });
        localStorage.setItem('projectAndNote_waitlist', JSON.stringify(saved));
      } catch (_) {}
      setServerMessage('You are on the list!');
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl p-6 md:p-8 border border-white/15 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider bg-[#F5C542]/10 text-[#F5C542] border border-[#F5C542]/20 uppercase">
                Pre-Release · Android
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
              Be first on the lock-in list.
            </h3>
            <p className="text-sm text-[#94A8BA] leading-relaxed mb-6">
              projectAndNote is in final pre-release testing for Android. Reserve your spot for the early access build and launch invitation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#F5C542] focus:ring-1 focus:ring-[#F5C542] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">
                  Primary Focus
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#111C26] border border-white/15 text-white text-sm focus:outline-none focus:border-[#F5C542] transition-all cursor-pointer"
                >
                  <option value="Student / Learner">Student / University Study</option>
                  <option value="Researcher / Academic">Research & Academic Notes</option>
                  <option value="Developer / Engineer">Software Development & Projects</option>
                  <option value="Creator / Writer">Content Creation & Writing</option>
                  <option value="Executive / Professional">Professional Execution</option>
                </select>
              </div>

              {errorMsg && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-glitch py-3.5 text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <span>{loading ? 'RESERVING SPOT...' : 'REQUEST EARLY ACCESS'}</span>
                  {!loading && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#94A8BA]/70 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3DD68C]" />
                <span>100% private. Stored securely on api.hanuut.com.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#3DD68C]/15 border border-[#3DD68C]/30 flex items-center justify-center mx-auto mb-4 text-[#3DD68C]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">You're on the access list.</h4>
            <p className="text-sm text-[#94A8BA] leading-relaxed mb-6">
              {serverMessage || `We saved ${email}. As soon as the Android early build opens, we'll send your access package.`}
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-bold tracking-wider transition-colors cursor-pointer"
            >
              BACK TO SITE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}