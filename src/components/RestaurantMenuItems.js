import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantMenuItems = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const resData = resInfo?.data?.cards
    ?.map((card) => card.card?.card?.info)
    .filter(Boolean)[0];
    console.log(resInfo)

  const cards = resInfo?.data?.cards;
  const groupedCard = cards?.find((card) => card.groupedCard)?.groupedCard; 
  const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = regularCards?.filter(
  (c) =>
    c?.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
  console.log(categories);

  return (
    <>
    <div className="text-center mb-4">
      <h3 className="font-bold text-3xl mb-2">{resData.name}</h3>
      {/* <p>{resData.avgRating} stars</p> */}
      <p className="text-sm">{resData.cuisines.join(", ")}</p>
      <p className="text-sm">{resData.costForTwoMessage}</p>

      {/* <h2>Menu Items</h2>
      <ul>
        {resItems.map( (item) =>  (
            <li key={item.card.info.id}> {item.card.info.name} -  {item.card.info.price/100}rs</li>
        ))}
      </ul> */}
      
    </div>
    <div className="flex flex-col gap-4 justify-center mx-auto">
       {
        categories.map((category) => (
          <RestaurantMenuList key={category.card.card.categoryId} category={category}/>
        ))
      }
    </div>
  </>
  );
};

export default RestaurantMenuItems;
