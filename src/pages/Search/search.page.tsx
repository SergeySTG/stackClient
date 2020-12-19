import React, { FC, ReactElement, useEffect, useState } from 'react';
import 'pages/Search/search.page.scss';
import { useSearchParams } from 'hooks/search-url';
import { SearchParams } from 'constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { searchSelector } from 'store/search/search.selectors';
import { Preloader } from 'components/Preloader/preloader.component';
import { searchByTitle } from 'store/search/search.actions';
import { QuestionTable } from 'components/QuestionTable/question-table.component';

export const SearchPage: FC = (): ReactElement => {
  const [searchTitle] = useSearchParams([SearchParams.title]);
  const { result, isLoading } = useSelector(searchSelector);
  const dispatch = useDispatch();
  const [, update] = useState(false);

  useEffect(() => {
    if (searchTitle) {
      dispatch(searchByTitle(searchTitle));
    }
  }, [dispatch, searchTitle, update]);

  return (
    <div className="search-page">
      <h1>Search result</h1>
      <div className="subheader">
        result for: <span>&quot;{searchTitle}&quot;</span>
      </div>
      <div className="subheader">
        total: <span>{result?.total || 0}</span>
      </div>
      {isLoading && <Preloader />}
      <QuestionTable items={result?.items} />
    </div>
  );
};
