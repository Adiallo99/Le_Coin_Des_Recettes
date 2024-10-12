import axios from "axios";

export default function getAllCategories () {
   return  axios
    .get(`${import.meta.env.VITE_API_URL}/api/categorie`)
    .then((response) => response.data)
    .catch((err) => console.error(err))
}

