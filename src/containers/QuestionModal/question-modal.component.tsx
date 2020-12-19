import React, { FC, ReactElement, useEffect } from 'react';

import './question-modal.styles.scss';
import { Button } from 'components/Button/button.component';
import {
  useCloseHandler,
  useLoadMore,
  useModalState,
} from 'containers/QuestionModal/question-modal.hooks';
import { QuestionTable } from 'containers/QuestionTable/question-table.component';
import { QuestionModalTypes } from 'store/questions-modal/questions-modal.initial-state';
import { useLocation } from 'react-router-dom';

const SearchType: { [key in QuestionModalTypes]: string } = {
  [QuestionModalTypes.byTag]: 'by tag',
  [QuestionModalTypes.byAuthor]: 'by Author',
};

export const QuestionsModal: FC = (): ReactElement | null => {
  const state = useModalState();
  const location = useLocation();
  const closeHandler = useCloseHandler();
  const loadMoreHandler = useLoadMore();
  useEffect(() => {
    closeHandler();
  }, [location, closeHandler]);

  if (!state.isOpen) {
    return null;
  }
  const {
    search,
    searchType,
    data: { result, isLoading },
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
        />
      </div>
    </div>
  );
};
