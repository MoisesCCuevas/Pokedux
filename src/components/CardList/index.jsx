import React from "react";
import Card from "../Card";

const CardList = (props) => {
  const {
    items,
    onClickFavorite
  } = props;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {items.map((item, index) => (
        <Card
          key={item.id}
          title={`${item.name} #${index+1}`}
          image={item.url}
          tags={item.types}
          onClickFav={() => onClickFavorite(item.id)}
          fav={item.fav}
        />
      ))}
    </div>
  );
};

CardList.defaultProps = {
  items: Array(10).fill({
    title: "Card",
    image: "",
    tags: [],
  }),
  onClickFavorite: () => {}
};

export default CardList;
