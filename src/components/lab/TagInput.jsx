/** TODO LAB-201: chip input for tags, value string[] onChange */
const TagInput = ({ value = [], onChange }) => {
  return (
    <input
      type="text"
      placeholder="Add tags (comma separated)"
      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
      onChange={(e) => onChange?.(e.target.value.split(",").map((t) => t.trim()))}
    />
  );
};

export default TagInput;
