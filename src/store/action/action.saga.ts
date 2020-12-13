import { delay, put, takeEvery } from 'redux-saga/effects';

function* fetchData(): Generator {
  yield put({ type: 'WAIT' });
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export function* watchData(): Generator {
  yield takeEvery('FETCH_DATA', fetchData);
}
