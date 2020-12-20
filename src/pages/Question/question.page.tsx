import React, { FC, ReactElement } from 'react';
import { AnswerTable } from 'containers/AnswerTable/answer-table.component';

import './question.styles.scss';
import { COMMON_ERROR } from 'constants/errorMessages';
import { useFetchData, useTableSort } from 'pages/Question/question.hooks';
import { useQuestionState } from 'store/question/question.selectors';

export const QuestionPage: FC = (): ReactElement => {
  const { result, isLoading, isError } = useQuestionState();
  const onLoadMore = useFetchData();
  const sortTable = useTableSort();

  return (
    <div className="question-page">
      <div className="subheader">
        total: <span>{result?.total || 0}</span>
      </div>
      <AnswerTable
        items={result?.items}
        onLoadMore={onLoadMore}
        isLoading={isLoading}
        errorMessage={isError ? COMMON_ERROR : ''}
        sort={sortTable}
      />
    </div>
  );
};
