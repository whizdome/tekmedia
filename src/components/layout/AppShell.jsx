import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function AppShell() {
  return (
    <div className="min-h-screen bg-white text-[#0f0f10]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
