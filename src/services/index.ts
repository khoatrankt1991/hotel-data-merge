import { Route } from '../middlewares';
import healthCheckRoutes from './healthcheck/routes';
import hotelRoutes from './hotels/routes';

export default [...healthCheckRoutes, ...hotelRoutes] as Route[];
