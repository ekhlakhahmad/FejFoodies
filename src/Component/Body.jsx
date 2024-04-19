import React, { useEffect, useState } from "react";
import RestaurantsCart from "./RestaurantsCart";
import Shimmer from "./Shimmer";
import { RES_API } from "../Utility/Content";

const Body = () => {
	const [listOfRestaurant, setListOfRestaurant] = useState([]);
	const [search, setSearch] = useState([]);
	const [newSearchData, setNewSearchData] = useState([]);
	const [morefilter, setMorefilter] = useState("More Filter");

	const searchBar = () => {
		const searchdata = listOfRestaurant.filter((e) =>
			e.info.name.toLowerCase().includes(search.toLowerCase())
		);
		setNewSearchData(searchdata);
	};
	const filteredList = () => {
		const newdata = listOfRestaurant.filter((e) => e.info.avgRating > 4.5);
		setNewSearchData(newdata);
	};
	const nearme = () => {
		const newdata = listOfRestaurant.filter(
			(e) => e.info.sla.lastMileTravel <= 3
		);
		setNewSearchData(newdata);
	};
	const veg = () => {
		const newdata = listOfRestaurant.filter((e) => e.info.veg === true);
		setNewSearchData(newdata);
	};
	const nonveg = () => {
		const newdata = listOfRestaurant.filter((e) => e.info.veg != true);
		setNewSearchData(newdata);
	};
	const more = (e) => {
		setMorefilter(e.target.value);
	};
	const lowprice = () => {
		const newdata = listOfRestaurant.filter((e) => {
			const costForTwo = e.info.costForTwo;
			const numericValue = costForTwo.match(/\d+/);
			const costAsNumber = numericValue ? parseInt(numericValue[0]) : null;
			return costAsNumber < 300;
		});
		setNewSearchData(newdata);
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
				<button className="fiteredBtn sm:text-sm" onClick={filteredList}>
					Ratting 4.5+
				</button>
				<button className="fiteredBtn" onClick={nearme}>
					Near me 3KM
				</button>
				<button className="fiteredBtn" onClick={lowprice}>
					Low Price 299
				</button>
				<div className="inputSec">
					<input
						type="text"
						placeholder="Enter Restaurant Name"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button className="searchBar" onClick={searchBar}>
						Search
					</button>
				</div>
				<button className="fiteredBtn" onClick={veg}>
					Veg
				</button>
				<button className="fiteredBtn" onClick={nonveg}>
					Non-Veg
				</button>
				<div className="border-2 rounded-full border-[#039a63] transition-all 2s">
					<select
						className="py-2 px-2 rounded-full outline-none  hover:cursor-pointer"
						value={morefilter}
						onChange={(e) => setMorefilter(e.target.value)}>
						<option value={"moreFilter"}>More Filter</option>
						<option value={"Biryani"}>Biryani</option>
						<option value={"Paneer"}>Paneer</option>
						<option value={"Burger"}>Burger</option>
						<option value={"Dhosa"}>Dhosa</option>
						<option value={"Chhole"}>Chhole</option>
						<option value={"Rajma"}>Rajma</option>
					</select>
				</div>
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
