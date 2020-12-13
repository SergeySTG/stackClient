import { applyMiddleware, createStore, Store } from 'redux';
import { composeEnhancers } from 'store/utils/composeEnhancers';
import { rootSaga, sagaMiddleware } from 'store/sagas';
import middlewares from './middleware';
import reducers from './reducers';

export default (initialState = {}): Store => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
