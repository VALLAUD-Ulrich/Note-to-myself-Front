import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import uploadMiddleware from '../middlewares/uploadMiddleware';
import mementosMiddleware from '../middlewares/mementosMiddleware';
import restaurantMiddleware from '../middlewares/restaurantMiddleware';
import debugMiddleware from '../middlewares/debug';
import userMiddleware from '../middlewares/userMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    uploadMiddleware,
    mementosMiddleware,
    restaurantMiddleware,
    debugMiddleware,
    userMiddleware,
  ),
);

const store = createStore(reducer, enhancers);

export default store;
