import styles from './Catalog.module.css';
import CatalogSearch from './CatalogSearch';
import CatalogCategories from './CatalogCategories';

const Catalog = () => {
  return (
    <section class={styles['catalog']}>
      <h2 class="text-center">Каталог</h2>
      <CatalogSearch />
      <CatalogCategories />
    </section>
  );
};

export default Catalog;
