/**
 * Lab workspace API — implement calls per docs/jira/LAB-201-frontend-lab-screens.md
 */
import { API_BASE, request } from "./api";

const authHeaders = (token) => ({
  Authorization: `Bearer ${token}`,
});

export const labApi = {
  listSubjects: (token) =>
    request("/subjects", { headers: authHeaders(token) }),

  createSubject: (token, body) =>
    request("/subjects", {
      method: "POST",
      headers: authHeaders(token),
      body: JSON.stringify(body),
    }),

  getSubject: (token, subjectId) =>
    request(`/subjects/${subjectId}`, { headers: authHeaders(token) }),

  listSessions: (token, subjectId) =>
    request(`/subjects/${subjectId}/sessions`, { headers: authHeaders(token) }),

  createSession: (token, subjectId, body) =>
    request(`/subjects/${subjectId}/sessions`, {
      method: "POST",
      headers: authHeaders(token),
      body: JSON.stringify(body),
    }),

  getSession: (token, subjectId, sessionId) =>
    request(`/subjects/${subjectId}/sessions/${sessionId}`, {
      headers: authHeaders(token),
    }),

  listOutputs: (token, subjectId, sessionId) =>
    request(`/subjects/${subjectId}/sessions/${sessionId}/outputs`, {
      headers: authHeaders(token),
    }),

  uploadOutputs: async (token, subjectId, sessionId, formData) => {
    const response = await fetch(
      `${API_BASE}/subjects/${subjectId}/sessions/${sessionId}/outputs`,
      {
        method: "POST",
        headers: authHeaders(token),
        body: formData,
      },
    );
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.message || "Upload failed");
    }
    return data;
  },

  getOutput: (token, outputId) =>
    request(`/outputs/${outputId}`, { headers: authHeaders(token) }),

  updateOutput: (token, outputId, body) =>
    request(`/outputs/${outputId}`, {
      method: "PATCH",
      headers: authHeaders(token),
      body: JSON.stringify(body),
    }),

  deleteOutput: (token, outputId) =>
    request(`/outputs/${outputId}`, {
      method: "DELETE",
      headers: authHeaders(token),
    }),

  search: (token, params) => {
    const query = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v != null && v !== ""),
    );
    return request(`/search?${query}`, { headers: authHeaders(token) });
  },

  listTags: (token) =>
    request("/search/tags", { headers: authHeaders(token) }),
};
