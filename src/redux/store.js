import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import logger from 'redux-logger'

export const store = createStore(rootReducer,
    // applyMiddleware(logger,thunk))
    applyMiddleware(thunk))