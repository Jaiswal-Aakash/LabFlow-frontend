const API_BASE = import.meta.env.VITE_API_URL || "/api";

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

async function request(path, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  const isFormData = options.body instanceof FormData;

  try {
    const response = await fetch(`${API_BASE}${path}`, {
      ...options,
      signal: controller.signal,
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...options.headers,
      },
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new ApiError(data.message || "Request failed", response.status);
    }

    return data;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new ApiError("Request timed out", 408);
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

export const authApi = {
  register: (body) =>
    request("/auth/register", { method: "POST", body: JSON.stringify(body) }),

  login: (body) =>
    request("/auth/login", { method: "POST", body: JSON.stringify(body) }),

  profile: (token) =>
    request("/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    }),
};

export const statsApi = {
  getPublic: () => request("/stats"),
};

export { ApiError, request, API_BASE };
