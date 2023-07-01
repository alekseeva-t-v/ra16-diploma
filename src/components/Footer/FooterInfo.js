import { Link } from "react-router-dom";

const FooterInfo = () => {
  return (
    <section>
      <h5>Информация</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            О магазине
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">
            Каталог
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacts">
            Контакты
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default FooterInfo;
