import SearchActions, { SearchActionTypes } from 'store/search/search.actions';
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { searchQuestions } from 'api/search/search';
import { Response } from 'models/Response';
import { Question } from 'models/Question';
import { searchSelector } from 'store/search/search.selectors';
import { SearchState } from 'store/search/search.initial-state';

function* searchTitle(action: AnyAction): Generator {
  const state = (yield select(searchSelector)) as SearchState;
  const { title } = action;

  if (!state.result) {
    try {
      const response = yield call(searchQuestions, {
        intitle: title,
      });
      yield put(SearchActions.putSearchResult(response as Response<Question>));
    } catch (e) {
      yield put(SearchActions.putSearchError());
    }
  }
}

function* getMore(): Generator {
  const state = (yield select(searchSelector)) as SearchState;
  const response = state?.result;

  if (response && response.getMore) {
    try {
      const newResponse = yield call(response.getMore);

      yield put(SearchActions.putMoreResult(newResponse as Response<Question>));
    } catch (e) {
      yield put(SearchActions.putSearchError());
    }
  }
}

export default function* watchData(): Generator {
  yield takeLatest(SearchActionTypes.SEARCH_BY_TITLE, searchTitle);
  yield takeLatest(SearchActionTypes.GET_MORE, getMore);
}
