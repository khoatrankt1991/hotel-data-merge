import { HotelAdapter, HotelObjAdapter } from './Adapter';
import { PaperHotelDetail } from '../suppliers/paperflies/types';
import { HotelAmenities, HotelImages, HotelLocation } from '../../models/Hotel';

export class PaperfliesAdapter implements HotelAdapter {
	private _data: PaperHotelDetail;
	constructor(data: PaperHotelDetail) {
		this._data = data;
	}
	getId(): string {
		return this._data.hotel_id;
	}
	getDestination(): number {
		return this._data.destination_id;
	}
	getName(): string {
		return this._data.hotel_name;
	}
	getLocation(): Partial<HotelLocation> {
		if (!this._data.location) return {};
		return {
			address: this._data.location.address || '',
			country: this._data.location.country || ''
		};
	}
	getDescription(): string {
		return this._data.details || '';
	}
	getAmenities(): Partial<HotelAmenities> {
		if (!this._data.amenities) return {};
		return {
			general: this._data.amenities.general,
			room: this._data.amenities.room
		};
	}
	getImages(): Partial<HotelImages> {
		return {
			rooms: this._data.images.rooms.map((e) => ({
				link: e.link,
				description: e.caption
			})),
			site: this._data.images.site.map((e) => ({
				link: e.link,
				description: e.caption
			}))
		};
	}
	getBookingConditions(): string[] {
		return this._data.booking_conditions;
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
