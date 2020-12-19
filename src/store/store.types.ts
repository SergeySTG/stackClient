import { SearchState } from 'store/search/search.initial-state';
import { QuestionState } from 'store/question/question.initial-state';
import { QuestionModalState } from 'store/questions-modal/questions-modal.initial-state';

export type RootState = {
  search: SearchState;
  question: QuestionState;
  questionModal: QuestionModalState;
};
