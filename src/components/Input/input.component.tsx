import { IInputProps } from 'components/Input/input.types';
import React, { ChangeEvent, FC, ReactElement, useCallback } from 'react';

import './input.styles.scss';

export const Input: FC<IInputProps> = (
  props: IInputProps
): ReactElement<IInputProps> => {
  const { value, className = '', error, onChange } = props;
  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      onChange(e.target.value);
    },
    [onChange]
  );
  return (
    <div className="input-field">
      <input
        type="text"
        className={`input ${className} ${error ? 'error' : ''}`}
        value={value}
        onChange={onChangeHandler}
      />
      {error && <span>{error}</span>}
    </div>
  );
};
