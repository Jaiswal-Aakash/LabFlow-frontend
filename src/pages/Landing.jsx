import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  FlaskConical,
  Layers,
  Users,
  Zap,
} from "lucide-react";
import LabFlowLogo from "@/components/auth/LabFlowLogo";
import { statsApi } from "@/lib/api";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: FlaskConical,
    title: "Sample tracking",
    description:
      "Organize samples, experiments, and results in one place with full traceability from start to finish.",
  },
  {
    icon: Zap,
    title: "Workflow automation",
    description:
      "Automate repetitive lab tasks and standardize protocols so your team moves faster with fewer errors.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    description:
      "Assign tasks, share findings, and keep everyone aligned with role-based access and activity logs.",
  },
  {
    icon: BarChart3,
    title: "Insights & reporting",
    description:
      "Turn raw data into clear dashboards and export-ready reports for stakeholders and compliance.",
  },
];

const staticStats = [
  { key: "samples", value: "10k+", label: "Samples tracked" },
  { key: "users", value: null, label: "Users registered" },
  { key: "uptime", value: "99.9%", label: "Uptime" },
];

const Landing = () => {
  const [userCount, setUserCount] = useState(null);

  useEffect(() => {
    statsApi
      .getPublic()
      .then((data) => setUserCount(data.userCount))
      .catch(() => setUserCount(null));
  }, []);

  const stats = staticStats.map((stat) =>
    stat.key === "users"
      ? {
          ...stat,
          value: userCount !== null ? String(userCount) : "—",
        }
      : stat,
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <Link to="/" aria-label="LabFlow home">
            <LabFlowLogo compact />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 sm:inline"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-xl px-4",
                "bg-gradient-to-r from-violet-600 to-purple-700",
                "text-sm font-semibold text-white",
                "shadow-md shadow-violet-600/20",
                "transition-all duration-200",
                "hover:shadow-lg hover:shadow-violet-600/25 hover:brightness-[1.03]",
              )}
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1120]">
        <div
          aria-hidden
          className="absolute left-[-20%] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-purple-600/20 blur-[180px]"
        />
        <div
          aria-hidden
          className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-violet-500/15 blur-[160px]"
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
              Lab management platform
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Modern lab operations,{" "}
              <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
                simplified
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
              Streamline experiments, track samples, and collaborate with your
              team — all in one intuitive platform built for research labs.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/signup"
                className={cn(
                  "inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6",
                  "bg-gradient-to-r from-violet-600 to-purple-700",
                  "text-sm font-semibold text-white",
                  "shadow-lg shadow-violet-600/25",
                  "transition-all duration-200",
                  "hover:shadow-xl hover:shadow-violet-600/30 hover:brightness-[1.03]",
                )}
              >
                Start for free
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                to="/login"
                className={cn(
                  "inline-flex h-12 items-center justify-center rounded-xl px-6",
                  "border border-slate-600 bg-slate-800/50",
                  "text-sm font-semibold text-slate-200",
                  "transition-all duration-200",
                  "hover:border-slate-500 hover:bg-slate-800",
                )}
              >
                Sign in
              </Link>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/20 to-purple-600/10 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/80 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center gap-2 border-b border-slate-700/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs text-slate-500">LabFlow Dashboard</span>
              </div>
              <div className="space-y-4 p-5">
                <div className="grid grid-cols-3 gap-3">
                  {["Active samples", "Experiments", "Team members"].map(
                    (label, i) => (
                      <div
                        key={label}
                        className="rounded-xl border border-slate-700/50 bg-slate-800/60 p-3"
                      >
                        <p className="text-[10px] text-slate-500">{label}</p>
                        <p className="mt-1 text-lg font-semibold text-white">
                          {[128, 24, 12][i]}
                        </p>
                      </div>
                    ),
                  )}
                </div>
                <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs font-medium text-slate-300">
                      Recent activity
                    </p>
                    <Layers className="h-4 w-4 text-violet-400" />
                  </div>
                  <div className="space-y-2.5">
                    {[
                      "Sample #2847 — Analysis complete",
                      "Protocol B12 — Assigned to Dr. Chen",
                      "Batch run — 96 wells processed",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 rounded-lg bg-slate-800/80 px-3 py-2"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                        <span className="truncate text-xs text-slate-400">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-slate-200 px-6 py-10 lg:px-8">
          {stats.map(({ key, value, label }) => (
            <div key={key} className="text-center">
              <p className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Everything your lab needs
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              From sample intake to final report — LabFlow keeps your workflow
              organized, auditable, and efficient.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className={cn(
                  "group rounded-2xl border border-slate-200/80 bg-white p-8",
                  "shadow-[0_4px_24px_rgba(15,23,42,0.04)]",
                  "transition-all duration-200",
                  "hover:border-violet-200 hover:shadow-[0_8px_32px_rgba(124,58,237,0.08)]",
                )}
              >
                <div
                  className={cn(
                    "mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl",
                    "bg-violet-50 text-violet-600",
                    "transition-colors group-hover:bg-violet-100",
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / CTA */}
      <section
        id="about"
        className="relative overflow-hidden bg-[#0B1120] py-20 lg:py-24"
      >
        <div
          aria-hidden
          className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[160px]"
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to transform your lab?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Join research teams who use LabFlow to run smarter, faster, and with
            complete visibility across every experiment.
          </p>
          <Link
            to="/signup"
            className={cn(
              "mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-xl px-8",
              "bg-gradient-to-r from-violet-600 to-purple-700",
              "text-sm font-semibold text-white",
              "shadow-lg shadow-violet-600/25",
              "transition-all duration-200",
              "hover:shadow-xl hover:shadow-violet-600/30 hover:brightness-[1.03]",
            )}
          >
            Create your account
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#070B14] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
          <LabFlowLogo compact />
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} LabFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
