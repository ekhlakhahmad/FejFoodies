import React from 'react'

const RestaurantsCart = ({data}) => {

  const { name,
    areaName,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwo,sla } = data;

  return (
      <div className='card'>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+cloudinaryImageId} alt="" />
      
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <p>{sla.slaString}</p>
        <ul>
        {
          cuisines.map((ele) => {
            return <li>{ele}</li>
          })
        }
        </ul>
        <h5>{areaName}</h5>
        <h4>{costForTwo}</h4>
    </div>
  )
}

export default RestaurantsCart
