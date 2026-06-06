/**
 * LAB-201b — Sessions inside one subject (date folders)
 * TODO: useParams subjectId, listSessions, createSession with date + title
 */
import { Link, useParams } from "react-router-dom";

const SubjectDetailPage = () => {
  const { subjectId } = useParams();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <Link to="/subjects" className="text-sm text-violet-600 hover:text-violet-700">
        ← All subjects
      </Link>
      <h1 className="mt-2 text-2xl font-semibold text-slate-900">Subject</h1>
      <p className="text-xs text-slate-400">ID: {subjectId}</p>
      {/* TODO: SessionCard list, new session form */}
      <p className="mt-6 text-sm text-slate-400">Implement session list (see LAB-201)</p>
    </div>
  );
};

export default SubjectDetailPage;
