import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";

import UserAction from "./services/UserAction";
import getAllRecipe from "./services/RecipeLoader";
import getAllCategories from "./services/CategorieLoader";
import RecipeAction from "./services/RecipeAction";

import App from "./App";





const router = createBrowserRouter([
  {
    element: <App />,
    children: [
    {
      path: "/",
      element: <Home />,
      loader: async () => ({
        recipes: await getAllRecipe(),
        categories: await getAllCategories(), 
      }),
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
    {
      path: "/AddRecipe",
      element: <AddRecipe />,
      loader: () => getAllCategories(),
      action: RecipeAction,
    },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
