import React from 'react'
import { RES_IMG } from '../Utility/Content';

const RestaurantsCart = ({data}) => {

  const { name,
    areaName,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwo,sla } = data;

  return (
		<div className="card">
			<img src={RES_IMG + cloudinaryImageId} alt="" />

			<div className="nameRate">
				<h3>{name}</h3>
				<h4>{avgRating}⭐</h4>
			</div>
			<div className="duration">
				<p>Duration:</p>
				<p>{sla.slaString}</p>
			</div>
			<p>{cuisines.join(", ")}</p>
			<div className="addprize">
				<h4>{areaName}</h4>
				<h4>{costForTwo}</h4>
			</div>
		</div>
	);
}

export default RestaurantsCart
