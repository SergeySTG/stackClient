import { AnyAction } from 'redux';
import { Question } from 'models/Question';
import { Response } from 'models/Response';
import { OrderAPI, SortAPI } from 'interfaces/api';

export enum QuestionActionTypes {
  SEARCH = 'QUESTION_SEARCH',
  CHANGE_SORTING = 'QUESTION_CHANGE_SORTING',
  GET_MORE = 'QUESTION_GET_MORE',
  SET_MORE = 'QUESTION_SET_MORE',
  ERROR = 'QUESTION_ERROR',
  RESULT = 'QUESTION_RESULT',
}

export const searchById = (
  id: string,
  sort?: SortAPI,
  order?: OrderAPI
): AnyAction => ({
  type: QuestionActionTypes.SEARCH,
  id,
  sort,
  order,
});

export const getMore = (): AnyAction => ({
  type: QuestionActionTypes.GET_MORE,
});

export const putResult = (response: Response<Question>): AnyAction => ({
  type: QuestionActionTypes.RESULT,
  response,
});

export const putMoreResult = (response: Response<Question>): AnyAction => ({
  type: QuestionActionTypes.SET_MORE,
  response,
});

export const putError = (): AnyAction => ({
  type: QuestionActionTypes.ERROR,
});

export default {
  searchById,
  putResult,
  putMoreResult,
  putError,
  getMore,
};
