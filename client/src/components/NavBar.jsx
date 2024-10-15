import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <article>
        <Link to="/"> Le Coin des Recettes</Link>
      </article>
      <ul>
        <li>
          <Link to="/recipe">Mes recettes</Link>
        </li>
        <li>
          <Link to="/recipe/add">Créer une recette</Link>
        </li>
        <li>
          <Link to="/login">Mon compte</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
