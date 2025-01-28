import React from "react";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const Card = (props) => {
  const {
    title,
    image,
    tags,
    fav
  } = props;
  return (
    <section className="bg-white rounded-md shadow-md w-80 h-96 flex flex-col justify-between relative">
      <div className="absolute top-5 right-5 flex items-center justify-center">
        {fav ? (
          <StarFilled className="text-yellow-400 size-5" />
        ) : (
          <StarOutlined className="size-5" />
        )}
      </div>
      <h2 className="font-medium text-lg p-3 first-letter:capitalize">{title}</h2>
      <figure className="w-full h-3/5 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </figure>
      <p className="p-3 flex items-end flex-row-reverse justify-items-end h-1/5">
        <span>{tags}</span>
      </p>
    </section>
  );
};

Card.defaultProps = {
  title: "Card",
  image: "",
  tags: "Tags",
  fav: false
};

export default Card;
