import ResCard from './ResCard';
import { useEffect, useState } from 'react';
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
  }, []);

  useEffect( () => {
    if(filteredRestaurants.length === 0){
      setFilteredrestaurants(listofRestaurants);
    }
  },[filteredRestaurants]);

  const fetchData = async () => {
  try {
    const baseUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&offset=0&page_type=DESKTOP_WEB_LISTING";


    let allRestaurants = [];

    // Fetch first 3 pages (0, 20, 40) → ~60 restaurants
    for (let offset of [0, 20, 40]) {
      const res = await fetch(`${baseUrl}&offset=${offset}`);
      const json = await res.json();

      const restaurants = json?.data?.cards
        ?.flatMap((card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        ) || [];

      allRestaurants = allRestaurants.concat(restaurants);
    }

    // Deduplicate by restaurant ID
    const uniqueRestaurants = allRestaurants.filter(
      (res, index, self) =>
        index === self.findIndex((r) => r.info.id === res.info.id)
    );

    setListofRestaurants(uniqueRestaurants);
    setFilteredrestaurants(uniqueRestaurants);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};



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