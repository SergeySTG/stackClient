import { IRoute } from 'router/route.types';
import { MainPage } from 'pages/Main/main.page';
import { Routes } from 'constants/routes';
import { SearchPage } from 'pages/Search/search.page';
import { QuestionPage } from 'pages/Question/question.page';

export const Routers: IRoute[] = [
  {
    path: Routes.main,
    page: MainPage,
  },
  {
    path: Routes.search.base,
    page: SearchPage,
  },
  {
    path: Routes.question,
    page: QuestionPage,
  },
];
