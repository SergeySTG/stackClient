import { SearchState } from 'store/search/search.initial-state';
import { RootState } from 'store/store.types';

export const searchSelector = (state: RootState): SearchState => state.search;
