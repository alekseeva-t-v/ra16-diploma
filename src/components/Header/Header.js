import HeaderNavbar from './HeaderNavbar';
import HeaderControls from './HeaderControls';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <a className="navbar-brand" href="/">
                <img src="./assets/img/header-logo.png" alt="Bosa Noga" />
              </a>
              <div className="collapse navbar-collapse" id="navbarMain">
                <HeaderNavbar />
                <HeaderControls />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
