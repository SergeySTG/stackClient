import {
  initialState,
  QuestionModalState,
} from 'store/questions-modal/questions-modal.initial-state';
import { createReducer } from 'store/utils/createReducer';
import { QuestionModalActionTypes } from 'store/questions-modal/questions-modal.actions';
import { AnyAction } from 'redux';

const reducers = {
  [QuestionModalActionTypes.OPEN]: (
    state: QuestionModalState,
    action: AnyAction
  ): QuestionModalState => {
    const { searchType, search } = action;

    if (searchType === state.searchType && search === state.search) {
      return state;
    }

    return {
      search,
      searchType,
      isOpen: true,
      data: {
        isLoading: true,
        isError: false,
        result: null,
      },
    };
  },
  [QuestionModalActionTypes.CLOSE]: (): QuestionModalState => {
    return initialState;
  },
  [QuestionModalActionTypes.RESULT]: (
    state: QuestionModalState,
    action: AnyAction
  ): QuestionModalState => ({
    ...state,
    data: {
      result: action.response,
      isLoading: false,
      isError: false,
    },
  }),
  [QuestionModalActionTypes.ERROR]: (
    state: QuestionModalState
  ): QuestionModalState => ({
    ...state,
    data: {
      result: state.data.result,
      isLoading: false,
      isError: true,
    },
  }),
  [QuestionModalActionTypes.GET_MORE]: (
    state: QuestionModalState
  ): QuestionModalState => ({
    ...state,
    data: {
      ...state.data,
      isLoading:
        !state.data.isError &&
        (!state.data.result || state.data.result.hasMore),
    },
  }),
  [QuestionModalActionTypes.SET_MORE]: (
    state: QuestionModalState,
    action: AnyAction
  ): QuestionModalState => ({
    ...state,
    data: {
      result: {
        ...action.response,
        items: [...(state.data.result?.items || []), ...action.response.items],
      },
      isLoading: false,
      isError: false,
    },
  }),
};

export default createReducer(initialState, reducers);
