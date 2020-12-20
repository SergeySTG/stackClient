import { AnyAction } from 'redux';
import { Question } from 'models/Question';
import { Response } from 'models/Response';
import { QuestionModalTypes } from 'store/questions-modal/questions-modal.initial-state';
import { OrderAPI, SortAPI } from 'interfaces/api';

export enum QuestionModalActionTypes {
  OPEN = 'QUESTION_MODAL_OPEN',
  SORT = 'QUESTION_MODAL_SORT',
  CLOSE = 'QUESTION_MODAL_CLOSE',
  RESULT = 'QUESTION_MODAL_RESULT',
  GET_MORE = 'QUESTION_MODAL_GET_MORE',
  SET_MORE = 'QUESTION_MODAL_SET_MORE',
  ERROR = 'QUESTION_MODAL_ERROR',
}

export const open = (
  searchType: QuestionModalTypes,
  search: string | number
): AnyAction => ({
  type: QuestionModalActionTypes.OPEN,
  searchType,
  search,
});

export const setSort = (sort: SortAPI, order: OrderAPI): AnyAction => ({
  type: QuestionModalActionTypes.SORT,
  sort,
  order,
});

export const close = (): AnyAction => ({
  type: QuestionModalActionTypes.CLOSE,
});

export const getMore = (): AnyAction => ({
  type: QuestionModalActionTypes.GET_MORE,
});

export const putResult = (response: Response<Question>): AnyAction => ({
  type: QuestionModalActionTypes.RESULT,
  response,
});

export const putMoreResult = (response: Response<Question>): AnyAction => ({
  type: QuestionModalActionTypes.SET_MORE,
  response,
});

export const putError = (): AnyAction => ({
  type: QuestionModalActionTypes.ERROR,
});

export const QuestionModalActions = {
  open,
  setSort,
  close,
  putResult,
  putMoreResult,
  putError,
  getMore,
};
