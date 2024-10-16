import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RegisterUser from "./pages/RegisterUser";
import LoginUser from "./pages/LoginUser";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import RecipeUser from "./pages/RecipeUser";
import EditRecipe from "./pages/EditRecipe";

import UserAction from "./services/UserAction";
import RecipeAction from "./services/RecipeAction";
import getAllCategories from "./services/CategorieLoader";
import {
  getAllRecipe,
  getRecipeById,
  getAllRecipeUser,
} from "./services/RecipeLoader";

import App from "./App";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const categorie = url.searchParams.get("categorie");
          const result = {
            categories: await getAllCategories(),
            recipes: await getAllRecipe(categorie)
          };
          return result;
        },
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
        path: "/recipe/add",
        element: <AddRecipe />,
        loader: () => getAllCategories(),
        action: RecipeAction,
      },
      {
        path: "/recipe/edit/:id",
        element: <EditRecipe />,
        loader: async ({ params }) => ({
          recipes: await getRecipeById(params.id),
          categories: await getAllCategories(),
        }),
        action: RecipeAction,
      },
      {
        path: "/recipe",
        element: <RecipeUser />,
        loader: async ({ request }) => {
          const url = new URL(request.url);
          const categorie = url.searchParams.get("categorie");
          const result = {
            categories: await getAllCategories(),
            recipes: await getAllRecipeUser(categorie)
          };
          return result;
        },
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
