import { Form, useActionData, useLoaderData } from "react-router-dom";

function AddRecipe() {
  const message = useActionData();
  const categories = useLoaderData();
  return (
    <div>
      <Form className="formRecipe" method="post" encType="multipart/form-data">
        <h2>Ajouter une recette</h2>
        <div>
          <div>
            <label htmlFor="name">Nom de la recette *</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="categorie">categorie *</label>
            <select id="categorie" name="categories_id">
              {categories.map((categorie) => (
                <option key={categorie.id} value={categorie.id}>
                  {categorie.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="ptime">Durée *</label>
            <input type="time" id="ptime" name="preparation_time" required />
          </div>
          <div>
            <label htmlFor="ingredient">Ingredients *</label>
            <textarea id="ingredient" name="ingredients" required />
          </div>
          <div>
            <label htmlFor="instruction">instruction *</label>
            <textarea id="instruction" name="instruction" required />
          </div>
          <div>
            <label htmlFor="pictures">Photo *</label>
            <input type="file" id="pictures" name="pictures"  />
          </div>
          <div>{message}</div>
        </div>
        <button type="submit">Ajouter</button>
      </Form>
    </div>
  );
}
export default AddRecipe;
