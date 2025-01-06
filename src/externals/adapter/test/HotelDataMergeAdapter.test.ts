import { AcmeAdapter } from '../AcmeAdapter';
import { PaperfliesAdapter } from '../PaperfliesAdapter';
import { PatagoniaAdapter } from '../PatagoniaAdapter';
import { HotelDataMerge } from '../HotelDataMergeAdapter';
import { acmeHotelDetail, expectHotelDataMerged, paperHotelDetail, patagonHotelDetail } from './mockData';

describe('Test HotelDataMergeAdapter', () => {
	test('should be return correct expect merge result', () => {
		const acmeObj = new AcmeAdapter(acmeHotelDetail);
		const patagonObj = new PatagoniaAdapter(patagonHotelDetail);
		const paperObj = new PaperfliesAdapter(paperHotelDetail);
		const mergedObj = new HotelDataMerge([acmeObj.buildHotel(), patagonObj.buildHotel(), paperObj.buildHotel()]);
		const result = mergedObj.buildHotel();
		expect(result).toEqual(expectHotelDataMerged);
	});
});
