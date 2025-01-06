import { getAcmeData } from './acme';
import { getPatagonia } from './patagonia';
import { getPaperflies } from './paperflies';
import { AcmeAdapter } from '../adapter/AcmeAdapter';
import { PatagoniaAdapter } from '../adapter/PatagoniaAdapter';
import { HotelDataMerge } from '../adapter/HotelDataMergeAdapter';
import { PaperfliesAdapter } from '../adapter/PaperfliesAdapter';

export const fetchDataFromSuppliers = async () => {
	const [dataFromAcme, dataFromPatagonia, dataPaperflies] = await Promise.all([
		getAcmeData(),
		getPatagonia(),
		getPaperflies()
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
			mergedAdapter.addAdapter(obj1);
		}
		const obj2 = paperflies.find((p) => p.id === e.id);
		if (obj2) {
			mergedAdapter.addAdapter(obj2);
		}
		result.push(mergedAdapter);
	});
	return result.map((e) => e.buildHotel());
};
