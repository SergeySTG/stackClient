import { initialState, SearchState } from 'store/search/search.initial-state';
import { createReducer } from 'store/utils/createReducer';
import { SearchActionTypes } from 'store/search/search.actions';
import { AnyAction } from 'redux';

const searchReducer = (): SearchState => {
  return {
    result: null,
    isLoading: true,
    isError: false,
  };
};

const reducers = {
  [SearchActionTypes.SEARCH_BY_TITLE]: searchReducer,
  [SearchActionTypes.SEARCH_BY_TAG]: searchReducer,
  [SearchActionTypes.RESULT]: (
    state: SearchState,
    action: AnyAction
  ): SearchState => ({
    result: action.response,
    isLoading: false,
    isError: false,
  }),
  [SearchActionTypes.ERROR]: (state: SearchState): SearchState => ({
    result: state.result,
    isLoading: false,
    isError: true,
  }),
  [SearchActionTypes.GET_MORE]: (state: SearchState): SearchState => ({
    ...state,
    isLoading: true,
  }),
  [SearchActionTypes.SET_MORE]: (
    state: SearchState,
    action: AnyAction
  ): SearchState => ({
    result: {
      ...action.response,
      items: [...(state.result?.items || []), ...action.response.items],
    },
    isLoading: false,
    isError: false,
  }),
};

export default createReducer(initialState, reducers);
