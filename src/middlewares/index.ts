import { Router, Request, Response, NextFunction } from 'express';
import { ApiVersion } from '../core/constants';

type GET = 'get';
type PUT = 'put';
type POST = 'post';
type DELETE = 'delete';
type PATCH = 'patch';
type OPTION = 'option';
type Wrapper = (router: Router) => void;
type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;

interface VersionHandler {
	v1: Handler | Handler[];
	v2?: Handler | Handler[];
}

/**
 * Restricted to use only 'get' | 'post' | 'delete' | 'put' | 'patch'
 *
 */
export interface Route {
	path: string;
	method: GET | POST | DELETE | PUT | PATCH | OPTION;
	handler: VersionHandler;
}

export const applyRoutes = (root: string, routes: Route[], router: Router, version: string = 'v1'): void => {
	for (const route of routes) {
		const { method, path, handler } = route;
		let executors = (handler as any)[version];
		if (executors) {
			const routePath = `/${root}/${version}` + path;
			switch (version) {
				case ApiVersion.v1:
					(router as any)[method](routePath, executors);
					break;
				default:
					// for handling another version api (ex: version 2.0) with different structure
					break;
			}
			console.log(`Applied handler ${method} ${routePath}`);
		}
	}
};
