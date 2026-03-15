import { useState } from "react";
import { useTheme } from "../ThemeContext";

export default function StudyGuide({ guides, onBack }) {
  const { theme } = useTheme();
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  // ── Lecture list ──
  if (selectedLecture === null) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
        <div className={`sticky top-0 z-20 ${theme.bar} backdrop-blur-md border-b border-white/5`}>
          <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Home
            </button>
            <span className="text-sm text-slate-400 font-semibold">Study Mode</span>
            <span className="text-sm text-slate-500">{guides.length} Lectures</span>
          </div>
        </div>

        <header className="pt-10 pb-6 text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
            📚 Lectures for Study
          </h1>
          <p className="mt-3 text-slate-400 text-base max-w-xl mx-auto">
            Learn all 8 lectures with simple explanations, real-world stories, and creative examples — like a 30+ year experienced professor is guiding you! 🎓
          </p>
        </header>

        <main className="max-w-4xl mx-auto px-4 pb-16">
          <div className="space-y-3">
            {guides.map((guide, idx) => (
              <button
                key={guide.id}
                onClick={() => { setSelectedLecture(idx); setExpandedSection(null); }}
                className="w-full group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 text-left transition-all duration-300 hover:border-green-500/50 hover:bg-white/10 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <span className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${guide.color} text-white text-xl shadow-md`}>
                    {guide.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-white font-semibold text-base">
                      Lecture {guide.id}: {guide.title}
                    </h2>
                    <p className="text-slate-500 text-sm mt-0.5">
                      {guide.sections.length} topics covered
                    </p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500 group-hover:text-green-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              </button>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // ── Single lecture view ──
  const guide = guides[selectedLecture];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      {/* Top bar */}
      <div className={`sticky top-0 z-20 ${theme.bar} backdrop-blur-md border-b border-white/5`}>
        <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
          <button onClick={() => setSelectedLecture(null)} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Lectures
          </button>
          <span className="text-sm text-slate-400 font-semibold">Lecture {guide.id}</span>
          <div className="flex gap-1">
            <button
              onClick={() => setSelectedLecture(Math.max(0, selectedLecture - 1))}
              disabled={selectedLecture === 0}
              className="p-1 rounded-lg text-slate-500 hover:text-white disabled:opacity-30 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => { setSelectedLecture(Math.min(guides.length - 1, selectedLecture + 1)); setExpandedSection(null); }}
              disabled={selectedLecture === guides.length - 1}
              className="p-1 rounded-lg text-slate-500 hover:text-white disabled:opacity-30 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 pt-8 pb-16">
        {/* Title */}
        <div className="text-center mb-8">
          <span className="text-5xl mb-3 block">{guide.emoji}</span>
          <h1 className={`text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${guide.color}`}>
            {guide.title}
          </h1>
          <p className="mt-2 text-slate-500 text-sm">Lecture {guide.id} of {guides.length}</p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {guide.sections.map((section, idx) => {
            const isExpanded = expandedSection === idx;
            return (
              <div key={idx} className={`rounded-2xl border transition-all duration-300 ${isExpanded ? 'border-green-500/30 bg-white/[0.07]' : 'border-white/10 bg-white/[0.03]'}`}>
                {/* Section header */}
                <button
                  onClick={() => setExpandedSection(isExpanded ? null : idx)}
                  className="w-full p-5 text-left flex items-center gap-3"
                >
                  <span className="text-2xl flex-shrink-0">{section.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-white font-semibold text-base">{section.heading}</h2>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-slate-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Section content */}
                {isExpanded && (
                  <div className="px-5 pb-5 space-y-5">
                    {/* Story */}
                    <div className="rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-4">
                      <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">💡 Story / Explanation</p>
                      <div className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{section.story}</div>
                    </div>

                    {/* Key Points */}
                    <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                      <p className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3">📌 Key Points</p>
                      <ul className="space-y-1.5">
                        {section.keyPoints.map((point, i) => (
                          <li key={i} className={`text-sm leading-relaxed ${point === '' ? 'h-2' : point.startsWith('  ') ? 'text-slate-400 ml-4' : 'text-slate-300'}`}>
                            {point && !point.startsWith('  ') && <span className="text-green-400 mr-1.5">▸</span>}
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Formulas */}
                    {section.formulas && section.formulas.length > 0 && (
                      <div className="rounded-xl bg-blue-500/5 border border-blue-500/20 p-4">
                        <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-3">📝 Key Formulas</p>
                        <div className="space-y-2">
                          {section.formulas.map((f, i) => (
                            <div key={i} className="flex gap-2 items-start">
                              <span className="text-blue-400 text-sm font-semibold min-w-20 flex-shrink-0">{f.name}:</span>
                              <code className="text-cyan-300 text-sm bg-slate-800/50 px-2 py-0.5 rounded break-all">{f.formula}</code>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Real World Example */}
                    <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-4">
                      <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">🌍 Real-World Example</p>
                      <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{section.realWorldExample}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation to adjacent lectures */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => { setSelectedLecture(selectedLecture - 1); setExpandedSection(null); }}
            disabled={selectedLecture === 0}
            className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-white/10 font-semibold transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm"
          >
            ← Lecture {selectedLecture}
          </button>
          <button
            onClick={() => { setSelectedLecture(selectedLecture + 1); setExpandedSection(null); }}
            disabled={selectedLecture === guides.length - 1}
            className={`px-5 py-2.5 rounded-xl ${theme.studyBtn} text-white font-semibold transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm`}
          >
            Lecture {selectedLecture + 2} →
          </button>
        </div>
      </main>
    </div>
  );
}
