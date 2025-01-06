import { envs } from '../../../core/config/env';
import axios from 'axios';
import { PaperHotelDetail } from './types';
import { SearchHotelParams } from '../types';

export const getPaperflies = async (): Promise<PaperHotelDetail[]> => {
	const result = await axios.get(envs.PAPER_SUPPLIER_API_URL);
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
