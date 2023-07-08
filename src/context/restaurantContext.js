import { createContext, useContext, useEffect, useState } from 'react';
import { cuisineData, restaurantsData } from '../data/data';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [cuisines, setCuisines] = useState([...cuisineData]);
  const [allRestaurants, setAllRestaurants] = useState([...restaurantsData]);
  const [selectedCuisine, setSelectedCuisine] = useState();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (selectedCuisine) {
      setFilteredData(() =>
        restaurantsData.filter(
          (restaurant) => restaurant.cuisine_id === selectedCuisine
        )
      );
    }
  }, [selectedCuisine]);

  const addUserReview = (id, review) => {
    const restaurantArray = [...allRestaurants];
    const restaurantIndex = restaurantArray.findIndex(
      (restaurant) => restaurant.id === id
    );
    console.log('changing in ', restaurantIndex);
    if (restaurantIndex !== -1) {
      const updateRestaurant = {
        ...restaurantArray[restaurantIndex],
        ratings: [...restaurantArray[restaurantIndex].ratings, { ...review }],
      };

      setAllRestaurants([
        ...allRestaurants.slice(0, restaurantIndex),
        updateRestaurant,
        ...allRestaurants.slice(restaurantIndex + 1),
      ]);
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        cuisines,
        setCuisines,
        allRestaurants,
        setAllRestaurants,
        selectedCuisine,
        setSelectedCuisine,
        filteredData,
        addUserReview,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useData = () => {
  return useContext(RestaurantContext);
};
