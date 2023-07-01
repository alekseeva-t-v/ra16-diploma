const FooterInfo = () => {
  return (
    <section>
      <h5>Информация</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a href="/about.html" className="nav-link">
            О магазине
          </a>
        </li>
        <li className="nav-item">
          <a href="/catalog.html" class="nav-link">
            Каталог
          </a>
        </li>
        <li className="nav-item">
          <a href="/contacts.html" class="nav-link">
            Контакты
          </a>
        </li>
      </ul>
    </section>
  );
};

export default FooterInfo;
