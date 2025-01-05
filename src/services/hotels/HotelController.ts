import { fetchDataFromSuppliers } from '../../externals/suppliers';
import { Hotel, HotelLocation } from '../../models/Hotel';
// import { AcmeHotelDetail, getAcmeData, getPatagonia } from "../../utils/hotel-providers"

// export const searchData = async () => {
//     const result = await getAcmeData();
//     const resultL = await getPatagonia();
//     console.log('resultL', resultL)
//     console.log('newIndex', resultL[0])
//     return result
// }

// class HotelMerged {
//     private _acmeData: AcmeHotelDetail
//     constructor(acmeData: AcmeHotelDetail) {
//         this._acmeData = acmeData
//     }
//     public buildLocation(): Partial<HotelLocation> {
//         const location: HotelLocation = {
//             lat: this._acmeData.Latitude,
//             lng: this._acmeData.Longitude,
//             city: this._acmeData.City,
//             address: this._acmeData.Address,
//             country: this._acmeData.Country
//         }
//         return location
//     }
// }
//example:
// description:
// Located at the western tip of Resorts World Sentosa,guests at the Beach Villas are guaranteed privacy while they enjoy spectacular views of glittering waters.
// Guests will find themselves in paradise with this series of exquisite tropical sanctuaries, making it the perfect setting for an idyllic retreat.
// Within each villa, guests will discover living areas and bedrooms that open out to mini gardens, private timber sundecks and verandahs elegantly framing either lush greenery or an expanse of sea.
// Guests are assured of a superior slumber with goose feather pillows and luxe mattresses paired with 400 thread count Egyptian cotton bed linen, tastefully paired with a full complement of luxurious in-room amenities and bathrooms boasting rain showers and free-standing tubs coupled with an exclusive array of ESPA amenities and toiletries. Guests also get to enjoy complimentary day access to the facilities at Asia’s flagship spa – the world-renowned ESPA.

// Surrounded by tropical gardens, these upscale villas in elegant Colonial-style buildings are part of the Resorts World Sentosa complex and a 2-minute walk from the Waterfront train station.
// Featuring sundecks and pool, garden or sea views, the plush 1- to 3-bedroom villas offer free Wi-Fi and flat-screens, as well as free-standing baths, minibars, and tea and coffeemaking facilities. Upgraded villas add private pools, fridges and microwaves; some have wine cellars. A 4-bedroom unit offers a kitchen and a living room. There's 24-hour room and butler service. Amenities include posh restaurant, plus an outdoor pool, a hot tub, and free parking.
// This 5 star hotel is located on the coastline of Singapore.

// result
// Surrounded by tropical gardens, these upscale villas in elegant Colonial-style buildings are part of the Resorts World Sentosa complex and a 2-minute walk from the Waterfront train station.
// Featuring sundecks and pool, garden or sea views, the plush 1- to 3-bedroom villas offer free Wi-Fi and flat-screens, as well as free-standing baths, minibars, and tea and coffeemaking facilities.
// Upgraded villas add private pools, fridges and microwaves; some have wine cellars. A 4-bedroom unit offers a kitchen and a living room.
// There's 24-hour room and butler service. Amenities include posh restaurant, plus an outdoor pool, a hot tub, and free parking.
// export const mergeFromProviders = (acmeData: AcmeHotelDetail): Hotel => {
//     const merged: Hotel = null
//     const location: HotelLocation = {
//         lat: acmeData.Latitude,
//         lng: acmeData.Longitude
//     }
//     return merged
// }

export const searchData = async () => {
	const result = await fetchDataFromSuppliers();
	console.log('result', result);
	return result;
};
