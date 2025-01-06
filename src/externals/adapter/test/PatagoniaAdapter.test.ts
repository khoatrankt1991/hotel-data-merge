import { PatagoniaAdapter } from '../PatagoniaAdapter';
import { patagonHotelDetail, expectedAdaptAcmeHotelDetail, expectedAdaptPatagonHotelDetail } from './mockData';

describe('Test PatagoniaAdapter', () => {
	test('should be adapt with HotelAdapter', () => {
		const patagonObj = new PatagoniaAdapter(patagonHotelDetail);
		const result = patagonObj.buildHotel();
		expect(result).toEqual(expectedAdaptPatagonHotelDetail);
	});
});
