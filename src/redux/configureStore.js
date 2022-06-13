import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import card from "./modules/card";
import user from "./modules/user";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({ 
    card : card,
    user : user,
});

const store = createStore(rootReducer, enhancer);

export default store;