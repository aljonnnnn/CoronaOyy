import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
});

export const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)