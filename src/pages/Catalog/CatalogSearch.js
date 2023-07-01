import styles from './Catalog.module.css'

const CatalogSearch = () => {
  return (
    <form className={`${styles['catalog-search-form']} form-inline`}>
      <input className={`${styles['catalog-input']} form-control`} placeholder="Поиск" />
    </form>
  );
};

export default CatalogSearch;
