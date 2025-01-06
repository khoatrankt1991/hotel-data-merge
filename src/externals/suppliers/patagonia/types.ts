export interface PatagoniaHotelDetailImagesLink {
	url: string;
	description: string;
}
export interface PatagoniaHotelDetailImages {
	rooms: PatagoniaHotelDetailImagesLink[];
	amenities: PatagoniaHotelDetailImagesLink[];
}
export interface PatagoniaHotelDetail {
	id: string;
	destination: number;
	name: string;
	lat: number;
	lng: number;
	address: string;
	info: string;
	amenities: string[];
	images: PatagoniaHotelDetailImages;
}
