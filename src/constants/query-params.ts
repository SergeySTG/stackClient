import { OrderAPI, SortAPI } from 'interfaces/api';

export enum SortParams {
  sort = 'sort',
  order = 'order',
}
export enum SearchParams {
  title = 'search',
}

const queryToString = (params: Record<string, string | undefined>): string => {
  const entries: [string, string][] = Object.entries(params).filter(
    ([, value]): boolean => !!value
  ) as [string, string][];

  return new URLSearchParams(entries).toString();
};

export const QueryStrings = {
  search: (title: string, sort?: SortAPI, order?: OrderAPI): string =>
    queryToString({
      [SearchParams.title]: title,
      [SortParams.sort]: sort,
      [SortParams.order]: order,
    }),
  question: (sort?: SortAPI, order?: OrderAPI): string =>
    queryToString({
      [SortParams.sort]: sort,
      [SortParams.order]: order,
    }),
};
