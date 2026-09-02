import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is projectAndNote?",
      answer: "projectAndNote is a premium, local-first Android workspace for deep work. It combines a universal block-based note editor with native 25/5 Focus Sprints (powered by the Energy Ball visualizer) and full-screen deadline alarms to ensure your projects move from raw ideas to completion."
    },
    {
      question: "Is projectAndNote an offline notes app?",
      answer: "Yes, 100%. All notes, task checklists, audio memos, and imported files are stored locally on your device in an internal database. You can use every core feature on an airplane or without an internet connection."
    },
    {
      question: "Does projectAndNote require an account or login?",
      answer: "No. There is no account creation, no password to remember, and no sign-up wall. When you open the app, your workspace is immediately ready."
    },
    {
      question: "Where is my data stored?",
      answer: "All your content resides strictly in your device's secure internal storage sandbox. We do not host your notes on any cloud servers, and we collect zero user telemetry."
    },
    {
      question: "Can I record voice memos and attach media?",
      answer: "Yes. You can record voice memos with real-time waveform visualization, insert images, attach videos, and add interactive checklists directly within the same note canvas."
    },
    {
      question: "What are Focus Sprints and the Energy Ball?",
      answer: "Focus Sprints are structured deep work sessions utilizing 25-minute work intervals and 5-minute rest breaks. The Energy Ball is a dynamic on-screen visualizer that anchors your concentration directly to the note you are currently executing."
    },
    {
      question: "How do full-screen deadline alarms work?",
      answer: "When a deadline or scheduled task occurs, projectAndNote triggers a full-screen alarm that wakes your screen even when locked. You can immediately mark 'I'm on it' to open the project note or select 'Postpone' to add 15 minutes."
    },
    {
      question: "Can I customize alarm ringtones and loop segments?",
      answer: "Yes. projectAndNote includes 8 bundled premium tracks (ambient jazz, lo-fi, neo-soul) and lets you load your own local audio. The built-in timeline scrubber lets you isolate and loop the exact 15 or 30-second segment you want."
    },
    {
      question: "When is projectAndNote launching on Google Play?",
      answer: "The app is currently in pre-release testing for Android. You can sign up using the 'Get Early Access' button above to receive early access APK testing builds and launch notifications."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-white font-bold text-base sm:text-lg hover:text-[#F5C542] transition-colors cursor-pointer"
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-[#94A8BA] transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#F5C542]' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-[#94A8BA] text-sm leading-relaxed border-t border-white/5 pt-4">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}