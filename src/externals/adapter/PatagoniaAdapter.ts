import { HotelAdapter, HotelObjAdapter } from './Adapter';
import { PatagoniaHotelDetail } from '../suppliers/patagonia/types';
import { HotelAmenities, HotelImages, HotelLocation } from '../../models/Hotel';
import { formatLowTrimArr } from '../../utils';

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
		return '';
	}
	getAmenities(): Partial<HotelAmenities> {
		return {
			room: formatLowTrimArr(this._data.amenities)
		};
	}
	getImages(): Partial<HotelImages> {
		return {
			amenities: this._data.images.amenities.map((e) => ({
				link: e.url,
				description: e.description
			})),
			rooms: this._data.images.rooms.map((e) => ({
				link: e.url,
				description: e.description
			}))
		};
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
