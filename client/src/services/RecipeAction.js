
import myAxios from "./myAxios";

const RecipeAction = async ({request}) => {
    const formData = await request.formData();
    console.info(formData)

  switch (request.method.toLowerCase()) {
    case "post": {
      try {
        const response = await myAxios.post("/api/recipe", 
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          name: formData.get("name"),
          preparation_time: formData.get("preparation_time"),
          ingredients: formData.get("ingredients"),
          instruction: formData.get("instruction"),
          categories_id: formData.get("categorie")
        },
        { withCredentials: true }
    );
        console.info(response)
        if(response.status !== 201){
          return response.data;
        }

        return response.data.message;

      } catch (err) {
        return err.response.data;
      }
    }
   
    default:
      throw new Response("", { status: 405 });
  }



}

export default RecipeAction;