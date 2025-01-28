import React from "react";
import Card from "../Card";

const CardList = (props) => {
  const {
    items
  } = props;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {items.map((item, index) => (
        <Card key={item.name} title={`${item.name} #${index+1}`}/>
      ))}
    </div>
  );
};

CardList.defaultProps = {
  items: Array(10).fill({
    title: "Card",
    image: "",
    tags: "Tags",
  }),
};

export default CardList;
