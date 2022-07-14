import { createStore, combineReducers, applyMiddleware } from "redux";
import word from "./modules/word";
import thunk from "redux-thunk";

const middlewares = [thunk];
const rootReducer = combineReducers({ word });
const enhencer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhencer);

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import wordReducer from "./modules/wordSlice";

// const store = configureStore({
//   reducer: {
//     word: wordReducer,
//   },
// });

// export default store;
