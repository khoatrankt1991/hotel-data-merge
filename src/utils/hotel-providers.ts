// import axios from 'axios';

// export interface AcmeHotelDetail {
//     Id: string
//     DestinationId: number
//     Name: string
//     Latitude: number
//     Longitude: number
//     Address: string
//     City: string
//     Country: string
//     PostalCode: string
//     Description: string
//     Facilities: string[]
// }

// export const getAcmeData = async (): Promise<AcmeHotelDetail[]> => {
//     const result = await axios.get('https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme')
//     // console.log('getPatagonia', result.data[0])
//     return result.data
// }

// interface PatagoniaHotelDetailImagesLink {
//     url: string
//     description: string
// }
// interface PatagoniaHotelDetailImages {
//     rooms: PatagoniaHotelDetailImagesLink[]
//     amenities: PatagoniaHotelDetailImagesLink[]
// }
// export interface PatagoniaHotelDetail {
//     id: string
//     destination: number
//     name: string
//     lat: number
//     lng: number
//     address: string
//     info: string
//     amenities: string[]
//     images: PatagoniaHotelDetailImages
// }

// export const getPatagonia = async (): Promise<PatagoniaHotelDetail[]> => {
//     const result = await axios.get('https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia')
//     return result.data
// }
