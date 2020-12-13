import { isDev } from 'utils';
import { compose } from 'redux';

type ReduxDevTools = {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: <R>(a: R) => R;
};

// To attach redux dev tool
export const composeEnhancers = isDev
  ? ((window as unknown) as ReduxDevTools)
      .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;
