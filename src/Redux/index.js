import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import counter from "./counter/reducer";
import users from "./users/reducer";
const reducer = combineReducers({ counter, users });
const store =
	process.env.NODE_ENV === "development" // development or production
		? createStore(reducer, composeWithDevTools(applyMiddleware(logger)))
		: createStore(reducer);
export default store;
