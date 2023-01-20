import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [allRestaurants, setAllRestaurants] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  function getFilteredData(searchText, allRestaurants) {
    const filteredData = allRestaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filteredData;
  }

  useEffect(() => {
    getRestaurantAPI();
  }, []);

  async function getRestaurantAPI() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9307735&lng=77.5838302&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredData(json?.data?.cards[2]?.data?.data?.cards);
  }
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search here..."
          value={searchText}
          onChange={(e) => {
            return setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterData = getFilteredData(searchText, allRestaurants);
            return setFilteredData(filterData);
          }}
        >
          Search
        </button>
      </div>
      <div className="card-container">
        {filteredData.length === 0 ? (
          <h1>No match found</h1>
        ) : (
          filteredData.map((item) => {
            return (
              <Link to={"/restaurant/" + item.data.id} key={item.data.id}>
                <RestaurantCard {...item.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
