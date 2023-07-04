import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Preloader from '../../components/Preloader/Preloader';

import styles from './Product.module.css'

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:7777/api/items/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <section className="catalog-item">
      {!product && <Preloader />}
      {product && (
        <>
          <h2 className="text-center">{product.title}</h2>
          <div className={`${styles['product__wrapper']} row`}>
            <div className="col-5">
              <img
                className="img-fluid"
                src={product.images[0]}
                alt={product.title}
              />
            </div>
            <div className={`${styles['product__content']} col-7`}>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Артикул</td>
                    <td>{product.sku}</td>
                  </tr>
                  <tr>
                    <td>Производитель</td>
                    <td>{product.manufacturer}</td>
                  </tr>
                  <tr>
                    <td>Цвет</td>
                    <td>{product.color}</td>
                  </tr>
                  <tr>
                    <td>Материалы</td>
                    <td>{product.material}</td>
                  </tr>
                  <tr>
                    <td>Сезон</td>
                    <td>{product.season}</td>
                  </tr>
                  <tr>
                    <td>Повод</td>
                    <td>{product.reason}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center">
                <p>
                  Размеры в наличии:{' '}
                  {product.sizes.map((elem) => {
                    return (
                      <span className="catalog-item-size selected" key={elem.size}>{elem.size} {' '}</span>
                    );
                  })}
                </p>
                <p>
                  Количество:{' '}
                  <span className="btn-group btn-group-sm pl-2">
                    <button className="btn btn-secondary">-</button>
                    <span className="btn btn-outline-primary">1</span>
                    <button className="btn btn-secondary">+</button>
                  </span>
                </p>
              </div>
              <button className={`${styles['product__btn']} btn btn-danger btn-block btn-lg`}>В корзину</button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Product;
