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
    <div className="flex flex-col mt-10 lg:flex-row justify-center">
      <SortingOptions activeSort={sortBy} onChange={handleSortChange} />
      <div className="hotel-listings flex-wrap self-center">
        {hotels
            .sort((a, b) => {
                if (sortBy === 'price') return a.price - b.price;
                if (sortBy === 'alphabetically') return a.hotelName.localeCompare(b.hotelName);
                if (sortBy === 'star rating') return b.starRating - a.starRating;
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
