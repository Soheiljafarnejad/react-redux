import { createStore, applyMiddleware, combineReducers } from "redux";
import { cakeReducer } from "./cakeReducer";
import { iceReducer } from "./iceReducer";
import { asyncReducer } from "./asyncReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
  user: asyncReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
