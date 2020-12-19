import { initialState as search } from 'store/search/search.initial-state';
import { initialState as question } from 'store/question/question.initial-state';
import { initialState as tableModal } from 'store/questions-modal/questions-modal.initial-state';
import { RootState } from './store.types';

export const initialState: RootState = {
  search,
  question,
  questionModal: tableModal,
};

export default initialState;
