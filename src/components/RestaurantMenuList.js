import React, { useState } from "react";
import { useDispatch } from "react-redux";

import CategoryItem from "./CategoryItem";

const RestaurantMenuList = ({ category, showItems, setShowIndex }) => {
//   console.log(category);

  const categoryList = category.card.card.itemCards;
  console.log(categoryList)
  const title = category?.card?.card?.title;

  const handleClick = () => {
    setShowIndex();
  }

  return <div className="border-b shadow-md mx-auto px-4 py-3 w-[50%] bg-white rounded-lg cursor-pointer">
    <div className="flex items-center justify-between"  onClick={() => handleClick()}>
         <p className="font-semibold text-lg">{title}</p>
         <p className="text-xl">{showItems ? "🔼" : "🔽"}</p>
    </div>
    {showItems &&
   <div >
    {
    categoryList.map((c) => (
        <CategoryItem category={c} key={c.card.info.id}/>
    ))
    }
   </div>
}
</div>;
};

export default RestaurantMenuList;
