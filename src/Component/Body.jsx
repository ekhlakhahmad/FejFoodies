import React, { useEffect, useState } from "react";
import RestaurantsCart from "./RestaurantsCart";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const resData = await json?.data?.cards[1]?.card?.card?.gridElements
      ?.infoWithStyle?.restaurants;

    setListOfRestaurant(resData);
  };

  // if (listOfRestaurant.length == 0) return;

  return listOfRestaurant.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filterBtn">
        <button>Top Rated Restaurant</button>
        <input type="text" />
        <button>search</button>
      </div>
      <div className="main-container">
        {listOfRestaurant.map((res) => {
          return <RestaurantsCart data={res.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;

// const Body = () => {

//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
//     const json = await data.json();
//     // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

//     const resData = await json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

//     console.log(resData)

//   }
//   return (
//     <div>
//       <Filter />
//       <RestaurantsCart/>
//     </div>
//   )
// }

// export default Body
