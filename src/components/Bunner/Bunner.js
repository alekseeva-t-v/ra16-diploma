import styles from './Bunner.module.css'

const Bunner = () => {
  return (
    <div className={styles['banner']}>
      <img className={styles['banner-img']} src="./assets/img/banner.jpg" alt="К весне готовы!" />
      <h2 className={styles['banner-header']}>К весне готовы!</h2>
    </div>
  );
};

export default Bunner;
