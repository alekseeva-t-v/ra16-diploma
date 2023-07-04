import Categories from '../../components/Categories/Categories';
import CatalogList from '../../components/CatalogList/CatalogList';

import styles from './Home.module.css';

const HomeCatalog = () => {
  return (
    <section className={styles['catalog']}>
      <h2 className="text-center">Каталог</h2>
      <Categories />
      <CatalogList />
    </section>
  );
};

export default HomeCatalog;
