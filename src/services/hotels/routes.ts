import { Request, Response } from 'express';
import { searchData } from './HotelController';
import { SearchHotelParams } from '../../externals/suppliers/types';
import { Route } from '../../middlewares';
import { HttpCode } from '../../core/constants';

export default [
	{
		path: '/hotels/search',
		method: 'get',
		handler: {
			v1: [
				async (req: Request, res: Response): Promise<void> => {
					try {
						const searchParams: SearchHotelParams = req.query || {};
						const result = await searchData(searchParams);
						res.status(200).send(result);
					} catch (err) {
						const { message } = err as any;
						res.status(HttpCode.BAD_REQUEST).send({
							message: message
						});
					}
				}
			]
		}
	}
] as Route[];
