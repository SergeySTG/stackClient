import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { QuestionModalActions } from 'store/questions-modal/questions-modal.actions';
import { QuestionModalState } from 'store/questions-modal/questions-modal.initial-state';
import { questionModalSelector } from 'store/questions-modal/questions-modal.selectors';

export const useModalState = (): QuestionModalState => {
  return useSelector(questionModalSelector) as QuestionModalState;
};

export const useCloseHandler = (): (() => void) => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(QuestionModalActions.close());
  }, [dispatch]);
};

export const useLoadMore = (): (() => void) => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(QuestionModalActions.getMore());
  }, [dispatch]);
};
