/**
 * LAB-201d — Multi-image upload with tags, note, code
 * TODO: ImageUploader, TagInput, CodeEditorPanel, FormData → labApi.uploadOutputs
 */
import { useParams } from "react-router-dom";

const OutputDumpPage = () => {
  const { sessionId } = useParams();

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">Dump outputs</h1>
      <p className="mt-1 text-sm text-slate-500">Session: {sessionId}</p>
      {/* TODO: multipart form */}
      <p className="mt-6 text-sm text-slate-400">Implement bulk upload (see LAB-201)</p>
    </div>
  );
};

export default OutputDumpPage;
