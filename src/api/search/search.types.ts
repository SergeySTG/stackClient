import { IFilter, IResponse } from 'interfaces/api';
import { IQuestion } from 'interfaces/api/question';

export interface ISearchFilter extends Partial<IFilter> {
  intitle: string;
  tagged?: string[];
}

export interface ISearchResponse extends IResponse {
  items: IQuestion[];
}
