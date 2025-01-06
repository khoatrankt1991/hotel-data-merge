import { HotelAdapter, HotelObjAdapter } from './Adapter';
import { AcmeHotelDetail } from '../suppliers/acme/types';
import { HotelAmenities, HotelImages, HotelLocation } from '../../models/Hotel';
import { formatLowTrimArr, trim } from '../../utils';

export class AcmeAdapter implements HotelAdapter {
	private _data: AcmeHotelDetail;
	constructor(data: AcmeHotelDetail) {
		this._data = data;
	}
	getId(): string {
		return this._data.Id;
	}
	getDestination(): number {
		return this._data.DestinationId;
	}
	getName(): string {
		return trim(this._data.Name);
	}
	getLocation(): Partial<HotelLocation> {
		return {
			lat: this._data.Latitude,
			lng: this._data.Longitude,
			address: trim(this._data.Address),
			city: trim(this._data.City),
			country: trim(this._data.Country)
		};
	}
	getDescription(): string {
		return trim(this._data.Description);
	}
	getAmenities(): Partial<HotelAmenities> {
		const result: Partial<HotelAmenities> = {};
		if (this._data.Facilities.length > 0) {
			result.general = formatLowTrimArr(this._data.Facilities);
			return result;
		}
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
