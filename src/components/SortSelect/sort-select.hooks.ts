import { ChangeEvent } from 'react';

export const useSelectHandler = <T>(
  cb: (value: T) => void
): ((value: ChangeEvent<HTMLSelectElement>) => void) => {
  return (value: ChangeEvent<HTMLSelectElement>): void => {
    cb((value.target.value as unknown) as T);
  };
};
