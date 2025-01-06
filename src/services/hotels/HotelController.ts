import { fetchDataFromSuppliers } from '../../externals/suppliers';
import { SearchHotelParams } from '../../externals/suppliers/types';
// import { SearchHotelParams } from './types';

export const searchData = async (params: SearchHotelParams) => {
	const result = await fetchDataFromSuppliers(params);
	console.log('result', result);
	return result;
};
