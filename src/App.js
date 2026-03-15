import { useState } from "react";
import Quiz from "./components/Quiz";
import StudyGuide from "./components/StudyGuide";
import PdfViewer from "./components/PdfViewer";
import FileTools from "./components/FileTools";
import PafFilesViewer from "./components/PafFilesViewer";
import { useTheme } from "./ThemeContext";
import note01 from "./data/note01";
import note02 from "./data/note02";
import note03 from "./data/note03";
import note04 from "./data/note04";
import note05 from "./data/note05";
import note06 from "./data/note06";
import note07 from "./data/note07";
import note08 from "./data/note08";
import pastpapers from "./data/pastpapers";
import mockexam2026 from "./data/mockexam2026";
import studyGuides from "./data/studyGuides";
import pafLectures from "./data/pafLectures";
import pafStudyGuides from "./data/pafStudyGuides";

const tpsmLectures = [note01, note02, note03, note04, note05, note06, note07, note08];
const tpsmPastPapers = [pastpapers, mockexam2026];

function App() {
  const [selectedModule, setSelectedModule] = useState(null);
  const [mode, setMode] = useState(null);
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [selectedPastpaper, setSelectedPastpaper] = useState(null);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const { theme, themes, setTheme } = useTheme();

  const goModuleHome = () => {
    setMode(null);
    setSelectedLecture(null);
    setSelectedPastpaper(null);
  };

  const goRootHome = () => {
    setSelectedModule(null);
    goModuleHome();
  };

  const renderPickerPage = (title, subtitle, items, onSelect, onBack, totalLabel) => (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <div className={`sticky top-0 z-20 ${theme.bar} backdrop-blur-md border-b border-white/5`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back
          </button>
          <span className="text-sm text-slate-400 font-semibold">{title}</span>
          <span className="text-sm text-slate-500">{items.reduce((sum, item) => sum + item.questions.length, 0)} Qs</span>
        </div>
      </div>

      <header className="pt-10 pb-6 text-center px-4">
        <h1 className={`text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${theme.title}`}>
          {title}
        </h1>
        <p className="mt-2 text-slate-500 text-sm">{subtitle}</p>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, idx) => (
            <button
              key={item.id ?? idx}
              onClick={() => onSelect(idx)}
              className={`group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${theme.hoverBorder} hover:bg-white/10 ${theme.hoverShadow}`}
            >
              <span className={`absolute top-3 right-4 text-xs font-mono text-slate-500 ${theme.hoverText} transition-colors`}>
                {item.questions.length} Qs
              </span>
              <div className="flex items-center gap-3 mb-3">
                <span className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${theme.cardGrad} text-white font-bold text-sm shadow-md`}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="text-white font-semibold text-sm leading-snug">{item.title}</h2>
            </button>
          ))}
        </div>
        <div className="mt-10 text-center text-slate-500 text-sm">{totalLabel}</div>
      </main>
    </div>
  );

  if (mode === "tools") {
    return <FileTools onBack={goRootHome} />;
  }

  if (mode === "tpsm-files") {
    return <PdfViewer onBack={goModuleHome} />;
  }

  if (mode === "paf-files") {
    return <PafFilesViewer onBack={goModuleHome} />;
  }

  if (mode === "tpsm-study") {
    return <StudyGuide guides={studyGuides} onBack={goModuleHome} />;
  }

  if (mode === "paf-study") {
    return <StudyGuide guides={pafStudyGuides} onBack={goModuleHome} />;
  }

  if (mode === "tpsm-pastpapers" && selectedPastpaper !== null) {
    return <Quiz lecture={tpsmPastPapers[selectedPastpaper]} onBack={() => setSelectedPastpaper(null)} />;
  }

  if (mode === "tpsm-lectures" && selectedLecture !== null) {
    return <Quiz lecture={tpsmLectures[selectedLecture]} onBack={() => setSelectedLecture(null)} />;
  }

  if (mode === "paf-lectures" && selectedLecture !== null) {
    return <Quiz lecture={pafLectures[selectedLecture]} onBack={() => setSelectedLecture(null)} />;
  }

  if (mode === "tpsm-pastpapers") {
    return renderPickerPage(
      "TPSM Past Paper Mid MCQs",
      "Select a past paper set to start answering",
      tpsmPastPapers,
      setSelectedPastpaper,
      goModuleHome,
      `Total: ${tpsmPastPapers.reduce((sum, item) => sum + item.questions.length, 0)} questions across ${tpsmPastPapers.length} papers`
    );
  }

  if (mode === "tpsm-lectures") {
    return renderPickerPage(
      "TPSM Lecture 1-8 Mid MCQs",
      "Select a lecture to start answering",
      tpsmLectures,
      setSelectedLecture,
      goModuleHome,
      `Total: ${tpsmLectures.reduce((sum, item) => sum + item.questions.length, 0)} questions across ${tpsmLectures.length} lectures`
    );
  }

  if (mode === "paf-lectures") {
    return renderPickerPage(
      "PAF Lecture Mid MCQs",
      "Select a lecture to start answering",
      pafLectures,
      setSelectedLecture,
      goModuleHome,
      `Total: ${pafLectures.reduce((sum, item) => sum + item.questions.length, 0)} questions across ${pafLectures.length} lectures`
    );
  }

  const rootCards = [
    {
      id: "tpsm",
      emoji: "📘",
      title: "TPSM",
      description: "Theory & Practices in Statistical Modelling with MCQs, past papers, study guides, and original PDFs",
      stats: `${tpsmLectures.reduce((sum, item) => sum + item.questions.length, 0) + tpsmPastPapers.reduce((sum, item) => sum + item.questions.length, 0)} questions`,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "paf",
      emoji: "💻",
      title: "PAF",
      description: "Programming Applications and Frameworks with lecture MCQs, study guides, and original lecture PDFs",
      stats: `${pafLectures.reduce((sum, item) => sum + item.questions.length, 0)} questions`,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: "tools",
      emoji: "🛠️",
      title: "File Tools",
      description: "PPTX to PDF, Word to PDF, PDF to Word, and extra document utilities",
      stats: "9 tools",
      gradient: "from-indigo-500 to-sky-500",
    },
  ];

  const moduleCards = {
    tpsm: [
      {
        id: "tpsm-files",
        emoji: "🔖",
        title: "Original Lecture PDFs",
        description: "View the original TPSM lecture PDFs",
        stats: "8 PDFs",
        gradient: "from-cyan-500 to-blue-500",
      },
      {
        id: "tpsm-lectures",
        emoji: "📝",
        title: "Lecture 1-8 Mid MCQs",
        description: "Practice all TPSM lecture MCQs",
        stats: `${tpsmLectures.reduce((sum, item) => sum + item.questions.length, 0)} questions`,
        gradient: "from-purple-500 to-pink-500",
      },
      {
        id: "tpsm-pastpapers",
        emoji: "📄",
        title: "Past Paper Mid MCQs",
        description: "Work through TPSM past paper and mock exam sets",
        stats: `${tpsmPastPapers.reduce((sum, item) => sum + item.questions.length, 0)} questions`,
        gradient: "from-pink-500 to-red-500",
      },
      {
        id: "tpsm-study",
        emoji: "📚",
        title: "Lectures for Study",
        description: "Beginner-friendly TPSM explanations with stories and examples",
        stats: `${studyGuides.reduce((sum, item) => sum + item.sections.length, 0)} topics`,
        gradient: "from-green-500 to-emerald-500",
      },
    ],
    paf: [
      {
        id: "paf-files",
        emoji: "🗂️",
        title: "Original PAF PDFs",
        description: "Open and read the original PAF lecture PDFs inside the app",
        stats: "5 files",
        gradient: "from-sky-500 to-cyan-500",
      },
      {
        id: "paf-lectures",
        emoji: "🧠",
        title: "PAF Mid MCQs",
        description: "Practice MCQs for each PAF lecture",
        stats: `${pafLectures.reduce((sum, item) => sum + item.questions.length, 0)} questions`,
        gradient: "from-indigo-500 to-violet-500",
      },
      {
        id: "paf-study",
        emoji: "🎓",
        title: "PAF Study Guide",
        description: "Learn each PAF lecture with exam-friendly explanations",
        stats: `${pafStudyGuides.reduce((sum, item) => sum + item.sections.length, 0)} topics`,
        gradient: "from-amber-500 to-orange-500",
      },
    ],
  };

  const activeModule = selectedModule ? moduleCards[selectedModule] : null;
  const moduleTitle = selectedModule === "tpsm" ? "TPSM Module" : "PAF Module";
  const moduleSubtitle = selectedModule === "tpsm"
    ? "Mid exam practice, past papers, study guides, and source notes"
    : "Mid exam practice, study guides, and original PAF lecture PDFs";

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} flex flex-col`}>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowThemePicker(!showThemePicker)}
          className={`w-10 h-10 rounded-xl ${theme.bar} backdrop-blur-md border border-white/10 flex items-center justify-center text-lg hover:scale-110 transition-transform shadow-lg`}
          title="Change Theme"
        >
          🎨
        </button>
        {showThemePicker && (
          <div className={`absolute right-0 mt-2 w-52 rounded-2xl ${theme.bar} backdrop-blur-xl border border-white/10 shadow-2xl p-3 space-y-1`}>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider px-2 pb-2">Choose Theme</p>
            {themes.map((item) => (
              <button
                key={item.id}
                onClick={() => { setTheme(item.id); setShowThemePicker(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all text-sm ${theme.id === item.id ? "bg-white/15 text-white font-semibold" : "text-slate-400 hover:bg-white/10 hover:text-white"}`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
                {theme.id === item.id && <span className="ml-auto text-xs">✓</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedModule && (
        <div className={`sticky top-0 z-20 ${theme.bar} backdrop-blur-md border-b border-white/5`}>
          <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <button onClick={goRootHome} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Modules
            </button>
            <span className="text-sm text-slate-400 font-semibold">{moduleTitle}</span>
            <span className="text-sm text-slate-500">{activeModule.length} sections</span>
          </div>
        </div>
      )}

      <header className="pt-14 pb-10 text-center px-4">
        <h1 className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${theme.title}`}>
          Year 3 Semester 1 Data Science
        </h1>
        <p className="mt-3 text-slate-400 text-lg">Multi-module mid exam prep hub</p>
        <p className="mt-1 text-slate-500 text-sm">SLIIT • TPSM • PAF • Study guides • MCQs • Source notes</p>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 pb-16">
        {!selectedModule ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-white font-bold text-2xl">Choose A Module</h2>
              <p className="text-slate-400 text-sm mt-2">Open TPSM, PAF, or file utilities from one home screen.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rootCards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => card.id === "tools" ? setMode("tools") : setSelectedModule(card.id)}
                  className={`group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-7 text-left transition-all duration-300 ${theme.hoverBorder} hover:bg-white/10 hover:-translate-y-1 ${theme.hoverShadow}`}
                >
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} text-3xl shadow-lg mb-5`}>
                    {card.emoji}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{card.description}</p>
                  <span className="text-xs font-mono text-slate-500">{card.stats}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-8">
              <h2 className="text-white font-bold text-2xl">{moduleTitle}</h2>
              <p className="text-slate-400 text-sm mt-2">{moduleSubtitle}</p>
            </div>
            <div className={`grid grid-cols-1 ${selectedModule === "tpsm" ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"} gap-5`}>
              {activeModule.map((card) => (
                <button
                  key={card.id}
                  onClick={() => setMode(card.id)}
                  className={`group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-7 text-left transition-all duration-300 ${theme.hoverBorder} hover:bg-white/10 hover:-translate-y-1 ${theme.hoverShadow}`}
                >
                  <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} text-3xl shadow-lg mb-5`}>
                    {card.emoji}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{card.description}</p>
                  <span className="text-xs font-mono text-slate-500">{card.stats}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
