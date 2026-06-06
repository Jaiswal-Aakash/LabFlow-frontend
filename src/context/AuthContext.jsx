import { createContext, useContext, useMemo, useState } from "react";
import { authApi } from "@/lib/api";

const AuthContext = createContext(null);

const STORAGE_KEY = "labflow_auth";

const loadStoredAuth = () => {
  try {
    const raw =
      localStorage.getItem(STORAGE_KEY) ||
      sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const clearStoredAuth = () => {
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(STORAGE_KEY);
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(loadStoredAuth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const persistAuth = (data, remember = true) => {
    const session = {
      user: {
        _id: data._id,
        name: data.name,
        email: data.email,
        role: data.role,
      },
      token: data.token,
    };

    clearStoredAuth();
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem(STORAGE_KEY, JSON.stringify(session));
    setAuth(session);
    return session;
  };

  const login = async (email, password, remember = true) => {
    setLoading(true);
    setError(null);
    try {
      const data = await authApi.login({ email, password });
      return persistAuth(data, remember);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      await authApi.register({ name, email, password });
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    clearStoredAuth();
    setAuth(null);
  };

  const value = useMemo(
    () => ({
      user: auth?.user ?? null,
      token: auth?.token ?? null,
      isAuthenticated: Boolean(auth?.token),
      loading,
      error,
      login,
      register,
      logout,
      clearError: () => setError(null),
    }),
    [auth, loading, error],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
