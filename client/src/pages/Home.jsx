import { useLoaderData } from "react-router-dom";


function Home(){
    const {recipes, categories} = useLoaderData();
   
    
    return(
        <>
        <h2>Bienveneue dans mes recettes</h2>
        <select>
            <option>---</option>
            {categories.map((categorie) => (
            <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
            ))}
        </select>
        <div>
            {recipes.map((recipe) => (
                <ul key={recipe.id}>
                    <li>{recipe.name}</li>
                    <li>{recipe.preparation_time}</li>
                    <li>{recipe.ingredients}</li>
                    <li>{recipe.instruction}</li>
                </ul>
            ))}
        </div>
        </>
    )

}

export default Home;