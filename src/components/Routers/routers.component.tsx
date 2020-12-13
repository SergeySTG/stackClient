import React, { FC, ReactElement } from 'react';
import { IRoutersProps } from 'components/Routers/routers.types';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IRoute } from 'routes/route.types';
import { MainLayout } from 'layouts/Main/main.layout';

const createRoute = (route: IRoute): JSX.Element => {
  const { layout, page, path } = route;
  const Layout = layout || MainLayout;
  const Page = page;

  return (
    <Route path={path} exact key={path}>
      <Layout>
        <Page />
      </Layout>
    </Route>
  );
};

export const Routers: FC<IRoutersProps> = (
  props: IRoutersProps
): ReactElement<IRoutersProps> => {
  const { routers, pageNotFound } = props;

  return (
    <Switch>
      {routers.map(createRoute)}
      {pageNotFound && (
        <Route>
          <Redirect to={pageNotFound} />
        </Route>
      )}
    </Switch>
  );
};
