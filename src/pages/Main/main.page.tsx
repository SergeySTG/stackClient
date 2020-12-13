import React, { FC, ReactElement } from 'react';
import 'pages/Main/main.styles.scss';
import { Link } from 'react-router-dom';
import { Routes } from 'constants/routes';
import { Button } from 'components/Button/button.component';
import { search } from 'api/search/search';

export const MainPage: FC = (): ReactElement => {
  const onClickHandler = () => {
    search({
      intitle: 'Hello world',
    });
  };
  return (
    <div className="main-page">
      Main page
      <Link to={Routes.search}>
        <Button onClick={onClickHandler}>Search</Button>
      </Link>
    </div>
  );
};
