import { combineReducers } from "redux";
import user from "./userReducers";
import products from "./productsReducers";


export default combineReducers({
    user,
    products
});