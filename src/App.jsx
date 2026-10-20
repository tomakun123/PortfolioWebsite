import { useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Toast from "./components/Toast";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage";

// Shared page frame: header, toast, footer. Pages render in <Outlet />.
function Layout() {
  const [toast, setToast] = useState("");

  // Copy to Clipboard
  function showToast(msg) {
  setToast(msg);
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => setToast(""), 1500);
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">

      {/* Render toast */}
      <Toast message={toast} />

      <ScrollToTop />

      {/* Header */}
      <Header />

      <div className="mx-auto max-w-5xl px-5 py-12">

        <main>
          <Outlet context={{ showToast }} />
        </main>

        <footer className="mt-12 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Thomas Motais De Narbonne</p>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
