import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import myAxios from "../services/myAxios";

function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (even) => {
    even.preventDefault();
    try {
      const response = await myAxios.post(
        "/api/login",
        { email, password },
        { withCredentials: true }
      );

      setMessage(response.data);
      if (response.data.message) {
        setMessage(response.data.message);
        navigate("/");
      }

      console.info(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2> Connexion ! </h2>
      <form onSubmit={handleSubmit} method="post" className="formUser">
        <div className="bloc">
          <label htmlFor="email" className="formLabel">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(even) => setEmail(even.target.value)}
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
            value={password}
            onChange={(even) => setPassword(even.target.value)}
            required
            className="formInput"
          />
        </div>
        <div className="formButton">
          <div>{message}</div>
          <button type="submit">Se Connecter</button>
          <Link to="/register">Pas encore de compte? S'inscrire !</Link>
        </div>
      </form>
    </div>
  );
}
export default LoginUser;
