import { RootState } from 'store/store.types';
import { QuestionModalState } from 'store/questions-modal/questions-modal.initial-state';

export const questionModalSelector = (state: RootState): QuestionModalState =>
  state.questionModal;
