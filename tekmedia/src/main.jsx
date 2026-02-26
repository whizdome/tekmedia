// src/main.jsx (or wherever your Router is)
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppShell from "./components/layout/AppShell.jsx";

import Home from "./pages/Home.jsx";
import MeetTheTeam from "./pages/MeetTheTeam.jsx";
import Blog from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx"; // optional (Labs link points here)

const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/meet-the-team", element: <MeetTheTeam /> },
      { path: "/blog", element: <Blog /> },
      { path: "/about", element: <About /> },
      { path: "/careers", element: <Careers /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Services /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
