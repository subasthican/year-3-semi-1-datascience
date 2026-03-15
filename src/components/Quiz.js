import { useState, useMemo } from "react";
import { useTheme } from "../ThemeContext";

export default function Quiz({ lecture, onBack }) {
  const { theme } = useTheme();
  const questions = lecture.questions;
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);

  const q = questions[current];
  const progress = useMemo(
    () => answered.filter((a) => a !== null).length,
    [answered]
  );

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    const newAnswered = [...answered];
    newAnswered[current] = idx;
    setAnswered(newAnswered);
    if (idx === q.correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent((c) => c - 1);
      const prev = answered[current - 1];
      setSelected(prev);
      setShowResult(prev !== null);
    }
  };

  const handleJump = (idx) => {
    setCurrent(idx);
    const prev = answered[idx];
    setSelected(prev);
    setShowResult(prev !== null);
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setAnswered(Array(questions.length).fill(null));
    setFinished(false);
  };

  // --- Finished screen ---
  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className={`min-h-screen bg-gradient-to-br ${theme.bg} flex items-center justify-center px-4`}>
        <div className="max-w-md w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">
          <div className="text-6xl mb-4">{pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "📖"}</div>
          <h2 className="text-3xl font-extrabold text-white mb-2">
            {pct >= 80 ? "Excellent!" : pct >= 50 ? "Good Effort!" : "Keep Studying!"}
          </h2>
          <p className="text-slate-400 mb-6">{lecture.title}</p>
          <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${theme.title} mb-1`}>
            {score}/{questions.length}
          </div>
          <p className="text-slate-500 mb-8">{pct}% correct</p>

          {/* Review wrong answers */}
          {answered.some((a, i) => a !== null && a !== questions[i].correct) && (
            <div className="text-left mb-8 max-h-60 overflow-y-auto pr-2 space-y-4">
              <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">Review Wrong Answers</h3>
              {questions.map((question, i) => {
                if (answered[i] === null || answered[i] === question.correct) return null;
                return (
                  <div key={i} className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                    <p className="text-sm text-slate-300 font-medium mb-1">Q{i + 1}: {question.question}</p>
                    <p className="text-xs text-red-400">Your answer: {question.options[answered[i]]}</p>
                    <p className="text-xs text-green-400">Correct: {question.options[question.correct]}</p>
                    <p className="text-xs text-slate-500 mt-1">{question.explanation}</p>
                  </div>
                );
              })}
            </div>
          )}

          <div className="flex gap-3 justify-center">
            <button onClick={handleRestart} className={`px-6 py-2.5 rounded-xl ${theme.btn} text-white font-semibold transition-colors`}>
              Retry
            </button>
            <button onClick={onBack} className="px-6 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-white/10 font-semibold transition-colors">
              All Lectures
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- Quiz screen ---
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      {/* Top bar */}
      <div className={`sticky top-0 z-20 ${theme.bar} backdrop-blur-md border-b border-white/5`}>
        <div className="max-w-3xl mx-auto flex items-center justify-between px-4 py-3">
          <button onClick={onBack} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back
          </button>
          <span className="text-sm text-slate-400 font-mono">{progress}/{questions.length} answered</span>
          <span className="text-sm text-green-400 font-semibold">{score} ✓</span>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-white/5">
          <div
            className={`h-1 bg-gradient-to-r ${theme.progress} transition-all duration-500`}
            style={{ width: `${(progress / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 pt-8 pb-16">
        {/* Lecture title */}
        <p className={`${theme.accent} text-sm font-semibold mb-6`}>{lecture.title}</p>

        {/* Question number pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {questions.map((_, i) => {
            const isAnswered = answered[i] !== null;
            const isCorrect = isAnswered && answered[i] === questions[i].correct;
            const isCurrent = i === current;
            let cls = "w-7 h-7 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ";
            if (isCurrent) cls += `${theme.ring} ring-2 `;
            if (isAnswered) {
              cls += isCorrect ? "bg-green-500/20 text-green-400 " : "bg-red-500/20 text-red-400 ";
            } else {
              cls += "bg-white/5 text-slate-500 hover:bg-white/10 ";
            }
            return (
              <button key={i} onClick={() => handleJump(i)} className={cls}>
                {i + 1}
              </button>
            );
          })}
        </div>

        {/* Question */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 mb-6">
          <span className="text-xs text-slate-500 font-mono">Question {current + 1} of {questions.length}</span>
          <h2 className="text-xl text-white font-semibold mt-2 leading-relaxed">{q.question}</h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {q.options.map((opt, idx) => {
            let cls = "w-full text-left rounded-xl border p-4 transition-all duration-200 flex items-start gap-3 ";
            const letter = String.fromCharCode(65 + idx);

            if (!showResult) {
              cls += "border-white/10 bg-white/5 hover:border-purple-500/50 hover:bg-white/10 cursor-pointer text-slate-200";
            } else if (idx === q.correct) {
              cls += "border-green-500/50 bg-green-500/10 text-green-300";
            } else if (idx === selected) {
              cls += "border-red-500/50 bg-red-500/10 text-red-300";
            } else {
              cls += "border-white/5 bg-white/[0.02] text-slate-500";
            }

            return (
              <button key={idx} onClick={() => handleSelect(idx)} className={cls} disabled={showResult}>
                <span className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                  showResult && idx === q.correct
                    ? "bg-green-500 text-white"
                    : showResult && idx === selected
                    ? "bg-red-500 text-white"
                    : "bg-white/10 text-slate-400"
                }`}>
                  {letter}
                </span>
                <span className="pt-0.5">{opt}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className={`rounded-2xl border p-5 mb-8 ${
            selected === q.correct
              ? "border-green-500/30 bg-green-500/5"
              : "border-red-500/30 bg-red-500/5"
          }`}>
            <div className="flex items-center gap-2 mb-2">
              {selected === q.correct ? (
                <span className="text-green-400 font-semibold text-sm">✓ Correct!</span>
              ) : (
                <span className="text-red-400 font-semibold text-sm">✗ Incorrect</span>
              )}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{q.explanation}</p>
            {selected !== q.correct && (
              <p className="mt-2 text-green-400 text-sm font-medium">
                Correct answer: {String.fromCharCode(65 + q.correct)}. {q.options[q.correct]}
              </p>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="px-5 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-white/10 font-semibold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Prev
          </button>
          {showResult && (
            <button
              onClick={handleNext}
              className={`px-5 py-2.5 rounded-xl ${theme.btn} text-white font-semibold transition-colors`}
            >
              {current === questions.length - 1 ? "Finish" : "Next →"}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
