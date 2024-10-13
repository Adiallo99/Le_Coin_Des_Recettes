import axios from "axios";


export function getAllRecipe () {
   return axios
    .get(`${import.meta.env.VITE_API_URL}/api/recipe`)
    .then((response) => response.data)
    .catch((err) => console.error(err))
}

export function getRecipeById (id) {
    return axios
     .get(`${import.meta.env.VITE_API_URL}/api/recipe/${id}`)
     .then((response) => response.data)
     .catch((err) => console.error(err))
 }
 
export function getAllRecipeUser () {
    return axios
    .get(`${import.meta.env.VITE_API_URL}/api/myRecipe`,  { withCredentials: true } )
    .then((response) => response.data)
    .catch((err) => console.error(err))
}

