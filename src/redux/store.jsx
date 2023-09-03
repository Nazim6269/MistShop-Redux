import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import { reducers } from "./recucers/combineReducers";

export const store = createStore(reducers, composeWithDevTools());
