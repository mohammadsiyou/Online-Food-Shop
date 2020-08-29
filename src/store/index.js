import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducers from "./rootReducer";

export default createStore(reducers, applyMiddleware(thunkMiddleware));
