import React, { useState } from "react";

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
        <div className="flex justify-between items-center mb-4 p-4 border-b rounded-2xl shadow-sm hover:shadow-md bg-white" key={c.card.info.id}>
            <div className="flex-1 pr-4">
                <p className="font-semibold text-gray-800 text-lg mb-1">{c.card.info.name}</p>
                <p className="text-sm text-gray-400 mb-2">{c.card.info.description}</p>
                <p className="font-medium text-gray-700">₹{c.card.info.price / 100}</p>
                {/* <p>{c.card.info.description/1000}</p> */}
            </div>
            <div className="flex-shrink-0 w-20 h-20">
                <img className="w-[full] h-full rounnded-lg object-cover shadow-md " src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300/${c.card.info.imageId}`}       />
            </div>    
        </div>    
    ))
    }
   </div>
}
</div>;
};

export default RestaurantMenuList;
