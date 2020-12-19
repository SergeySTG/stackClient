import { put, call, takeLatest, select } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import { Response } from 'models/Response';
import { Question } from 'models/Question';
import { questionSelector } from 'store/question/question.selectors';
import { QuestionState } from 'store/question/question.initial-state';
import QuestionActions, {
  QuestionActionTypes,
} from 'store/question/question.actions';
import { getAnswersByQuestion } from 'api/question';

function* search(action: AnyAction): Generator {
  const state = (yield select(questionSelector)) as QuestionState;
  const { id } = action;

  if (!state.result) {
    try {
      const response = yield call(getAnswersByQuestion, id);
      yield put(QuestionActions.putResult(response as Response<Question>));
    } catch (e) {
      yield put(QuestionActions.putError());
    }
  }
}

function* getMore(): Generator {
  const state = (yield select(questionSelector)) as QuestionState;
  const response = state?.result;

  if (response && response.getMore) {
    try {
      const newResponse = yield call(response.getMore);

      yield put(
        QuestionActions.putMoreResult(newResponse as Response<Question>)
      );
    } catch (e) {
      yield put(QuestionActions.putError());
    }
  }
}

export default function* watchData(): Generator {
  yield takeLatest(QuestionActionTypes.SEARCH, search);
  yield takeLatest(QuestionActionTypes.GET_MORE, getMore);
}
