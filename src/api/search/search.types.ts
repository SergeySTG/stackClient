import { IFilterAPI } from 'interfaces/api';

export interface ISearchFilter extends Partial<IFilterAPI> {
  intitle?: string;
  tagged?: string;
}
