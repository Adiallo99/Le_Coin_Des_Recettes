
import myAxios from "./myAxios";

const UserAction = async ({ request }) => {
    const formData = await request.formData();

  switch (request.method.toLowerCase()) {
    case "post": {
      try {
        const response = await myAxios.post("/api/register", 
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          pseudo: formData.get("pseudo"),
          email: formData.get("email"),
          password: formData.get("password"),
        });
        
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

export default UserAction;