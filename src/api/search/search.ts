import { ISearchFilter, ISearchResponse } from 'api/search/search.types';
import { fetchData } from 'api/utils';
import { EndPoints } from 'constants/endpoints';

export const search = (filter: ISearchFilter): Promise<void> => {
  return fetchData(EndPoints.search, filter).then((res) =>
    console.log(res as ISearchResponse)
  );
};
