import { IRoute } from 'routes/route.types';

export interface IRoutersProps {
  routers: IRoute[];
  pageNotFound?: string;
}

export interface IRouteProps {
  route: IRoute;
}
