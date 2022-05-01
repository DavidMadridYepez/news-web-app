import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="h-32 md:h-10 mb-5 flex flex-wrap justify-center space-x-5 px-5">
      {categories.map((category, index) => {
        return (
          <button className="w-20 py-1 hover:text-xl duration-200 text-slate-500 hover:text-black text-base" type="button" key={index} onClick={() => filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  );
}

export default Categories;