// src/components/layout/AppShell.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-[#f6f4f0] text-zinc-900 antialiased">
      {/* Skip link matches the "Skip to content" pattern */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 bg-white border border-zinc-300 rounded-full px-4 py-2 text-sm"
      >
        Skip to content
      </a>

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
