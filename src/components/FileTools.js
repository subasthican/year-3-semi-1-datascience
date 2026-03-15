import { useTheme } from "../ThemeContext";

const toolGroups = [
  {
    id: "to-pdf",
    title: "Convert To PDF",
    subtitle: "Turn Office files and images into PDFs",
    items: [
      {
        label: "PPTX to PDF",
        description: "Convert PowerPoint slides into a clean PDF.",
        href: "https://www.ilovepdf.com/powerpoint_to_pdf",
      },
      {
        label: "Word to PDF",
        description: "Convert DOC or DOCX files into PDF.",
        href: "https://www.ilovepdf.com/word_to_pdf",
      },
      {
        label: "Image to PDF",
        description: "Combine JPG or PNG files into one PDF.",
        href: "https://www.ilovepdf.com/jpg_to_pdf",
      },
    ],
  },
  {
    id: "from-pdf",
    title: "Convert From PDF",
    subtitle: "Turn PDFs back into editable files",
    items: [
      {
        label: "PDF to Word",
        description: "Extract text into a Word document.",
        href: "https://www.ilovepdf.com/pdf_to_word",
      },
      {
        label: "PDF to PowerPoint",
        description: "Convert a PDF into editable slides.",
        href: "https://www.ilovepdf.com/pdf_to_powerpoint",
      },
      {
        label: "PDF to JPG",
        description: "Turn PDF pages into images.",
        href: "https://www.ilovepdf.com/pdf_to_jpg",
      },
    ],
  },
  {
    id: "pdf-tools",
    title: "Extra PDF Tools",
    subtitle: "Useful helpers for study material",
    items: [
      {
        label: "Merge PDF",
        description: "Combine multiple PDFs into one file.",
        href: "https://www.ilovepdf.com/merge_pdf",
      },
      {
        label: "Split PDF",
        description: "Extract only the pages you need.",
        href: "https://www.ilovepdf.com/split_pdf",
      },
      {
        label: "Compress PDF",
        description: "Reduce file size for fast sharing.",
        href: "https://www.ilovepdf.com/compress_pdf",
      },
    ],
  },
];

export default function FileTools({ onBack }) {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <div className={`sticky top-0 z-20 ${theme.bar} backdrop-blur-md border-b border-white/5`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <button
            onClick={onBack}
            className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </button>
          <span className="text-sm text-slate-400 font-semibold">File Conversion Tools</span>
          <span className="text-sm text-slate-500">9 tools</span>
        </div>
      </div>

      <header className="pt-10 pb-6 text-center px-4">
        <h1 className={`text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${theme.title}`}>
          File To PDF And PDF Tools
        </h1>
        <p className="mt-3 text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
          Open a popular converter for PPTX to PDF, Word to PDF, PDF to Word, and other common study-file tasks.
        </p>
        <p className="mt-2 text-slate-500 text-sm max-w-2xl mx-auto">
          These conversions open in a new tab because this app is fully client-side and does not include a server for Office or PDF document conversion.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {toolGroups.map((group) => (
            <section key={group.id} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h2 className="text-white font-bold text-xl">{group.title}</h2>
              <p className="text-slate-400 text-sm mt-1 mb-5">{group.subtitle}</p>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`block rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 ${theme.hoverBorder} ${theme.hoverShadow}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-white font-semibold text-sm">{item.label}</h3>
                        <p className="text-slate-400 text-sm mt-1 leading-relaxed">{item.description}</p>
                      </div>
                      <span className={`text-xs font-mono text-slate-500 ${theme.hoverText}`}>Open</span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}