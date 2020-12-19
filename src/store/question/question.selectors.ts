import { RootState } from 'store/store.types';
import { QuestionState } from 'store/question/question.initial-state';

export const questionSelector = (state: RootState): QuestionState =>
  state.question;
