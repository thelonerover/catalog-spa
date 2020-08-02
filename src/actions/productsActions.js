import actionTypes from "../constants/productActionTypes";

export const getProducts = () => {
    return dispatch => {
        dispatch({ type: actionTypes.getProducts });
        
        return fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(response => { dispatch(setProductsList(response.products)) });
    }
}

export const setProductsList = products => {
    return {
        type: actionTypes.setProductsList,
        products
    }
}