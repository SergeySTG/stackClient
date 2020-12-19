import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from 'constants/routes';
import { IInputProps } from 'components/Input/input.types';

export const useSubmitBtn = (
  initialValue: string,
  errorMessage: string
): {
  inputProps: IInputProps;
  onSubmit: () => void;
} => {
  const history = useHistory();
  const [title, setTitle] = useState<string>(initialValue);
  const [error, setError] = useState<string>('');

  return {
    inputProps: {
      value: title,
      onChange: useCallback(
        (val: string): void => {
          setTitle(val);
          setError('');
        },
        [setTitle, setError]
      ),
      error,
    },
    onSubmit: () => {
      if (!title) {
        setError(errorMessage);
      } else {
        history.push(Routes.search.getSearchTitle(title));
      }
    },
  };
};
