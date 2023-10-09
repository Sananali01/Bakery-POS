import { createStore } from "redux";
import rootReducer from "./reducers";
// import ReducerCounter from "./Reducer";

const store = createStore(rootReducer);

export default store;