import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../context/restaurantContext';
import ReviewCard from '../components/ReviewCard/ReviewCard';
import RestaurantDetailsHeader from '../components/RestaurantDetailsHeader/RestaurantDetailsHeader';
import AddReviewModal from '../components/AddReviewModal/AddReviewModal';

const RestaurantDetails = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState();
  const [displayModal, setDisplayModal] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { allRestaurants, addUserReview } = useData();

  useEffect(() => {
    setSelectedRestaurant(() =>
      allRestaurants.find((restaurant) => restaurant.id === +id)
    );
  }, [allRestaurants]);

  return (
    selectedRestaurant && (
      <main>
        <button onClick={() => navigate('/')}>Back Home</button>
        <RestaurantDetailsHeader
          details={selectedRestaurant}
          setDisplayModal={setDisplayModal}
        />

        <div>
          <h3>Reviews</h3>
          {selectedRestaurant.ratings?.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        {displayModal && (
          <AddReviewModal setDisplayModal={setDisplayModal} id={+id} />
        )}
      </main>
    )
  );
};

export default RestaurantDetails;
