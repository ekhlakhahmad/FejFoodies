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
      <img
        src={
          RES_IMG +
          cloudinaryImageId
        }
        alt=""
      />

      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <p>{sla.slaString}</p>
      <ul>
        {cuisines.map((ele, index) => {
          return <li key={index}>{ele}</li>;
        })}
      </ul>
      <h5>{areaName}</h5>
      <h4>{costForTwo}</h4>
    </div>
  );
}

export default RestaurantsCart
