import {Link, useLoaderData} from "react-router-dom";


function RecipeUser(){
    const recipes = useLoaderData();


    return(
        <div>
            <h2>Mes recetttes</h2>
        <div>
            {recipes.map((recipe) => (
                <ul key={recipe.id}>
                    <li><Link to={`/recipe/edit/${recipe.id}`}>{recipe.name} ✏️ <button type="button">🗑️</button></Link></li>
                    <li>{recipe.categoriesName}</li>
                    <li>{recipe.preparation_time}</li>
                    <li>{recipe.ingredients}</li>
                    <li>{recipe.instruction}</li>
                </ul>
            ))}
        </div>
        </div>
    )

}

export default RecipeUser;