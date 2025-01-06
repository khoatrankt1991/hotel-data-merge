import { HotelAmenities, HotelImages, HotelLocation } from '../../models/Hotel';
import { mergeArray } from '../../utils';
import { HotelAdapter, HotelObjAdapter } from './Adapter';

export class HotelDataMerge implements HotelAdapter {
	private _items: HotelObjAdapter[];
	constructor(items: HotelObjAdapter[] = []) {
		this._items = items;
	}
	addObjAdapter(adapter: HotelObjAdapter) {
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
		// should use lodash merge but it' not working correctly
		// @ts-ignore
		// return _.merge(...this._items.map(e => e.location))
		return {
			lat: this._items.find((e) => e.location?.lat)?.location?.lat,
			lng: this._items.find((e) => e.location?.lat)?.location?.lng,
			address: this._items.find((e) => e.location?.address)?.location?.address,
			city: this._items.find((e) => e.location?.city)?.location?.city,
			country: this._items.find((e) => e.location?.country)?.location?.country
		};
	}
	getDescription() {
		const result = this._items
			.filter((i) => i.description)
			.map((e) => e.description)
			.reduce((a, b) => (a.length > b.length ? a : b));
		return result;
	}
	getAmenities(): Partial<HotelAmenities> {
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
		return {
			rooms: this._items.find((e) => e.images?.rooms)?.images?.rooms,
			site: this._items.find((e) => e.images?.site)?.images?.site,
			amenities: this._items.find((e) => e.images?.amenities)?.images?.amenities
		};
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
