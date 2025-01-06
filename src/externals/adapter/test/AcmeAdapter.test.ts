import { AcmeAdapter } from '../AcmeAdapter';
import { acmeHotelDetail, expectedAdaptAcmeHotelDetail } from './mockData';

describe('Test AcmeAdapter', () => {
	test('should be adapt with HotelAdapter', () => {
		const acmeObj = new AcmeAdapter(acmeHotelDetail);
		const result = acmeObj.buildHotel();
		expect(result).toEqual(expectedAdaptAcmeHotelDetail);
	});
});
