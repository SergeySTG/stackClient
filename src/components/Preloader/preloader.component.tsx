import React, { FC, ReactElement } from 'react';
import { IClassNameComponent } from 'interfaces/common';
import './preloader.styles.scss';

export const Preloader: FC<IClassNameComponent> = (
  props: IClassNameComponent
): ReactElement<IClassNameComponent> => {
  const { className = '' } = props;
  return (
    <div className={`preloader ${className}`}>
      <svg
        className="svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="circle" cx="50" cy="50" r="45" />
      </svg>
    </div>
  );
};
