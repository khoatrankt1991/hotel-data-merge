import { getAcmeData } from './acme';
import { getPatagonia } from './patagonia';
import { getPaperflies } from './paperflies';
import { AcmeHotelDetail } from './acme/types';
import { AcmeSupplier } from '../adapter/AcmeAdapter';
import { PatagoniaAdapter } from '../adapter/PatagoniaAdapter';
import { PatagoniaHotelDetail } from './patagonia/types';
import { HotelObjAdapter } from '../adapter/Adapter';
import { HotelDataMerge } from '../adapter/HotelDataMergeAdapter';
import { PaperHotelDetail } from './paperflies/types';
import { PaperfliesAdapter } from '../adapter/PaperfliesAdapter';

export const fetchDataFromSuppliers = async () => {
	const dataFromAcme: AcmeHotelDetail[] = await getAcmeData();
	const dataFromPatagonia: PatagoniaHotelDetail[] = await getPatagonia();
	const dataPaperflies: PaperHotelDetail[] = await getPaperflies();
	console.log('dataPaper', dataPaperflies);
	const acmeObjs = dataFromAcme.map((e) => {
		const acmeAdapter = new AcmeSupplier(e);
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
