export enum Order {
  desc = 'desc',
  asc = 'asc',
}

export enum Sort {
  activity = 'activity',
  creation = 'creation',
  votes = 'votes',
  relevance = 'relevance',
}

export interface IFilter {
  sort: Sort;
  order: Order;
  site: 'stackoverflow';
  page?: number;
  pageSize?: number;
}

export interface IResponse {
  has_more: true;
}
