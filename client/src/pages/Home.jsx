
import { useLoaderData, useNavigate } from "react-router-dom";


function Home() {
  const {recipes, categories } = useLoaderData();

  const navigate = useNavigate()

  const filterByCategorie = (even) =>{
    navigate(`?categorie=${even.target.value}`);
  }

  return (
    <div className="homeContainer">
      <h2>Bienveneue dans mes recettes</h2>
      <select onChange={filterByCategorie}>
        <option value="">---</option>
        {categories.map((categorie) => (
          <option key={categorie.id} value={categorie.id}>
            {categorie.name}
          </option>
        ))}
      </select>
      <div className="recipeContainer">
        {recipes.map((recipe) => (
          <ul key={recipe.id} className="recipeDetail">
            <li>{recipe.name}</li>
            <li>{recipe.preparation_time}</li>
            <li>{recipe.ingredients}</li>
            <li>{recipe.instruction}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Home;
