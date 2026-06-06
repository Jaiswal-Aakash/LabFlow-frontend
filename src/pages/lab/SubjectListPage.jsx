/**
 * LAB-201a — List all subject folders + create new subject
 * TODO: use useSubjects hook, render SubjectCard grid, modal for createSubject
 */
import { Link } from "react-router-dom";

const SubjectListPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <Link to="/dashboard" className="text-sm text-violet-600 hover:text-violet-700">
            ← Dashboard
          </Link>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900">My subjects</h1>
          <p className="mt-1 text-sm text-slate-500">
            Create a folder per class or subject.
          </p>
        </div>
        {/* TODO: New subject button + modal */}
      </div>
      {/* TODO: subjects.map → SubjectCard → /subjects/:id */}
      <p className="text-sm text-slate-400">Implement subject list (see LAB-201)</p>
    </div>
  );
};

export default SubjectListPage;
