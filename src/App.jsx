import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Scale, Search, MessageSquare } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* ===== Top Navbar ===== */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-lg text-slate-800">
              LegalAI Pro
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `btn btn-primary ${isActive ? "bg-slate-800" : ""}`
              }
            >
              <Scale className="w-4 h-4" />
              Dashboard
            </NavLink>
            <button className="btn">
              <Search className="w-4 h-4" />
            </button>
            <button className="btn">
              <MessageSquare className="w-4 h-4" />
            </button>
          </nav>
        </div>
      </header>

      {/* ===== Page Content ===== */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* ===== Footer ===== */}
      <footer className="text-center py-4 text-xs text-slate-500 border-t border-slate-200">
        © {new Date().getFullYear()} LegalAI Pro • Enterprise Security • v2.1.0
      </footer>
    </div>
  );
}
