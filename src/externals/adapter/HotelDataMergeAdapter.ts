import { HotelAmenities, HotelImages, HotelLocation } from '../../models/Hotel';
import { mergeArray } from '../../utils';
import { HotelAdapter, HotelObjAdapter } from './Adapter';

export class HotelDataMerge implements HotelAdapter {
	private _items: HotelObjAdapter[];
	constructor(items: HotelObjAdapter[] = []) {
		this._items = items;
	}
	addAdapter(adapter: HotelObjAdapter) {
		this._items.push(adapter);
	}
	validate() {
		const ids = this._items.map((e) => e.id);
		const foundDiffentId = ids.find((id) => id !== ids[0]);
		if (foundDiffentId) throw new Error('Validate merge object failed');
		return true;
	}
	getId() {
		this.validate();
		return this._items[0].id;
	}
	getDestination(): number {
		return this._items[0].destinationId;
	}
	getName() {
		return this._items[0].name;
	}
	getLocation(): Partial<HotelLocation> {
		return {
			lat: this._items.find((e) => e.location?.lat)?.location?.lat,
			lng: this._items.find((e) => e.location?.lat)?.location?.lng,
			address: this._items.find((e) => e.location?.address)?.location?.address,
			city: this._items.find((e) => e.location?.city)?.location?.city,
			country: this._items.find((e) => e.location?.country)?.location?.country
		};
	}
	getDescription() {
		console.log('getDescription of item: ', this._items[0].id);
		this._items.map((e) => console.log(e.description));
		const result = this._items
			.filter((i) => i.description)
			.map((e) => e.description)
			.reduce((a, b) => (a.length > b.length ? a : b));
		console.log('getDescription of item: decision', result);
		return result;
	}
	getAmenities(): Partial<HotelAmenities> {
		// return this._items[1].amenities || {}
		const generals: string[] = [];
		const rooms: string[] = [];
		this._items.forEach((e) => {
			if (e.amenities?.general) generals.push(...e.amenities.general);
			if (e.amenities?.room) rooms.push(...e.amenities.room);
		});
		return {
			general: [...new Set([...generals])],
			room: [...new Set([...rooms])]
		};
	}
	getImages(): Partial<HotelImages> {
		return this._items[0].images || {};
	}
	getBookingConditions(): string[] {
		const bookingConditions: string[] = [];
		this._items.forEach((e) => {
			if (e.bookingConditions) bookingConditions.push(...e.bookingConditions);
		});
		return [...new Set([...bookingConditions])];
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
