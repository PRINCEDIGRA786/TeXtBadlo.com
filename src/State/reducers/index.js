import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import cartreducer from './cartreducer';
const rootreducers = combineReducers({
    amount: amountReducer,
    cart: cartreducer,
})
export default rootreducers;