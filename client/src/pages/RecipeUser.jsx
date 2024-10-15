import { Link, useLoaderData } from "react-router-dom";

function RecipeUser() {
  const recipes = useLoaderData();

  return (
    <div className="homeContainer">
      <h2>Mes recettes</h2>
      <div className="recipeContainer">
        {recipes.map((recipe) => (
          <ul key={recipe.id} className="recipeDetail">
            <Link to={`/recipe/edit/${recipe.id}`}>
              <li className="recipeName">{recipe.name} ✏️ </li> <div>🗑️</div>
            </Link>
            <li>{recipe.categoriesName}</li>
            <li>{recipe.preparation_time}</li>
            <li>{recipe.ingredients}</li>
            <li>{recipe.instruction}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default RecipeUser;
