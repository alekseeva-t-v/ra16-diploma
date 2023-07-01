import styles from './Header.module.css';

const HeaderControls = () => {
  return (
    <div>
      <div className={styles['header-controls-pics']}>
        <div
          data-id="search-expander"
          className={`${styles['header-controls-pic']} ${styles['header-controls-search']}`}
        ></div>
        <div className={`${styles['header-controls-pic']} ${styles['header-controls-cart']}`}>
          <div className={styles['header-controls-cart-full']}>1</div>
          <div className={styles['header-controls-cart-menu']}></div>
        </div>
      </div>
      <form
        data-id="search-form"
        className={`${styles['header-controls-search-form']} form-inline invisible`}
      >
        <input
          className={`${styles['header-controls-form-control']} form-control`}
          placeholder="Поиск"
        />
      </form>
    </div>
  );
};

export default HeaderControls;
