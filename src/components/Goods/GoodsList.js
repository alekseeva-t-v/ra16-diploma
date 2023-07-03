import GoodsListItem from "./GoodsListItem";

const GoodsList = (props) => {
  const { hits } = props;

  const elements = hits.map((item) => {
    return (
      <GoodsListItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        images={item.images[0]}
      />
    );
  });

  return <div className="row">{elements}</div>;
};

export default GoodsList;
