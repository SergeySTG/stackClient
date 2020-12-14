export enum OrderAPI {
  desc = 'desc',
  asc = 'asc',
}

export enum SortAPI {
  activity = 'activity',
  creation = 'creation',
  votes = 'votes',
  relevance = 'relevance',
}

export interface IFilterAPI {
  sort?: SortAPI;
  order?: OrderAPI;
  site?: 'stackoverflow';
  page?: number;
  pagesize?: number;
  filter?: string;
}

export interface IResponseAPI<T = unknown> {
  items: T[];
  has_more: true;
  page?: number;
  total?: number;
}
