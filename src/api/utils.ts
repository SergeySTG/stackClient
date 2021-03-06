import { IFilterAPI } from 'interfaces/api';
import { DefaultFilterAPI, DefaultOrder, DefaultSort } from 'constants/filters';

/**
 * Generate url search string from object
 * @param filter
 */
const filterToString = (filter: { [key: string]: unknown }): string => {
  const entries: [string, string][] = Object.entries(filter)
    .filter(([, value]: [string, unknown]): boolean =>
      ['string', 'number'].includes(typeof value)
    ) // remove incorrect values
    .map(([key, value]: [string, unknown]): [string, string] => [
      // convert to string values
      key,
      (value as number | string).toString(),
    ]);

  const urlSearch = new window.URLSearchParams(entries);

  return urlSearch.toString();
};

const getFetchFilter = (filter: Partial<IFilterAPI>): string => {
  const { sort = DefaultSort, order = DefaultOrder } = filter;

  return filterToString({
    ...DefaultFilterAPI,
    ...filter,
    sort,
    order,
  });
};

// I could use axios lib but It is prohibited in this test project p.4
export const fetchData = async <T>(
  endPoint: string,
  filter: Partial<IFilterAPI>
): Promise<T> => {
  const search = getFetchFilter(filter);

  const response: Response = await fetch(`${endPoint}?${search}`);

  if (response.status !== 200) {
    throw new Error('Something was wrong');
  }

  return (await response.json()) as T;
};
