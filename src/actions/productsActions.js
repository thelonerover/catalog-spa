import actionTypes from "../constants/productActionTypes";

export const getProducts = () => {
    return dispatch => {
        dispatch({ type: actionTypes.getProducts });
        
        return fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(products => { dispatch(setProductsList(products)) });
    }
}

export const setProductsList = products => {
    return {
        type: actionTypes.getProducts,
        products
    }
}