import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useMemo } from 'react';
import { QuestionModalActions } from 'store/questions-modal/questions-modal.actions';
import { useLocation } from 'react-router-dom';
import { ISortTable } from 'components/Table/table.types';
import { OrderAPI, SortAPI } from 'interfaces/api';
import { useQuestionModalState } from 'store/questions-modal/questions-modal.selectors';

export const useCloseHandler = (): (() => void) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const closeHandler = useCallback(() => {
    dispatch(QuestionModalActions.close());
  }, [dispatch]);

  useEffect(() => {
    closeHandler();
  }, [location, closeHandler]);

  return closeHandler;
};

export const useFetchData = (): (() => void) => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(QuestionModalActions.getMore());
  }, [dispatch]);
};

export const useTableSort = (): ISortTable => {
  const {
    data: { sort, order },
  } = useQuestionModalState();
  const dispatch = useDispatch();

  return useMemo(
    () => ({
      sort,
      order,
      onChange: (newSort: SortAPI, newOrder: OrderAPI): void => {
        dispatch(QuestionModalActions.setSort(newSort, newOrder));
      },
    }),
    [sort, order, dispatch]
  );
};
