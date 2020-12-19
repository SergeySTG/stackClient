import { combineReducers } from 'redux';
import search from 'store/search/search.reducer';
import question from 'store/question/question.reducer';
import questionModal from 'store/questions-modal/questions-modal.reducer';

export default combineReducers({
  search,
  question,
  questionModal,
});
