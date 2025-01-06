import axios from 'axios';
import { PaperHotelDetail } from './types';
import { SearchHotelParams } from '../types';

export const getPaperflies = async (): Promise<PaperHotelDetail[]> => {
	const result = await axios.get('https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies');
	return result.data;
};

export const searchPaperflies = async (params: SearchHotelParams): Promise<PaperHotelDetail[]> => {
	let listHotels = await getPaperflies();
	if (params.destination_id) {
		listHotels = listHotels.filter((e) => e.destination_id === Number(params.destination_id));
	}
	if (params.hotels && params.hotels.length > 0) {
		listHotels = listHotels.filter((e) => params.hotels?.includes(e.hotel_id));
	}
	return listHotels;
};
