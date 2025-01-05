import { Hotel, HotelAmenities, HotelImages, HotelLocation } from '../../models/Hotel';

export interface HotelAdapter {
	getId(): string;
	getDestination(): number;
	getName(): string;
	getLocation(): Partial<HotelLocation>;
	getDescription(): string;
	getAmenities(): Partial<HotelAmenities>;
	getImages(): Partial<HotelImages>;
	getBookingConditions(): string[];
	buildHotel(): HotelObjAdapter;
}

export interface HotelObjAdapter {
	id: string;
	destinationId: number;
	name: string;
	location?: Partial<HotelLocation>;
	description: string;
	amenities?: Partial<HotelAmenities>;
	images?: Partial<HotelImages>;
	bookingConditions: string[];
}
