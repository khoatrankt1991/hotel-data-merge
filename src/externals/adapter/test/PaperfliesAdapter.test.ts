import { PaperfliesAdapter } from '../PaperfliesAdapter';
import { paperHotelDetail, expectedAdaptPaperHotelDetail } from './mockData';

describe('Test PatagoniaAdapter', () => {
	test('should be adapt with HotelAdapter', () => {
		const paperObj = new PaperfliesAdapter(paperHotelDetail);
		const result = paperObj.buildHotel();
		expect(result).toEqual(expectedAdaptPaperHotelDetail);
	});
});
