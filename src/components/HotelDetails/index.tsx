import React, { useState } from 'react';
import { HotelListing } from '../../types';

interface HotelDetailsProps {
  hotel: HotelListing;
}

const HotelDetails: React.FC<HotelDetailsProps> = ({ hotel }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const formatGuests = (guests: { adults?: number; children?: number; infants?: number }) => {
    let formattedGuests = '';
    if (guests.adults) {
      formattedGuests += guests.adults > 1 ? ' Adults' : ' Adult';
    }
    if (guests.children) {
      formattedGuests += ', ';
      formattedGuests += guests.children > 1 ? ' Children' : ' Child';
    }
    if (guests.infants) {
      formattedGuests += ', ';
      formattedGuests += guests.infants > 1 ? ' Infants' : ' Infant';
    }
    return formattedGuests;
  };

  return (
    <div className="hotel-details">
      <div className="image-container">
        <img src={require(`../../assets/hotel-image-${hotel.id}.png`)} alt="" />
        <div className="accordion-toggle" onClick={toggleExpanded}>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="details-container">
        <h2>{hotel.hotelName}</h2>
        <p>
          Price: <span className="price">{hotel.price}</span>
        </p>
        <p>Location: {hotel.location}</p>
        <p>Star Rating: {hotel.starRating}</p>
        <p>Guests: {formatGuests(hotel.guests)}</p>
        <p>Start Date: {hotel.startDate}</p>
        <p>Holiday Length: {hotel.holidayLength}</p>
        <p>Departing Airport: {hotel.departingAirport}</p>
        {expanded && (
          <div className="overview">
            <h3>Overview</h3>
            <p>{hotel.overview}</p>
          </div>
        )}
        <button className="book-now">
          Book Now <span className="dark-blue">{hotel.price}</span>
        </button>
      </div>
    </div>
  );
};

export default HotelDetails;
