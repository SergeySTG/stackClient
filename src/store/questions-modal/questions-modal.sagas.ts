import { put, call, takeLatest, select } from 'redux-saga/effects';
import {
  QuestionModalActions,
  QuestionModalActionTypes,
} from 'store/questions-modal/questions-modal.actions';
import { AnyAction } from 'redux';
import { Response } from 'models/Response';
import { Question } from 'models/Question';
import {
  QuestionModalState,
  QuestionModalTypes,
} from 'store/questions-modal/questions-modal.initial-state';
import { questionModalSelector } from 'store/questions-modal/questions-modal.selectors';
import { getQuestionByUser } from 'api/user';
import { searchQuestions } from 'api/search/search';

function* searchByAuthor(action: AnyAction): Generator {
  const { search, sort, order } = action;

  return yield call(getQuestionByUser, search, {
    sort,
    order,
  });
}

function* searchByTag(action: AnyAction): Generator {
  const { search, sort, order } = action;

  return yield call(searchQuestions, {
    tagged: search,
    sort,
    order,
  });
}

const SearchSagas: {
  [key in QuestionModalTypes]: (action: AnyAction) => Generator;
} = {
  [QuestionModalTypes.byAuthor]: searchByAuthor,
  [QuestionModalTypes.byTag]: searchByTag,
};

function* open(action: AnyAction): Generator {
  const {
    searchType,
    search,
    data: { result },
  } = (yield select(questionModalSelector)) as QuestionModalState;

  if (!result && searchType && search) {
    try {
      const saga = SearchSagas[searchType as QuestionModalTypes];
      const response = yield call(saga, action);
      yield put(QuestionModalActions.putResult(response as Response<Question>));
    } catch (e) {
      yield put(QuestionModalActions.putError());
    }
  }
}

function* setSort(action: AnyAction): Generator {
  const { search } = (yield select(
    questionModalSelector
  )) as QuestionModalState;

  yield call(open, {
    ...action,
    search,
  });
}

function* getMore(): Generator {
  const state = (yield select(questionModalSelector)) as QuestionModalState;
  const response = state?.data.result;

  if (response && response.getMore) {
    try {
      const newResponse = yield call(response.getMore);

      yield put(
        QuestionModalActions.putMoreResult(newResponse as Response<Question>)
      );
    } catch (e) {
      yield put(QuestionModalActions.putError());
    }
  }
}

export default function* watchData(): Generator {
  yield takeLatest(QuestionModalActionTypes.OPEN, open);
  yield takeLatest(QuestionModalActionTypes.SORT, setSort);
  yield takeLatest(QuestionModalActionTypes.GET_MORE, getMore);
}
