import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { QuestionModalActions } from 'store/questions-modal/questions-modal.actions';
import { useLocation } from 'react-router-dom';

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
