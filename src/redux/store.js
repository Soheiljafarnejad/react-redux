import { createStore, applyMiddleware } from "redux";
import { cakeReducer } from "./cakeReducer";
import thunk from "redux-thunk";

export const store = createStore(cakeReducer, applyMiddleware(thunk));
