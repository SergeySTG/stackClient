import React, { FC, ReactElement } from 'react';
import { ISimpleLayoutProps } from 'layouts/Main/simple.types';
import 'layouts/Main/main.styles.scss';

export const MainLayout: FC<ISimpleLayoutProps> = (
  props: ISimpleLayoutProps
): ReactElement<ISimpleLayoutProps> => {
  const { children } = props;
  return (
    <div className="simple-layout">
      <div className="simple-wrapper">{children}</div>
    </div>
  );
};
