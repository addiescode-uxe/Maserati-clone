import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import createRootReducer from './rootReducer';

const history = createBrowserHistory();

const isDev = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: createRootReducer(history),
  middleware: getDefaultMiddleware => {
    return isDev
      ? getDefaultMiddleware().concat(logger)
      : getDefaultMiddleware();
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export default store;
