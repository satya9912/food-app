import ResCard from './ResCard';
import { use, useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredrestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  //when ever state variables update react triggers a reconciliation cycle(react re-renders the component)

  useEffect( () => {
    fetchData();
  }, [])

  useEffect( () => {
    if(filteredRestaurants.length === 0){
      setFilteredrestaurants(listofRestaurants);
    }
  },[filteredRestaurants])

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.198909&lng=77.7068926&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const jsonData = await data.json();
    const allCards = jsonData?.data?.cards || [];

    const restaurantData = allCards.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (restaurantData) {
      setListofRestaurants(restaurantData);
      setFilteredrestaurants(restaurantData);
      console.log("Restaurants fetched:", restaurantData.length);
    } else {
      console.error("Could not find restaurant list.");
    }
  }

  const filterTopRatedRestaurants = () => {
    let topRatedrestaurants = listofRestaurants.filter( (res) => (
      res.info.avgRating > 4.5
    ))
    setFilteredrestaurants(topRatedrestaurants);
  }

  const handleSearch = () => {
    let filteredRestaurants = listofRestaurants.filter( (res) => (
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    ));
    setFilteredrestaurants(filteredRestaurants);
  }

   if(onlineStatus === false) return <h1>oops something went wrong..! pls check ur internet connection</h1>

  return listofRestaurants?.length === 0 ? <Shimmer /> : (
    <>
    <div className='flex items-center gap-4 mb-6 justify-center'>
      <div className='search-container flex items-center justify-center gap-2'>
      <input type='search' value={searchText} onChange={(e) => setSearchText(e.target.value)} className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'/>
      <button onClick={handleSearch}>Search</button>
    </div>
    <div className='filter'>
      <button className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition" onClick={filterTopRatedRestaurants}>
        Top Rated Restaurants
      </button>
    </div>
    </div>
    
    <div className='res-container flex flex-wrap gap-6 justify-center no-underline'>
      {filteredRestaurants.map( res => (
        <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
        <ResCard resData = {res}/>
        </Link>
      ))}
    </div>
    </>
  )
}

export default Body;