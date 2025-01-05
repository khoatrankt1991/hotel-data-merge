import axios from 'axios';
import { PaperHotelDetail } from './types';

export const getPaperflies = async (): Promise<PaperHotelDetail[]> => {
	const result = await axios.get('https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/paperflies');
	return result.data;
};
