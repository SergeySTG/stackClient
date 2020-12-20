import { useDispatch } from 'react-redux';
import { useSearchParams, useSearchSortParams } from 'hooks/search-url';
import { SearchParams, SortParams } from 'constants/query-params';
import { useCallback, useEffect, useMemo } from 'react';
import { getMore, search } from 'store/search/search.actions';
import { ISortTable } from 'components/Table/table.types';
import { OrderAPI, SortAPI } from 'interfaces/api';
import { useHistorySearch } from 'hooks/history';

export const useSearchTitle = (): string | undefined => {
  const [searchTitle] = useSearchParams([SearchParams.title]);

  return searchTitle;
};

export const useFetchData = (): (() => void) => {
  const searchTitle = useSearchTitle();
  const { sort, order } = useSearchSortParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTitle) {
      dispatch(search(searchTitle, sort, order));
    }
  }, [dispatch, searchTitle, sort, order]);

  return useCallback(() => {
    dispatch(getMore());
  }, [dispatch]);
};

export const useTableSort = (): ISortTable => {
  const { sort, order } = useSearchSortParams();
  const goTo = useHistorySearch();

  return useMemo(
    () => ({
      sort,
      order,
      onChange: (newSort: SortAPI, newOrder: OrderAPI): void => {
        goTo({
          [SortParams.sort]: newSort,
          [SortParams.order]: newOrder,
        });
      },
    }),
    [sort, order, goTo]
  );
};
