import React, { useEffect, useState } from "react";
import RestaurantsCart from "./RestaurantsCart";
import Shimmer from "./Shimmer";
import { RES_API } from "../Utility/Content";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [search, setSearch] = useState([]);
  const [newSearchData, setNewSearchData] = useState([]);

  const searchBar = () => {
    const searchdata = listOfRestaurant.filter((e) =>
      e.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setNewSearchData(searchdata);
  };
  const filteredList = () => {
    const newdata = listOfRestaurant.filter((res) => res.info.avgRating > 4);
    setListOfRestaurant(newdata);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);

    const json = await data.json();

    const resData = await json?.data?.cards[1]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;

    setListOfRestaurant(resData);
    setNewSearchData(resData);
    console.log(resData);
  };

  return listOfRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filterBtn">
        <button onClick={filteredList}>Top Rated Restaurant</button>
        <input
            type="text"
            placeholder="Enter Restaurant Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchBar}>Search</button>
      </div>
      <div className="main-container">
        {newSearchData.map((res) => {
          return <RestaurantsCart key={res.info.id} data={res.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
