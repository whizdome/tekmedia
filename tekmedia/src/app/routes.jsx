import AppShell from "../components/layout/AppShell.jsx";
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import Blog from "../pages/Blog.jsx";
import Teams from "../pages/Teams.jsx";
import People from "../pages/People.jsx";
import JoinUs from "../pages/JoinUs.jsx";
import Contact from "../pages/Contact.jsx";

export const routes = [
  {
    element: <AppShell />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/our-thoughts", element: <Blog /> },
      { path: "/our-teams", element: <Teams /> },
      { path: "/our-people", element: <People /> },
      { path: "/join-us", element: <JoinUs /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];
