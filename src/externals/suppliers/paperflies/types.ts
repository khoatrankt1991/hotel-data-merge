interface PaperHotelDetailLocation {
	address: string;
	country: string;
}
interface PaperHotelDetailAmenities {
	general: string[];
	room: string[];
}

interface PaperHotelDetailImageLink {
	link: string;
	caption: string;
}
interface PaperHotelDetailImages {
	rooms: PaperHotelDetailImageLink[];
	site: PaperHotelDetailImageLink[];
}
export interface PaperHotelDetail {
	hotel_id: string;
	destination_id: number;
	hotel_name: string;
	location: PaperHotelDetailLocation;
	details: string;
	amenities: PaperHotelDetailAmenities;
	images: PaperHotelDetailImages;
	booking_conditions: string[];
}
