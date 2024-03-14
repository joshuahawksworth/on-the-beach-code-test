export interface HotelListing {
    id: number;
    hotelName: string;
    price: number;
    location: string;
    starRating: number;
    guests: Guests;
    startDate: string;
    holidayLength: string;
    departingAirport: string;
    overview: string;
}

export interface Guests {
    adults?: number;
    children?: number;
    infants?: number;
}