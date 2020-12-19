import { RootState } from 'store/store.types';
import { QuestionModalState } from 'store/questions-modal/questions-modal.initial-state';
import { useSelector } from 'react-redux';

export const questionModalSelector = (state: RootState): QuestionModalState =>
  state.questionModal;

export const useQuestionModalState = (): QuestionModalState => {
  return useSelector(questionModalSelector);
};
