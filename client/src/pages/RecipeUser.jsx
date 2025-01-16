import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import myAxios from "../services/myAxios";

import defaultPicture from "../assets/images/default_picture.jpg";

function RecipeUser() {
  const { recipes, categories } = useLoaderData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idRecipeToDelete, setIdRecipeToDelete] = useState(null);

  const navigate = useNavigate();

  const filterByCategorie = (even) => {
    navigate(`/recipe?categorie=${even.target.value}`);
  };

  const handleDelete = async () => {
    try {
      await myAxios.delete(`/api/recipe/${idRecipeToDelete}`, {
        withCredentials: true,
      });
      setIsModalOpen(false);
      navigate("/recipe");
    } catch (error) {
      console.info("error");
    }
  };

  const openModal = (id) => {
    setIdRecipeToDelete(id);
    setIsModalOpen(true);
  };

  return (
    <div className="homeContainer">
      <h2>Mes recettes</h2>
      <select onChange={filterByCategorie}>
        <option value="">Choisir le type de recette</option>
        {categories.map((categorie) => (
          <option key={categorie.id} value={categorie.id}>
            {categorie.name}
          </option>
        ))}
      </select>
      <div className="recipeContainer">
        {recipes.message
          ? recipes.message
          : recipes.map((recipe) => (
              <ul key={recipe.id} className="recipeDetail">
                <Link to={`/recipe/edit/${recipe.id}`}>
                  <li className="recipeName">{recipe.name} ✏️ </li>
                </Link>
                <li>{recipe.categoriesName}</li>
                <li>{recipe.preparation_time}</li>
                <li>{recipe.ingredients}</li>
                <li>{recipe.instruction}</li>
                <div>
                  <img
                    src={
                      recipe.pictures
                        ? `${import.meta.env.VITE_API_URL}/uploads/${recipe.pictures}`
                        : defaultPicture
                    }
                    alt={recipe.name}
                  />
                </div>
                <button type="submit" onClick={() => openModal(recipe.id)}>
                  {" "}
                  Supprimer 🗑️{" "}
                </button>
              </ul>
            ))}
      </div>

      <div className={`modal ${isModalOpen ? "active" : "inactive"} `}>
        <p> Voulez vous vraiment supprimer cette recette ?</p>
        <div>
          <button type="submit" onClick={() => handleDelete()}>
            Oui
          </button>
        </div>
        <div>
          <button type="button" onClick={() => setIsModalOpen(false)}>
            Non
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeUser;
