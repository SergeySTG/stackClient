import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { getMore, searchById } from 'store/question/question.actions';
import { useParams } from 'react-router-dom';

export const useFetchData = (): (() => void) => {
  const params = useParams<{ id: string }>();
  const id = params?.id || '';
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(searchById(id));
    }
  }, [dispatch, id]);

  return useCallback(() => {
    dispatch(getMore());
  }, [dispatch]);
};
