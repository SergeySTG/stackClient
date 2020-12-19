import React, { FC, ReactElement, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { questionSelector } from 'store/question/question.selectors';
import { getMore, searchById } from 'store/question/question.actions';
import { AnswerTable } from 'containers/AnswerTable/answer-table.component';

import './question.styles.scss';

export const QuestionPage: FC = (): ReactElement => {
  const params = useParams<{ id: string }>();
  const id = params?.id || '';
  const { result, isLoading } = useSelector(questionSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(searchById(id));
    }
  }, [dispatch, id]);

  const onLoadMore = useCallback(() => {
    dispatch(getMore());
  }, [dispatch]);

  return (
    <div className="question-page">
      <div className="subheader">
        total: <span>{result?.total || 0}</span>
      </div>
      <AnswerTable
        items={result?.items}
        onLoadMore={onLoadMore}
        isLoading={isLoading}
      />
    </div>
  );
};
