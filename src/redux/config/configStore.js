import { createStore } from "redux";
// import { combineReducers } from "redux";
import todos from "../modules/todos";

// const rootReducer = combineReducers({});
const store = createStore(todos);

export default store;