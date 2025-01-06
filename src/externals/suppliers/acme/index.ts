import { envs } from '../../../core/config/env';
import axios from 'axios';
import { AcmeHotelDetail } from './types';
import { SearchHotelParams } from '../types';

export const getAcmeData = async (): Promise<AcmeHotelDetail[]> => {
	const result = await axios.get(envs.ACME_SUPPLIER_API_URL);
	return result.data;
};

export const searchAcmeData = async (params: SearchHotelParams): Promise<AcmeHotelDetail[]> => {
	let listHotels = await getAcmeData();
	if (params.destination_id) {
		listHotels = listHotels.filter((e) => e.DestinationId === Number(params.destination_id));
	}
	if (params.hotels && params.hotels.length > 0) {
		listHotels = listHotels.filter((e) => params.hotels?.includes(e.Id));
	}
	return listHotels;
};
