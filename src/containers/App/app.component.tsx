import React, { FC, ReactElement } from 'react';
import 'containers/App/app.styles.scss';
import { Routers } from 'components/Routers/routers.component';
import { Routers as routers } from 'router/routers';
import { Routes } from 'constants/routes';
import { QuestionsModal } from 'containers/QuestionModal/question-modal.component';

export const App: FC = (): ReactElement => {
  return (
    <div className="app">
      <Routers routers={routers} pageNotFound={Routes.main} />
      <QuestionsModal />
    </div>
  );
};
