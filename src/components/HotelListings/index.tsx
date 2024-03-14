import React, { useState } from 'react';
import { HotelListing } from '../../types';
import SortingOptions from '../SortingOptions';
import HotelDetails from '../HotelDetails';

interface HotelListingsProps {
  hotels: HotelListing[];
}

const HotelListings: React.FC<HotelListingsProps> = ({ hotels }) => {
  const [sortBy, setSortBy] = useState<string>('price');

  const handleSortChange = (sortType: string) => {
    setSortBy(sortType);
  };

  return (
    <div className="flex mt-10 justify-center">
      <SortingOptions activeSort={sortBy} onChange={handleSortChange} />
      <div className="hotel-listings flex-wrap">
        {hotels
            .sort((a, b) => {
            if (sortBy === 'price') return b.price - a.price;
            if (sortBy === 'alphabetically') return a.hotelName.localeCompare(b.hotelName);
            if (sortBy === 'star') return b.starRating - a.starRating;
            return 0;
            })
            .map((hotel, index) => (
            <HotelDetails key={index} hotel={hotel} />
            ))}
        </div>
    </div>
  );
};

export default HotelListings;
