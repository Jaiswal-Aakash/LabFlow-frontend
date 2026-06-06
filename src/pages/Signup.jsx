import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import AuthLayout from "../components/auth/AuthLayout";
import AuthFormField from "../components/auth/AuthFormField";
import AuthSubmitButton from "../components/auth/AuthSubmitButton";
import { useAuth } from "@/context/AuthContext";

const linkClass =
  "font-semibold text-violet-600 transition-colors hover:text-violet-700";

const Signup = () => {
  const navigate = useNavigate();
  const { register, loading, error, clearError } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const footer = (
    <>
      Already have an account?{" "}
      <Link to="/login" className={linkClass}>
        Sign in
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
      await register(form.name, form.email, form.password);
      navigate("/login", {
        state: { message: "Account created successfully. Please sign in." },
      });
    } catch {
      // error shown via context
    }
  };

  return (
    <AuthLayout
      title="Create account"
      subtitle="Get started with LabFlow in seconds"
      footer={footer}
    >
      <form className="space-y-5" onSubmit={handleSubmit}>
        {error && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <AuthFormField
          id="name"
          name="name"
          label="Full name"
          type="text"
          placeholder="John Doe"
          icon={User}
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <AuthFormField
          id="email"
          name="email"
          label="Email address"
          type="email"
          placeholder="you@gmail.com"
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
          placeholder="Create a strong password"
          icon={Lock}
          autoComplete="new-password"
          value={form.password}
          onChange={handleChange}
          required
          minLength={8}
        />

        <AuthSubmitButton className="mt-1" disabled={loading}>
          {loading ? "Creating account…" : "Create account"}
        </AuthSubmitButton>
      </form>
    </AuthLayout>
  );
};

export default Signup;
