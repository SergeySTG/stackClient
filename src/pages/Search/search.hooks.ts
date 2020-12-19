import { useDispatch } from 'react-redux';
import { useSearchParams } from 'hooks/search-url';
import { SearchParams } from 'constants/routes';
import { useCallback, useEffect } from 'react';
import { getMore, searchByTitle } from 'store/search/search.actions';

export const useSearchTitle = (): string | undefined => {
  const [searchTitle] = useSearchParams([SearchParams.title]);

  return searchTitle;
};

export const useFetchData = (): (() => void) => {
  const searchTitle = useSearchTitle();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTitle) {
      dispatch(searchByTitle(searchTitle));
    }
  }, [dispatch, searchTitle]);

  return useCallback(() => {
    dispatch(getMore());
  }, [dispatch]);
};
