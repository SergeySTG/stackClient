import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { watchData } from 'store/action/action.saga';
import search from 'store/search/search.sagas';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga(): Generator {
  yield all([watchData(), search()]);
}
