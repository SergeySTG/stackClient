import React, { FC, ReactElement } from 'react';

import './question-modal.styles.scss';
import { Button } from 'components/Button/button.component';
import {
  useCloseHandler,
  useFetchData,
  useTableSort,
} from 'containers/QuestionModal/question-modal.hooks';
import { QuestionTable } from 'containers/QuestionTable/question-table.component';
import { QuestionModalTypes } from 'store/questions-modal/questions-modal.initial-state';
import { useQuestionModalState } from 'store/questions-modal/questions-modal.selectors';
import { COMMON_ERROR } from 'constants/errorMessages';

const SearchType: { [key in QuestionModalTypes]: string } = {
  [QuestionModalTypes.byTag]: 'by tag',
  [QuestionModalTypes.byAuthor]: 'by Author',
};

export const QuestionsModal: FC = (): ReactElement | null => {
  const state = useQuestionModalState();
  const closeHandler = useCloseHandler();
  const loadMoreHandler = useFetchData();
  const sortTable = useTableSort();

  if (!state.isOpen) {
    return null;
  }
  const {
    search,
    searchType,
    data: { result, isLoading, isError },
  } = state;

  return (
    <div className="question-modal-background">
      <div className="modal-container">
        <Button className="close-btn" onClick={closeHandler}>
          x
        </Button>
        <div className="subheader">
          Search {searchType ? SearchType[searchType] : 'none'}:{' '}
          <span>{search}</span>
        </div>
        <div className="subheader">
          Total: <span>{result?.total || 0}</span>
        </div>
        <QuestionTable
          items={result?.items}
          isLoading={isLoading}
          maxHeight={600}
          onLoadMore={loadMoreHandler}
          errorMessage={isError ? COMMON_ERROR : ''}
          sort={sortTable}
        />
      </div>
    </div>
  );
};
