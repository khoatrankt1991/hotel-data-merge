import axios from 'axios';
import { AcmeHotelDetail } from './types';
import { HotelAdapter, HotelObjAdapter } from '../../adapter/Adapter';
import { HotelAmenities, HotelImages, HotelLocation } from '../../../models/Hotel';
export const getAcmeData = async (): Promise<AcmeHotelDetail[]> => {
	const result = await axios.get('https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme');
	// console.log('getPatagonia', result.data[0])
	return result.data;
};

// export class AcmeSupplier implements HotelAdapter {
//     private _data: AcmeHotelDetail
//     constructor(data: AcmeHotelDetail) {
//         this._data = data
//     }
//     getId(): string {
//         return this._data.Id
//     }
//     getDestination(): number {
//         return this._data.DestinationId
//     }
//     getName(): string {
//         return this._data.Name
//     }
//     getLocation(): Partial<HotelLocation> {
//         if (this._data.Latitude && this._data.Longitude) {
//             const hotelLocation: HotelLocation = {
//                 lat: this._data.Latitude,
//                 lng: this._data.Longitude,
//                 address: this._data.Address,
//                 city: this._data.City,
//                 country: this._data.Country
//             }
//             return hotelLocation
//         }
//         return {}
//     }
//     getDescription(): string {
//         return this._data.Description
//     }
//     getAmenities(): Partial<HotelAmenities> {
//         const result: Partial<HotelAmenities> = {}
//         if (this._data.Facilities.length > 0 ) {
//             result.general = this._data.Facilities
//             return result
//         }
//         return {}
//     }
//     getImages(): Partial<HotelImages> {
//         return {}
//     }
//     getBookingConditions(): string[] {
//         return []
//     }
//     buildHotel(): HotelObjAdapter {
//         const buildObj: HotelObjAdapter = {
//             id: this.getId(),
//             destinationId: this.getDestination(),
//             name: this.getName(),
//             description: '',
//             amenities: {},
//             // location: this.getLocation(),
//         }
//         if (this.getLocation() != null) {
//             const lol = this.getLocation();
//             // buildObj.location = lol
//         }
//         return buildObj
//     }
// }
