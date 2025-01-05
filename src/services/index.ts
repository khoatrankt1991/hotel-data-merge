import { Route } from '../middlewares';
import healthCheckRoutes from './healthcheck/routes';

export default [...healthCheckRoutes] as Route[];
