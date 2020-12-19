import React, { FC, ReactElement } from 'react';
import 'pages/Main/main.styles.scss';
import { Input } from 'components/Input/input.component';
import { Button } from 'components/Button/button.component';
import { useSubmitBtn } from 'pages/Main/main.hooks';

export const MainPage: FC = (): ReactElement => {
  const { inputProps, onSubmit } = useSubmitBtn('', 'Please set search term');

  return (
    <div className="main-page">
      <div className="container">
        <h1>Stack overflow</h1>
        <form onSubmit={onSubmit}>
          <Input
            value={inputProps.value}
            onChange={inputProps.onChange}
            error={inputProps.error}
          />
          <div className="btn-container">
            <Button onClick={onSubmit}>Search</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
