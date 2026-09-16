import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, ShieldCheck, AlertCircle, MessageSquarePlus, Lightbulb } from 'lucide-react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({ isOpen, onClose }: FeedbackModalProps) {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Feature Request');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('Please describe your feature idea or feedback.');
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
          role: `Feedback: [${category}] ${message.trim()}`,
          source: 'website_feedback_modal',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        // Fallback save
        saveLocally();
        setSubmitted(true);
      }
    } catch (err) {
      console.warn('Network issue, saving locally:', err);
      saveLocally();
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const saveLocally = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('projectAndNote_feedback') || '[]');
      saved.push({ email, category, message, date: new Date().toISOString() });
      localStorage.setItem('projectAndNote_feedback', JSON.stringify(saved));
    } catch (_) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg fluid-glass rounded-3xl p-6 md:p-8 border border-white/15 shadow-2xl">
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
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider bg-[#F5C542]/10 text-[#F5C542] border border-[#F5C542]/20 uppercase flex items-center gap-1.5">
                <Lightbulb className="w-3 h-3" />
                Community Roadmap
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
              Shape the Next Release.
            </h3>
            <p className="text-sm text-[#94A8BA] leading-relaxed mb-6">
              projectAndNote is built for focused creators and builders. Tell us what features, workflows, or tools you want to see next.
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
                  Feedback Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#111C26] border border-white/15 text-white text-sm focus:outline-none focus:border-[#F5C542] transition-all cursor-pointer"
                >
                  <option value="Feature Request">✨ New Feature Suggestion</option>
                  <option value="UI & Canvas UX">🎨 Canvas & UI Polish</option>
                  <option value="Focus Timer / Sprints">⚡ Focus Sprints & Energy Ball</option>
                  <option value="PDF / Media Library">📚 PDF Library & Media Tools</option>
                  <option value="Export & Sharing">📤 Export Formats (Markdown, PDF)</option>
                  <option value="Bug / Performance">🐛 Bug Report / Performance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">
                  Your Suggestion / Feedback
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe your idea, missing feature, or workflow improvement..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#F5C542] focus:ring-1 focus:ring-[#F5C542] transition-all resize-none"
                />
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
                  className="w-full btn-glitch-primary py-3.5 text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <span>{loading ? 'SENDING SUGGESTION...' : 'SUBMIT SUGGESTION'}</span>
                  {!loading && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#94A8BA]/70 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#3DD68C]" />
                <span>Direct line to the core developer. No spam, ever.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#3DD68C]/15 border border-[#3DD68C]/30 flex items-center justify-center mx-auto mb-4 text-[#3DD68C]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Thank you for your voice!</h4>
            <p className="text-sm text-[#94A8BA] leading-relaxed mb-6">
              We received your feedback from <strong className="text-white">{email}</strong>. It directly influences our next release cycle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.projectandnote.project_note"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto btn-glitch-primary px-6 py-2.5 text-xs font-mono"
              >
                DOWNLOAD ON GOOGLE PLAY
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-bold tracking-wider transition-colors cursor-pointer"
              >
                BACK TO SITE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}