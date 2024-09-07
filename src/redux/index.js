import { combineReducers, legacy_createStore } from "redux";
import counter from "./counter";
import wishlist from "./wishlist";

export const reducer = combineReducers({
    wishlist,
    // cart,
    counter,
    // token
})

export const store = legacy_createStore(reducer)
