import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import literals from "./stores/literals.store";
import users from "./stores/users.store";
import userDetails from "./stores/user-details.store";

import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ literals, users, userDetails });

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export type RootState = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);
