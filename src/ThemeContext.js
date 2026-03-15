import { createContext, useContext, useState } from "react";

const THEMES = [
  {
    id: "midnight",
    name: "Midnight Purple",
    icon: "🌙",
    bg: "from-slate-900 via-purple-950 to-slate-900",
    bar: "bg-slate-900/80",
    title: "from-purple-400 to-pink-400",
    btn: "bg-purple-600 hover:bg-purple-500",
    progress: "from-purple-500 to-pink-500",
    accent: "text-purple-400",
    ring: "ring-purple-400",
    cardGrad: "from-purple-500 to-pink-500",
    hoverBorder: "hover:border-purple-500/50",
    hoverShadow: "hover:shadow-purple-500/10",
    hoverText: "group-hover:text-purple-400",
    studyBtn: "bg-green-600 hover:bg-green-500",
  },
  {
    id: "ocean",
    name: "Deep Ocean",
    icon: "🌊",
    bg: "from-slate-900 via-blue-950 to-slate-900",
    bar: "bg-slate-900/80",
    title: "from-blue-400 to-cyan-400",
    btn: "bg-blue-600 hover:bg-blue-500",
    progress: "from-blue-500 to-cyan-500",
    accent: "text-blue-400",
    ring: "ring-blue-400",
    cardGrad: "from-blue-500 to-cyan-500",
    hoverBorder: "hover:border-blue-500/50",
    hoverShadow: "hover:shadow-blue-500/10",
    hoverText: "group-hover:text-blue-400",
    studyBtn: "bg-teal-600 hover:bg-teal-500",
  },
  {
    id: "forest",
    name: "Forest Night",
    icon: "🌲",
    bg: "from-slate-900 via-green-950 to-slate-900",
    bar: "bg-slate-900/80",
    title: "from-green-400 to-emerald-400",
    btn: "bg-green-700 hover:bg-green-600",
    progress: "from-green-500 to-emerald-500",
    accent: "text-green-400",
    ring: "ring-green-400",
    cardGrad: "from-green-500 to-emerald-500",
    hoverBorder: "hover:border-green-500/50",
    hoverShadow: "hover:shadow-green-500/10",
    hoverText: "group-hover:text-green-400",
    studyBtn: "bg-emerald-600 hover:bg-emerald-500",
  },
  {
    id: "ember",
    name: "Warm Ember",
    icon: "🔥",
    bg: "from-stone-900 via-amber-950 to-stone-900",
    bar: "bg-stone-900/80",
    title: "from-amber-400 to-orange-400",
    btn: "bg-amber-600 hover:bg-amber-500",
    progress: "from-amber-500 to-orange-500",
    accent: "text-amber-400",
    ring: "ring-amber-400",
    cardGrad: "from-amber-500 to-orange-500",
    hoverBorder: "hover:border-amber-500/50",
    hoverShadow: "hover:shadow-amber-500/10",
    hoverText: "group-hover:text-amber-400",
    studyBtn: "bg-orange-600 hover:bg-orange-500",
  },
  {
    id: "rose",
    name: "Soft Rose",
    icon: "🌸",
    bg: "from-slate-900 via-rose-950 to-slate-900",
    bar: "bg-slate-900/80",
    title: "from-rose-400 to-pink-300",
    btn: "bg-rose-600 hover:bg-rose-500",
    progress: "from-rose-500 to-pink-400",
    accent: "text-rose-400",
    ring: "ring-rose-400",
    cardGrad: "from-rose-500 to-pink-500",
    hoverBorder: "hover:border-rose-500/50",
    hoverShadow: "hover:shadow-rose-500/10",
    hoverText: "group-hover:text-rose-400",
    studyBtn: "bg-pink-600 hover:bg-pink-500",
  },
  {
    id: "minimal",
    name: "Clean Slate",
    icon: "🪨",
    bg: "from-gray-900 via-slate-800 to-gray-900",
    bar: "bg-gray-900/80",
    title: "from-slate-300 to-zinc-400",
    btn: "bg-slate-600 hover:bg-slate-500",
    progress: "from-slate-500 to-zinc-400",
    accent: "text-slate-400",
    ring: "ring-slate-400",
    cardGrad: "from-slate-500 to-zinc-500",
    hoverBorder: "hover:border-slate-400/50",
    hoverShadow: "hover:shadow-slate-400/10",
    hoverText: "group-hover:text-slate-300",
    studyBtn: "bg-zinc-600 hover:bg-zinc-500",
  },
];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    try { return localStorage.getItem("tpsm-theme") || "midnight"; }
    catch { return "midnight"; }
  });

  const theme = THEMES.find((t) => t.id === themeId) || THEMES[0];

  const setTheme = (id) => {
    setThemeId(id);
    try { localStorage.setItem("tpsm-theme", id); } catch {}
  };

  return (
    <ThemeContext.Provider value={{ theme, themes: THEMES, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
