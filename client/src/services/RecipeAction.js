import { redirect } from "react-router-dom";
import myAxios from "./myAxios";

const RecipeAction = async ({ request, params }) => {
  const formData = await request.formData();

  switch (request.method.toLowerCase()) {
    case "post": {
      try {
        console.info("coucou je suis arriver juste là", formData)
        const response = await myAxios.post(
          "/api/recipe", formData,
          {
             headers: {
               "Content-Type": "multipart/form-data",
             },
             /*
            name: formData.get("name"),
            preparation_time: formData.get("preparation_time"),
            ingredients: formData.get("ingredients"),
            instruction: formData.get("instruction"),
            pictures: formData.get("pictures"),
            categories_id: formData.get("categories_id"),
            */
            withCredentials: true, 
           },
           
           
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
            withCredentials: true,
          },
          console.info("donné récupérer ", formData)
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
