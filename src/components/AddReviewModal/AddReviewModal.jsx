import React, { useState } from 'react';

import styles from './AddReviewModal.module.css';
import { useData } from '../../context/restaurantContext';

const reviewInitialState = { pp: '', revName: 'Guest', rating: 0, comment: '' };

const AddReviewModal = ({ setDisplayModal, id }) => {
  const [review, setReview] = useState(reviewInitialState);

  const { allRestaurants, addUserReview } = useData();

  const reviewInputHandler = (event) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  const reviewSubmitHandler = (event) => {
    event.preventDefault();
    if (review.rating !== 0) {
      if (review.comment.trim()) {
        addUserReview(id, review);
        setDisplayModal(false);
        setReview(reviewInitialState);
      }
    }
  };
  return (
    <div className={styles.modalContainer}>
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.closebtn}>
            <p onClick={() => setDisplayModal(false)}>close[X]</p>
          </div>
          <div className='title'>
            <h3>Add Your Review</h3>
          </div>
          <form onSubmit={reviewSubmitHandler}>
            <label htmlFor='rating'>Rating : </label>
            <select name='rating' id='rating' onChange={reviewInputHandler}>
              <option value='1' defaultValue>
                1
              </option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option defaultValue='5'>5</option>
            </select>

            <label htmlFor='comment'>Comment : </label>
            <input
              type='text'
              placeholder='Comment'
              name='comment'
              onChange={reviewInputHandler}
            />
            <button type='submit' className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviewModal;
