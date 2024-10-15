import { Form, useLoaderData } from "react-router-dom";
import FormRecipe from "../components/FormRecipe";

function EditRecipe() {
  const { recipes } = useLoaderData();

  return (
    <div className="container">
      <h2>Modifier une recette ou la supprimer</h2>
      <div>
        <Form method="put" encType="multipart/form-data" className="formRecipe">
          <FormRecipe recipes={recipes} />
          <button type="submit">Mettre à Jour ✏️</button>
        </Form>
        <Form method="delete">
          <button type="submit">Supprimer 🗑️</button>
        </Form>
      </div>
    </div>
  );
}

export default EditRecipe;
