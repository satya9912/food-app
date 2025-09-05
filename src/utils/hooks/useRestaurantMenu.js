import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [menuItems, setMenuItems] = useState(null);
 useEffect(() => {
    fetchData();
  }, []);

   const fetchData = async () => {
    // const jsonData = await fetch(
    //   `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    // );
     const jsonData = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.30070&lng=80.46390&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTE`
    );
    const menuItems = await jsonData.json();
    setMenuItems(menuItems);
  };
  return menuItems;
}

export default useRestaurantMenu;