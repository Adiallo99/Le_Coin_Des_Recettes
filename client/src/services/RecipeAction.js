
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

    default:
      throw new Response("", { status: 405 });
  }
};

export default RecipeAction;
