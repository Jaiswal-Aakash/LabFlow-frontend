/** TODO LAB-201: props { subject: { _id, name, description, sessionCount } } */
const SubjectCard = ({ subject }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <p className="font-semibold text-slate-900">{subject?.name || "Subject"}</p>
    </div>
  );
};

export default SubjectCard;
