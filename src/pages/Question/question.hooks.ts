import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useMemo } from 'react';
import { getMore, searchById } from 'store/question/question.actions';
import { useParams } from 'react-router-dom';
import { ISortTable } from 'components/Table/table.types';
import { useSearchSortParams } from 'hooks/search-url';
import { useHistorySearch } from 'hooks/history';
import { OrderAPI, SortAPI } from 'interfaces/api';
import { SortParams } from 'constants/query-params';

export const useFetchData = (): (() => void) => {
  const params = useParams<{ id: string }>();
  const { sort, order } = useSearchSortParams();
  const id = params?.id || '';
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(searchById(id, sort, order));
    }
  }, [dispatch, id, sort, order]);

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
