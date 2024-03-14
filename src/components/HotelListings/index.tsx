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
    <div className="hotel-listings">
        <SortingOptions activeSort={sortBy} onChange={handleSortChange} />
        {hotels
            .sort((a, b) => {
                if (sortBy === 'price') return a.price - b.price;
                if (sortBy === 'alphabetically')
                return a.hotelName.localeCompare(b.hotelName);
                if (sortBy === 'star') return b.starRating - a.starRating;
                return 0;
            })
            .map((hotel, index) => (
                <HotelDetails key={index} hotel={hotel} />
            ))
        }
    </div>
    );
};

export default HotelListings;