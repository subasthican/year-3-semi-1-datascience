import { useState } from "react";
import { useTheme } from "../ThemeContext";

const pdfList = [
  { id: 1, title: "Probability Distributions", file: "Note01-Probability-Distributions.pdf", emoji: "🎲" },
  { id: 2, title: "Statistical Inference", file: "Note02-Statistical-Inference.pdf", emoji: "📊" },
  { id: 3, title: "Hypothesis Testing", file: "Note03-Hypothesis-Testing.pdf", emoji: "⚖️" },
  { id: 4, title: "One Population Mean", file: "Note04-One-Population-Mean.pdf", emoji: "🎯" },
  { id: 5, title: "Two Population Means", file: "Note05-Two-Population-Means.pdf", emoji: "⚔️" },
  { id: 6, title: "Analysis of Variance (ANOVA)", file: "Note06-ANOVA.pdf", emoji: "📈" },
  { id: 7, title: "Population Proportions", file: "Note07-Population-Proportions.pdf", emoji: "🥧" },
  { id: 8, title: "Population Variances", file: "Note08-Population-Variances.pdf", emoji: "📐" },
];

export default function PdfViewer({ onBack }) {
  const { theme } = useTheme();
  const [selected, setSelected] = useState(null);

  // ── Viewing a PDF ──
  if (selected !== null) {
    const pdf = pdfList[selected];
    return (
      <div className={`min-h-screen bg-gradient-to-br ${theme.bg} flex flex-col`}>
        {/* Top bar */}
        <div className={`sticky top-0 z-20 ${theme.bar} backdrop-blur-md border-b border-white/5`}>
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSelected(null)}
              className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All Notes
            </button>
            <span className="text-sm text-slate-300 font-semibold truncate mx-4">
              {pdf.emoji} Note {String(pdf.id).padStart(2, "0")} — {pdf.title}
            </span>
            <a
              href={`${process.env.PUBLIC_URL}/modules/tpsm/pdfs/${pdf.file}`}
              download
              className="text-xs bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download
            </a>
          </div>
        </div>

        {/* PDF iframe */}
        <div className="flex-1 w-full">
          <iframe
            src={`${process.env.PUBLIC_URL}/modules/tpsm/pdfs/${pdf.file}`}
            title={pdf.title}
            className="w-full h-[calc(100vh-52px)] border-0"
          />
        </div>

        {/* Prev / Next */}
        <div className={`sticky bottom-0 z-20 ${theme.bar} backdrop-blur-md border-t border-white/5`}>
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
            <button
              onClick={() => setSelected(selected - 1)}
              disabled={selected === 0}
              className="text-sm text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </button>
            <span className="text-xs text-slate-500">{selected + 1} / {pdfList.length}</span>
            <button
              onClick={() => setSelected(selected + 1)}
              disabled={selected === pdfList.length - 1}
              className="text-sm text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── PDF List ──
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      {/* Top bar */}
      <div className={`sticky top-0 z-20 ${theme.bar} backdrop-blur-md border-b border-white/5`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <button
            onClick={onBack}
            className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </button>
          <span className="text-sm text-slate-400 font-semibold">Original Lecture PDFs</span>
          <span className="text-sm text-slate-500">{pdfList.length} notes</span>
        </div>
      </div>

      <header className="pt-10 pb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          Original Lecture Notes
        </h1>
        <p className="mt-2 text-slate-500 text-sm">View the original PDF content for each lecture</p>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pdfList.map((pdf, idx) => (
            <button
              key={pdf.id}
              onClick={() => setSelected(idx)}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-left transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              <span className="absolute top-3 right-4 text-xs font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                PDF
              </span>
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-lg shadow-md">
                  {pdf.emoji}
                </span>
              </div>
              <h2 className="text-white font-semibold text-sm leading-snug">
                Note {String(pdf.id).padStart(2, "0")}
              </h2>
              <p className="text-slate-400 text-xs mt-1 leading-snug">{pdf.title}</p>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}