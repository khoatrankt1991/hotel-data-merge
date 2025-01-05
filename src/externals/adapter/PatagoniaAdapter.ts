import { HotelAdapter, HotelObjAdapter } from './Adapter';
import { PatagoniaHotelDetail } from '../suppliers/patagonia/types';
import { HotelAmenities, HotelImages, HotelLocation } from '../../models/Hotel';

export class PatagoniaAdapter implements HotelAdapter {
	private _data: PatagoniaHotelDetail;
	constructor(data: PatagoniaHotelDetail) {
		this._data = data;
	}
	getId(): string {
		return this._data.id;
	}
	getDestination(): number {
		return this._data.destination;
	}
	getName(): string {
		return this._data.name;
	}
	getLocation(): Partial<HotelLocation> {
		if (this._data.lat && this._data.lng) {
			const hotelLocation: HotelLocation = {
				lat: this._data.lat,
				lng: this._data.lng,
				address: this._data.address,
				city: '',
				country: ''
			};
			return hotelLocation;
		}
		return {};
	}
	getDescription(): string {
		return this._data.description || '';
	}
	getAmenities(): Partial<HotelAmenities> {
		// const result: Partial<HotelAmenities> = {}
		// if (this._data.Facilities.length > 0 ) {
		//     result.general = this._data.Facilities
		//     return result
		// }
		return {};
	}
	getImages(): Partial<HotelImages> {
		return {};
	}
	getBookingConditions(): string[] {
		return [];
	}
	buildHotel(): HotelObjAdapter {
		return {
			id: this.getId(),
			destinationId: this.getDestination(),
			name: this.getName(),
			description: this.getDescription(),
			amenities: this.getAmenities(),
			location: this.getLocation(),
			images: this.getImages(),
			bookingConditions: this.getBookingConditions()
		};
	}
}
