/**
 * LAB-201e — View/edit single output: image, note, prettified code, tags
 * TODO: labApi.getOutput + updateOutput, CodeEditorPanel, TagInput
 */
import { useParams } from "react-router-dom";

const OutputDetailPage = () => {
  const { outputId } = useParams();

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">Output detail</h1>
      <p className="text-xs text-slate-400">ID: {outputId}</p>
      {/* TODO: image, note editor, code editor, save/delete */}
      <p className="mt-6 text-sm text-slate-400">Implement output detail (see LAB-201)</p>
    </div>
  );
};

export default OutputDetailPage;
