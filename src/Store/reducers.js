// reducers.js
import { combineReducers } from 'redux';
import cartReducer from './Reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;