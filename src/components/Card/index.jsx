import React from "react";
import { StarOutlined, StarFilled } from "@ant-design/icons";

const Card = (props) => {
  const {
    title,
    image,
    tags,
    fav,
    onClickFav
  } = props;
  return (
    <section className="bg-white rounded-md shadow-md w-80 h-96 flex flex-col justify-between relative">
      <button onClick={onClickFav} className="absolute top-5 right-5 flex items-center justify-center">
        {fav ? (
          <StarFilled className="text-yellow-400 size-5" />
        ) : (
          <StarOutlined className="size-5" />
        )}
      </button>
      <h2 className="font-medium text-lg p-3 first-letter:capitalize">{title}</h2>
      <figure className="w-full h-3/5 overflow-hidden">
        <img className="w-full h-full object-contain" src={image} alt={title} />
      </figure>
      <div className="p-3 flex items-end flex-row-reverse justify-items-end gap-1 h-1/5">
        {tags.map(({ name, url }) => (
          <img key={name} className="w-16" src={url} alt={name} />
        ))}
      </div>
    </section>
  );
};

Card.defaultProps = {
  title: "Card",
  image: "",
  tags: [],
  fav: false,
  onClickFav: () => {}
};

export default Card;
