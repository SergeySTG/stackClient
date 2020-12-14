import React, { FC, ReactElement } from 'react';
import 'pages/Main/main.styles.scss';
import { Link } from 'react-router-dom';
import { Routes } from 'constants/routes';
import { Button } from 'components/Button/button.component';
import { searchQuestions } from 'api/search/search';

export const MainPage: FC = (): ReactElement => {
  const onClickHandler = () => {
    searchQuestions({
      intitle: 'Hello world',
    }).then((res) => console.log(res));
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
