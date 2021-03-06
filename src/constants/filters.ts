import { IFilterAPI, OrderAPI, SortAPI } from 'interfaces/api';

// This filters were calculate in https://api.stackexchange.com/docs/
export enum FiltersAPI {
  default = '!bIm.wPfZrpvQU2', // wrapped: total + page
  answers = '!4*M3xNV-ZHr9-uzBX', // FiltersAPI.default + answer: body, body_markdown
}

export const DefaultOrder: OrderAPI = OrderAPI.desc;
export const DefaultSort: SortAPI = SortAPI.votes;

export const DefaultFilterAPI: IFilterAPI = {
  site: 'stackoverflow',
  sort: DefaultSort,
  order: DefaultOrder,
  page: 1,
  pagesize: 50,
  filter: FiltersAPI.default,
};
