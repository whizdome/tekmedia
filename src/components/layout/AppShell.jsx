import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f4f2]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
