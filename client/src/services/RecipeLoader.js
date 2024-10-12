import axios from "axios";

export default function getAllRecipe () {
   return axios
    .get(`${import.meta.env.VITE_API_URL}/api/recipe`)
    .then((response) => response.data)
    .catch((err) => console.error(err))
}
 

