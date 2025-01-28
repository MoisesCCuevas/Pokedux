import React from "react";
import { SearchOutlined } from '@ant-design/icons';

const Search = (props) => {
  const {
    value,
    placeholder
  } = props;
  return (
    <figure className="flex items-center rounded-md shadow-md border border-slate-800 border-solid overflow-hidden w-full">
      <input
        className="px-2 py-4 h-5 focus:outline-none w-full"
        value={value}
        placeholder={placeholder}
      />
      <div className="h-5 py-4 divider" />
      <button className="size-7 max-w-7 flex items-center justify-center active:text-white">
       <SearchOutlined className="h-5 w-5 p-1" />
      </button>
    </figure>
  );
};

export default Search;
