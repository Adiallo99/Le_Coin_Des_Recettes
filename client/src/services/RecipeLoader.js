import axios from "axios";

export function getAllRecipe(categorie) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/recipe?categorie=${categorie}`)
    .then((response) => response.data)
    .catch((err) => console.error(err));
}

export function getRecipeById(id) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/recipe/${id}`)
    .then((response) => response.data)
    .catch((err) => console.error(err));
}

export function getAllRecipeUser(categorie) {
  return axios
    .get(`${import.meta.env.VITE_API_URL}/api/myRecipe?categorie=${categorie}`, {
      withCredentials: true,
    })
    .then((response) => {console.info(response.data) 
      return response.data})
    .catch((err) => console.error(err));
}
