import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";

import UserAction from "./services/UserAction";

import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterUser />,
    action: UserAction,
  },
  {
    path: "/login",
    element: <LoginUser />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
