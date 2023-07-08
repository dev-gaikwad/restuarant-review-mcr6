import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';
import { RestaurantContextProvider } from './context/restaurantContext';

const App = () => {
  return (
    <Router>
      <RestaurantContextProvider>
        <h1 className='brandName'>Food Review App</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<RestaurantDetails />} />
        </Routes>
      </RestaurantContextProvider>
    </Router>
  );
};

export default App;
