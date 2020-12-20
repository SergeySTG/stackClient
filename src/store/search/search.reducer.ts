import { initialState, SearchState } from 'store/search/search.initial-state';
import { createReducer } from 'store/utils/createReducer';
import { SearchActionTypes } from 'store/search/search.actions';
import { AnyAction } from 'redux';

const reducers = {
  [SearchActionTypes.SEARCH]: (
    state: SearchState,
    action: AnyAction
  ): SearchState => {
    const { title, sort, order } = action;

    if (
      title &&
      title === state.title &&
      sort === state.sort &&
      order === state.order
    ) {
      return state;
    }

    return {
      title: title || '',
      sort,
      order,
      result: null,
      isLoading: true,
      isError: false,
    };
  },
  [SearchActionTypes.RESULT]: (
    state: SearchState,
    action: AnyAction
  ): SearchState => ({
    ...state,
    result: action.response,
    isLoading: false,
    isError: false,
  }),
  [SearchActionTypes.ERROR]: (state: SearchState): SearchState => ({
    ...state,
    result: state.result,
    isLoading: false,
    isError: true,
  }),
  [SearchActionTypes.GET_MORE]: (state: SearchState): SearchState => ({
    ...state,
    isLoading: !state.isError && (!state.result || state.result.hasMore),
  }),
  [SearchActionTypes.SET_MORE]: (
    state: SearchState,
    action: AnyAction
  ): SearchState => ({
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
