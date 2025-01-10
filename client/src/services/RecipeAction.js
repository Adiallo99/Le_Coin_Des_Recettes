import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

const RecipeAction = async ({ request, params }) => {
  const formData = await request.formData();

  switch (request.method.toLowerCase()) {
    case "post": {
      try {
        const response = await myAxios.post(
          "/api/recipe", formData,
          {
             headers: {
               "Content-Type": "multipart/form-data",
             },

             withCredentials: true, 
           }
           
        );
        if (response.status !== 201) {
          return response.data;
        }

        return response.data.message;
      } catch (err) {
        return err.response.data;
      }
    }

    case "put": {
      try {
        const response = await myAxios.put(
          `/api/recipe/${params.id}`, formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true
            /*
            name: formData.get("name"),
            preparation_time: formData.get("preparation_time"),
            ingredients: formData.get("ingredients"),
            instruction: formData.get("instruction"),
            categories_id: formData.get("categorie"),
         
          */
          },
          {  }
        );

        if (response.status !== 201) {
          return response.data;
        }

        return response.data.message;
      } catch (err) {
        return err.response.data;
      }
    }
    case "delete": {
      await myAxios.delete(`/api/recipe/${params.id}`, {
        withCredentials: true,
      });
      return redirect(`/recipe`);
    }

    default:
      throw new Response("", { status: 405 });
  }
};

export default RecipeAction;
