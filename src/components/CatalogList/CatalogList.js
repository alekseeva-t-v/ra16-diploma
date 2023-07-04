import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import GoodsList from '../Goods/GoodsList';
import Preloader from '../Preloader/Preloader';

const CatalogList = () => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const activeCategory = useSelector((state) => state.category.value);

  let isDisplaySection =
    goods !== null && goods !== undefined && goods.length > 0 ? true : false;

  async function fetchGoodsHandler() {
    setIsLoading(true);
    setError(null);
    const URL =
      activeCategory === 0
        ? 'http://localhost:7777/api/items'
        : ` http://localhost:7777/api/items?categoryId=${activeCategory}`;
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Что-то пошло не так...');
      }
      const data = await response.json();
      setGoods(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchGoodsHandler();
  }, [activeCategory]);

  let content = <GoodsList goods={goods} />;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <Preloader />;
  }

  return <>{isDisplaySection && content}</>;
};

export default CatalogList;
