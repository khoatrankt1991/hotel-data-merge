import { Request, Response } from 'express';
import { searchData } from './HotelController';
import { SearchHotelParams } from '../../externals/suppliers/types';
// import { SearchHotelParams } from './';

export default [
	{
		path: '/hotels/search',
		method: 'get',
		handler: {
			v1: [
				async (req: Request, res: Response): Promise<void> => {
					const searchParams: SearchHotelParams = req.query || {};
					const result = await searchData(searchParams);
					res.status(200).send(result);
				}
			]
		}
	}
];
