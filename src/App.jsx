import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SubjectListPage from "./pages/lab/SubjectListPage";
import SubjectDetailPage from "./pages/lab/SubjectDetailPage";
import SessionDetailPage from "./pages/lab/SessionDetailPage";
import OutputDumpPage from "./pages/lab/OutputDumpPage";
import OutputDetailPage from "./pages/lab/OutputDetailPage";
import SearchPage from "./pages/lab/SearchPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/subjects"
            element={
              <ProtectedRoute>
                <SubjectListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/subjects/:subjectId"
            element={
              <ProtectedRoute>
                <SubjectDetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sessions/:sessionId"
            element={
              <ProtectedRoute>
                <SessionDetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sessions/:sessionId/dump"
            element={
              <ProtectedRoute>
                <OutputDumpPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/outputs/:outputId"
            element={
              <ProtectedRoute>
                <OutputDetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
