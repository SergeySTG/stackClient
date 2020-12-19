import React, { FC, ReactElement } from 'react';
import 'pages/Search/search.page.scss';
import { useSearchState } from 'store/search/search.selectors';
import { QuestionTable } from 'containers/QuestionTable/question-table.component';
import { COMMON_ERROR } from 'constants/errorMessages';
import { useFetchData, useSearchTitle } from 'pages/Search/search.hooks';

export const SearchPage: FC = (): ReactElement => {
  const searchTitle = useSearchTitle();
  const { result, isLoading, isError } = useSearchState();
  const onLoadMore = useFetchData();

  return (
    <div className="search-page">
      <h1>Search result</h1>
      <div className="subheader">
        result for: <span>&quot;{searchTitle}&quot;</span>
      </div>
      <div className="subheader">
        total: <span>{result?.total || 0}</span>
      </div>
      <QuestionTable
        items={result?.items}
        onLoadMore={onLoadMore}
        isLoading={isLoading}
        errorMessage={isError ? COMMON_ERROR : ''}
      />
    </div>
  );
};
