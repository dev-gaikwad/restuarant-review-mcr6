import React from 'react';
import SelectCuisineTabs from '../components/SelectCuisineTabs/SelectCuisineTabs';
import FilteredDisplaySection from '../components/FilteredDisplaySection/FilteredDisplaySection';

const Home = () => {
  return (
    <main>
      <SelectCuisineTabs />
      <FilteredDisplaySection />
    </main>
  );
};

export default Home;
