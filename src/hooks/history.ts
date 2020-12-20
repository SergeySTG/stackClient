import { useHistory, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

export const useHistorySearch = (): ((
  data: Record<string, string>
) => void) => {
  const history = useHistory();
  const location = useLocation();

  return useCallback(
    (data): void => {
      const urlSearch = new URLSearchParams(location.search);

      Object.entries(data).forEach(([key, value]): void => {
        urlSearch.set(key, value);
      });

      history.push(`${location.pathname}?${urlSearch.toString()}`);
    },
    [history, location]
  );
};
