import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// MIDDLEWARE
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";

// REDUCERS
import formReducer from "./reducers/form-reducer";
import candidatesReducer from "./reducers/candidates-reducer";

// ROUTER HISTORY
export const history = createHistory();

const rootReducer = combineReducers({
  candidatesReducer,
  router: routerReducer,
  // form: formReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(history),
      createLogger()
    )
  )
);

export default store;