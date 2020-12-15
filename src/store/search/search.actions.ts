import { AnyAction } from 'redux';
import { Question } from 'models/Question';
import { Response } from 'models/Response';

export enum SearchActionTypes {
  SEARCH_BY_TITLE = 'SEARCH_TITLE',
  SEARCH_BY_TAG = 'SEARCH_TAG',
  GET_MORE = 'GET_MORE',
  SET_MORE = 'SET_MORE',
  ERROR = 'ERROR',
  RESULT = 'RESULT',
}

export const searchByTitle = (title: string): AnyAction => ({
  type: SearchActionTypes.SEARCH_BY_TITLE,
  title,
});

export const searchByTag = (tag: string): AnyAction => ({
  type: SearchActionTypes.SEARCH_BY_TAG,
  tag,
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
  searchByTag,
  putSearchResult,
  putMoreResult,
  putSearchError,
  getMore,
};
