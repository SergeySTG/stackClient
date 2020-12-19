import { AnyAction } from 'redux';
import { Question } from 'models/Question';
import { Response } from 'models/Response';

export enum SearchActionTypes {
  SEARCH_BY_TITLE = 'SEARCH_TITLE',
  CHANGE_SORTING = 'SEARCH_CHANGE_SORTING',
  GET_MORE = 'SEARCH_GET_MORE',
  SET_MORE = 'SEARCH_SET_MORE',
  ERROR = 'SEARCH_ERROR',
  RESULT = 'SEARCH_RESULT',
}

export const searchByTitle = (title: string): AnyAction => ({
  type: SearchActionTypes.SEARCH_BY_TITLE,
  title,
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
  searchByTitle,
  putSearchResult,
  putMoreResult,
  putSearchError,
  getMore,
};
