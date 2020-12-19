import { useLocation } from 'react-router-dom';

export const useSearchURL = (): Map<string, string> => {
  const { search } = useLocation();

  return new Map(new URLSearchParams(search || '').entries());
};

export const useSearchParams = (params: string[]): (string | undefined)[] => {
  const searchUrl = useSearchURL();

  return params.map((p: string): string | undefined => searchUrl.get(p));
};
