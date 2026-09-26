import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is projectAndNote?",
      answer: "projectAndNote is a local-first Android workspace that unifies block-based notes, project lists, Kanban phase boards, Whiteboard Studio 2.0, an offline PDF library, focus sprint timers, and local productivity insights in one app."
    },
    {
      question: "Where can I download the app?",
      answer: (
        <span>
          projectAndNote is live on Google Play.{' '}
          <a
            href="https://play.google.com/store/apps/details?id=com.projectandnote.project_note"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5C542] hover:underline font-bold inline-flex items-center gap-0.5"
          >
            Download on Google Play <ArrowUpRight className="w-3.5 h-3.5" />
          </a>.
        </span>
      )
    },
    {
      question: "Does the app require an account or internet connection?",
      answer: "No. projectAndNote requires no account setup or cloud login. All core features—document notes, whiteboards, PDF reader, and focus timers—operate 100% offline."
    },
    {
      question: "How does Whiteboard Studio 2.0 work?",
      answer: "Whiteboard Studio 2.0 is a landscape-first 16:9 canvas (1920×1080 canonical resolution) featuring vector freehand drawing, geometric stroke-splitting eraser, shapes, sticky notes, layers/z-ordering, and customizable grid modes."
    },
    {
      question: "How does the PDF Library and Book Reference feature work?",
      answer: "You can import PDF files and books directly onto your device. The app saves your exact page reading progress and allows you to cite specific PDF pages in your notes using Book Reference blocks."
    },
    {
      question: "How does activity tracking and Insights work?",
      answer: "Activity data and focus sprint durations are tracked and aggregated entirely on your device in SQLite. No telemetry or behavioral tracking is sent to external servers."
    },
    {
      question: "What export formats are supported?",
      answer: "You can export notes as clean formatted Markdown (.md), styled multi-page PDF documents, or high-resolution graphic social card snapshots."
    },
    {
      question: "Does projectAndNote support light and dark themes?",
      answer: "Yes. The app includes both Dark Mode (with signature amber gold accents) and Light Mode (with vibrant purple accents), as well as an option to follow your Android system theme."
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
          <div key={index} className="rounded-2xl fluid-glass border border-white/10 overflow-hidden transition-colors">
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