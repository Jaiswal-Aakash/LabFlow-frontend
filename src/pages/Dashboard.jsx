import { Link, useNavigate } from "react-router-dom";
import {
  FolderOpen,
  FlaskConical,
  LogOut,
  Search,
  // Settings,
} from "lucide-react";
import LabFlowLogo from "@/components/auth/LabFlowLogo";
import { useAuth } from "@/context/AuthContext";

const quickLinks = [
  {
    label: "My subjects",
    description: "Folders per class or subject",
    to: "/subjects",
    icon: FolderOpen,
  },
  {
    label: "Search outputs",
    description: "Find by tag or keyword",
    to: "/search",
    icon: Search,
  },
];

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <Link to="/dashboard">
            <LabFlowLogo compact />
          </Link>

          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-slate-600 sm:inline">
              {user?.name}
            </span>
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              <LogOut className="h-4 w-4" strokeWidth={1.75} />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Welcome back, {user?.name?.split(" ")[0] || "there"}
          </h1>
          <p className="mt-2 text-slate-500">
            Here&apos;s an overview of your lab workspace.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {quickLinks.map(({ label, description, to, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition-all hover:border-violet-200 hover:shadow-[0_8px_32px_rgba(124,58,237,0.08)]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="font-semibold text-slate-900">{label}</p>
              <p className="mt-1 text-sm text-slate-500">{description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-8 shadow-[0_4px_24px_rgba(15,23,42,0.04)]">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <FlaskConical className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Your dashboard is ready
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
                You&apos;re signed in as{" "}
                <span className="font-medium text-slate-700">{user?.email}</span>
                . Lab management features will appear here as they are added to
                LabFlow.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
