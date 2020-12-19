import React, { FC, ReactElement } from 'react';
import './app.styles.scss';
import { Routers } from 'components/Routers/routers.component';
import { Routers as routers } from 'router/routers';
import { Routes } from 'constants/routes';

export const App: FC = (): ReactElement => {
  return (
    <div className="app">
      <Routers routers={routers} pageNotFound={Routes.main} />
    </div>
  );
};
