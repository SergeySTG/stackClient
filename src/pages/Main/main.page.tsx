import React, { FC, ReactElement } from 'react';
import 'pages/Main/main.styles.scss';
import { Link } from 'react-router-dom';
import { Routes } from 'constants/routes';
import { Button } from 'components/Button/button.component';

export const MainPage: FC = (): ReactElement => {
  return (
    <div className="main-page">
      Main page
      <Link to={Routes.search}>
        <Button>Search</Button>
      </Link>
    </div>
  );
};
