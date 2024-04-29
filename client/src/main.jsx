import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { Paths } from "./Paths.js";
import { Login } from "./pages/login/index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/index.jsx";
import { Register } from "./pages/registration/index.jsx";

const container = document.getElementById("root");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
  {
    path: Paths.home,
    element: <Home />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
