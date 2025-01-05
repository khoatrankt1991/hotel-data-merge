export interface HotelLocation {
	lat: number;
	lng: number;
	address: string;
	city: string;
	country: string;
}
export interface HotelAmenities {
	general: string[];
	room: string[];
}

export interface HotelImageLink {
	link: string;
	description: string;
}

export interface HotelImages {
	rooms: HotelImageLink[];
	site: HotelImageLink[];
	amenities: HotelImageLink[];
}
export interface Hotel {
	id: string;
	destinationId: number;
	name: string;
	location: Location;
	description: string;
	amenities: HotelAmenities;
	images: HotelImages;
	bookingConditions: string[];
}
