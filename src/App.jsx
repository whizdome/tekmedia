import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./app/routes.jsx";

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
