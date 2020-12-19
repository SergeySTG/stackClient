import { SearchState } from 'store/search/search.initial-state';
import { RootState } from 'store/store.types';
import { useSelector } from 'react-redux';

export const searchSelector = (state: RootState): SearchState => state.search;

export const useSearchState = (): SearchState => {
  return useSelector(searchSelector);
};
