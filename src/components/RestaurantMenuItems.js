import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";

const RestaurantMenuItems = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const resData = resInfo?.data?.cards
    ?.map((card) => card.card?.card?.info)
    .filter(Boolean)[0];

  const cards = resInfo?.data?.cards;
  const groupedCard = cards?.find((card) => card.groupedCard)?.groupedCard; 
  const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards;
  const resItems = regularCards?.find((c) => c.card?.card?.itemCards)
  ?.card?.card?.itemCards;

  return (
    <div className="menu-container">
      <h3>{resData.name}</h3>
      <p>{resData.avgRating} stars</p>
      <p>{resData.cuisines.join(", ")}</p>
      <p>{resData.costForTwoMessage}</p>

      <h2>Menu Items</h2>
      <ul>
        {resItems.map( (item) =>  (
            <li key={item.card.info.id}> {item.card.info.name} -  {item.card.info.price/100}rs</li>
        ))}
      </ul>
      
    </div>
  );
};

export default RestaurantMenuItems;
