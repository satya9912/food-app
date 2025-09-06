import React from "react";
import { RES_CDN_URL } from "../utils/constants";

const RestaurantMenuList = ({ category }) => {
//   console.log(category);
  const categoryList = category.card.card.itemCards;
  console.log(categoryList)
  const title = category?.card?.card?.title;
  return <div className="border-b shadow-sm mx-auto px-4 py-3 w-[50%] bg-white rounded-lg cursor-pointer">
    <div className="flex items-center justify-between">
         <p className="font-semibold text-lg">{title}</p>
         <p className="text-xl">🔽</p>
    </div>
   <div className="">
    {
    categoryList.map((c) => (
        <div className="flex justify-between p-2" key={c.card.info.id}>
            <div className="flex-1 pr-4">
                <p className="font-semibold text-md mb-1">{c.card.info.name}</p>
                <p className="text-sm text-gray-400">{c.card.info.description}</p>
                {/* <p>{c.card.info.description/1000}</p> */}
            </div>
            <div className="flex-shrink-0 w-20 h-20">
                <img className="w-[full] h-full rounnded-lg object-cover shadow-md " src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300/${c.card.info.imageId}`}       />
            </div>    
        </div>    
    ))
    }
   </div>
</div>;
};

export default RestaurantMenuList;
