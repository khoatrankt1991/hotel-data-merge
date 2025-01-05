import { Request, Response } from 'express';

export default [
	{
		path: '/healthcheck',
		method: 'get',
		handler: {
			v1: [
				async (req: Request, res: Response): Promise<void> => {
					res.status(200).send('healthy');
				}
			]
		}
	}
];
