import { AnyAction } from 'redux';
import { Question } from 'models/Question';
import { Response } from 'models/Response';
import { OrderAPI, SortAPI } from 'interfaces/api';

export enum SearchActionTypes {
  SEARCH = 'SEARCH_TITLE',
  GET_MORE = 'SEARCH_GET_MORE',
  SET_MORE = 'SEARCH_SET_MORE',
  ERROR = 'SEARCH_ERROR',
  RESULT = 'SEARCH_RESULT',
}

export const search = (
  title: string,
  sort?: SortAPI,
  order?: OrderAPI
): AnyAction => ({
  type: SearchActionTypes.SEARCH,
  title,
  sort,
  order,
});

export const getMore = (): AnyAction => ({
  type: SearchActionTypes.GET_MORE,
});

export const putSearchResult = (response: Response<Question>): AnyAction => ({
  type: SearchActionTypes.RESULT,
  response,
});

export const putMoreResult = (response: Response<Question>): AnyAction => ({
  type: SearchActionTypes.SET_MORE,
  response,
});

export const putSearchError = (): AnyAction => ({
  type: SearchActionTypes.ERROR,
});

export default {
  searchByTitle: search,
  putSearchResult,
  putMoreResult,
  putSearchError,
  getMore,
};
