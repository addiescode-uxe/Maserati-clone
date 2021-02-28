import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import customCarReducer from './car-custom/carCustom.module';

const reducers = {
  customCar: customCarReducer,
};

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });

export default createRootReducer;
