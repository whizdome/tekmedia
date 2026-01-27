import AppShell from "../components/layout/AppShell.jsx";
import Home from "../pages/Home.jsx";
import Blog from "../pages/Blog.jsx";
import BlogPost from "../pages/BlogPost.jsx";
import Contact from "../pages/Contact.jsx";
import Careers from "../pages/Careers.jsx";
import About from "../pages/About.jsx";
import Teams from "../pages/Teams.jsx";
import People from "../pages/People.jsx";
import CaseStudy from "../pages/CaseStudy.jsx";
import OurWork from "../pages/OurWork.jsx";

export const routes = [
  {
    element: <AppShell />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:slug", element: <BlogPost /> },
      { path: "/case-studies/:slug", element: <CaseStudy /> },
      { path: "/work", element: <OurWork /> },
      { path: "/contact", element: <Contact /> },
      { path: "/careers", element: <Careers /> },
      { path: "/teams", element: <Teams /> },
      { path: "/people", element: <People /> },
      { path: "/about", element: <About /> },
    ],
  },
];
