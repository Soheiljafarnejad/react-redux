import { createStore, applyMiddleware, combineReducers } from "redux";
import { cakeReducer } from "./cakeReducer";
import { iceReducer } from "./iceReducer";
import { asyncReducer } from "./asyncReducer";
import thunk from "redux-thunk";

// saga
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/rootSagas";
import { asyncPostReducer } from "./postReducer";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  user: asyncReducer,
  post: asyncPostReducer,
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk, sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga);
