/** TODO LAB-201: props { output } → link to /outputs/:id, show image thumb + tags */
const OutputCard = ({ output }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      {output?.imageUrl && (
        <img src={output.imageUrl} alt={output.title} className="h-32 w-full object-cover" />
      )}
      <p className="p-3 text-sm font-medium text-slate-900">{output?.title || "Output"}</p>
    </div>
  );
};

export default OutputCard;
