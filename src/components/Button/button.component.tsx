import React, { FC, ReactElement } from 'react';
import { IButtonProps } from 'components/Button/button.types';
import './button.styles.scss';

export const Button: FC<IButtonProps> = (
  props: IButtonProps
): ReactElement<IButtonProps> => {
  const { onClick, disabled, className, children } = props;
  // I could use clsx library, but it is prohibited in this test project p.4
  const classNames = `btn ${className}`;

  return (
    <button
      className={classNames}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
