import {
  initialState,
  QuestionState,
} from 'store/question/question.initial-state';
import { createReducer } from 'store/utils/createReducer';
import { QuestionActionTypes } from 'store/question/question.actions';
import { AnyAction } from 'redux';

const reducers = {
  [QuestionActionTypes.SEARCH]: (
    state: QuestionState,
    action: AnyAction
  ): QuestionState => {
    const { id, sort, order } = action;

    if (id && id === state.id && sort === state.sort && order === state.order) {
      return state;
    }

    return {
      id: id || '',
      sort,
      order,
      result: null,
      isLoading: true,
      isError: false,
    };
  },
  [QuestionActionTypes.RESULT]: (
    state: QuestionState,
    action: AnyAction
  ): QuestionState => ({
    ...state,
    result: action.response,
    isLoading: false,
    isError: false,
  }),
  [QuestionActionTypes.ERROR]: (state: QuestionState): QuestionState => ({
    ...state,
    result: state.result,
    isLoading: false,
    isError: true,
  }),
  [QuestionActionTypes.GET_MORE]: (state: QuestionState): QuestionState => ({
    ...state,
    isLoading: !state.isError && (!state.result || state.result.hasMore),
  }),
  [QuestionActionTypes.SET_MORE]: (
    state: QuestionState,
    action: AnyAction
  ): QuestionState => ({
    ...state,
    result: {
      ...action.response,
      items: [...(state.result?.items || []), ...action.response.items],
    },
    isLoading: false,
    isError: false,
  }),
};

export default createReducer(initialState, reducers);
