import { useLocation } from 'react-router-dom';
import { SortParams } from 'constants/query-params';
import { OrderAPI, SortAPI } from 'interfaces/api';
import { DefaultOrder, DefaultSort } from 'constants/filters';

export const useSearchURL = (): Map<string, string> => {
  const { search } = useLocation();

  return new Map(new URLSearchParams(search || '').entries());
};

export const useSearchParams = (params: string[]): (string | undefined)[] => {
  const searchUrl = useSearchURL();

  return params.map((p: string): string | undefined => searchUrl.get(p));
};

export const useSearchSortParams = (): {
  sort?: SortAPI;
  order?: OrderAPI;
} => {
  const [sort = '', order = ''] = useSearchParams([
    SortParams.sort,
    SortParams.order,
  ]);

  return {
    sort: Object.values(SortAPI).includes(sort as SortAPI)
      ? (sort as SortAPI)
      : DefaultSort,
    order: Object.values(OrderAPI).includes(order as OrderAPI)
      ? (order as OrderAPI)
      : DefaultOrder,
  };
};
