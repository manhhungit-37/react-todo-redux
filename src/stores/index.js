import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// reducers
import counterReducers from 'reducers/counterReducers';
import todosReducers from 'reducers/todosReducers';
import userReducers from 'reducers/userReducers';

const rootReducers = combineReducers({
  counter: counterReducers,
  todos: todosReducers,
  users: userReducers
})

const composeEnhancers =
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
)

export default store;