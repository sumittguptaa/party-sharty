import React from "react";
import FeaturedRestaurant from "../FeaturedRestaurant/FeaturedRestaurant";
import './FeaturedRestaurants.css'
function RestaurantList({ restaurants }) {
  return (
    <div>
      {restaurants.map((restaurant) => (
        
        <FeaturedRestaurant
          key={restaurant.id}
          name={restaurant.name}
          image={restaurant.image}
          description={restaurant.description}
          url={restaurant.url}
        />
      ))}
    </div>
  );
}

export default RestaurantList;
