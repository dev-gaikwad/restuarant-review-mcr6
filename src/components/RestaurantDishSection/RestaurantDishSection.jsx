import React from 'react';
import DishesCard from '../DishesCard/DishesCard';

import styles from './RestaurantDishSection.module.css';
import { useNavigate } from 'react-router-dom';

const RestaurantDishSection = ({ data }) => {
  const { id, menu, name } = data;
  const navigate = useNavigate();
  return (
    <>
      {data && (
        <div className={styles.container}>
          <div className={styles.header}>
            <h3>Dishes By {name}</h3>
            <button onClick={() => navigate(`/details/${id}`)}>
              View Details
            </button>
          </div>
          <div className={styles.dishesContainer}>
            {menu?.map((dish, index) => (
              <DishesCard key={index} dish={dish} restaurant={name} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantDishSection;
