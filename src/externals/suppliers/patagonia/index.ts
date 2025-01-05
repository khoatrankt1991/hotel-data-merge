import axios from 'axios';
import { PatagoniaHotelDetail } from './types';

export const getPatagonia = async (): Promise<PatagoniaHotelDetail[]> => {
	const result = await axios.get('https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/patagonia');
	return result.data;
};
