import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import search from 'store/search/search.sagas';
import question from 'store/question/question.sagas';
import questionModal from 'store/questions-modal/questions-modal.sagas';

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga(): Generator {
  yield all([search(), question(), questionModal()]);
}
