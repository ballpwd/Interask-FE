import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/index';
import setAuthToken from './utils/setAuthToken';

const middleware = [reduxThunk];

const store = createStore(
    reducers,
    applyMiddleware(...middleware)
);


// set up a store subscription listener to store the users token in localStorage

store.subscribe(() => {
    let currentState = store.getState();
    const token = currentState.auth.token;
    setAuthToken(token);
  });

export default store ;