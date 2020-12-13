import { IFilter, Order, Sort } from 'interfaces/api';

export const DefaultFilter: IFilter = {
  site: 'stackoverflow',
  sort: Sort.activity,
  order: Order.desc,
  page: 1,
  pageSize: 50,
};
