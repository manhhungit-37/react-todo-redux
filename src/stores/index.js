import { combineReducers, createStore, compose } from "redux";

// reducers
import counterReducers from 'reducers/counterReducers';
import todosReducers from 'reducers/todosReducers';

const rootReducers = combineReducers({
  counter: counterReducers,
  todos: todosReducers,
})

console.log("rootReducer", rootReducers);

const composeEnhancers =
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  rootReducers,
  composeEnhancers()
)

export default store;