import { createStore, combineReducers, applyMiddleware } from "redux";

import { createBrowserHistory } from "history"
import { connectRouter } from "connected-react-router"

import thunk from "redux-thunk";
import card from "./modules/card";
import user from "./modules/user";
import comment from "./modules/comment";

export const history = createBrowserHistory()

const middlewares = [thunk.withExtraArgument({ history: history })];

const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({ 
    card : card,
    user : user,
    comment : comment,
    router: connectRouter(history),
});

const store = createStore(rootReducer, enhancer);

export default store;