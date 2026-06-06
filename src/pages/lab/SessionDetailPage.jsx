/**
 * LAB-201c — Outputs for one session (one date dump folder)
 * TODO: useParams sessionId + location.state.subjectId, listOutputs, link to dump
 */
import { Link, useParams } from "react-router-dom";

const SessionDetailPage = () => {
  const { sessionId } = useParams();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">Session</h1>
      <p className="text-xs text-slate-400">Session ID: {sessionId}</p>
      <Link
        to={`/sessions/${sessionId}/dump`}
        className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 px-4 py-2 text-sm font-semibold text-white"
      >
        Dump outputs
      </Link>
      {/* TODO: OutputGallery */}
      <p className="mt-6 text-sm text-slate-400">Implement output gallery (see LAB-201)</p>
    </div>
  );
};

export default SessionDetailPage;
