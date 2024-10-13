import { Form, Link, useActionData } from "react-router-dom";

function RegisterUser() {
  const message = useActionData();

  return (
    <div className="container">
      <h2> Créer un compte ! </h2>
      <Form className="formUser" method="post" encType="multipart/form-data">
        <div className="bloc">
          <label htmlFor="pseudo" className="formLabel">
            Pseudo
          </label>
          <input
            type="text"
            id="pseudo"
            name="pseudo"
            required
            className="formInput"
          />
        </div>
        <div className="bloc">
          <label htmlFor="email" className="formLabel">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="formInput"
          />
        </div>
        <div className="bloc">
          <label htmlFor="password" className="formLabel">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="formInput"
          />
        </div>
        <div>{message}</div>
        <div className="formButton">
          <button type="submit">S'inscrire</button>
          <Link to="/Login">Connexion!</Link>
        </div>
      </Form>
    </div>
  );
}
export default RegisterUser;
