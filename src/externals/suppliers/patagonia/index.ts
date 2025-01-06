import { envs } from '../../../core/config/env';
import axios from 'axios';
import { PatagoniaHotelDetail } from './types';
import { SearchHotelParams } from '../types';

export const getPatagonia = async (): Promise<PatagoniaHotelDetail[]> => {
	const result = await axios.get(envs.PATAGONIE_SUPPLIER_API_URL);
	return result.data;
};

export const searchPatagonia = async (params: SearchHotelParams): Promise<PatagoniaHotelDetail[]> => {
	let listHotels = await getPatagonia();
	if (params.destination_id) {
		listHotels = listHotels.filter((e) => e.destination === Number(params.destination_id));
	}
	if (params.hotels && params.hotels.length > 0) {
		listHotels = listHotels.filter((e) => params.hotels?.includes(e.id));
	}
	return listHotels;
};
