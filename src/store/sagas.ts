import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { watchData } from 'store/action/action.saga';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga(): Generator {
  yield all([watchData()]);
}
