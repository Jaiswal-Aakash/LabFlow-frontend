/** TODO LAB-201: props { session, subjectId } → link to /sessions/:id */
const SessionCard = ({ session }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="font-medium text-slate-900">{session?.title || "Session"}</p>
    </div>
  );
};

export default SessionCard;
