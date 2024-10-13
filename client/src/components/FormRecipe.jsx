import PropTypes from "prop-types";
import {useLoaderData, useActionData } from "react-router-dom";



function FormRecipe({recipes}){
    
    const  {categories}  = useLoaderData();
    console.info("rec", recipes[0].name)
    const message = useActionData();

    return(
    <div>
        <div>
            <label htmlFor="name" >Nom de la recette *</label>
            <input type="text" id="name" name="name"  defaultValue={(recipes && recipes[0].name) || ""} required/>
        </div>
        <div>
            <label htmlFor="categorie" >categorie *</label>
            <select id="categorie" name="categorie" defaultValue={(recipes && recipes[0].categoriesName) || ""} >
                {categories.map((categorie) => (
                <option key={categorie.id} value={categorie.id}>{categorie.name}</option>
                ))}
            </select>
        </div>
        <div>
            <label htmlFor="ptime" >Durée *</label>
            <input type="time" id="ptime" name="preparation_time" required defaultValue={(recipes && recipes[0].preparation_time) || ""} />
        </div>
        <div>
            <label htmlFor="ingredient" >Ingredients *</label>
            <textarea id="ingredient" name="ingredients" required defaultValue={(recipes && recipes[0].ingredients) || ""}/> 
        </div>
        <div>
            <label htmlFor="instruction" >instruction *</label>
            <textarea id="instruction" name="instruction" required defaultValue={(recipes && recipes[0].instruction) || ""}/> 
        </div>
        <div>{message}</div>
    </div>
    )
}

FormRecipe.propTypes = {
    recipes: PropTypes.shape({
      name: PropTypes.string,
      categoriesName: PropTypes.string,
      preparation_time: PropTypes.string,
      ingredients:PropTypes.string,
      instruction:PropTypes.string,
    }).isRequired,
  };

export default FormRecipe;