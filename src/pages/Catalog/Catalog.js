import styles from './Catalog.module.css';
import CatalogSearch from './CatalogSearch';
import CatalogCategories from './CatalogCategories';

const Catalog = () => {
  return (
    <section className={styles['catalog']}>
      <h2 className="text-center">Каталог</h2>
      <CatalogSearch />
      <CatalogCategories />
    </section>
  );
};

export default Catalog;
