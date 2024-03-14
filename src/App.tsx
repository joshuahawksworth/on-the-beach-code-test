import React from 'react';
import HotelListings from './components/HotelListings';
import hotelsData from './data/index.json';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <HotelListings hotels={hotelsData} />
    </div>
  );
};

export default App;
