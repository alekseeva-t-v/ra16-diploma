import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Главная
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/catalog">
          Каталог
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          О магазине
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contacts">
          Контакты
        </Link>
      </li>
    </ul>
  );
};

export default HeaderNavbar;
