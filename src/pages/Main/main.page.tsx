import React, { FC, ReactElement } from 'react';
import 'pages/Main/main.styles.scss';
import { Button } from 'components/Button/button.component';
import { useDispatch } from 'react-redux';
import SearchAction from 'store/search/search.actions';

export const MainPage: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(SearchAction.searchByTag('javascript'));
  };
  const onMoreHandler = () => {
    dispatch(SearchAction.getMore());
  };

  return (
    <div className="main-page">
      Main page
      <Button onClick={onClickHandler}>Search</Button>
      <Button onClick={onMoreHandler}>More</Button>
    </div>
  );
};
