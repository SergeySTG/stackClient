import SearchActions, { SearchActionTypes } from 'store/search/search.actions';
import { put, call, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { searchQuestions } from 'api/search/search';
import { Response } from 'models/Response';
import { Question } from 'models/Question';
import { RootState } from 'store/store.types';

function* searchTitle(action: AnyAction): Generator {
  const { title } = action;

  try {
    const response = yield call(searchQuestions, {
      intitle: title,
    });
    yield put(SearchActions.putSearchResult(response as Response<Question>));
  } catch (e) {
    yield put(SearchActions.putSearchError());
  }
  yield put;
}

function* searchTag(action: AnyAction): Generator {
  const { tag } = action;

  try {
    const response = yield call(searchQuestions, {
      tagged: tag,
    });
    yield put(SearchActions.putSearchResult(response as Response<Question>));
  } catch (e) {
    yield put(SearchActions.putSearchError());
  }
  yield put;
}

const getState = (state: RootState): Response<Question> | null => {
  return state.search?.result || null;
};

function* getMore(): Generator {
  const state = (yield select(getState)) as Response<Question>;

  if (state && state.getMore) {
    try {
      const response = yield call(state.getMore);

      yield put(SearchActions.putMoreResult(response as Response<Question>));
    } catch (e) {
      yield put(SearchActions.putSearchError());
    }
  }
}

export default function* watchData(): Generator {
  yield takeLatest(SearchActionTypes.SEARCH_BY_TITLE, searchTitle);
  yield takeLatest(SearchActionTypes.SEARCH_BY_TAG, searchTag);
  yield takeLatest(SearchActionTypes.GET_MORE, getMore);
}
