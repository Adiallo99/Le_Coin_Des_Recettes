import { Form, useLoaderData } from "react-router-dom";
import FormRecipe from "../components/FormRecipe";


function EditRecipe (){
    const {recipes} = useLoaderData();
    console.info(recipes)

    return(
        <div>
            <h2>Modifier une recette</h2>
            <Form className="formRecipe"  method="put" encType="multipart/form-data">
                <FormRecipe recipes={recipes} />
                <button type="submit">Mettre à Jour</button>
            </Form>
            <Form method="delete" >
                <button type="submit">🗑️</button>
            </Form>
        </div>
    )

}

export default EditRecipe;