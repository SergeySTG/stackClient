import { RootState } from 'store/store.types';
import { QuestionState } from 'store/question/question.initial-state';
import { useSelector } from 'react-redux';

export const questionSelector = (state: RootState): QuestionState =>
  state.question;

export const useQuestionState = (): QuestionState => {
  return useSelector(questionSelector);
};
