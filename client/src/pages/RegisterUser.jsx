import { Form, Link, useActionData} from "react-router-dom";

function RegisterUser (){
    const message = useActionData();

    return(
        <div>
            <h2> Créer un compte ! </h2>
            <Form className="formUser"  method="post" encType="multipart/form-data">
                <div>
                    <label htmlFor="pseudo" >Pseudo</label>
                    <input type="text" id="pseudo" name="pseudo" required />
                </div>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="password" >Mot de passe</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div>{message}</div>
                <button type="submit">S'inscrire</button>
                <Link to="/Login">Connexion!</Link>
            </Form>

        </div>
        
    )

}
export default RegisterUser;