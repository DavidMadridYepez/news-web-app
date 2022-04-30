import React, { useState } from "react";
import Categories from "./categories";
import Item from "./item";
import data from './data';

function MainChampions() {
  const allCategories = ['All', ...new Set(data.map((item) => item.category))];
  const [champions, setChampions] = useState(data)

  const filterItems = (category) => {
    if (category === 'All') {
      setChampions(data)
      return;
    }
    const newData = data.filter((item) => item.category === category)
    setChampions(newData)
  }
  return (
    <div className="pb-20 ">
      <h2 className="flex p-10 justify-center text-5xl font-bold text-[#202020]">Champions</h2>
      <Categories categories={allCategories} filterItems={filterItems} />
      <Item data={champions} />
    </div>
  );
}

export default MainChampions;