import { Request, Response } from 'express';
import { searchData } from './HotelController';

export default [
	{
		path: '/hotels/search',
		method: 'get',
		handler: {
			v1: [
				async (req: Request, res: Response): Promise<void> => {
					const result = await searchData();
					res.status(200).send(result);
				}
			]
		}
	}
];
