import { createStore, combineReducers, applyMiddleware } from "redux";
import { productReducer, filterReducer } from "./reducer";
import thunk from "redux-thunk";

const rootReducers = combineReducers({ productReducer, filterReducer });
export const store = createStore(rootReducers, applyMiddleware(thunk));
