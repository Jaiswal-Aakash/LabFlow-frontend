/**
 * LAB-201f — Search outputs by tag or text
 * TODO: useSearch hook, tag filter, results grid with OutputCard
 */
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <Link to="/dashboard" className="text-sm text-violet-600 hover:text-violet-700">
        ← Dashboard
      </Link>
      <h1 className="mt-2 text-2xl font-semibold text-slate-900">Search lab outputs</h1>
      {/* TODO: search input, tag chips, results */}
      <p className="mt-6 text-sm text-slate-400">Implement search (see LAB-201)</p>
    </div>
  );
};

export default SearchPage;
