import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthFormField from "../components/auth/AuthFormField";
import AuthSubmitButton from "../components/auth/AuthSubmitButton";
import { useAuth } from "@/context/AuthContext";

const linkClass =
  "font-semibold text-violet-600 transition-colors hover:text-violet-700";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loading, error, clearError, isAuthenticated } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(true);

  const successMessage = location.state?.message;
  const from = location.state?.from || "/dashboard";

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const footer = (
    <>
      Don&apos;t have an account?{" "}
      <Link to="/signup" className={linkClass}>
        Create one
      </Link>
    </>
  );

  const handleChange = (e) => {
    clearError();
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password, rememberMe);
      navigate(from, { replace: true });
    } catch {
      // error shown via context
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your LabFlow account"
      footer={footer}
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        {successMessage && (
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {successMessage}
          </p>
        )}

        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <AuthFormField
          id="email"
          name="email"
          label="Email address"
          type="email"
          placeholder="you@company.com"
          icon={Mail}
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <AuthFormField
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={Lock}
          autoComplete="current-password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <div className="flex items-center justify-between pt-0.5">
          <label className="flex cursor-pointer items-center gap-2.5">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="
                h-4 w-4 rounded border-slate-300 text-violet-600
                focus:ring-violet-500/20 focus:ring-offset-0
              "
            />
            <span className="text-sm text-slate-600">Remember me</span>
          </label>
          <Link
            to="#"
            className="text-sm font-medium text-violet-600 transition-colors hover:text-violet-700"
          >
            Forgot password?
          </Link>
        </div>

        <AuthSubmitButton className="mt-1" disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </AuthSubmitButton>
      </form>
    </AuthLayout>
  );
};

export default Login;
