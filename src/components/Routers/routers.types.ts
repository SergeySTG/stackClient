import { IRoute } from 'router/route.types';

export interface IRoutersProps {
  routers: IRoute[];
  pageNotFound?: string;
}

export interface IRouteProps {
  route: IRoute;
}
