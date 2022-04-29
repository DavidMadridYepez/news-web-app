import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="flex flex-wrap justify-center space-x-5 px-5">
      {categories.map((category, index) => {
        return (
          <button className="text-slate-500 hover:text-black text-base p-3" type="button" key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  );
}

export default Categories;