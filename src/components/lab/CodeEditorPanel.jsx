/** TODO LAB-201: code string, codeLanguage, onChange — prettify on blur (optional: prism) */
const CodeEditorPanel = ({ value = "", codeLanguage = "javascript", onChange }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="min-h-[200px] w-full rounded-xl border border-slate-200 bg-slate-900 p-4 font-mono text-sm text-slate-100"
      spellCheck={false}
      placeholder={`// ${codeLanguage} code`}
    />
  );
};

export default CodeEditorPanel;
