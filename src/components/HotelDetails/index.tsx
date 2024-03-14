import React, { useState } from 'react';
import { HotelListing } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
      formattedGuests += `<span class="font-bold">${guests.adults}</span> Adult${guests.adults > 1 ? 's' : ''}`;
    }
    if (guests.children) {
      formattedGuests += ', ';
      formattedGuests += `<span class="font-bold">${guests.children}</span> Child${guests.children > 1 ? 'ren' : ''}`;
    }
    if (guests.infants) {
      formattedGuests += ', ';
      formattedGuests += `<span class="font-bold">${guests.infants}</span> Infant${guests.infants > 1 ? 's' : ''}`;
    }
    return formattedGuests;
};

  return (
    <div className="hotel-details flex-col mb-6 max-w-screen-md">
      <div className="grid grid-cols-5 ">
        <div className="image-container col-span-3 relative">
          <img className="w-full h-full" src={require(`../../assets/hotel-image-${hotel.id}.png`)} alt="" />
          <div className="accordion-toggle absolute bottom-0 left-0 px-6 py-2 text-sm bg-white text-blue-800 cursor-pointer" onClick={toggleExpanded}>
            <span className='pr-2'><span className="font-bold">{expanded ? 'Read less' : 'Read more'}</span> about this hotel</span>
            <FontAwesomeIcon icon={expanded ? faChevronDown : faChevronRight} className="ml-1" size="lg" />
          </div>
        </div>
        <div className="details-container col-span-2 p-4 bg-white">
            <h2 className="font-bold text-blue-800 mb-1">{hotel.hotelName}</h2>
            <p className="text-gray-400 text-sm">{hotel.location}</p>
            <div className="flex items-center ">
                <div className="flex">
                    {[...Array(hotel.starRating)].map((_, index) => (
                        <FontAwesomeIcon key={index} icon={faStar} className="text-sm pr-0.5 text-yellow-400 py-3" />
                    ))}
                </div>
            </div>
            <span className="text-sm  my-1" dangerouslySetInnerHTML={{ __html: formatGuests(hotel.guests) }} />
            <p className="text-sm my-1">
                <span className="font-bold">{hotel.startDate}</span> for <span className="font-bold">{hotel.holidayLength}</span>
            </p>
            <p className="text-sm my-1">
                departing from <span className="font-bold">{hotel.departingAirport}</span>
            </p>
            <button className="w-full mt-4 flex flex-col items-center justify-self bg-yellow-400 rounded-md text-blue-800 py-2 hover:bg-yellow-500 transition ease-in">
                <span className="font-semibold text-sm">Book Now</span>
                <span className="text-2xl font-bold dark-blue">
                    £{hotel.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
            </button>
        </div>
        {expanded && (
            <div className="p-5 bg-white col-span-5">
            <h3 className="dark-blue mb-4 font-bold text-blue-800">Overview</h3>
            <p className="text-sm">{hotel.overview}</p>
            </div>
        )}
      </div>
     
    </div>
  );
};

export default HotelDetails;
