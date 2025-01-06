import axios from 'axios';
import { AcmeHotelDetail } from './types';
export const getAcmeData = async (): Promise<AcmeHotelDetail[]> => {
	const result = await axios.get('https://5f2be0b4ffc88500167b85a0.mockapi.io/suppliers/acme');
	return result.data;
};
