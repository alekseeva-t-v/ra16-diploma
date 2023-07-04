import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { categoryActions } from '../../store/active-category-slice';

import styles from './Categories.module.css';

const Categories = () => {
  const [categories, setCategories] = useState();
  const dispatchFunction = useDispatch();
  const activeCategory = useSelector((state) => state.category.value);

  useEffect(() => {
    fetch(`http://localhost:7777/api/categories`)
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const categoryChangeHandler = (id) => {
    dispatchFunction(categoryActions.change(id));
  };

  const elements = categories
    ? categories.map((element) => {
        return (
          <li className="nav-item" key={element.id} id={element.id}>
            <button
              className={activeCategory === element.id ? 'nav-link active' : 'nav-link'}
              onClick={() => categoryChangeHandler(element.id)}
            >
              {element.title}
            </button>
          </li>
        );
      })
    : '';

  return (
    <ul
      className={`${styles['categories']} nav justify-content-center categories`}
    >
      <li className="nav-item">
        <button className={activeCategory === 0 ? 'nav-link active' : 'nav-link'} onClick={() => categoryChangeHandler(0)}>
          Все
        </button>
      </li>
      {elements}
    </ul>
  );
};

export default Categories;
