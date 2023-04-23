import React from "react";
import './FeaturedRestaurant.css'
function FeaturedRestaurant({ name, image, description, url }) {
  console.log(image);
  return (
    <div className="featured-restaurant">
      <img src={`/images/${image}`} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Book Now
      </a>
    </div>
  );
}

export default FeaturedRestaurant;
