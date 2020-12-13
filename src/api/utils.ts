import { IFilter } from 'interfaces/api';
import { DefaultFilter } from 'constants/filter';

/**
 * Generate url search string from object
 * @param filter
 */
export const filterToString = (filter: { [key: string]: unknown }): string => {
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

export const getSearchFilter = (filter: Partial<IFilter>): string => {
  return filterToString({
    ...DefaultFilter,
    ...filter,
  });
};

// I could use axios lib but It is prohibited in this test project p.4
export const fetchData = async <T>(
  endPoint: string,
  filter: Partial<IFilter>
): Promise<T | null> => {
  const search = getSearchFilter(filter);

  try {
    const response: Response = await fetch(`${endPoint}?${search}`);

    return (await response.json()) as T;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return null;
};
