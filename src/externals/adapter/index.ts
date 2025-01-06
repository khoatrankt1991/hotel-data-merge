import { searchAcmeData } from '../suppliers/acme';
import { searchPaperflies } from '../suppliers/paperflies';
import { searchPatagonia } from '../suppliers/patagonia';
import { SearchHotelParams } from '../suppliers/types';
import { AcmeAdapter } from './AcmeAdapter';
import { HotelDataMerge } from './HotelDataMergeAdapter';
import { PaperfliesAdapter } from './PaperfliesAdapter';
import { PatagoniaAdapter } from './PatagoniaAdapter';

export const fetchDataFromSuppliers = async (params: SearchHotelParams) => {
	const [dataFromAcme, dataFromPatagonia, dataPaperflies] = await Promise.all([
		searchAcmeData(params),
		searchPatagonia(params),
		searchPaperflies(params)
	]);
	const acmeObjs = dataFromAcme.map((e) => {
		const acmeAdapter = new AcmeAdapter(e);
		return acmeAdapter.buildHotel();
	});

	const patagonia = dataFromPatagonia.map((e) => {
		const patagoniaAdapter = new PatagoniaAdapter(e);
		return patagoniaAdapter.buildHotel();
	});
	const paperflies = dataPaperflies.map((e) => {
		const paperfliesAdapter = new PaperfliesAdapter(e);
		return paperfliesAdapter.buildHotel();
	});

	const result: HotelDataMerge[] = [];
	acmeObjs.forEach((e) => {
		const mergedAdapter = new HotelDataMerge([e]);
		const obj1 = patagonia.find((p) => p.id === e.id);
		if (obj1) {
			mergedAdapter.addObjAdapter(obj1);
		}
		const obj2 = paperflies.find((p) => p.id === e.id);
		if (obj2) {
			mergedAdapter.addObjAdapter(obj2);
		}
		result.push(mergedAdapter);
	});
	return result.map((e) => e.buildHotel());
};
