import { useState } from "react";
import { useTheme } from "../ThemeContext";

const pafFiles = [
  { id: 1, title: "Software Frameworks – An Overview", file: "PAF01-Software-Frameworks.pdf", emoji: "🏗️" },
  { id: 2, title: "Version Controlling and Workflows with Git – I", file: "PAF02-Git-I.pdf", emoji: "📝" },
  { id: 3, title: "Version Controlling and Workflows with Git – II", file: "PAF03-Git-II.pdf", emoji: "🌳" },
  { id: 4, title: "Web Application Architecture – An Overview", file: "PAF04-Web-Architecture.pdf", emoji: "🏢" },
  { id: 5, title: "REST APIs", file: "PAF05-REST-APIs.pdf", emoji: "🔌" },
];

export default function PafFilesViewer({ onBack }) {
  const { theme } = useTheme();
  const [selected, setSelected] = useState(null);

  if (selected !== null) {
    const pdf = pafFiles[selected];

    return (
      <div className={`min-h-screen bg-gradient-to-br ${theme.bg} flex flex-col`}>
        <div className={`sticky top-0 z-20 ${theme.bar} backdrop-blur-md border-b border-white/5`}>
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
            <button
              onClick={() => setSelected(null)}
              className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              All PAF Files
            </button>
            <span className="text-sm text-slate-300 font-semibold truncate mx-4">
              {pdf.emoji} Lecture {String(pdf.id).padStart(2, "0")} - {pdf.title}
            </span>
            <a
              href={`${process.env.PUBLIC_URL}/modules/paf/pdfs/${pdf.file}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs bg-cyan-600 hover:bg-cyan-500 text-white px-3 py-1.5 rounded-lg transition-colors"
            >
              Open Tab
            </a>
          </div>
        </div>

        <div className="flex-1 w-full">
          <iframe
            src={`${process.env.PUBLIC_URL}/modules/paf/pdfs/${pdf.file}`}
            title={pdf.title}
            className="w-full h-[calc(100vh-52px)] border-0"
          />
        </div>

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
            <span className="text-xs text-slate-500">{selected + 1} / {pafFiles.length}</span>
            <button
              onClick={() => setSelected(selected + 1)}
              disabled={selected === pafFiles.length - 1}
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

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <div className={`sticky top-0 z-20 ${theme.bar} backdrop-blur-md border-b border-white/5`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Home
          </button>
          <span className="text-sm text-slate-400 font-semibold">PAF Original Slides</span>
          <span className="text-sm text-slate-500">{pafFiles.length} files</span>
        </div>
      </div>

      <header className="pt-10 pb-6 text-center px-4">
        <h1 className={`text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${theme.title}`}>
          PAF Original Lecture Files
        </h1>
        <p className="mt-3 text-slate-400 text-base max-w-xl mx-auto">
          Open and read the original PAF lecture PDFs inside the app.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pafFiles.map((item) => (
            <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${theme.cardGrad} text-white text-xl shadow-md`}>
                  {item.emoji}
                </span>
                <div>
                  <h2 className="text-white font-semibold text-sm">Lecture {item.id}</h2>
                  <p className="text-slate-400 text-xs mt-1">{item.title}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setSelected(item.id - 1)}
                  className={`flex-1 text-center px-4 py-2.5 rounded-xl ${theme.btn} text-white text-sm font-semibold transition-colors`}
                >
                  Open
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
